import { useState } from 'react'
import './App.css'
import Note from './Note'
import NoteList from './NoteList'
import Form from './Form'
function App() {

  const [notes, setNotes] = useState([])
    const addNote = (note) => {
      setNotes([...notes, {text: note, date: new Date().toString().split(' ').slice(0, 5).join(' ')}])
    }
  return (
    <>
      <div className="App">
        <Form onAddNote={addNote}/>
        <NoteList notes={notes}/>
      </div>
    </>
  )
}

export default App
