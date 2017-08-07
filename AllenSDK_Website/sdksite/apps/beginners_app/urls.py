from django.conf.urls import url 
from . import views

urlpatterns = [
	url(r'^$', views.index, name='beginners_index'),
	url(r'^installation/$', views.installation, name ='installation')
]