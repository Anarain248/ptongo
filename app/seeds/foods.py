from app.models import db, Food

def seed_food():

    data = Food(name='Apple',
     primarymacro='Carbohydrate',
     totalmacros='25 grams Carbohydrates',
     totalcalories='95 calories')

    db.session.add(data)
    db.session.commit()

def undo_foods():

    db.session.execute('TRUNCATE foods;')
    db.session.commit()
