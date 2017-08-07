from django.conf.urls import url 
from . import views 

urlpatterns = [
	url(r'^$', views.index, name='brain_observatory_index'),
	url(r'^tutorials/$', views.tutorials, name='tutorials'),
	url(r'^documentation/$', views.documentation, name='documentation'),
	url(r'^release_notes/$', views.release_notes, name='release_notes')	
]