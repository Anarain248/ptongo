from flask import Blueprint, request
from app.models import Exerciseeight, db


exercises_routeseight = Blueprint('exerciseseight', __name__)


@exercises_routeseight.route('/')
# @login_required
def exercises():
    exercises = Exerciseeight.query.all()
    return {"exerciseseight": [exercise.to_dict() for exercise in exercises]}

@exercises_routeseight.route('/new', methods=['POST'])
def saved_exercises():
    data = request.json
    print(data)
    exercise = Exerciseseight(name=data['name'], exercisetype=data['type'], reps=data['reps'], primarymuscle=data['PrimaryMuscleWorked'])
    db.session.add(exercise)
    db.session.commit()
    return {'exercise': exercise.to_dict()}
