import hashlib
import requests
from requests.auth import AuthBase

import sys
from decouple import config
from timeit import default_timer as timer
from calls import TokenAuth, head

import random


def proof_of_work(last_proof, difficulty):
    '''
    Find proof
    '''
    start = timer()

    print("Searching for next proof")
    tries = 0

    proof = random.random()
    end_proof = f'{last_proof}'.encode()
    t_hash = hashlib.sha256(end_proof).hexdigest()

    while valid_proof(t_hash, proof, difficulty) is False:
        proof += 1
        tries += 1
        if tries % 1000000 == 0:
            print(tries/1000000, 'million tries')

    print("Proof found: " + str(proof) + " in " +
          str(timer() - start) + ' second(s)')
    return proof


def valid_proof(last_hash, proof, difficulty):
    # TODO: Your code here!
    guess = f'{proof}'.encode()
    l_hash = hashlib.sha256(guess).hexdigest()

    return l_hash[:difficulty] == last_hash[:difficulty]


def mine():
    while True:
        last = requests.get(url=head['node'] + '/adv/move/',
                            auth=TokenAuth(head['token']))
        last_data = last.json()

        new_proof = proof_of_work(last_data['proof'], last_data['difficulty'])

        post_data = {'proof': new_proof}

        mine = requests.post(
            url=head['node'] + '/adv/move/',
            auth=TokenAuth(head['token']),  json=post_data)
        data = mine.json()
        print(data['message'])
