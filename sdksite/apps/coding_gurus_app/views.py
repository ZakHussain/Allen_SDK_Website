# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
	return render(request, 'coding_gurus_app/index.html');

def neural_coding_department_Jeff(request):
	return render(request, 'coding_gurus_app/Jeffery.html')
