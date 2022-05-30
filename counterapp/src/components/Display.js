import React from 'react'

const Display = ({counter}) => {

    return (
        <div>
            <p className='text-center' style={{fontSize:'64px'}}>{counter}</p>
        </div>
    )
}

export default Display