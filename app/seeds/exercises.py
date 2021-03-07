from app.models import db, Exercise

def seed_exercise():

    data = Exercise(name='Bodyweight Squats',
     exercisetype='Compound',
     reps='5 sets of 5 reps',
     primarymuscle='Quads, HamStrings, Glutes')

    data2 = Exercise(name='Regular Pushups',
     exercisetype='Compound',
     reps='5 sets of 5 reps',
     primarymuscle='Chest, Shoulders, Triceps')

    data3 = Exercise(name='Stiff Leg bodyweight Deadlifts',
     exercisetype='Compound',
     reps='5 sets of 5 reps',
     primarymuscle='HamStrings, Glutes')

    db.session.add(data)
    db.session.add(data2)
    db.session.add(data3)
    db.session.commit()

def undo_exercises():

    db.session.execute('TRUNCATE exercises CASCADE;')
    db.session.commit()
