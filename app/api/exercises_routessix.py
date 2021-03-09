from flask import Blueprint, request
from app.models import Exercisesix, db


exercises_routessix = Blueprint('exercisessix', __name__)


@exercises_routessix.route('/')
# @login_required
def exercises():
    exercises = Exercisesix.query.all()
    return {"exercisessix": [exercise.to_dict() for exercise in exercises]}

@exercises_routessix.route('/new', methods=['POST'])
def saved_exercises():
    data = request.json
    print(data)
    exercise = Exercisessix(name=data['name'], exercisetype=data['type'], reps=data['reps'], primarymuscle=data['PrimaryMuscleWorked'])
    db.session.add(exercise)
    db.session.commit()
    return {'exercise': exercise.to_dict()}
