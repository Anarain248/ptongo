from .db import db

class Exercise(db.Model):
    __tablename__ = 'exercises'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False, unique=True)
    exercisetype = db.Column(db.String(100), nullable=False, unique=True)
    reps = db.Column(db.String(100), nullable=False, unique=True)
    primarymuscle = db.Column(db.String(500), nullable=False, unique=True)

#  @property
#   def muscle(self):
#     return self.muscle


#   @muscle.setter
#   def password(self, muscle):
#     self.muscle = generate_muscle(muscle)

def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "exercisetype": self.exercisetype,
      "reps": self.reps,
      "primarymuscle": self.primarymuscle
    }
