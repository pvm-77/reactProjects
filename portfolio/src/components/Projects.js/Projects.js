import React from 'react'
import ProjectCard from './ProjectCard';
import pro from "../../components/pro.jpg";
import hand from "../../components/hand.gif";
import mainImage from "../../components/img.jpg";

const Projects = () => {
  return (
    <div className='p-3'>
      <h1>some of my projects as follows</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <ProjectCard projectTitle='Memoirs' projectImage={pro} projectIntro='sokjgflk' />
        <ProjectCard projectTitle='Task Manager' projectImage={hand} projectIntro='sok ghfg fghfgfghfgjhfgjgfhjhgjfgjgflk' />
        <ProjectCard projectTitle='mini apps' projectImage={mainImage} projectIntro='sokjgfgfjgfjhgfghjfghfghfghfghfghfglk' />
        

      </div>

    </div>
  )
}

export default Projects