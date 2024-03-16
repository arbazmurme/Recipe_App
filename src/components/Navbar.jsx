import React from 'react';
import './main.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="bg-col animated-element">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">content</Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link">About</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
