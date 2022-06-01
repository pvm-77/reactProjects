import Note from "./components/Note";
import { useState } from 'react';
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
  const [notes, setNotes] = useState(mynotes);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);
  const notesToShow = showAll ? notes : notes.filter(note => note.important)
  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: false,
      id: notes.length + 1
    }
    setNotes(notes.concat(noteObject));
    setNewNote('');
  }
  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
  }
  const toggleAllAndImportant = () => {
    setShowAll(!showAll)
  }
  return (
    <div>
      <div className="card w-50 mt-3 shadow mx-auto">
        <h1 className="card-header">Notes</h1>
        <div className="card-body"> 
          <Button className='btn btn-primary mb-3' buttonTitle= {showAll ? 'show important note' : 'shote All note'} onClickHandler={toggleAllAndImportant} />
          {notesToShow.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        
          <form onSubmit={addNote}>
            <input className="form-control w-50" value={newNote} onChange={handleNoteChange} placeholder="add note" />
            <Button className='btn btn-primary my-1' buttonTitle='save'  />
          </form>

        </div>
      </div>
    </div>
  );
}

export default App;
