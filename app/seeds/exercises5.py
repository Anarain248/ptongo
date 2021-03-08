from app.models import db, Exercisefive

def seed_exercisefive():

    data = Exercisefive(name='Bodyweight Squats and Bodyweight lunges Superset',
     exercisetype='Compound',
     reps='5 sets of 15 reps',
     primarymuscle='Quads, HamStrings, Glutes')

    data2 = Exercisefive(name='Jump Squats',
     exercisetype='Compound',
     reps='2 sets of 20 reps',
     primarymuscle='Quads, HamStrings, Glutes')

    data3 = Exercisefive(name='Regular Pushups',
     exercisetype='Compound',
     reps='5 sets of 20 reps',
     primarymuscle='Chest, Shoulders, Triceps')

    data4 = Exercisefive(name='Stiff Leg Bodyweight Deadlifts',
     exercisetype='Compound',
     reps='5 sets of 20 reps',
     primarymuscle='HamStrings, Glutes')

    data5 = Exercisefive(name='Close Grip Pushups',
     exercisetype='Isolation',
     reps='3 sets of 20 reps',
     primarymuscle='Triceps')

    data6 = Exercisefive(name='Situps and Mountain Climbers Superset',
     exercisetype='Isolation',
     reps='3 sets of 15 reps',
     primarymuscle='Abs')

    data7 = Exercisefive(name='Planks',
     exercisetype='Isolation',
     reps='3 sets of 45 seconds',
     primarymuscle='Abs')

    db.session.add(data)
    db.session.add(data2)
    db.session.add(data3)
    db.session.add(data4)
    db.session.add(data5)
    db.session.add(data6)
    db.session.add(data7)
    db.session.commit()

def undo_exercisesfive():

    db.session.execute('TRUNCATE exercises CASCADE;')
    db.session.commit()
