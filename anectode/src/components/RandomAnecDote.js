import React from 'react'
const RandomAnecDote = (props) => {
    console.log(props.data);
    return (
        <div className="card my-1">
            <div className="card-header">
                Random AnecDote
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{props.data}</p>
                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
            </div>
        </div>
    )
}

export default RandomAnecDote