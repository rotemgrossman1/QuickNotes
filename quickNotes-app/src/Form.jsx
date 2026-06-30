import React, {useState} from 'react'
export default function Form( {onAddNote} ){
    const [note, setNote] = useState("")
    const [title, setTitle] = useState("")
    const handleChange = (event) => {
        setNote(event.target.value)//set the input into the value
    }
    const handleTitleChange = (event) =>{
        setTitle(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()//prevent the page from reloading
        onAddNote(title, note)//call the function from App.jsx to add the note to the list
        setTitle("")//reset the title input field to empty string
        setNote("")//reset the input field to empty string
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" id="noteTitle"
                 placeholder='Enter your note title here...'
                 value={title}
                 onChange={handleTitleChange}
                 />
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