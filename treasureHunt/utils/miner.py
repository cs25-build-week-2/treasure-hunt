from timeit import default_timer as timer
from requests.auth import AuthBase
from calls import TokenAuth, head
from decouple import config
import hashlib
import requests
import json
import random
import time
import math
import sys


def proof_of_work(last_proof, difficulty):
    '''
    Find proof
    '''
    start = timer()

    print("Searching for next proof")
    tries = 0

    proof = 1
    end_proof = f'{last_proof}'.encode()
    t_hash = hashlib.sha256(end_proof).hexdigest()

    while valid_proof(t_hash, proof, difficulty) is False:
        proof += 1
        tries += 1
        if tries % 1000000 == 0:
            print(tries/1000000, 'million tries')

    print("Proof found: " + str(proof) + " in " +
          str(timer() - start) + ' second(s)')
    print(proof)
    return proof


def valid_proof(last_hash, proof, difficulty):
    # TODO: Your code here!
    guess = f'{proof}'.encode()
    l_hash = hashlib.sha256(guess).hexdigest()

    return l_hash[:difficulty] == last_hash[:difficulty]


def mine():
    while True:
        cooldown = 30
        last = requests.get(url=head['node'] + '/bc/last_proof/',
                            auth=TokenAuth(head['token']))
        last_data = last.json()
        print(last_data)

        new_proof = proof_of_work(last_data['proof'], last_data['difficulty'])

        post_data = {'proof': new_proof}
        print(post_data)
        mine = requests.post(
            url=head['node'] + '/bc/mine/',
            auth=TokenAuth(head['token']),  json=post_data)
        data = mine.json()
        try:
            print(data)
        except json.decoder.JSONDecodeError:
            print("\nN'est pass JSON\n")

        time.sleep(cooldown)


mine()
