from flask.cli import AppGroup
from .users import seed_users, undo_users
from .exercises import seed_exercise, undo_exercises
from .exercises2 import seed_exercisetwo, undo_exercisestwo
from .exercises3 import seed_exercisethree, undo_exercisesthree
from .exercises4 import seed_exercisefour, undo_exercisesfour
from .exercises5 import seed_exercisefive, undo_exercisesfive
from .foods import seed_food, undo_foods
from .foods2 import seed_foodtwo, undo_foodstwo


seed_commands = AppGroup('seed')

@seed_commands.command('all')
def seed():
    seed_users()
    seed_exercise()
    seed_exercisetwo()
    seed_exercisethree()
    seed_exercisefour()
    seed_exercisefive()
    seed_food()
    seed_foodtwo()

@seed_commands.command('undo')
def undo():
    undo_users()
    undo_exercises()
    undo_exercisestwo()
    undo_exercisesthree()
    undo_exercisesfour()
    undo_exercisesfive()
    undo_foods()
    undo_foodstwo()
