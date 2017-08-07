# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
	return render(request, 'brain_observatory_app/index.html')

def tutorials(request):
	print "hello world"
	return render(request, 'brain_observatory_app/tutorials.html')

def documentation(request):
	return render(request, 'brain_observatory_app/documentation.html')

def release_notes(request):
	return render(request, 'brain_observatory_app/release_notes.html')