from app.models import db, Exercise

def seed_exercise():

    data = Exercise(name='Barbell Squats',
     exercisetype='Compound',
     reps='Strength: 3-5 reps, Hypertrophy: 8-12 reps, Endurance: 15-25 reps',
     primarymuscle='Quads, HamStrings, Glutes')

    data2 = Exercise(name='Bench Press',
     exercisetype='Compound',
     reps='Strength: 3-5 reps, Hypertrophy: 8-12 reps, Endurance: 15-25 reps',
     primarymuscle='Chest, Shoulders, Triceps')

    data3 = Exercise(name='Stiff Leg Deadlifts',
     exercisetype='Compound',
     reps='Strength: 3-5 reps, Hypertrophy: 8-12 reps, Endurance: 15-25 reps',
     primarymuscle='HamStrings, Glutes')

    db.session.add(data)
    db.session.add(data2)
    db.session.add(data3)
    db.session.commit()

def undo_exercises():

    db.session.execute('TRUNCATE exercises;')
    db.session.commit()
