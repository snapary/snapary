from google.cloud import firestore

def user(username):
    user = firestore.Client().collection(u'Users').document(str(username).lower()).get()
    return user.to_dict() if user.exists else False

def make_user(username, hash, salt):
    user_page = firestore.Client().collection(u'Users').document(str(username).lower())
    if user_page.get().exists:
        # username already created
        return False
    else:
        user_page.set({
            'hash': hash,
            'salt': salt,
            'history': []
        })
        return True
    
if __name__ == '__main__':
    pass