
import '@fontsource/roboto/300.css';
import React from 'react';
import { Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { stickyColors } from './StickyColors';
function Note({id,text,date,handleDeleteNote}) {
   let colorIs=null;
  colorIs= Math.floor(Math.random() * stickyColors.length);
  
    return (<>
        
        <Box sx={{
             backgroundColor:stickyColors[colorIs],
            minHeight:'200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            whiteSpace:'pre-wrap'
        }} component="div">
            <Typography variant="h4" sx={{
                
                color: 'black'
            }}>
                {text}
                </Typography>
            <Box sx={{
                color: 'black',

                
                display: 'flex',
                flexDirection: 'row',
                alignItems:'center',
                justifyContent:'space-around',
                borderRadius:1
            }} component="div">
                <span>{date}</span>
                <span><DeleteIcon sx={{cursor:'pointer'}}
                onClick={()=>handleDeleteNote(id)}/></span>
            </Box>
        </Box>
        </>
    )
}

export default Note
