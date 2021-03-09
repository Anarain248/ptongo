from flask import Blueprint, request
from app.models import Exerciseten, db


exercises_routesten = Blueprint('exercisesten', __name__)


@exercises_routesten.route('/')
# @login_required
def exercises():
    exercises = Exerciseten.query.all()
    return {"exercisesten": [exercise.to_dict() for exercise in exercises]}

@exercises_routesten.route('/new', methods=['POST'])
def saved_exercises():
    data = request.json
    print(data)
    exercise = Exercisesten(name=data['name'], exercisetype=data['type'], reps=data['reps'], primarymuscle=data['PrimaryMuscleWorked'])
    db.session.add(exercise)
    db.session.commit()
    return {'exercise': exercise.to_dict()}
