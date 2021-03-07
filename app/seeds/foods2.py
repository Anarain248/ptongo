from app.models import db, Foodtwo

def seed_foodtwo():

    data = Foodtwo(name='Chicken',
     primarymacro='Protein',
     totalmacros='40 grams Protein per cup',
     totalcalories='335 calories per apple')

    data2 = Foodtwo(name='Turkey',
     primarymacro='Protein',
     totalmacros='30 grams Protein per 100 grams',
     totalcalories='190 calories per 100 grams')

    data3 = Foodtwo(name='Shrimp',
     primarymacro='Protein',
     totalmacros='25 grams Protein per 100 grams',
     totalcalories='100 calories per 100 grams')

    data4 = Foodtwo(name='Salmon',
     primarymacro='Protein',
     totalmacros='20 grams Protein per 100 grams',
     totalcalories='205 calories per 100 grams')

    data5 = Foodtwo(name='Tilapia',
     primarymacro='Protein',
     totalmacros='25 grams Protein per fillet',
     totalcalories='115 calories per fillet')

    data6 = Foodtwo(name='Tofu',
     primarymacro='Protein',
     totalmacros='8 grams Protein per 100 grams',
     totalcalories='80 calories per 100 grams')

    data7 = Foodtwo(name='Egg Whites',
     primarymacro='Protein',
     totalmacros='25 grams Protein per cup',
     totalcalories='125 calories per cup')

    data8 = Foodtwo(name='Eggs',
     primarymacro='Protein',
     totalmacros='15 grams Protein per 100 grams',
     totalcalories='155 calories per 100 grams')

    data9 = Foodtwo(name='Dal',
     primarymacro='Protein',
     totalmacros='8 grams Protien per cup',
     totalcalories='132 calories per cup')

    data10 = Foodtwo(name='Ground Beef',
     primarymacro='Protein',
     totalmacros='25 grams Protein per 3oz',
     totalcalories='215 calories per 3oz')

    data11 = Foodtwo(name='Lamb',
     primarymacro='Protein',
     totalmacros='20 grams Protein per 3oz',
     totalcalories='250 calories per 3oz')

    data12 = Foodtwo(name='Greek Yogurt',
     primarymacro='Protein',
     totalmacros='17 grams Protein per container',
     totalcalories='100 calories per container')

    data13 = Foodtwo(name='Cottage Cheese',
     primarymacro='Protein',
     totalmacros='25 grams Protein per cup',
     totalcalories='225 calories per cup')

    data14 = Foodtwo(name='Tuna',
     primarymacro='Protein',
     totalmacros='30 grams Protein per 100 grams',
     totalcalories='135 calories per 100 grams')

    data15 = Foodtwo(name='Pork',
     primarymacro='Protein',
     totalmacros='25 grams Protein per 3oz',
     totalcalories='205 calories per 3oz')
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

def undo_foodstwo():

    db.session.execute('TRUNCATE foods CASCADE;')
    db.session.commit()
