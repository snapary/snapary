from flask import current_app, flash, Flask, Markup, redirect, render_template, jsonify, session
from flask import request, url_for
from google.cloud import error_reporting
import google.cloud.logging

app = Flask(__name__)

app.secret_key = '\xf7\xf9\xf7\x14L%\x83r\xdf4\xea=\xfd\xe5\xcb\x17\x1e\xf7\xed\x04\xd5\xa31O'
app.config['SESSION_TYPE'] = 'redis'

app.debug = False
app.testing = False

@app.route('/', methods=['GET', 'POST'])
def homepage():
    return '<h1> STUFF! </h1>'

@app.route('/login', methods=['GET', 'POST'])
def login():
    pass


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)