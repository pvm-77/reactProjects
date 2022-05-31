import React from 'react'

const Note = ({ note }) => {
  return (
    <div class="card-footer text-muted mb-2">
      {note.content}
    </div>


  )
}

export default Note