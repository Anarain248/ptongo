from app.models import db, Exercisesix

def seed_exercisesix():

    data = Exercisesix(name='Bodyweight Squats and Bodyweight lunges(Superset)',
     exercisetype='Compound',
     reps='5 sets of 20 reps',
     primarymuscle='Quads, HamStrings, Glutes')

    data2 = Exercisesix(name='Jump Squats and Jump Lunges(Superset)',
     exercisetype='Compound',
     reps='2 sets of 15 reps',
     primarymuscle='Quads, HamStrings, Glutes')

    data3 = Exercisesix(name='Regular Pushups',
     exercisetype='Compound',
     reps='5 sets of 20 reps',
     primarymuscle='Chest, Shoulders, Triceps')

    data4 = Exercisesix(name='Stiff Leg Bodyweight Deadlifts',
     exercisetype='Compound',
     reps='5 sets of 20 reps',
     primarymuscle='HamStrings, Glutes')

    data5 = Exercisesix(name='Close Grip Pushups',
     exercisetype='Isolation',
     reps='3 sets of 20 reps',
     primarymuscle='Triceps')

    data6 = Exercisesix(name='Situps and Bicycles(Superset)',
     exercisetype='Isolation',
     reps='3 sets of 20 reps',
     primarymuscle='Abs')

    data7 = Exercisesix(name='Planks',
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

def undo_exercisessix():

    db.session.execute('TRUNCATE exercises CASCADE;')
    db.session.commit()
