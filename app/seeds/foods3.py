from app.models import db, Foodthree

def seed_foodthree():

    data = Foodthree(name='Avocado',
     primarymacro='Fats',
     totalmacros='21 grams Fats per cup',
     totalcalories='230 calories per cup')

    data2 = Foodthree(name='Olive Oil',
     primarymacro='Fats',
     totalmacros='15 grams Fats per tablespoon',
     totalcalories='120 calories per tablespoon')

    data3 = Foodthree(name='Almonds',
     primarymacro='Fats',
     totalmacros='15 grams fats per ounce',
     totalcalories='165 calories per ounce')

    data4 = Foodthree(name='Almond Butter',
     primarymacro='Fats',
     totalmacros='9 grams Fats per tablespoon',
     totalcalories='100 calories per tablespoon')

    data5 = Foodthree(name='Cashews',
     primarymacro='Fats',
     totalmacros='12 grams Fats per ounce',
     totalcalories='160 calories per ounce')

    data6 = Foodthree(name='Cashew Butter',
     primarymacro='Fats',
     totalmacros='8 grams Fats per tablespoon',
     totalcalories='95 calories per tablespoon')

    data7 = Foodthree(name='Peanuts',
     primarymacro='Fats',
     totalmacros='14 grams Fats per ounce',
     totalcalories='160 calories per ounce')

    data8 = Foodthree(name='Peanut Butter',
     primarymacro='Fats',
     totalmacros='8 grams Fats per tablespoon',
     totalcalories='95 calories per tablespoon')

    data9 = Foodthree(name='Pumpkin Seeds',
     primarymacro='Fats',
     totalmacros='12 grams Fats per cup',
     totalcalories='285 calories per cup')

    data10 = Foodthree(name='Walnuts',
     primarymacro='Fats',
     totalmacros='18 grams Fats per ounce',
     totalcalories='185 calories per ounce')

    data11 = Foodthree(name='Pistachio',
     primarymacro='Fats',
     totalmacros='13 grams Fats per ounce',
     totalcalories='160 calories per ounce')

    data12 = Foodthree(name='Chia Seeds',
     primarymacro='Fats',
     totalmacros='9 grams Fats per ounce',
     totalcalories='140 calories per ounce')

    data13 = Foodthree(name='Egg Yolk',
     primarymacro='Fats',
     totalmacros='5 grams Fats per one large yolk',
     totalcalories='55 calories per one large yolk')

    data14 = Foodthree(name='Olives',
     primarymacro='Fats',
     totalmacros='11 grams Fats per 3.5 ounces',
     totalcalories='115 calories per 3.5 ounces')

    data15 = Foodthree(name='Flaxseeds',
     primarymacro='Fats',
     totalmacros='5 grams Fats per tablespoon',
     totalcalories='55 calories per tablespoon')
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

def undo_foodsthree():

    db.session.execute('TRUNCATE foods CASCADE;')
    db.session.commit()
