import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, my name is Mirshokhid</h2>
        <div className='prompt'>
          <p>
            A software developer with passion to learning and creating.
          </p>
          <a href='https://www.linkedin.com/in/mirshokhid-okilbekov/' target='_blank' rel='noreferrer'><LinkedInIcon /></a>
          <a href='mailto:okilbekovmirshokhid@gmail.com' target='_blank' rel='noreferrer'><EmailIcon /></a>
          <a href='https://github.com/okilbekov' target='_blank' rel='noreferrer'><GitHubIcon /></a>
        </div>
      </div>

      <div className='skills'>
        <h1> Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-end</h2>
            <span>React, Redux, HTML, CSS, npm, Bootstrap, React-Bootsrap, MaterialUI, Materialize CSS, Axios</span>
          </li>
          <li className='item'>
            <h2>Back-end</h2>
            <span>Node.js, Express, MongoDB, REST API, Postman, Jest, ESLint, User Administration, Token Authorization</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, C, C++, Python, NoSQL</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home