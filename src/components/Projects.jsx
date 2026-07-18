// src/components/Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Projects.css';

const projectData = [
  {
    id: 1,
    title: 'QA Sales Order & Profile Cross-Checker',
    description: 'Built as a QA at NTT to eliminate manual verification of 100+ items a day, cross-checking sales orders against item releases, validating descriptions and delivery addresses, and matching GCash profiles to client IDs. My first software officially turned over for company-wide use.',
    company: 'NTT Data Payment Services',
    date: 'May 2026',
    tags: ['Automation', 'QA', 'Python', 'Process Improvement'],
    postLink: '#',
  },
  {
    id: 2,
    title: 'GCash Sales Order Report Automator',
    description: 'Automated a repetitive per-terminal task that previously took 20-36 seconds of manual, no-decision work, now running in the background and generating a completed report automatically. My second software launched into production.',
    company: 'NTT Data Payment Services',
    date: 'May 2026',
    tags: ['Automation', 'Python', 'Background Service', 'Reporting'],
    postLink: '#',
  },
  {
    id: 3,
    title: '7-Eleven Onboarding & Profiling Automation',
    description: 'Automation tool that streamlines 7-Eleven partner onboarding and profiling, removing repetitive manual data entry and verification steps from the process.',
    company: 'NTT Data Payment Services',
    date: 'June 2026',
    tags: ['Automation', 'Onboarding', 'Data Entry', 'Process Improvement'],
    postLink: '#',
  },
  {
    id: 4,
    title: 'NTT EXPRESS - Automatic Shipper Assigner',
    description: 'Automation system that automatically assigns shippers, replacing a manual, rule-based assignment process with a faster automated workflow.',
    company: 'NTT Data Payment Services',
    date: 'July 2026',
    tags: ['Automation', 'Logistics', 'Process Improvement'],
    postLink: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>My Recent Work</h2>
        <div className="projects-grid">
          {projectData.map((project) => (
            <div key={project.id} className="project-card project-card--company">
              <div className="project-content">
                <div className="company-meta">
                  <span className="company-badge">{project.company}</span>
                  <span className="project-date">{project.date}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.postLink} target="_blank" rel="noopener noreferrer">View Post</a>
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