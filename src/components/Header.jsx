import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Header.css';
import Border from './Border';

function Header() {
  return (
    <>
    <header className="header">
      <h1 className="header-title">Sith Sun</h1>
      <nav className="header-nav">
        <ul>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
    <Border />
    </>
  );
}

export default Header;
