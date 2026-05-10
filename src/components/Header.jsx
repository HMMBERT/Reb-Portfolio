import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './CSS/Header.css';
import logo from '../assets/logo.svg';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Function to handle clicking the logo
  const handleLogoClick = () => {
    if (isHomePage) {
      scroll.scrollToTop();
    }
  };

  return (
    <header className="header">
      <div className="nav-container">
        
        {/* --- Column 1: Logo --- */}
        <div className="nav-left">
          <RouterLink to="/" className="nav-logo" onClick={handleLogoClick}>
            <img src={logo} alt="Portfolio Logo" className="nav-logo-img" />
          </RouterLink>
        </div>
      
        {/* --- Column 2: Centered Navigation Links --- */}
        <nav className="nav-center">
          <ul className="nav-menu">
            {isHomePage ? (
              // If on the homepage, render SCROLL links
              <>
                <li className="nav-item"><ScrollLink to="home" smooth={true} duration={500} className="nav-link" activeClass="active" spy={true} offset={-70}>Home</ScrollLink></li>
                <li className="nav-item"><ScrollLink to="about" smooth={true} duration={500} className="nav-link" activeClass="active" spy={true} offset={-70}>About</ScrollLink></li>
                <li className="nav-item"><ScrollLink to="services" smooth={true} duration={500} className="nav-link" activeClass="active" spy={true} offset={-70}>Services</ScrollLink></li>
                <li className="nav-item"><ScrollLink to="projects" smooth={true} duration={500} className="nav-link" activeClass="active" spy={true} offset={-70}>Projects</ScrollLink></li>
                <li className="nav-item">
      <RouterLink to="/Resume" className="nav-link">Resume</RouterLink>
    </li>
              </>
            ) : (
              // If on another page, render ROUTER links that go back to the homepage sections
              <>
                <li className="nav-item"><RouterLink to="/#home" className="nav-link">Home</RouterLink></li>
                <li className="nav-item"><RouterLink to="/#about" className="nav-link">About</RouterLink></li>
                <li className="nav-item"><RouterLink to="/#services" className="nav-link">Services</RouterLink></li>
                <li className="nav-item"><RouterLink to="/#projects" className="nav-link">Projects</RouterLink></li>
                {/* FIX: Added /# for consistency */}
                <li className="nav-item">
      <RouterLink to="/resume" className="nav-link">Resume</RouterLink>
    </li>
              </>
            )}
            
            <li className="nav-item">
              <RouterLink to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}>Blog</RouterLink>
            </li>
          </ul>
        </nav>

        {/* --- Column 3: Contact Button --- */}
        <div className="nav-right">
          <RouterLink to="/contact" className="nav-contact-btn">
            Contact
          </RouterLink>
        </div>

      </div>
    </header>
  );
};

export default Header;