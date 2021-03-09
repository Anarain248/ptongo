from app.models import db, Exerciseten

def seed_exerciseten():

    data = Exerciseten(name='Bodyweight Squats, Bodyweight lunges, Bodyweight Reverse lunges(Giantset)',
     exercisetype='Compound',
     reps='5 sets of 20 reps',
     primarymuscle='Quads, HamStrings, Glutes')

    data2 = Exerciseten(name='Jump Squats, Jump Lunges, Lying Glute Bridge(Giantset)',
     exercisetype='Compound',
     reps='2 sets of 25 reps',
     primarymuscle='Quads, HamStrings, Glutes')

    data3 = Exerciseten(name='Regular Pushups, Close Grip Pushups, Wide Grip Pushups(Giantset)',
     exercisetype='Compound',
     reps='5 sets of 25 reps',
     primarymuscle='Chest, Shoulders, Triceps')

    data4 = Exerciseten(name='Stiff Leg Bodyweight Deadlifts, Single-Leg Bodyweight Deadlift(Superset)',
     exercisetype='Compound',
     reps='5 sets of 25 reps',
     primarymuscle='HamStrings, Glutes')

    data5 = Exerciseten(name='Clapping Pushups',
     exercisetype='Compound',
     reps='3 sets of 10 reps',
     primarymuscle='Chest, Shoulders, Triceps')

    data6 = Exerciseten(name='Situps, Bicycles, Lying Leg Raises(Giantset)',
     exercisetype='Isolation',
     reps='3 sets of 25 reps',
     primarymuscle='Abs')

    data7 = Exerciseten(name='Planks',
     exercisetype='Isolation',
     reps='3 sets of 90 seconds',
     primarymuscle='Abs')

    db.session.add(data)
    db.session.add(data2)
    db.session.add(data3)
    db.session.add(data4)
    db.session.add(data5)
    db.session.add(data6)
    db.session.add(data7)
    db.session.commit()

def undo_exercisesten():

    db.session.execute('TRUNCATE exercises CASCADE;')
    db.session.commit()
