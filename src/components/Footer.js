// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram,FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/" className="logo-link">Architex</Link>
        </div>
        <ul className="footer-nav">
          <li>
            <Link to="/" className="footer-link">Home</Link>
          </li>
          <li>
            <Link to="/project" className="footer-link">Projects</Link>
          </li>
          <li>
            <Link to="/aboutus" className="footer-link">About Us</Link>
          </li>
          <li>
            <Link to="/contacts" className="footer-link">Contact Us</Link>
          </li>
        </ul>
        <div className="contact-details">
        <div className="detail-item">
          <i className="fas fa-map-marker-alt"></i>
          <p>
          <FaMapMarkerAlt /><strong>Address</strong>
            <br />
            No. 6, Havelock Road, Camp, Belagavi, Karnataka
          </p>
        </div>
        <div className="detail-item">
          <i className="fas fa-envelope"></i>
          <p>
          <FaEnvelope /> <strong>Email Us</strong>
            <br />
            randommail@gmail.com
          </p>
        </div>
        <div className="detail-item">
          <i className="fas fa-phone"></i>
          <p>
          <FaPhoneAlt /><strong>Call Us</strong>
            <br />
            +91 9999999999
          </p>
        </div>

      </div>
        
        
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagram />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Architex. All rights reserved @Faisal Mirajkar.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
