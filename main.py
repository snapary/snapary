import firestore
import auth
import location
import responses

from flask import current_app, flash, Flask, Markup, redirect, render_template, jsonify, session
from flask import request, url_for
from flask_cors import CORS
from google.cloud import error_reporting
import google.cloud.logging
from datetime import datetime
import json

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


app.secret_key = '\xf7\xf9\xf7\x14L%\x83r\xdf4\xea=\xfd\xe5\xcb\x17\x1e\xf7\xed\x04\xd5\xa31O'
app.config['SESSION_TYPE'] = 'redis'

app.debug = False
app.testing = False

@app.route('/api', methods=['GET', 'POST'])
def homepage():
    return '<h1> STUFF! </h1>'

@app.route('/api/user/signin', methods=['GET', 'POST'])
def signin():
    content=request.get_json()
    if content is None:
        username = request.values["username"].lower()
        password = request.values["password"]
    else:
        if type(content) is str:
            content=json.loads(content)
        try:
            username = content["username"].lower()
            password = content["password"]
        except:
            return jsonify({"content": str(content), "type": str(type(content))})
    if auth.login(username, password):
        session['auth'] = True
        session['user'] = username
        return success()
    else:
        return error()

@app.route('/api/user/signout', methods=['GET', 'POST'])
def signout():
    session['auth'] = False
    session['user'] = ''
    return jsonify({'success': True})

@app.route('/api/user/signup', methods=['GET', 'POST'])
def signup():
    content=request.get_json()
    if content is None:
        username = request.values["username"].lower()
        password = request.values["password"]
    else:
        if type(content) is str:
            content=json.loads(content)
        try:
            username = content["username"].lower()
            password = content["password"]
        except:
            return jsonify({"content": str(content), "type": str(type(content))})
    if auth.signup(username, password):
        session['auth'] = True
        session['user'] = username
        return jsonify({"success": True})
    else:
        return jsonify({"success": False})
    pass

@app.route('/api/user/status', methods=['GET', 'POST'])
def status():
    return success(200,{
        'loginStatus': True if ('auth' in session.keys() and session['auth']) else False,
        'user': session['user'] if 'user' in session.keys() else ''
    })

@app.route('/api/user/debug', methods=['GET', 'POST'])
def get_user():
    if not 'auth' in session.keys() or not session['auth'] or session['user'] == '':
        return jsonify({"success": False})
    user_dict = firestore.user(session["user"])
    return jsonify(user_dict) if not user_dict == False else jsonify({"success": False})

@app.route('/api/user/setHistory', methods=['GET',  'POST'])
def set_history():
    content=request.get_json()
    if content is None:
        lat = request.values["lat"]
        long = request.values["long"]
    else:
        if type(content) is str:
            content=json.loads(content)
        try:
            lat = content["lat"]
            long = content["long"]
        except:
            return jsonify({"content": str(content), "type": str(type(content))})


    time=datetime.now()
    if 'auth' in session.keys() and session['auth']:
        loc=location.Location(float(lat), float(long))
        if firestore.save_entry(session['user'], loc.long, loc.lat, loc.get_area(), loc.get_raw(), time):
            return success(
                responses.OK,
                {
                "user": session['user'],
                "lat": loc.lat,
                "long": loc.long,
                "area": loc.get_area(),
                "time": time
                }
            )
    
    return error(responses.UNAUTHORIZED)

@app.route('/api/user/getHistory', methods=['GET', 'POST'])
def get_history():
    if session['user'] is not None and session['user']:
        return success(body=firestore.user(session['user']))
    else:
        return error(responses.UNAUTHORIZED)
    pass

@app.route('/api/user/alert', methods=['GET', 'POST'])
def alert():
    pass

def error(code=404, body={}):
    return response(False, code, body)

def success(code=200, body={}):
    return response(True, code, body)

def response(success, code, body):
    return jsonify({
        "success": success,
        **body
    }), code

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)