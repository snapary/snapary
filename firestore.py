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


def save_entry(username, time, longitude, latitude, area):
    user_page = firestore.Client().collection(u'Users').document(str(username).lower())
    if user_page.get().exists:
        user_page.update({u'history' : firestore.ArrayUnion([{u'time': time,
                                                              u'longitude': longitude,
                                                              u'latitude': latitude,
                                                              u'area': area}])})
        return True
    else:
        # user does not exist
        return False

if __name__ == '__main__':
    pass