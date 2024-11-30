# assistant_api/urls.py
from django.urls import path
from .views import process_voice_command

urlpatterns = [
    path('api/voice/', process_voice_command, name='voice_command'),
]
