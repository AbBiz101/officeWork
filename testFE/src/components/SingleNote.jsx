import React from 'react'

export default function SingleNote({title,created,body,updated} ) {
  return (
    <div>
        <h3>{title}</h3>
        <h4>{created}</h4>
        <h6>{body}</h6>
        <h6>{updated}</h6>
    </div>
  )
}
