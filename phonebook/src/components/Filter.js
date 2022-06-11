import React from 'react'

const Filter = () => {
  return (
    <>
    <label>Filter by name:</label>
    <input name='filter' className='form-control' placeholder='enter name here' />
    {/* <form className="d-flex my-2" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </>
  )
}

export default Filter