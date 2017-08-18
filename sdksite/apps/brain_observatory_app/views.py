# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
	return render(request, 'brain_observatory_app/index.html')

def tutorials(request):
	return render(request, 'brain_observatory_app/tutorials.html')

def documentation(request):
	return render(request, 'brain_observatory_app/documentation.html')

def release_notes(request):
	return render(request, 'brain_observatory_app/release_notes.html')

def analysis(request):
	return render(request, 'brain_observatory_app/analysis.html')

def walkthroughs(request):
	return render(request, 'brain_observatory_app/walkthroughs.html')

def jupyter_notebooks(request):
	return render(request, 'brain_observatory_app/jupyter_notebooks/jupyter_notebook_files.html')