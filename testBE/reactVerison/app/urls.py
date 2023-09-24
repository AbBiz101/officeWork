from django.urls import path
from .views import getRoutes, getAllNotes, getNote

urlpatterns = [
    path('', getRoutes, name='routes'),
    path('notes/', getAllNotes, name='all notes'),
    path('notes/<int:id>', getNote, name='note'),
]