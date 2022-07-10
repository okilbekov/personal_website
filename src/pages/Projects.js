import React from 'react'
import ProjectItem from '../components/ProjectItem'
import '../styles/Projects.css'
import { ProjectList } from '../helpers/PojectList'

const Projects = () => {
  return (
    <div className='projects'>
      <h1 className='projectTitle'>My Personal Projects</h1>
      <div className='projectList'>
        {ProjectList.map((project, index) => {
          return <ProjectItem name={project.name} image={project.image} id={index} key={index} />
        })}
      </div>
    </div>
  )
}

export default Projects