import NoteListCard from './NoteListCard'
import React, { useEffect, useState } from 'react'

export default function NotesList() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    const getNotes = async () => {
        const res = await fetch('/notes/')
        if (res.ok) {
            const data = await res.json()
            setNotes(data)
        }
    }

    return (
        <div>
            {notes ?
                notes.map((note, index) => <NoteListCard
                    key={index}
                    id={note.id}
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
