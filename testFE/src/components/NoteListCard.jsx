import React from 'react'
import { Link } from 'react-router-dom'

export default function NoteListCard({ id, title, created, body, updated }) {

    return (
        <Link to={`notes/${id}`} >
            <div>
                <h3>{title}</h3>
                <h4>{created}</h4>
                <h6>{body}</h6>
                <h6>{updated}</h6>
            </div>
        </Link>
    )
}
