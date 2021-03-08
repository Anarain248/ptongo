from flask import Blueprint, request
from app.models import Exercisefive, db


exercises_routesfive = Blueprint('exercisesfive', __name__)


@exercises_routesfive.route('/')
# @login_required
def exercises():
    exercises = Exercisefive.query.all()
    return {"exercisesfive": [exercise.to_dict() for exercise in exercises]}

@exercises_routesfive.route('/new', methods=['POST'])
def saved_exercises():
    data = request.json
    print(data)
    exercise = Exercisefive(name=data['name'], exercisetype=data['type'], reps=data['reps'], primarymuscle=data['PrimaryMuscleWorked'])
    db.session.add(exercise)
    db.session.commit()
    return {'exercise': exercise.to_dict()}
