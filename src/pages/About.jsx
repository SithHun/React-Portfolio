import React from 'react';
import '../assets/About.css'
import avatar from '../assets/images/avatar.svg'

function About() {
  return (
    <div className='about-container'>
      <h2>About Me</h2>
      <div className='avatar-container'>
      <img src={avatar} className='img-size' alt="avatar"></img>
      </div>
      <p className='short-bio bio-text'>My name is Sith and I've been tech-savy since a child when my father first bought me a PC at the age of twelve years old. I am inspiring to become a Software Engineer because of the joy to build and to create something inspiring that can be used to make life so much easier and more creative!</p>
    </div>
  );
}

export default About;
