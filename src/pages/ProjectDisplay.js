import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/PojectList'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkIcon from '@material-ui/icons/Link';
import '../styles/ProjectDisplay.css'

const ProjectDisplay = () => {
  const { id } = useParams()
  const project = ProjectList[id]

  return (
    <div className='project'>
      <h1> {project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p><b>Skills: </b>{project.skills}</p>
      <div className='icons'>
        <a href={project.github} target='_blank' rel='noreferrer'><GitHubIcon /></a>
        <a href={project.link} target='_blank' rel='noreferrer'><LinkIcon /></a>
      </div>
    </div>
  )
}

export default ProjectDisplay