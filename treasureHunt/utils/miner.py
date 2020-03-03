import hashlib
import requests

import sys
from uuid import uuid4
from timeit import default_timer as timer

import random


def proof_of_work(last_proof):
    '''
    Proof of work
    '''
    start = timer()
    print('Searching for next proof')
    proof = 0
    print('Proof found: ' + str(proof) + ' in ' + str(timer()-start))

    return proof


def valid_proof(last_hash, proof):
    '''
    Validate the Proof: 
    '''
    guess = f'{proof}'.encode()
    l_hash = hashlib.sha256(guess).hexdigest()

    return l_hash[:6] == last_hash[:6]


if __name__ == '__main__':
    if len(sys.argv) > 1:
        node = sys.argv[1]
    else:
        node = 'https://lambda-treasure-hunt.herokuapp.com/api/bc/mine/'

    coins_mined = 0

    # Load or create ID
    f = open("my_id.txt", "r")
    id = f.read()
    print("ID is", id)
    f.close()

    if id == 'NONAME\n':
        print("ERROR: You must change your name in `my_id.txt`!")
        exit()
    # Run forever until interrupted
    while True:
        # Get the last proof from the server
        r = requests.get(url=node + "/last_proof")
        data = r.json()
        new_proof = proof_of_work(data.get('proof'))

        post_data = {"proof": new_proof,
                     "id": id}

        r = requests.post(url=node + "/mine", json=post_data)
        data = r.json()
        if data.get('message') == 'New Block Forged':
            coins_mined += 1
            print("Total coins mined: " + str(coins_mined))
        else:
            print(data.get('message'))
