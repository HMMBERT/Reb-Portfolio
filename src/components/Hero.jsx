// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
// 1. Import all the icons you want to display
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiMongodb } from "react-icons/si";
import './CSS/Hero.css';
import profilePicture from '../assets/profile-picture.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Hi, I'm REB</h1>
          <TypeAnimation
  sequence={[
    'A Computer Engineer', 2000,
    'A Systems Developer', 2000,
    'A Cyber Security Enthusiast', 2000,
  ]}
  wrapper="span" // Changed from "p" to "span"
  speed={50}
  className="hero-subtitle"
  repeat={Infinity}
/>
          <p className="hero-description">
        As a Computer Engineer and a proud graduate of the Polytechnic University of the Philippines, I've cultivated a deep expertise in both robust system development and proactive cyber security. I am passionate about architecting resilient back-end systems and implementing defensive strategies that protect data and ensure integrity. My goal is to transform complex requirements into secure, high-performance applications that businesses can rely on. Based in Quezon City, I am always eager to connect and tackle new challenges in the tech landscape.
          </p>

          {/* --- NEW: Tech Stack Section --- */}
          <div className="tech-stack">
            <p className="tech-stack-title">Tech Stack</p>
            <div className="tech-icons-slider">
              <div className="tech-icons-track">
                {/* Icons are listed twice for the seamless loop */}
                <div className="tech-icon"><FaReact /></div>
                <div className="tech-icon"><FaNodeJs /></div>
                <div className="tech-icon"><FaPython /></div>
                <div className="tech-icon"><FaDocker /></div>
                <div className="tech-icon"><FaAws /></div>
                <div className="tech-icon"><SiMongodb /></div>
                <div className="tech-icon"><FaGitAlt /></div>

                {/* --- Duplicate the icons for the loop --- */}
                <div className="tech-icon"><FaReact /></div>
                <div className="tech-icon"><FaNodeJs /></div>
                <div className="tech-icon"><FaPython /></div>
                <div className="tech-icon"><FaDocker /></div>
                <div className="tech-icon"><FaAws /></div>
                <div className="tech-icon"><SiMongodb /></div>
                <div className="tech-icon"><FaGitAlt /></div>
              </div>
            </div>
          </div>
          
          <div className="hero-socials">
            {/* ... (your existing social links) ... */}
          </div>
          <Link to="projects" smooth={true} duration={500} className="hero-cta-button">

See My Work

</Link>
        </div>
        <div className="hero-image-container">
          <img src={profilePicture} alt="A portrait of REB" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;