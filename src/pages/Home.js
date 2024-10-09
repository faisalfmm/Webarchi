// src/pages/Home.js
import React from 'react';
import ImageSlider from '../components/ImageSlider';
import './Home.css';
import building from '../components/images/building.png'
import Design from '../components/images/Design.png'
import interior from '../components/images/Interior.png'
const Home = () => {
  return (
    <div className="home">
      <ImageSlider />
      <div className="design-section">
        <h1>Our Works.</h1>
                <h2>Design and innovative solutions   _____________ .</h2>
                <div className="image-gallery">
                    <div className="image-container">
                        <img src="https://images.unsplash.com/photo-1551038247-3d9af20df552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFyY2hpdGVjdHVyZXxlbnwwfDF8MHx8fDA%3D" alt="Modern Interior" className="image" />
                        <div className="hover-text">Stunning Architecture</div>
                    </div>
                    <div className="image-container">
                        <img src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJjaGl0ZWN0dXJlJTIwa2l0Y2hlbnxlbnwwfDF8MHx8fDA%3D" alt="Architecture" className="image" />
                        <div className="hover-text">Innovative Kitchen</div>
                    </div>
                    <div className="image-container">
                        <img src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFyY2hpdGVjdHVyZSUyMGludGVyaW9yc3xlbnwwfDF8MHx8fDA%3D" alt="Kitchen Design" className="image" />
                        <div className="hover-text">Modern Interior</div>
                    </div>
                </div>
            </div>

           { /* New Service Section */}
            <div className="service-section">
                <div className="service-card">
                    <img src={Design} alt="Architectural Design" className="service-icon" />
                    <h3>Architectural Design</h3>
                    <p>We work closely with clients to gain an understanding of your desires both philosophical and practical.</p>
                </div>
                <div className="service-card">
                    <img src={building} alt="Building Construction" className="service-icon" />
                    <h3>Building Construction</h3>
                    <p>We work closely with clients to gain an understanding of your desires both philosophical and practical.</p>
                </div>
                <div className="service-card">
                    <img src={interior} alt="Interior Design" className="service-icon" />
                    <h3>Interior Design</h3>
                    <p>We work closely with clients to gain an understanding of your desires both philosophical and practical.</p>
                </div>
            </div>
    </div>
  );
};

export default Home;
