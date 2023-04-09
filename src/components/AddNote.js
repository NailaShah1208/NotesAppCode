import React from 'react'
import { Box } from '@mui/material';
import '../Styles/AddNote.css';
import { useState } from 'react';
function AddNote({addNote}) {
    const [noteText,setNoteText]=useState('');
    const characterLimit=200;
    const handleChange=(e)=>{
        if(characterLimit-(e.target.value.length)>=0)
        {
            setNoteText(e.target.value)
        }
    }
    const handleSave=()=>{
        //sending the new value to app.js addNote is function of addNote
        if(noteText.trim().length>0)
        {
            addNote(noteText);
            setNoteText("")
        }

    }
  return (
    <Box sx={{backgroundColor:'#87CEEB',fontSize:'1rem'}}>
     <textarea rows="10" column="5" 
     placeholder="write something here..."
     className='addnew' resize="none"
     value={noteText}
     border='none'
     onChange={handleChange}>
    </textarea> 
    <Box sx={{
                color:'whitesmoke',
                background: 'black',
                display: 'flex',
                flexDirection: 'row',
                alignItems:'center',
                justifyContent:'space-around',
                borderRadius:1,
                border:'2px solid black'
            }} 
            component="div">
                <span>{characterLimit-noteText.length}Remaining</span>
                <button className="save" onClick={handleSave}>Save</button>
            </Box>
    </Box>
  )
}

export default AddNote
