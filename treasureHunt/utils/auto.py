# from .traverse import bfs
# import requests
import time
import os
import json
# from dotenv import load_dotenv
# load_dotenv()


current_room = None
cooldown = 15

print(time.sleep(cooldown))


def auto_pilot(room, location):
    if location == 'well':
        target = 55
    if location == 'shrine':
        target = 22

    path = bfs(room, target)

    # for move in path:
    #     time.sleep(cooldown)

    #     res = requests.post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move/',
    #                         headers={'Authorization': str(
    #                             os.getenv('API_KEY'))},
    #                         json={'direction': move}
    #                         )


# auto_pilot(55, 'shrine')
