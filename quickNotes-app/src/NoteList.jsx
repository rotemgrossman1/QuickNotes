import { useState } from 'react'
import Note from './Note'
export default function NoteList( {notes, onDeleteNote} ){
    
    return(
        <>
            <div className="noteList">
                {notes.map((note, index) => (
                    <Note key={index} note={note} onDeleteNote = {onDeleteNote} index={index}/>
                ))}
            </div>
        </>
    )
}