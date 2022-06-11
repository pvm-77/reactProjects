import React from 'react'

const PersonForm = () => {
    return (
        <>
            <form >
                <input name='name' className='form-control' placeholder='enter name here' />
                <input name='number' className='form-control' placeholder='enter number here' />
                <button className='btn btn-primary'>add</button>
            </form>

        </>
    )
}

export default PersonForm