import React from 'react'
import './projectcard.css'
const ProjectCard = ({ projectTitle, projectImage, projectIntro }) => {

    return (
        <>
            <div className="col">
                <div className="custom-card card h-100  ">

                    <img src={projectImage} className="card-img-top" alt="..." />
                    <div className="container card-body ">
                        <h5 className="card-title">{projectTitle}</h5>
                        <p className="card-text">{projectIntro}</p>
                        <div className="card-footer text-muted">
                            {/* <a href="#" style={{color:'#81b29a'}} >Go somewhere</a> */}
                            <a className='btn-project my-2'>see project</a>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default ProjectCard