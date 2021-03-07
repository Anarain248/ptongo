from flask import Blueprint, request
from app.models import Exercisethree, db


exercises_routesthree = Blueprint('exercisesthree', __name__)


@exercises_routesthree.route('/')
# @login_required
def exercises():
    exercises = Exercisethree.query.all()
    return {"exercisesthree": [exercise.to_dict() for exercise in exercises]}

@exercises_routesthree.route('/new', methods=['POST'])
def saved_exercises():
    data = request.json
    print(data)
    exercise = Exercisethree(name=data['name'], exercisetype=data['type'], reps=data['reps'], primarymuscle=data['PrimaryMuscleWorked'])
    db.session.add(exercise)
    db.session.commit()
    return {'exercise': exercise.to_dict()}
