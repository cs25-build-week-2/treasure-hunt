import requests
import time
import os
import json
import random
import hashlib
from decouple import config


lastProof = 0
difficulty = 0
leadingZeros = "000000"


def init():
    res = requests.get('https://lambda-treasure-hunt.herokuapp.com/api/bc/last_proof/',
                       headers={'Authorization': config("API_KEY")})

    if res:
        global lastProof
        global difficulty
        global leadingZeros
        res = res.json()
        lastProof = res['proof']
        difficulty = res['difficulty']
        leadingZeros = "0" * difficulty

        time.sleep(res['cooldown'])


def mine():
    global lastProof
    global difficulty
    global leadingZeros

    guess = random.randrange(3274, 6821)
    encoded = f'{lastProof}{guess}'.encode()
    hashed = hashlib.sha256(encoded).hexdigest()

    print(hashed[:difficulty], leadingZeros)

    while hashed[:difficulty] is leadingZeros:
        guess += random.randrange(3274, 6821)
        encoded = f'{lastProof}{guess}'.encode()
        hashed = hashlib.sha256(encoded).hexdigest()

    print(hashed)
    res = requests.post('https://lambda-treasure-hunt.herokuapp.com/api/bc/mine/',
                        headers={'Authorization': config('API_KEY')},
                        json={'proof': guess}
                        )
    print(res)
    if res:
        res = res.json()
        print(res)

        time.sleep(res['cooldown'])


def proof(proposedProof):
    str(proposedProof)
    check = proposedProof[:difficulty]

    if int(check) == 0:
        return True
    else:
        return False


init()
while True:
    mine()
    init()
