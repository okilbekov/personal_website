import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='https://www.linkedin.com/in/mirshokhid-okilbekov/' target='_blank' rel='noreferrer'><LinkedInIcon /></a>
        <a href='https://github.com/okilbekov' target='_blank' rel='noreferrer'><GitHubIcon /></a>
        <a href='https://www.instagram.com/oqilbekov/' target='_blank' rel='noreferrer'><InstagramIcon /></a>
      </div>
      <p>&copy; 2022 okilbekov.me</p>
    </div>
  )
}

export default Footer