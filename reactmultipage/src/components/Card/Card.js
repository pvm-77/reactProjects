import React from 'react'
import './Card.css'
const Card = (props) => {
    // concat the className with the className prop
    let className = 'custom-card-header' 
    return (
        <>
            <div style={{background:'#040d14'}} className="card text-center mt-3 w-50 mx-auto my-auto">
                <div className={className}>
                    {props.cardTitle}
                </div>
                <div className="card-body">
                    {props.children}

                </div>
            </div>



        </>
    )
}

export default Card