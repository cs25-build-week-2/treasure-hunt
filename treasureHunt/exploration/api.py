from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from decouple import config
from rest_framework.decorators import api_view
from django.core.serializers import serialize
from utils.traverse import bfs

# from .models import *
import json


@csrf_exempt
@api_view(["POST"])
def find_shrine(request):
    # get the values and traverse

    return JsonResponse({'message': 'Room foudn'})
