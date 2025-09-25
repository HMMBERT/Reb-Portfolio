// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './CSS/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: Brand Info */}
        <div className="footer-col">
          <h3 className="footer-brand">REB</h3>
          <p>A Computer Engineer & Systems Developer based in Quezon City, Philippines.</p>
        </div>
        
        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/#projects">Projects</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Column 3: Social Links */}
        <div className="footer-col">
          <h4>Connect With Me</h4>
          <div className="footer-socials">
            <a href="https://github.com/HMMBERT" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/john-albert-rebancos-a0888524a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
        
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} REB. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;