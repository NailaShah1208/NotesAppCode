import './App.css';
import NotesList from './components/NotesList';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Search from './components/Search';
import { Typography, Box, Button, AppBar, Toolbar, ListItem, ListItemText } from '@mui/material';
import './index.css';

function App() {
  const [flag, setFlag] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'title1',
      date: '12/08/2021',

    },
    {
      id: nanoid(),
      text: 'title2',
      date: '10/07/2021',


    }
    , {
      id: nanoid(),
      text: 'title3',
      date: '01/02/2023',

    },
    {
      id: nanoid(),
      text: 'title4',
      date: '01/01/2023',
    },
    {
      id: nanoid(),
      text: 'title5',
      date: '11/09/2020',

    },
    {
      id: nanoid(),
      text: 'title6',
      date: '31/04/2021',
    },
    {
      id: nanoid(),
      text: 'title7',
      date: '04.04.2020',

    },
    {
      id: nanoid(),
      text: 'title8',
      date: '05.03.2020',

    },
    {
      id: nanoid(),
      text: 'title9',
      date: '06.06.2020',

    },
    {
      id: nanoid(),
      text: "title10",
      date: '07.04.2021',

    }

  ])
  //To get local storage data
  useEffect(() => {
    const savedData = JSON.parse(
      localStorage.getItem('notes1')
    )
    if (savedData) {
      console.log("getData")
      setNotes(savedData);
    }
  },[]);

  //To set localStorage data
  useEffect(() => {
    localStorage.setItem('notes1', JSON.stringify(notes))
  }, [notes]);

  const [searchText, setSearchText] = useState('');
  const addNote = (text) => {
    const newNote = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString(),

    }

    //create new array of notes
    const newNotes = [...notes, newNote];
    //update new array
    
    setNotes(newNotes);
  }
  function parentDeleteFun(id) {
    const newNotes = notes.filter((elem) => elem.id != id)
    setNotes(newNotes);

  }
  const handleToggle = () => {
    setFlag(!flag);

  }
  return (
    <div className={(flag) ? "darkmode" : "white"} >

      <div className="App">

        <Box sx={{ display: 'flex' }}>
          <AppBar component="nav">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1, display: 'flex',
                  justifyContent: 'flex-start', alignItems: 'flex-start'
                }}
              >
                Notes App
              </Typography>
              <Box>
                <Button
                  sx={{ background: 'black', color: 'white', border: '2px solid white', cursor: 'pointer' }}
                  onClick={handleToggle}> Toggle
                </Button>
              </Box>
            </Toolbar>
          </AppBar>

        </Box>
        <Toolbar />
        <Search setSearch={setSearchText}/>
        <NotesList bg={flag} notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} addNote={addNote}
          handleDeleteNote={parentDeleteFun} />
      </div>
    </div>
  );
}
export default App;
