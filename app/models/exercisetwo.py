from .db import db

class Exercisetwo(db.Model):
    __tablename__ = 'exercisestwo'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False, )
    exercisetype = db.Column(db.String(100), nullable=False,)
    reps = db.Column(db.String(100), nullable=False,)
    primarymuscle = db.Column(db.String(500), nullable=False,)


    def to_dict(self):
      return {
        "id": self.id,
        "name": self.name,
        "exercisetype": self.exercisetype,
        "reps": self.reps,
        "primarymuscle": self.primarymuscle
      }
