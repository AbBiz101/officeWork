import React, { useEffect, useState } from 'react'
import SingleNote from '../components/SingleNote'

export default function NotesListPage() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    const getNotes = async () => {
        const req = await fetch('http://127.0.0.1:8000/notes/')
        const data = await req.json()
        setNotes(data)
    }

    return (
        <div>
            {notes ?
                notes.map(note => <SingleNote
                    key={note.id}
                    body={note.body}
                    title={note.title}
                    created={note.created}
                    updated={note.updated}
                />
                )
                : <dev>Loading</dev>}

        </div>
    )
}
