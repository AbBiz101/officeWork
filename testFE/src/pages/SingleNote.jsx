import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function SingleNote() {
    const { id } = useParams()
    const [note, setNote] = useState(null)
    const history = useNavigate()

    const getNote = async () => {
        const res = await fetch(`/notes/${id}`)
        if (res.ok) {
            const data = await res.json()
            setNote(data)
        }
    }

    const updateNote = async () => {
        const res = await fetch(`/notes/${id}/update`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(note)
        })
        if (res.ok) {
            const data = await res.json()
            setNote(data)
            history('/')
        }
    }

    const deleteNote = async () => {
        fetch(`/notes/${id}/delete`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
        history('/')
    }

    const handelUpdateNote = () => {
        updateNote()
    }

    useEffect(() => {
        getNote()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <>
            {note ? <>
                <h2>{note.title}</h2>
                <h3>{note.body}</h3>
                <h6>{note.created}</h6>
                <h6>{note.updated}</h6>

                <textarea onChange={e => setNote({ ...note, body: e.target.value })} rows={20} defaultValue={note.body} />
                <button onClick={handelUpdateNote}>Update</button>
                <button onClick={deleteNote}>Delete</button>
            </>
                : <div> loading</div>}
        </>

    )
}
