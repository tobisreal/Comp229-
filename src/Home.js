// Olu-akinboboye Tobi
//301232343
// 20th May 2024
// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>This is where I showcase my work and skills.</p>
      <p>Mission Statement: To create impactful and innovative web solutions.</p>
      <Link to="/about">About Me</Link>
    </div>
  );
};

export default Home;
