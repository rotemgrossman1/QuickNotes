import { useState } from 'react'

export default function Note( {note} ){
    
    return(
        <>
            <div className="note">
                <div className="noteDate">
                    {note.date}
                </div>
                <div className = "noteText">
                    {note.text}
                </div>
            </div>
        </>
    )
}