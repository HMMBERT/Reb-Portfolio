// src/components/Services.jsx
import React from 'react';
import './CSS/Services.css';
// Icons for all services, including the new one
import { FaServer, FaShieldAlt, FaCloudUploadAlt, FaCode, FaHeadset, FaDatabase } from 'react-icons/fa';

const servicesData = [
  {
    id: 1,
    icon: <FaServer />,
    title: 'Secure System Development',
    description: 'Designing and building robust, scalable back-end systems and APIs with a focus on security and performance from the ground up.',
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    title: 'Cyber Security Auditing',
    description: 'Conducting vulnerability assessments, penetration testing, and implementing security protocols to protect digital assets from modern threats.',
  },
  {
    id: 3,
    icon: <FaCloudUploadAlt />,
    title: 'Cloud & DevOps Solutions',
    description: 'Deploying and managing applications on cloud platforms, and implementing CI/CD pipelines to streamline the development lifecycle.',
  },
  {
    id: 4,
    icon: <FaCode />,
    title: 'Full-Stack Web Development',
    description: 'Creating complete web applications from front-end to back-end, delivering a seamless and engaging user experience.',
  },
  {
    id: 5,
    icon: <FaHeadset />,
    title: 'IT Support & Consultation',
    description: 'Providing expert technical support, troubleshooting complex issues, and offering consultations to optimize IT infrastructure and workflow.',
  },
  // NEW: Database service
  {
    id: 6,
    icon: <FaDatabase />,
    title: 'Database Management & Architecture',
    description: 'Designing efficient database schemas, optimizing queries, and ensuring data integrity and security for applications of all scales.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2>What I Offer</h2>
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;