from flask_login import login_required
from app.models import Food, db
from flask import Blueprint, request

foods_routes = Blueprint('foods', __name__)

@foods_routes.route('/')
# @login_required
def foods():
    foods = Food.query.all()
    return {"foods": [food.to_dict() for food in foods]}


@foods_routes.route('/new', methods=['POST'])
def saved_foods():
    data = request.json
    print(data)
    food = Food(name=data['name'], primarymacro=data['PrimaryMacro'], totalmacros=data['TotalMacros'], totalcalories=data['TotalCalories'])
    db.session.add(food)
    db.session.commit()
    return {'food': food.to_dict()}
