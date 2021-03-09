
from app.models import Foodthree, db
from flask import Blueprint, request

foods_routesthree = Blueprint('foodsthree', __name__)

@foods_routesthree.route('/')

def foods():
    foods = Foodthree.query.all()
    return {"foodsthree": [food.to_dict() for food in foods]}


@foods_routesthree.route('/new', methods=['POST'])
def saved_foods():
    data = request.json
    print(data)
    food = Foodthree(name=data['name'], primarymacro=data['PrimaryMacro'], totalmacros=data['TotalMacros'], totalcalories=data['TotalCalories'])
    db.session.add(food)
    db.session.commit()
    return {'food': food.to_dict()}
