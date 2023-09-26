import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NewNote() {
    const [note, setNote] = useState(null)
    const history = useNavigate()

    const createNote = async () => {
        const res = await fetch(`/notes/new`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(note)
        })
        if (res.ok) {
            history('/')
        }
    }
    const handelCreating = () => { createNote() }
    return (
        <div >
            <textarea placeholder="title"
                onChange={e => setNote({ ...note, title: e.target.value })} />

            <textarea placeholder="body"
                onChange={e => setNote({ ...note, body: e.target.value })} rows={20} />

            <button onClick={handelCreating} type='submit'> Create a note </button>
        </div>
    )
}

/*


*/