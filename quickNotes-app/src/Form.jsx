import React, {useState, useEffect} from 'react'
export default function Form( {onSubmit, initialTitle = "", initialNote = "", isEdit = false} ){
    const [note, setNote] = useState(initialNote || "");
    const [title, setTitle] = useState(initialTitle || "");
    
    // if(initialTitle || initialNote){
    //     isEdit = true
    // }
    const handleChange = (event) => {
        setNote(event.target.value)//set the input into the value
    }
    const handleTitleChange = (event) =>{
        setTitle(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()//prevent the page from reloading
        onSubmit(title, note)//call the function from App.jsx to add the note to the list
        if (!isEdit) {
            setTitle("");
            setNote("");
        }
    }
    useEffect(() => {
    // Your side-effect code goes here
        setTitle(initialTitle || "")
        setNote(initialNote || "")
    }, [initialNote, initialTitle]); // Optional dependency array
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                    id="noteTitle"
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
                <button type="submit">Submit</button>
            </form>
        </>
    )
}