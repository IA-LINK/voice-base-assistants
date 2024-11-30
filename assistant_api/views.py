from django.shortcuts import render

# Create your views here.
# assistant_api/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def process_voice_command(request):
    command = request.data.get('command', '')
    response_text = f"Received command: {command}"
    
    # Logic to process the voice command
    # Add any functionality here (e.g., retrieving data, controlling devices)
    
    return Response({'response': response_text})
