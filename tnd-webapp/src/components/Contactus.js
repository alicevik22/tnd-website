import React, { useState } from 'react';
import './Contactus.css';

function Contactus() {
  
  return (
    <div className="contact">
      <h1>Contact us</h1>
      <div className="contact-row">
        <div className="contact-col-1">
        <p><i className="fas fa-envelope"></i> tndclub1111@gmail.com</p>
            <p><i className="fas fa-phone"></i> 123456789</p>
            <div className="social-icons">
              <a href=""><i className="fab fa-facebook"></i></a>
              <a href=""><i className="fab fa-instagram"></i></a>
              <a href=""><i className="fab fa-linkedin"></i></a>
              <a href=""><i className="fab fa-github"></i></a>
              <a href=""><i className="fab fa-discord"></i></a>
            </div>
            <button type="button" className="btn btn-primary">Download Brochure</button>
        </div>
        <div className="contact-col-2">
          <form name="submit-to-google-sheet">
            <input
              type="text"
              name="Name"
              placeholder="Enter your name"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Enter your email"
              required
              />
            <textarea
              name="Message"
              rows="6"
              placeholder="Your message"
              ></textarea>
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </form>
          <span id="msg"></span>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
