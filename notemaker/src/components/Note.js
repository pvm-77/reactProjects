import React from 'react'

const Note = ({ note ,toggleImportance}) => {
  const label=note.important ? 'make not important' : 'make important'
  return (
    <div class="card-footer text-muted mb-2">
      {note.content}
      <button className="btn btn-success  px-2 mx-3" onClick={toggleImportance}>{label}</button>
    </div>
    


  )
}

export default Note