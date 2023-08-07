import React from 'react';
import '../assets/Footer.css'
import githubIcon from '../assets/images/github.svg'
import linkedinIcon from '../assets/images/linkedin.svg'
import stackoverflowIcon from '../assets/images/stackoverflow.svg'

function Footer() {
  return (
    <div className='footer-container flexWrapper sm-flexWrapper'>
    <footer className='footer'>
      <a href="https://github.com/SithHun">
        <img src={githubIcon} alt="GitHub"/>
      </a>
      <a href="https://www.linkedin.com/in/sithoeun-hun-26235595/">
        <img src={linkedinIcon} alt="LinkedIn"/>
      </a>
      <a href="https://stackoverflow.com/users/developer">
        <img src={stackoverflowIcon} alt="Stack Overflow"/>
      </a>
    </footer>
    </div>
  );
}

export default Footer;
