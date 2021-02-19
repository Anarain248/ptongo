from flask.cli import AppGroup
from .users import seed_users, undo_users
from .exercises import seed_exercise, undo_exercises
from .foods import seed_food, undo_foods


seed_commands = AppGroup('seed')

@seed_commands.command('all')
def seed():
    seed_users()
    seed_exercise()
    seed_food()

@seed_commands.command('undo')
def undo():
    undo_users()
    undo_exercises()
    undo_foods()
