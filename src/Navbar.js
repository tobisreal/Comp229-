// Olu-akinboboye Tobi
//301232343
// 20th May 2024
// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.png'

const Navbar = () => {
  return (
    <nav>
        <img src={Logo} alt="Logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About Me</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="./Contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
