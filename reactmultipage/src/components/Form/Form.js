import React from 'react'
const Form = (props) => {
   
    return (
        <>
            <form onSubmit={props.onSubmit}>
                <div className="form-group">
                    {props.children}
                </div>
            </form>
        </>
    )
}

export default Form