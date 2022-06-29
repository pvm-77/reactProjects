import React from 'react'

const ContactForm = () => {
  return (
    <>
     <form onSubmit={addPerson} >
            <div className="form-group">
              <input placeholder="enter name here" type='text' className="form-control my-1" name="name" value={newName} onChange={handlePerson} />
              <input placeholder="enter number here" type='tel' className="form-control my-1" name="number" value={newNumber} onChange={handlePersonNumber} />
            </div>
            <div>
              <button className="btn btn-success  w-100" type="submit">add</button>
            </div>
          </form>
    </>
  )
}

export default ContactForm