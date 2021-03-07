from app.models import db, Exercisethree

def seed_exercisethree():

    data = Exercisethree(name='Bodyweight Squats',
     exercisetype='Compound',
     reps='5 sets of 15 reps',
     primarymuscle='Quads, HamStrings, Glutes')

    data2 = Exercisethree(name='Jump Squats',
     exercisetype='Compound',
     reps='2 sets of 15 reps',
     primarymuscle='Quads, HamStrings, Glutes')

    data3 = Exercisethree(name='Regular Pushups',
     exercisetype='Compound',
     reps='5 sets of 15 reps',
     primarymuscle='Chest, Shoulders, Triceps')

    data4 = Exercisethree(name='Stiff Leg Bodyweight Deadlifts',
     exercisetype='Compound',
     reps='5 sets of 15 reps',
     primarymuscle='HamStrings, Glutes')

    data5 = Exercisethree(name='Close Grip Pushups',
     exercisetype='Isolation',
     reps='3 sets of 15 reps',
     primarymuscle='Triceps')

    data6 = Exercisethree(name='Situps',
     exercisetype='Isolation',
     reps='3 sets of 15 reps',
     primarymuscle='Abs')

    data7 = Exercisethree(name='Planks',
     exercisetype='Isolation',
     reps='3 sets of 30 seconds',
     primarymuscle='Abs')

    db.session.add(data)
    db.session.add(data2)
    db.session.add(data3)
    db.session.add(data4)
    db.session.add(data5)
    db.session.add(data6)
    db.session.add(data7)
    db.session.commit()

def undo_exercisesthree():

    db.session.execute('TRUNCATE exercises CASCADE;')
    db.session.commit()
