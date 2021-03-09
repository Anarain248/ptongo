from flask import Blueprint, request
from app.models import Exercisenine, db


exercises_routesnine = Blueprint('exercisesnine', __name__)


@exercises_routesnine.route('/')
# @login_required
def exercises():
    exercises = Exercisenine.query.all()
    return {"exercisesnine": [exercise.to_dict() for exercise in exercises]}

@exercises_routesnine.route('/new', methods=['POST'])
def saved_exercises():
    data = request.json
    print(data)
    exercise = Exercisesnine(name=data['name'], exercisetype=data['type'], reps=data['reps'], primarymuscle=data['PrimaryMuscleWorked'])
    db.session.add(exercise)
    db.session.commit()
    return {'exercise': exercise.to_dict()}
