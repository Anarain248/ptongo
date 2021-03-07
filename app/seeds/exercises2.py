from app.models import db, Exercisetwo

def seed_exercisetwo():

    data = Exercisetwo(name='Bodyweight Squats',
     exercisetype='Compound',
     reps='5 sets of 10 reps',
     primarymuscle='Quads, HamStrings, Glutes')

    data2 = Exercisetwo(name='Regular Pushups',
     exercisetype='Compound',
     reps='5 sets of 10 reps',
     primarymuscle='Chest, Shoulders, Triceps')

    data3 = Exercisetwo(name='Stiff Leg Bodyweight Deadlifts',
     exercisetype='Compound',
     reps='5 sets of 10 reps',
     primarymuscle='HamStrings, Glutes')

    data4 = Exercisetwo(name='Close Grip Pushups',
     exercisetype='Isolation',
     reps='3 sets of 10 reps',
     primarymuscle='Triceps')

    data5 = Exercisetwo(name='Situps',
     exercisetype='Isolation',
     reps='3 sets of 10 reps',
     primarymuscle='Abs')

    db.session.add(data)
    db.session.add(data2)
    db.session.add(data3)
    db.session.add(data4)
    db.session.add(data5)
    db.session.commit()

def undo_exercisestwo():

    db.session.execute('TRUNCATE exercises CASCADE;')
    db.session.commit()
