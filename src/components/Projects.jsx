// src/components/Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Projects.css';

import projImg1 from '../assets/project1.png'; // Coconut Analyzer
import projImg2 from '../assets/project2.png'; // Network Analyzer
import projImg3 from '../assets/project3.png'; // C# Receipt Tool

const projectData = [
  {
    id: 1,
    title: 'Acoustic Coconut Analyzer',
    description: 'Hardware-software solution using Raspberry Pi Zero 2 and LSTM neural networks to analyze coconut maturity through sound.',
    image: projImg1,
    tags: ['Raspberry Pi', 'Python', 'TensorFlow', 'IoT'],
    liveLink: '#',
    codeLink: 'https://github.com/HMMBERT',
  },
  {
    id: 2,
    title: 'Network Traffic Analyzer',
    description: 'A Python tool designed for real-time packet capture and network security analysis on Kali Linux.',
    image: projImg2,
    tags: ['Python', 'Scapy', 'Cybersecurity', 'Networking'],
    liveLink: '#',
    codeLink: 'https://github.com/HMMBERT/Network-Analyzer',
  },
  {
    id: 3,
    title: 'Automated Receipt Validator',
    description: 'C# WinForms application that uses data extraction to validate MID and TID information from retail PDF receipts.',
    image: projImg3,
    tags: ['C#', '.NET', 'Automation', 'Quality Assurance'],
    liveLink: '#',
    codeLink: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>My Recent Work</h2>
        <div className="projects-grid">
          {projectData.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="explore-more-container">
          <Link to="/projects" className="explore-btn">
            Explore More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;