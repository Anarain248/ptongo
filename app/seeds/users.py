from werkzeug.security import generate_password_hash
from app.models import db, User

def seed_users():

    demo = User(username='pttdemo', email='pttdemo@aa.io', password='password')

    db.session.add(demo)
    db.session.commit()


def undo_users():

    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
