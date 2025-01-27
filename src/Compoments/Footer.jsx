import React from 'react';
import './Footer.css';
import neplfooter from '/assets/neplfooter.jpg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-left">
        <img src={neplfooter} className='logo' alt="Company Logo" />
        <div className='number-section'>
          <h1>Contact Details:</h1>
          <h2>+91 7008357686</h2>
        </div>
        <div className='social-icons'>
          <a href="https://www.facebook.com/profile.php?id=61564663453366"  target='_blank' rel='noopener noreferrer' aria-label="Facebook"><i className="bi bi-facebook fb"></i></a>
          <a href="https://x.com/neplbbsr" target='_blank' rel='noopener noreferrer' aria-label="Twitter"><i className="bi bi-twitter tw"></i></a>
          <a href="https://www.linkedin.com" target='_blank' rel='noopener noreferrer'  aria-label="LinkedIn"><i className="bi bi-linkedin ln"></i></a>
          <a href="https://www.instagram.com/nepl_bbsr/"  target='_blank' rel='noopener noreferrer' aria-label="Instagram"><i className="bi bi-instagram ln"></i></a>

        </div>
        <p className='footer-text'>
          What I view life like is about energy. Everything is about energy - everything.
          We physically are little units of electrical energy, and we vibrate and project electromagnetic thought.
        </p>
      </div>
      <div className="footer-right">
        <div className="footer-right-content">
        <div className="footer-right-left">
  <h2>Quick Links</h2>
  <ul>
    <li><Link className="footer-link" to="/Aboutus">About Company</Link></li>
    <li><Link className="footer-link" to="/Main_Service">Our Services</Link></li>
    <li><Link className="footer-link" to="/Project">Projects</Link></li>
    <li><Link className="footer-link" to="/Contact">Contacts</Link></li>
  </ul>
</div>

          <div className="footer-right-center">
            <h2>Client Support</h2>
            <ul>
              <li>Contact Channels</li>
              
              <li>Response and Resolutions</li>
              <li>Policies and Documentation</li>
              <li>Continous Improvement</li>
            </ul>
          </div>
          <div className='footer-right-right'>
            <h2>Our News</h2>
            <ul>
              <li>Latest Announcements</li>
              <li>Industry News</li>
              <li>Educational Content</li>
              <li>Media Coverage</li>
             
            </ul>
          </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 @ neplbbsr.com - All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
