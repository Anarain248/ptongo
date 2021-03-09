from flask import Blueprint, request
from app.models import Exerciseseven, db


exercises_routesseven = Blueprint('exercisesseven', __name__)


@exercises_routesseven.route('/')
# @login_required
def exercises():
    exercises = Exerciseseven.query.all()
    return {"exercisesseven": [exercise.to_dict() for exercise in exercises]}

@exercises_routesseven.route('/new', methods=['POST'])
def saved_exercises():
    data = request.json
    print(data)
    exercise = Exercisesseven(name=data['name'], exercisetype=data['type'], reps=data['reps'], primarymuscle=data['PrimaryMuscleWorked'])
    db.session.add(exercise)
    db.session.commit()
    return {'exercise': exercise.to_dict()}
