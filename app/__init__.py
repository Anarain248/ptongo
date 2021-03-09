import os
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager


from .models import db, User
from .api.user_routes import user_routes
from .api.auth_routes import auth_routes
from .api.exercises_routes import exercises_routes
from .api.exercises_routestwo import exercises_routestwo
from .api.exercises_routesthree import exercises_routesthree
from .api.exercises_routesfour import exercises_routesfour
from .api.exercises_routesfive import exercises_routesfive
from .api.exercises_routessix import exercises_routessix
from .api.exercises_routesseven import exercises_routesseven
from .api.exercises_routeseight import exercises_routeseight
from .api.exercises_routesnine import exercises_routesnine
from .api.exercises_routesten import exercises_routesten
from .api.foods_routes import foods_routes
from .api.foods_routestwo import foods_routestwo
from .api.food_routesthree import foods_routesthree

from .seeds import seed_commands

from .config import Config

app = Flask(__name__)

login = LoginManager(app)
login.login_view = 'auth.unauthorized'

@login.user_loader
def load_user(id):
    return User.query.get(int(id))

app.cli.add_command(seed_commands)

app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(exercises_routes, url_prefix='/api/exercises')
app.register_blueprint(exercises_routestwo, url_prefix='/api/exercisestwo')
app.register_blueprint(exercises_routesthree, url_prefix='/api/exercisesthree')
app.register_blueprint(exercises_routesfour, url_prefix='/api/exercisesfour')
app.register_blueprint(exercises_routesfive, url_prefix='/api/exercisesfive')
app.register_blueprint(exercises_routessix, url_prefix='/api/exercisessix')
app.register_blueprint(exercises_routesseven, url_prefix='/api/exercisesseven')
app.register_blueprint(exercises_routeseight, url_prefix='/api/exerciseseight')
app.register_blueprint(exercises_routesnine, url_prefix='/api/exercisesnine')
app.register_blueprint(exercises_routesten, url_prefix='/api/exercisesten')
app.register_blueprint(foods_routes, url_prefix='/api/foods')
app.register_blueprint(foods_routestwo, url_prefix='/api/foodstwo')
app.register_blueprint(foods_routesthree, url_prefix='/api/foodsthree')
db.init_app(app)
Migrate(app, db)

CORS(app)

@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)

@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get(
                            'FLASK_ENV') == 'production' else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') == 'production' else None,
                        httponly=True
                        )
    return response




@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
