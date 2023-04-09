import React from 'react';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../index.css';
function Search({setSearch}) {

    return (<>

        <Box sx={{ display: 'flex', flexDirection: 'row', borderRadius:10,mt:1}} >
            <SearchIcon size="2" sx={{m:0.5}} />
            <input type="text" placeholder='search here...' 
            
                onKeyUp={(event)=>{setSearch(event.target.value)}}/>
        </Box>
    </>
    )
}

export default Search
