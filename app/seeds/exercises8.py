from app.models import db, Exerciseeight

def seed_exerciseeight():

    data = Exerciseeight(name='Bodyweight Squats and Bodyweight lunges(Superset)',
     exercisetype='Compound',
     reps='5 sets of 25 reps',
     primarymuscle='Quads, HamStrings, Glutes')

    data2 = Exerciseeight(name='Jump Squats and Jump Lunges(Superset)',
     exercisetype='Compound',
     reps='2 sets of 25 reps',
     primarymuscle='Quads, HamStrings, Glutes')

    data3 = Exerciseeight(name='Regular Pushups and Close Grip Pushups(Superset)',
     exercisetype='Compound',
     reps='5 sets of 20 reps',
     primarymuscle='Chest, Shoulders, Triceps')

    data4 = Exerciseeight(name='Stiff Leg Bodyweight Deadlifts',
     exercisetype='Compound',
     reps='5 sets of 25 reps',
     primarymuscle='HamStrings, Glutes')

    data5 = Exerciseeight(name='Clapping Pushups',
     exercisetype='Compound',
     reps='3 sets of 6 reps',
     primarymuscle='Chest, Shoulders, Triceps')

    data6 = Exerciseeight(name='Situps and Bicycles(Superset)',
     exercisetype='Isolation',
     reps='3 sets of 25 reps',
     primarymuscle='Abs')

    data7 = Exerciseeight(name='Planks',
     exercisetype='Isolation',
     reps='3 sets of 55 seconds',
     primarymuscle='Abs')

    db.session.add(data)
    db.session.add(data2)
    db.session.add(data3)
    db.session.add(data4)
    db.session.add(data5)
    db.session.add(data6)
    db.session.add(data7)
    db.session.commit()

def undo_exerciseseight():

    db.session.execute('TRUNCATE exercises CASCADE;')
    db.session.commit()
