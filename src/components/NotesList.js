import React from 'react'
import Note from './Note';
import { Box, Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import AddNote from './AddNote';
import '../index.css';
function NotesList({bg,notes,addNote,handleDeleteNote}) {
  return (
    <div>
   
    <Box sx={{m:1}}>
    
    <Grid container spacing={2} sx={{mt:0}} >
        {
            notes.map((note)=>{
                const{id,text,date}=note;
               return( 
               <Grid item xs={12} sm={6} md={4} sx={{borderRadius:1}}>
                <Note id={id}
                text={text}
                date={date}
                
                handleDeleteNote={handleDeleteNote}
                />  
              </Grid>
               )

            })

        }
       <Grid item xs={12} sam={6} md={4}>
        <AddNote addNote={addNote}/>
       </Grid>
       
        
        
      </Grid> 
    </Box>
    </div>
  )
}

export default NotesList
