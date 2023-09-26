import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <Link to="/">
      <div>This is the Header</div>
    </Link>

    <Link to="/notes/new">
      <div>Add new note</div>
    </Link>
    </>

  )
}
