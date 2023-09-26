import React from 'react'
import MainPage from './pages/MainPage';
import Header from './components/Header';
import NewNote from './components/NewNote';
import SingleNote from './pages/SingleNote';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/notes/:id" element={<SingleNote />} />
        <Route path="/notes/new" element={<NewNote />} />
        <Route />
      </Routes>
    </>

  )
}
