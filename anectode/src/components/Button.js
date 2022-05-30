import React from 'react'

const Button = ({ onClick, buttonTitle }) => {
    return (
        < >
            <button onClick={onClick} className="btn btn-success mx-1">{buttonTitle}</button>
        </>
    )
}

export default Button