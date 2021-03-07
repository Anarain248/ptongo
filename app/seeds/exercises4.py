from app.models import db, Exercisefour

def seed_exercisefour():

    data = Exercisefour(name='Bodyweight Squats',
     exercisetype='Compound',
     reps='5 sets of 20 reps',
     primarymuscle='Quads, HamStrings, Glutes')

    data2 = Exercisefour(name='Jump Squats',
     exercisetype='Compound',
     reps='2 sets of 20 reps',
     primarymuscle='Quads, HamStrings, Glutes')

    data3 = Exercisefour(name='Regular Pushups',
     exercisetype='Compound',
     reps='5 sets of 20 reps',
     primarymuscle='Chest, Shoulders, Triceps')

    data4 = Exercisefour(name='Stiff Leg Bodyweight Deadlifts',
     exercisetype='Compound',
     reps='5 sets of 20 reps',
     primarymuscle='HamStrings, Glutes')

    data5 = Exercisefour(name='Close Grip Pushups',
     exercisetype='Isolation',
     reps='3 sets of 20 reps',
     primarymuscle='Triceps')

    data6 = Exercisefour(name='Situps',
     exercisetype='Isolation',
     reps='3 sets of 20 reps',
     primarymuscle='Abs')

    data7 = Exercisefour(name='Planks',
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

def undo_exercisesfour():

    db.session.execute('TRUNCATE exercises CASCADE;')
    db.session.commit()
