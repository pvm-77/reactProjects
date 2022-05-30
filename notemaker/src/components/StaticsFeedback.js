import React from 'react'

const StaticsFeedback = ({title}) => {
    return (
        <div className='col-md-6'>
            <div className='card w-50 mt-3 shadow mx-auto'>
                <h5 className='card-header'>{title}</h5>
                <div className='card-body'>
                    <p className='text-center' style={{ fontSize: '64px' }}>3</p>
                </div>
            </div>
        </div>
    )
}

export default StaticsFeedback