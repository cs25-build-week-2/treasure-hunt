from calls import TokenAuth, head
from miner import mine
from traverse import bfs
import requests
import time
import os
import json


def auto_move(path):
    '''
    Auto move without penalty
    '''
    # While there is still directions to go to
    while len(path) > 0:
        # grab the first direction from path
        direction = path.pop(0)
        # # create a cooldown timer
        cooldown = 0
        # # dinamic movement
        movement = {"direction": f"{direction}"}
        # # post request to move to new room
        move = requests.post(url=head['node'] + '/adv/move/',
                             auth=TokenAuth(head['token']), json=movement)

        moved = move.json()
        # # assing create a cooldown timer
        cooldown = moved['cooldown']
        time.sleep(cooldown)
        print(moved)


def auto_mine():
    '''
    Pray at the shrine
    '''
    mine()


def auto_pilot(starting_room, target):
    '''
    Create path with bfs
    '''
    path = bfs(starting_room, target)
    # travel to target
    auto_move(path)


# auto_pilot(55, 384)
auto_mine()
