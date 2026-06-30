import { useState } from 'react'

export default function Note( {note, onDeleteNote, index, onHandleNoteClick} ){
    const deleteHandler = (e) => {
        e.stopPropagation();
        if(window.confirm("Are you sure you want to delete this note?")){
            onDeleteNote(index)
        }
    }
    return(
        <>
            <div className="note" onClick={() =>onHandleNoteClick(note)}>
                <div className="noteDate">
                    {note.date}
                    <div className="noteDelete">
                        <button onClick={deleteHandler}>X</button>
                    </div>
                </div>
                <div className="noteTitle">
                    {note.title}
                </div>
                <div className = "noteText">
                    {note.text}
                </div>
            </div>
        </>
    )
}