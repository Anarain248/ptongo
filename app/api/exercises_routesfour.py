from flask import Blueprint, request
from app.models import Exercisefour, db


exercises_routesfour = Blueprint('exercisesfour', __name__)


@exercises_routesfour.route('/')
# @login_required
def exercises():
    exercises = Exercisefour.query.all()
    return {"exercisesfour": [exercise.to_dict() for exercise in exercises]}

@exercises_routesfour.route('/new', methods=['POST'])
def saved_exercises():
    data = request.json
    print(data)
    exercise = Exercisefour(name=data['name'], exercisetype=data['type'], reps=data['reps'], primarymuscle=data['PrimaryMuscleWorked'])
    db.session.add(exercise)
    db.session.commit()
    return {'exercise': exercise.to_dict()}


