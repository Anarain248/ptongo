from flask_login import login_required
from app.models import food
from flask import Blueprint

foods_routes = Blueprint('foods', __name__)

@foods_routes.route('/')
@login_required
def foods():
    foods = Food.query.all()
    return {"foods": [foods.to_dict() for food in foods]}
