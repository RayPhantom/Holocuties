from django.urls import path

from .views import *

urlpatterns = [
	path('', holomain, name = 'holomain'),
	path('kronii', kronii, name = 'kronii'),
	path('calli', calli, name = 'calli'),
	path('gura', gura, name = 'gura'),
]