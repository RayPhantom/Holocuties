from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse, HttpResponseNotFound, Http404
from django.views.generic import DetailView, CreateView
from django.contrib.auth.views import LoginView
from django.urls import reverse_lazy
from django.contrib.auth import login
from django.contrib.auth import logout as django_logout

from .models import *

# Create your views here.
def holomain(request):
	context = {
		'title': "Menu",
	}

	return render(request, 'holo/menu.html', context=context)

def kronii(request):
	obj = Content.objects.filter(vtuber=1)
	context = {
		'obj': obj,
		'title': "Ouro Kronii",
	}

	return render(request, 'holo/kronii.html', context=context)

def calli(request):
	obj = Content.objects.filter(vtuber=2)
	context = {
		'obj': obj,
		'title': "Mori Calliope",
	}

	return render(request, 'holo/calli.html', context=context)

def gura(request):
	obj = Content.objects.filter(vtuber=3)
	context = {
		'obj': obj,
		'title': "Gawr Gura",
	}

	return render(request, 'holo/gura.html', context=context)