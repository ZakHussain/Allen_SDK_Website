from django.conf.urls import url 
from . import views 

urlpatterns = [
	url(r'^$', views.index, name='coding_gurus_index'),
	url(r'^neural_coding_department/Jeffery/$', views.neural_coding_department_Jeff, name='Jeffery'),
	# url(r'^/$', views.documentation, name='documentation'),
	# url(r'^/$', views.release_notes, name='release_notes')	
]