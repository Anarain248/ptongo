from app.models import db, Food

def seed_food():

    data = Food(name='Apple',
     primarymacro='Carbohydrate',
     totalmacros='25 grams Carbohydrates per apple',
     totalcalories='95 calories per apple')

    data2 = Food(name='Sweet Potatoes',
     primarymacro='Carbohydrate',
     totalmacros='27 grams Carbohydrates per cup',
     totalcalories='114 calories per cup')

    data3 = Food(name='Banana',
     primarymacro='Carbohydrate',
     totalmacros='25 grams Carbohydrates per banana',
     totalcalories='100 calories per banana')

    data4 = Food(name='Quinoa',
     primarymacro='Carbohydrate',
     totalmacros='40 grams Carbohydrates per cup',
     totalcalories='220 calories per cup')

    data5 = Food(name='Baked Potatoes',
     primarymacro='Carbohydrate',
     totalmacros='35 grams Carbohydrates per medium potato',
     totalcalories='160 calories per medium potato')

    data6 = Food(name='Brown Rice',
     primarymacro='Carbohydrate',
     totalmacros='45 grams Carbohydrates per cup',
     totalcalories='215 calories per cup')

    data7 = Food(name='White Rice',
     primarymacro='Carbohydrate',
     totalmacros='45 grams Carbohydrates per cup',
     totalcalories='205 calories per cup')

    data8 = Food(name='Whole Wheat Bread',
     primarymacro='Carbohydrate',
     totalmacros='15 grams Carbohydrates per slice',
     totalcalories='70 calories per slice')

    data9 = Food(name='White Bread',
     primarymacro='Carbohydrate',
     totalmacros='15 grams Carbohydrates per slice',
     totalcalories='80 calories per slice')

    data10 = Food(name='Roti',
     primarymacro='Carbohydrate',
     totalmacros='15 grams Carbohydrates per roti',
     totalcalories='80 calories per roti')

    data11 = Food(name='Pinto Beans',
     primarymacro='Carbohydrate',
     totalmacros='45 grams Carbohydrates per cup',
     totalcalories='275 calories per cup')

    data12 = Food(name='Black Beans',
     primarymacro='Carbohydrate',
     totalmacros='40 grams Carbohydrates per cup',
     totalcalories='225 calories per cup')

    data13 = Food(name='Lentils',
     primarymacro='Carbohydrate',
     totalmacros='40 grams Carbohydrates per cup',
     totalcalories='230 calories per cup')

    data14 = Food(name='Oatmeal',
     primarymacro='Carbohydrate',
     totalmacros='25 grams Carbohydrates per cup',
     totalcalories='160 calories per cup')

    data15 = Food(name='Orange',
     primarymacro='Carbohydrate',
     totalmacros='25 grams Carbohydrates per large orange',
     totalcalories='90 calories per large orange')
    db.session.add(data)
    db.session.add(data2)
    db.session.add(data3)
    db.session.add(data4)
    db.session.add(data5)
    db.session.add(data6)
    db.session.add(data7)
    db.session.add(data8)
    db.session.add(data9)
    db.session.add(data10)
    db.session.add(data11)
    db.session.add(data12)
    db.session.add(data13)
    db.session.add(data14)
    db.session.add(data15)
    db.session.commit()

def undo_foods():

    db.session.execute('TRUNCATE foods CASCADE;')
    db.session.commit()
