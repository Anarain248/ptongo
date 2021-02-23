from app.models import db, Food

def seed_food():

    data = Food(name='Apple',
     primarymacro='Carbohydrate',
     totalmacros='25 grams Carbohydrates',
     totalcalories='95 calories')

    data2 = Food(name='Chicken',
     primarymacro='Carbohydrate',
     totalmacros='25 grams Protein',
     totalcalories='100 calories')

    data3 = Food(name='Banana',
     primarymacro='Carbohydrate',
     totalmacros='25 grams Carbohydrates',
     totalcalories='100 calories')

    db.session.add(data)
    db.session.add(data2)
    db.session.add(data3)
    db.session.commit()

def undo_foods():

    db.session.execute('TRUNCATE foods;')
    db.session.commit()
