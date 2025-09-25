// src/components/Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './CSS/Projects.css';

// Import your project images
import projImg1 from '../assets/project1.png';
import projImg2 from '../assets/project2.png';
import projImg3 from '../assets/project3.png';

// Expanded project data with tags and specific images
const projectData = [
  {
    id: 1,
    title: 'Secure Auth System',
    description: 'A full-stack authentication system using Node.js, JWT, and secure password hashing.',
    image: projImg1,
    tags: ['Node.js', 'Express', 'MongoDB', 'Security'],
    liveLink: 'https://github.com/HMMBERT/Auth-Server',
    codeLink: 'https://github.com/HMMBERT/Auth-Server#',
  },
  {
    id: 2,
    title: 'Network Traffic Analyzer',
    description: 'A Python-based tool for capturing and analyzing network packets to identify potential threats.',
    image: projImg2,
    tags: ['Python', 'Scapy', 'Networking', 'Cyber Security'],
    liveLink: '#',
    codeLink: 'https://github.com/HMMBERT/Network-Analyzer',
  },
  {
    id: 3,
    title: 'Cloud File Storage',
    description: 'A web app for uploading and managing files securely on a cloud platform like AWS S3.',
    image: projImg3,
    tags: ['React', 'AWS S3', 'Node.js', 'Cloud'],
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