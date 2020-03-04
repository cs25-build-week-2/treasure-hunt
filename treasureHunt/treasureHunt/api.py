from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from decouple import config
from rest_framework.decorators import api_view
from django.core.serializers import serialize
from utils.traverse import find_path


import json


@csrf_exempt
@api_view(["POST"])
def find_shrine(request):
    current_room = request.current_room
    find_path(current_room)
    return JsonResponse({'message': 'Room foudn'})
