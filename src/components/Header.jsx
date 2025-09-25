// src/components/Header.jsx
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './CSS/Header.css';
import logo from '../assets/logo.svg';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="header">
      <div className="nav-container">
        
        {/* --- Column 1: Logo --- */}
        <div className="nav-left">
          <RouterLink to="/" className="nav-logo">
            <img src={logo} alt="Portfolio Logo" className="nav-logo-img" />
          </RouterLink>
        </div>
      
        {/* --- Column 2: Centered Navigation Links --- */}
        <nav className="nav-center">
          <ul className="nav-menu">
            {isHomePage ? (
              // If on the homepage, render SCROLL links
              <>
                <li className="nav-item"><ScrollLink to="home" smooth={true} duration={500} className="nav-link" activeClass="active" spy={true}>Home</ScrollLink></li>
                <li className="nav-item"><ScrollLink to="about" smooth={true} duration={500} className="nav-link" activeClass="active" spy={true}>About</ScrollLink></li>
                <li className="nav-item"><ScrollLink to="services" smooth={true} duration={500} className="nav-link" activeClass="active" spy={true}>Services</ScrollLink></li>
                <li className="nav-item"><ScrollLink to="projects" smooth={true} duration={500} className="nav-link" activeClass="active" spy={true}>Projects</ScrollLink></li>
              </>
            ) : (
              // If on another page, render ROUTER links that go back to the homepage sections
              <>
                <li className="nav-item"><RouterLink to="/#home" className="nav-link">Home</RouterLink></li>
                <li className="nav-item"><RouterLink to="/#about" className="nav-link">About</RouterLink></li>
                <li className="nav-item"><RouterLink to="/#services" className="nav-link">Services</RouterLink></li>
                <li className="nav-item"><RouterLink to="/#projects" className="nav-link">Projects</RouterLink></li>
              </>
            )}
            {/* --- FIX: "Blog" link is now here --- */}
            <li className="nav-item">
              <RouterLink to="/blog" className="nav-link">Blog</RouterLink>
            </li>
          </ul>
        </nav>

        {/* --- Column 3: Contact Button --- */}
        <div className="nav-right">
          {/* --- "Blog" link was moved from here --- */}
          <RouterLink to="/contact" className="nav-contact-btn">
            Contact
          </RouterLink>
        </div>

      </div>
    </header>
  );
};

export default Header;