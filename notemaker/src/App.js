import Note from "./components/Note";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from "./components/Button";
function App() {
  const mynotes = [
    {
      id: 1,
      content: 'HTML is easy',
      date: '2019-05-30T17:30:31.098Z',
      important: true
    },
    {
      id: 2,
      content: 'Browser can execute only Javascript',
      date: '2019-05-30T18:39:34.091Z',
      important: false
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      date: '2019-05-30T19:20:14.298Z',
      important: true
    }

  ]
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);
  // using effect hook
  // useEffect(() => {
  //   console.log('effect')
  //   axios
  //     .get('http://localhost:3001/notes')
  //     .then(response => {
  //       console.log('promise fulfilled')
  //       setNotes(response.data)
  //     })
  // }, [])
  console.log('render', notes.length, 'notes')
// rewritng the hook code
  const hook=()=>{
    console.log("modified useEffect hhok");
    // axios call to get data from server 
    axios.get('http://localhost:3001/notes')
    .then(
      response => {
        console.log("promise fulfilled");
        setNotes(response.data);
      }
    ).catch(
      error => {
        console.log("promise rejected");
      }

    )

  }

useEffect(hook, [])



  const notesToShow = showAll ? notes : notes.filter(note => note.important)
  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: false,
      id: notes.length + 1
    }
    // send note to server
    axios.post('http://localhost:3001/notes', noteObject)
    .then(
      response=>{
        console.log(response);
      }
    ).catch(
      error=>{
        console.log(error);
      }
    )
      
    setNotes(notes.concat(noteObject));
    setNewNote('');
  }
  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
  }
  const toggleAllAndImportant = () => {
    setShowAll(!showAll)
  }
  const toggleImportanceOf = (id) => {
    console.log('importance of ' + id + ' needs to be toggled')
  }
  return (
    <div>
      <div className="card w-50 mt-3 shadow mx-auto">
        <h1 className="card-header">Notes</h1>
        <div className="card-body">
          <Button className='btn btn-primary mb-3' buttonTitle={showAll ? 'show important note' : 'shote All note'} onClickHandler={toggleAllAndImportant} />
          {notesToShow.map((note) => (
            <Note key={note.id} note={note} toggleImportance={()=>{toggleImportanceOf(note.id)}} />
          ))}

          <form onSubmit={addNote}>
            <input className="form-control w-50" value={newNote} onChange={handleNoteChange} placeholder="add note" />
            <Button className='btn btn-primary my-1' buttonTitle='save' />
          </form>

        </div>
      </div>
    </div>
  );
}

export default App;
