from django.urls import path
from .views import getRoutes, getAllNotes, getNote, updateNote,deleteNote, createNote

urlpatterns = [
    path('', getRoutes, name='routes'),
    path('notes/', getAllNotes, name='all notes'),
    path('notes/new', createNote, name='create note'),
    path('notes/<int:id>', getNote, name='note'),
    path('notes/<int:id>/update', updateNote, name='update note'),
    path('notes/<int:id>/delete', deleteNote, name='delete note'),
]