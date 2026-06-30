import { useState, useEffect } from 'react'
import './App.css'
import Note from './Note'
import NoteList from './NoteList'
import Form from './Form'
import { MantineProvider, Modal } from '@mantine/core';
function App() {
  const [openNote, setOpenNote] = useState(null)
  const [notes, setNotes] = useState(()=>{
    const savedNotes = localStorage.getItem('myNotes')
    return savedNotes ? JSON.parse(savedNotes) : []
  })

  useEffect(() => {
    localStorage.setItem('myNotes', JSON.stringify(notes))
  }, [notes])
  const [editingIdx, setEditingIdx] = useState(null)
  const [activeNoteIdx, setActiveNoteIdx] = useState(null);

    const handleNoteClick = (note, index) => {
      setOpenNote(note);
      setActiveNoteIdx(index); // Store the index here!
    };
    const addNote = (title, note) => {
      setNotes([...notes, {title: title, text: note, date: new Date().toString().split(' ').slice(0, 5).join(' ')}])
    }
    const deleteNote = (noteIdx) => {
      setNotes(notes.filter((note, index) => index !== noteIdx))
    }
    const handleNoteClose = () => {
      setOpenNote(null)
    }
    const updateNote = (title, note) => {
      if (editingIdx !== null) {
      const updatedNotes = [...notes];
          updatedNotes[editingIdx] = { 
            ...updatedNotes[editingIdx], // Keep original data (including the original 'date')
            title: title, 
            text: note, 
            updatedDate: new Date().toString().split(' ').slice(0, 5).join(' ') // Add this new field
          };
          setNotes(updatedNotes);
          setEditingIdx(null); // Stop editing mode
          handleNoteClose();   // Close the modal
        }
      }
  return (
    <>
     <Modal opened={!!openNote} onClose={handleNoteClose} title="Note Details">
        {editingIdx !== null ? (
          <Form 
            onSubmit={updateNote} 
            initialTitle={openNote.title} 
            initialNote={openNote.text} 
          />
        ) : (
          <>
            <h2>{openNote?.title}</h2>
            <p>{openNote?.text}</p>
            <small>Created: {openNote?.date}</small>
            
            {/* Conditionally show the updated date only if it exists */}
            {openNote?.updatedDate && (
              <p><small>Updated: {openNote?.updatedDate}</small></p>
            )}
            
            <button onClick={() => setEditingIdx(activeNoteIdx)}>Edit</button>
          </>
        )}
      </Modal>
      <div className="App">
        <Form onSubmit={addNote} />
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
