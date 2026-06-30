import { useState } from 'react'
import './App.css'
import Note from './Note'
import NoteList from './NoteList'
import Form from './Form'
function App() {

  const [notes, setNotes] = useState([])
    const addNote = (title, note) => {
      setNotes([...notes, {title: title, text: note, date: new Date().toString().split(' ').slice(0, 5).join(' ')}])
    }
    const deleteNote = (noteIdx) => {
      setNotes(notes.filter((note, index) => index !== noteIdx))
    }
  return (
    <>
      <div className="App">
        <Form onAddNote={addNote}/>
        <NoteList notes={notes} onDeleteNote={deleteNote}/>
      </div>
    </>
  )
}

export default App
