import requests
from requests.auth import AuthBase
from decouple import config

head = {
    'token': config('API_KEY'),
    'node': "https://lambda-treasure-hunt.herokuapp.com/api"
}


class TokenAuth(AuthBase):
    """Implements a custom authentication scheme."""

    def __init__(self, token):
        self.token = token

    def __call__(self, r):
        '''Attach an API token to a custom header
        '''
        r.headers['Authorization'] = f'Token {self.token}'
        r.headers['Content-Type'] = f'application/json'
        return r


# init = requests.get(url=node + '/bc/last_proof', auth=TokenAuth(token))

# data = init.json()

# print(data)
