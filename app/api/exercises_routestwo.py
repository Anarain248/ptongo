from flask import Blueprint, request
from app.models import Exercisetwo, db

exercises_routestwo = Blueprint('exercisestwo', __name__)


@exercises_routestwo.route('/')
# @login_required
def exercises():
    exercises = Exercisetwo.query.all()
    return {"exercisestwo": [exercise.to_dict() for exercise in exercises]}

@exercises_routestwo.route('/new', methods=['POST'])
def saved_exercises():
    data = request.json
    print(data)
    exercise = Exercisetwo(name=data['name'], exercisetype=data['type'], reps=data['reps'], primarymuscle=data['PrimaryMuscleWorked'])
    db.session.add(exercise)
    db.session.commit()
    return {'exercise': exercise.to_dict()}
