from flask.cli import AppGroup
from .users import seed_users, undo_users
from .exercises import seed_exercise, undo_exercises
from .exercises2 import seed_exercisetwo, undo_exercisestwo
from .exercises3 import seed_exercisethree, undo_exercisesthree
from .exercises4 import seed_exercisefour, undo_exercisesfour
from .exercises5 import seed_exercisefive, undo_exercisesfive
from .exercises6 import seed_exercisesix, undo_exercisessix
from .exercises7 import seed_exerciseseven, undo_exercisesseven
from .exercises8 import seed_exerciseeight, undo_exerciseseight
from .exercises9 import seed_exercisenine, undo_exercisesnine
from .exercises10 import seed_exerciseten, undo_exercisesten
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
    seed_exercisesix()
    seed_exerciseseven()
    seed_exerciseeight()
    seed_exercisenine()
    seed_exerciseten()
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
    undo_exercisessix()
    undo_exercisesseven()
    undo_exerciseseight()
    undo_exercisesnine()
    undo_exercisesten()
    undo_foods()
    undo_foodstwo()
