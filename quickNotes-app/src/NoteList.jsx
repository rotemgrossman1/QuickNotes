import { useState } from 'react'
import Note from './Note'
export default function NoteList( {notes} ){
    
    return(
        <>
            <div className="noteList">
                {notes.map((note, index) => (
                    <Note key={index} note={note}/>
                ))}
            </div>
        </>
    )
}