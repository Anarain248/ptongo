from app.models import db, Exerciseseven

def seed_exerciseseven():

    data = Exerciseseven(name='Bodyweight Squats and Bodyweight lunges(Superset)',
     exercisetype='Compound',
     reps='5 sets of 20 reps',
     primarymuscle='Quads, HamStrings, Glutes')

    data2 = Exerciseseven(name='Jump Squats and Jump Lunges(Superset)',
     exercisetype='Compound',
     reps='2 sets of 20 reps',
     primarymuscle='Quads, HamStrings, Glutes')

    data3 = Exerciseseven(name='Regular Pushups and Close Grip Pushups(Superset)',
     exercisetype='Compound',
     reps='5 sets of 15 reps',
     primarymuscle='Chest, Shoulders, Triceps')

    data4 = Exerciseseven(name='Stiff Leg Bodyweight Deadlifts',
     exercisetype='Compound',
     reps='5 sets of 20 reps',
     primarymuscle='HamStrings, Glutes')

    data5 = Exerciseseven(name='Clapping Pushups',
     exercisetype='Compound',
     reps='3 sets of 3-5 reps',
     primarymuscle='Chest, Shoulders, Triceps')

    data6 = Exerciseseven(name='Situps and Bicycles(Superset)',
     exercisetype='Isolation',
     reps='3 sets of 20 reps',
     primarymuscle='Abs')

    data7 = Exerciseseven(name='Planks',
     exercisetype='Isolation',
     reps='3 sets of 50 seconds',
     primarymuscle='Abs')

    db.session.add(data)
    db.session.add(data2)
    db.session.add(data3)
    db.session.add(data4)
    db.session.add(data5)
    db.session.add(data6)
    db.session.add(data7)
    db.session.commit()

def undo_exercisesseven():

    db.session.execute('TRUNCATE exercises CASCADE;')
    db.session.commit()
