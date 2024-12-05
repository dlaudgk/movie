import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = () => (
  <nav className="navbar">
    <h1>Movie App</h1>
    <div>
      <Link to="/">Home</Link>
    </div>
  </nav>
);

export default NavBar;
