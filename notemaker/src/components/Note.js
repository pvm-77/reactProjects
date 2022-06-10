import React from 'react'
import Button from './Button'
const Note = ({ note ,toggleImportance}) => {
  const label=note.important ? 'make not important' : 'make important'
  return (
    <div class="card-footer text-muted mb-2">
      {note.content}
      <Button buttonTitle={label} className='btn btn-success' onClick={toggleImportance} /> 

    </div>


  )
}

export default Note