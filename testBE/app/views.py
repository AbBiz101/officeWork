from rest_framework.response import Response
from .models import Note
from .serializers import NoteSerializer
from rest_framework.decorators import api_view


@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]

    return Response(routes)


@api_view(['GET'])
def getAllNotes(request):
    notes = Note.objects.all()
    serialized = NoteSerializer(notes, many=True)
    return Response(serialized.data)


@api_view(['GET'])
def getNote(request, id):
    note = Note.objects.get(id=id)
    serialized = NoteSerializer(note, many=False)
    return Response(serialized.data)


@api_view(['PUT'])
def updateNote(request, id):
    data = request.data
    note = Note.objects.get(id=id)
    serialized = NoteSerializer(instance=note, data=data)

    if serialized.is_valid():
        serialized.save()

    return Response(serialized.data)


@api_view(['POST'])
def createNote(request):
    data = request.data
    note = Note.objects.create(body=data['body'], title=data['title'])
    serialized = NoteSerializer(note, many=False)
    return Response(serialized.data)


@api_view(['DELETE'])
def deleteNote(request, id):
    note = Note.objects.get(id=id)
    note.delete()
    return Response("Note Deleted")
