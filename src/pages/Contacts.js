import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './ContactUs.css'; // Create a CSS file to style the components

const ContactUs = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // You can handle the form submission logic here, e.g., send the form data to a server
  };

  return (
    <div className="contact-us-container">
      <div className="form-container">
        <h2>Get in Touch with Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email ID</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={form.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
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
        <div className="social-links">
        <h3>Follow Us</h3>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
            </a>
        
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
