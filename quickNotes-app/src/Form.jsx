import React, {useState} from 'react'
export default function Form( {onAddNote} ){
    const [note, setNote] = useState("")//setting default as empty string
    const handleChange = (event) => {
        setNote(event.target.value)//set the input into the value
    }
    const handleSubmit = (event) => {
        event.preventDefault()//prevent the page from reloading
        onAddNote(note)//call the function from App.jsx to add the note to the list
        setNote("")//reset the input field to empty string
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <textarea
                    id = "noteText"
                    value = {note}
                    onChange={handleChange}
                    rows={5}
                    cols={40}
                    placeholder='Enter your note here...'
                />
                <button type="submit">Add</button>
            </form>
        </>
    )
}