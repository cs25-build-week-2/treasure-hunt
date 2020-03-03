from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from decouple import config
from rest_framework.decorators import api_view
from django.core.serializers import serialize


import json


@csrf_exempt
@api_view(["POST"])
def find_shrine(request):
    print(request)
    return JsonResponse({'message': 'Room foudn'})
