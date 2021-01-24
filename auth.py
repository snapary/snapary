import firestore
import bcrypt

def login(username, password):
    user = firestore.user(username.lower())
    return bcrypt.hashpw(password.encode(), user['salt'].encode()) == user['hash'].encode() if not user == False else False

def signup(username, password):
    salt = bcrypt.gensalt()
    hash = bcrypt.hashpw(password.encode(), salt)
    return firestore.make_user(username,hash.decode(),salt.decode())

if __name__ == '__main__':
    pass