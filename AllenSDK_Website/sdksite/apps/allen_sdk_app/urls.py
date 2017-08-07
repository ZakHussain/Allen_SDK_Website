from django.conf.urls import url 
from . import views 

urlpatterns = [
	url(r'^$', views.index, name='index'),
	url(r'^select_sdk/$', views.select_sdk, name='select_sdk')
]