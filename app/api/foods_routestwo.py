from flask_login import login_required
from app.models import Foodtwo, db
from flask import Blueprint, request

foods_routestwo = Blueprint('foodstwo', __name__)

@foods_routestwo.route('/')
# @login_required
def foods():
    foods = Foodtwo.query.all()
    return {"foodstwo": [food.to_dict() for food in foods]}


@foods_routestwo.route('/new', methods=['POST'])
def saved_foods():
    data = request.json
    print(data)
    food = Foodtwo(name=data['name'], primarymacro=data['PrimaryMacro'], totalmacros=data['TotalMacros'], totalcalories=data['TotalCalories'])
    db.session.add(food)
    db.session.commit()
    return {'food': food.to_dict()}
