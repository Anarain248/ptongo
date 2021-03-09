from app.models import db, Exercisenine

def seed_exercisenine():

    data = Exercisenine(name='Bodyweight Squats, Bodyweight lunges, Bodyweight Reverse lunges(Giantset)',
     exercisetype='Compound',
     reps='5 sets of 20 reps',
     primarymuscle='Quads, HamStrings, Glutes')

    data2 = Exercisenine(name='Jump Squats and Jump Lunges(Superset)',
     exercisetype='Compound',
     reps='2 sets of 25 reps',
     primarymuscle='Quads, HamStrings, Glutes')

    data3 = Exercisenine(name='Regular Pushups and Close Grip Pushups(Superset)',
     exercisetype='Compound',
     reps='5 sets of 25 reps',
     primarymuscle='Chest, Shoulders, Triceps')

    data4 = Exercisenine(name='Stiff Leg Bodyweight Deadlifts',
     exercisetype='Compound',
     reps='5 sets of 25 reps',
     primarymuscle='HamStrings, Glutes')

    data5 = Exercisenine(name='Clapping Pushups',
     exercisetype='Compound',
     reps='3 sets of 8 reps',
     primarymuscle='Chest, Shoulders, Triceps')

    data6 = Exercisenine(name='Situps, Bicycles, Lying Leg Raises(Giantset)',
     exercisetype='Isolation',
     reps='3 sets of 20 reps',
     primarymuscle='Abs')

    data7 = Exercisenine(name='Planks',
     exercisetype='Isolation',
     reps='3 sets of 60 seconds',
     primarymuscle='Abs')

    db.session.add(data)
    db.session.add(data2)
    db.session.add(data3)
    db.session.add(data4)
    db.session.add(data5)
    db.session.add(data6)
    db.session.add(data7)
    db.session.commit()

def undo_exercisesnine():

    db.session.execute('TRUNCATE exercises CASCADE;')
    db.session.commit()
