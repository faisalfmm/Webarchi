// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo"><NavLink to="/" className="logo-link">Architex</NavLink></h1>
        <ul className="nav-links">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/project" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/aboutus" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contacts" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
