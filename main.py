import firestore
import auth
import location
import responses

from flask import current_app, flash, Flask, Markup, redirect, render_template, jsonify, session
from flask import request, url_for
from google.cloud import error_reporting
import google.cloud.logging
from datetime import datetime

app = Flask(__name__)

app.secret_key = '\xf7\xf9\xf7\x14L%\x83r\xdf4\xea=\xfd\xe5\xcb\x17\x1e\xf7\xed\x04\xd5\xa31O'
app.config['SESSION_TYPE'] = 'redis'

app.debug = False
app.testing = False

@app.route('/', methods=['GET', 'POST'])
def homepage():
    return '<h1> STUFF! </h1>'

@app.route('/user/signin', methods=['GET', 'POST'])
def signin():
    username = request.values["username"].lower()
    password = request.values["password"]
    if auth.login(username, password):
        session['auth'] = True
        session['user'] = username
        return jsonify({
            "success": True,
        })
    else:
        return jsonify({
            "success": False
        })

@app.route('/user/signout', methods=['GET', 'POST'])
def signout():
    session['auth'] = False
    session['user'] = ''
    return jsonify({'success': True})

@app.route('/user/signup', methods=['GET', 'POST'])
def signup():
    username = request.values["username"].lower()
    password = request.values["password"]
    if auth.signup(username, password):
        session['auth'] = True
        session['user'] = username
        return jsonify({"success": True})
    else:
        return jsonify({"success": False})
    pass

@app.route('/user/debug', methods=['GET', 'POST'])
def get_user():
    if session['auth'] is None or not session['auth'] or session['user'] == '':
        return jsonify({"success": False})
    user_dict = firestore.user(session["user"])
    return jsonify(user_dict) if not user_dict == False else jsonify({"success": False})

@app.route('/user/setHistory', methods=['GET',  'POST'])
def set_history():
    time=datetime.now()
    if session['auth'] is not None and session['auth']:
        loc=location.Location(float(request.values['lat']), float(request.values['long']))
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