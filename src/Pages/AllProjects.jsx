import React from 'react';
import { Link } from 'react-router-dom';
import '../components/CSS/Projects.css';

const AllProjects = () => {
  const fullProjectList = [
    {
      title: 'Acoustic Coconut Maturity Analyzer',
      description: 'A hardware-software solution utilizing Raspberry Pi Zero 2 and LSTM neural networks to classify coconut maturity via acoustic signals.',
      tags: ['Raspberry Pi', 'Python', 'LSTM', 'IoT'],
      type: 'personal',
      codeLink: 'https://github.com/HMMBERT'
    },
    {
      title: 'Network Traffic Analyzer',
      description: 'Real-time packet capture and analysis tool built for network security monitoring on Kali Linux environments.',
      tags: ['Python', 'Scapy', 'Networking', 'Cybersecurity'],
      type: 'personal',
      codeLink: 'https://github.com/HMMBERT/Network-Analyzer'
    },
    {
      title: 'Automated Receipt Validator',
      description: 'C# WinForms application for automated data extraction and validation of MID/TID from retail PDF receipts.',
      tags: ['C#', '.NET', 'Automation', 'QA'],
      type: 'personal',
      codeLink: '#'
    },
    {
      title: "Berto's Chili Garlic E-commerce",
      description: 'Full-stack web application for local business branding, featuring a product catalog and professional landing page.',
      tags: ['React', 'Node.js', 'Vite', 'Web Dev'],
      type: 'personal',
      codeLink: '#'
    },
    {
      title: 'Secure Auth System',
      description: 'Robust authentication backend implementation using JWT, Node.js, and secure password hashing algorithms.',
      tags: ['Node.js', 'JWT', 'MongoDB', 'Security'],
      type: 'personal',
      codeLink: 'https://github.com/HMMBERT/Auth-Server'
    },
    {
      title: 'QA Sales Order & Profile Cross-Checker',
      description: 'Built as a QA at NTT to eliminate manual verification of 100+ items a day, cross-checking sales orders against item releases, validating descriptions and delivery addresses, and matching GCash profiles to client IDs. Became my first software officially turned over for company-wide use.',
      tags: ['Automation', 'QA', 'Python', 'Process Improvement'],
      type: 'company',
      company: 'NTT Data Payment Services',
      date: 'May 2026',
      postLink: '#'
    },
    {
      title: 'GCash Sales Order Report Automator',
      description: 'Automated a repetitive per-terminal task that previously took 20-36 seconds of manual, no-decision work, running it in the background and generating a completed report automatically. My second software launched into production.',
      tags: ['Automation', 'Python', 'Background Service', 'Reporting'],
      type: 'company',
      company: 'NTT Data Payment Services',
      date: 'May 2026',
      postLink: '#'
    },
    {
      title: '7-Eleven Onboarding & Profiling Automation',
      description: 'Automation tool that streamlines 7-Eleven partner onboarding and profiling, removing repetitive manual data entry and verification steps from the process.',
      tags: ['Automation', 'Onboarding', 'Data Entry', 'Process Improvement'],
      type: 'company',
      company: 'NTT Data Payment Services',
      date: 'June 2026',
      postLink: '#'
    },
    {
      title: 'NTT EXPRESS - Automatic Shipper Assigner',
      description: 'Automation system that automatically assigns shippers, replacing a manual, rule-based assignment process with a faster automated workflow.',
      tags: ['Automation', 'Logistics', 'Process Improvement'],
      type: 'company',
      company: 'NTT Data Payment Services',
      date: 'July 2026',
      postLink: '#'
    },
    {
      title: 'Professional Portfolio',
      description: 'The React-based portfolio you are currently viewing, optimized for performance and responsive navigation.',
      tags: ['React', 'React-Scroll', 'CSS Grid', 'Vite'],
      type: 'personal',
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
                {project.type === 'company' && (
                  <div className="company-meta">
                    <span className="company-badge">{project.company}</span>
                    <span className="project-date">{project.date}</span>
                  </div>
                )}
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.type === 'company' ? (
                    <a href={project.postLink} target="_blank" rel="noopener noreferrer">View Post</a>
                  ) : (
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Source Code</a>
                  )}
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