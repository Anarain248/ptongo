from .db import db

class Foodtwo(db.Model):
    __tablename__ = 'foodstwo'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False, unique=True)
    primarymacro = db.Column(db.String(500), nullable=False, )
    totalmacros = db.Column(db.String(100), nullable=False, )
    totalcalories = db.Column(db.String(100), nullable=False, )

    def to_dict(self):
      return {
        "id": self.id,
        "name": self.name,
        "primarymacro": self.primarymacro,
        "totalmacros": self.totalmacros,
        "totalcalories": self.totalcalories,
      }
