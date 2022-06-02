import React from 'react'

const ProjectCard = ({ projectTitle, projectImage, projectIntro }) => {
   
    return (
        <>
            <div className="col">
                <div className="card h-100 shadow-2 " style={{ width: '18rem' }}>
                    <img src={projectImage} className="card-img-top" alt="..." />
                    <div className="card-body ">
                        <h5 className="card-title">{projectTitle}</h5>
                        <p className="card-text">{projectIntro}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard