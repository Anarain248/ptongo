from flask_login import login_required
from app.models import exercise
from flask import Blueprint

exercises_routes = Blueprint('exercises', __name__)

@exercises_routes.route('/')
@login_required
def exercises():
    exercises = Exercise.query.all()
    return {"exercises": [exercises.to_dict() for exercise in exercises]}
