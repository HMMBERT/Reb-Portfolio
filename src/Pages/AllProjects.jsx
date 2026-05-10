import React from 'react';
import { Link } from 'react-router-dom';
import '../components/CSS/Projects.css';

const AllProjects = () => {
  const fullProjectList = [
    {
      title: 'Acoustic Coconut Maturity Analyzer',
      description: 'A hardware-software solution utilizing Raspberry Pi Zero 2 and LSTM neural networks to classify coconut maturity via acoustic signals.',
      tags: ['Raspberry Pi', 'Python', 'LSTM', 'IoT'],
      codeLink: 'https://github.com/HMMBERT'
    },
    {
      title: 'Network Traffic Analyzer',
      description: 'Real-time packet capture and analysis tool built for network security monitoring on Kali Linux environments.',
      tags: ['Python', 'Scapy', 'Networking', 'Cybersecurity'],
      codeLink: 'https://github.com/HMMBERT/Network-Analyzer'
    },
    {
      title: 'Automated Receipt Validator',
      description: 'C# WinForms application for automated data extraction and validation of MID/TID from retail PDF receipts.',
      tags: ['C#', '.NET', 'Automation', 'QA'],
      codeLink: '#'
    },
    {
      title: "Berto's Chili Garlic E-commerce",
      description: 'Full-stack web application for local business branding, featuring a product catalog and professional landing page.',
      tags: ['React', 'Node.js', 'Vite', 'Web Dev'],
      codeLink: '#'
    },
    {
      title: 'Secure Auth System',
      description: 'Robust authentication backend implementation using JWT, Node.js, and secure password hashing algorithms.',
      tags: ['Node.js', 'JWT', 'MongoDB', 'Security'],
      codeLink: 'https://github.com/HMMBERT/Auth-Server'
    },
    {
      title: 'Professional Portfolio',
      description: 'The React-based portfolio you are currently viewing, optimized for performance and responsive navigation.',
      tags: ['React', 'React-Scroll', 'CSS Grid', 'Vite'],
      codeLink: '#'
    }
  ];

  return (
    <div className="projects-section" style={{ paddingTop: '10rem', minHeight: '100vh' }}>
      <div className="projects-container">
        <h2>Full Project Gallery</h2>
        <div className="projects-grid">
          {fullProjectList.map((project, index) => (
            <div key={index} className="project-card">
              {/* Optional: Add placeholder or actual images here */}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="explore-more-container">
          <Link to="/" className="explore-btn">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;