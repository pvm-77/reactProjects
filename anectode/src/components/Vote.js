import React from 'react'

const Vote = ({ voteCount }) => {
    return (
        <div className="card my-1 mx-1">
            <div className="card-header">
                Total Votes
            </div>
            <div className="card-body">
                <h1 className='text-center'>{voteCount}</h1>
            </div>
        </div>
    )
}

export default Vote