import { useState } from 'react'
import './App.css'
import Note from './Note'
import NoteList from './NoteList'
import Form from './Form'
import { MantineProvider, Modal } from '@mantine/core';
function App() {
  const [openNote, setOpenNote] = useState(null)
  const [notes, setNotes] = useState([])
    const addNote = (title, note) => {
      setNotes([...notes, {title: title, text: note, date: new Date().toString().split(' ').slice(0, 5).join(' ')}])
    }
    const deleteNote = (noteIdx) => {
      setNotes(notes.filter((note, index) => index !== noteIdx))
    }
    const handleNoteClick = (note) => {
      setOpenNote(note)
    }
    const handleNoteClose = () => {
      setOpenNote(null)
    }
  return (
    <>
     <Modal opened={!!openNote} onClose={handleNoteClose} title="Note Details">
        <h2>{openNote?.title}</h2>
        <p>{openNote?.text}</p>
        <small>{openNote?.date}</small>
    </Modal>
      <div className="App">
        <Form onAddNote={addNote}/>
        <NoteList 
          notes={notes} 
          onDeleteNote={deleteNote} 
          onHandleNoteClick={handleNoteClick} 
          onHandleNoteClose = {handleNoteClose}
        />
      </div>
    </>
  )
}

export default App
