import React from 'react'

const Notification = ({ message }) => {
    if (message === null) {
        return null
    }
    return (
        <>
            <div className="alert alert-danger d-flex align-items-center" role="alert">
                <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill" /></svg>
                <div>
                    <p>{message}</p>
                </div>
            </div>
            
        </>
    )
}

export default Notification