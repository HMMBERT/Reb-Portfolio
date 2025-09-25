// src/components/About.jsx
import React from 'react';
import './CSS/About.css';


// Array of your technical skills
const skills = [
  'JavaScript (ES6+)', 'Python', 'HTML & CSS', 'React', 'Node.js', 
  'Express.js', 'SQL', 'MongoDB', 'Network Security', 'Penetration Testing', 
  'Git & GitHub', 'Docker'
];

export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Hello! I'm REB, a Computer Engineer based in Quezon City.</h3>
            <p>
              Ever since I began my journey at the Polytechnic University of the Philippines, I've been captivated by the challenge of building secure and efficient digital systems. My expertise lies at the intersection of robust system development and proactive cyber security, where I enjoy designing solutions that are not only powerful but also resilient against modern threats.
            </p>
            <p>
              I thrive on turning complex problems into elegant, user-friendly applications. Whether it's architecting a back-end service or fortifying a system's defenses, I am committed to delivering high-quality work and continuously expanding my technical skillset.
            </p>
          </div>
          <div className="about-skills">
            <h3>My Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-tag">{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};