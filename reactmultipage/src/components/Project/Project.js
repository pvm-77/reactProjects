

import React from 'react'
import ProjectCard from './ProjectCard';
import './projectcard.css'
import projects from '../../configAndContents/project-content.js'
const Project = () => {
  return (
    <div className='p-3'>
      <h1>some of my projects as follows</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          // console.log(projects)
          projects.map(project => {
            return <ProjectCard key={project.id} projectTitle={project.title} projectImage={project.image} projectIntro={project.intro} />
          })}

      </div>

    </div>
  )
}

export default Project