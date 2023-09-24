import React from 'react'
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'

export default function App() {
  return (
    <div className="app">
     <div>
        <Header/>
     </div>
      <NotesListPage/>
    </div>
  )
}
