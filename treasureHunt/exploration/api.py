from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from decouple import config
from rest_framework.decorators import api_view
from django.core.serializers import serialize
from utils.traverse import find_path

from .models import *
import json


def assing_rooms(move):
    '''
    assing rooms to each other 
    '''
    pass


@csrf_exempt
@api_view(["POST"])
def find_shrine(request):
    current_room = request.current_room
    # path = find_path(current_room)
    # find path to a shrine from current room
    path = ['n']
    # move in the direction for all direction in path
    for move in path:
        # helper funtion to add the rooms that have not been visited to a visited set
        assing_rooms(move)

    return JsonResponse({'message': 'Room foudn'})
