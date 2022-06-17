import Note from "./components/Note";
import { useState, useEffect } from 'react';

import Button from "./components/Button";
import noteService from './services/notes';

// import axios from "axios";
function App() {
// set initial notes from db.json file using useEffect
  const [notes, setNotes] = useState([]);

  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);


  // const hook = () => {
  //   noteService.getAll().then(initialNotes => {
  //     setNotes(initialNotes);
  //   }
  //   );
  // }

  // useEffect(hook, [])

  // first time useEffect hook use
  useEffect(() => {
    // console.log('effect');
    // axios.get('http://localhost:3001/notes')
    // .then(
    //   response => {
    //     console.log('promise fulfilled');
    //     setNotes(response.data);
    //   })
    noteService.getAll().then(
      initialNotes=>{
        // console.log(response)
        setNotes(initialNotes)
      }
    ).catch(error=>console.log(error))


  }, []);
  // console.log('render', notes.length, 'notes');


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
    noteService.create(noteObject)
      .then(
        returnedNote=>{
          setNotes(notes.concat(returnedNote))
          setNewNote('')
        }
      )
      

    // setNotes(notes.concat(noteObject));
    // setNewNote('');
  }
  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
  }
  const toggleAllAndImportant = () => {
    setShowAll(!showAll)
  }

  const toggleImportanceOf = (id) => {
    // console.log(`importance of  ${id}  needs to be toggled`)
    // const url=`http://localhost:3001/notes/${id}`;

    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
    // update request to server
    noteService.update(id,changedNote).then(
      returnedNote => {
        // console.log(response)
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      }
    ).catch()
    // axios.put(url,changedNote).then(response=>{
    //   setNotes(notes.map(note=>note.id!==id?note:response.data))
    // })


  }
  return (
    <div>
      <div className="card w-50 mt-3 shadow mx-auto">
        <h1 className="card-header">Notes</h1>
        <div className="card-body">
          <Button className='btn btn-primary mb-3' buttonTitle={showAll ? 'show important note' : 'shote All note'} onClickHandler={toggleAllAndImportant} />
          {notesToShow.map((note) => (
            <Note
              key={note.id}
              note={note}
              toggleImportance={() => { toggleImportanceOf(note.id) }}
            />


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
