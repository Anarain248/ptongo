from flask_login import login_required
from app.models import Exercise, db
from flask import Blueprint, request



exercises_routes = Blueprint('exercises', __name__)

@exercises_routes.route('/')
# @login_required
def exercises():
    exercises = Exercise.query.all()
    return {"exercises": [exercise.to_dict() for exercise in exercises]}

@exercises_routes.route('/new', methods=['POST'])
def saved_exercises():
    data = request.json
    print(data)
    exercise = Exercise(name=data['name'], exercisetype=data['type'], reps=data['reps'], primarymuscle=data['PrimaryMuscleWorked'])
    db.session.add(exercise)
    db.session.commit()
    return {'exercise': exercise.to_dict()}
