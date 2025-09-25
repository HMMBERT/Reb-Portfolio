// src/pages/AllProjects.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AllProjects = () => {
  return (
    <div style={{ padding: '5rem 2rem', textAlign: 'center' }}>
      <h1>All My Projects</h1>
      <p>This is where a full gallery of your projects will go.</p>
      {/* Add a link to go back home */}
      <Link to="/" style={{ color: '#8D1B1B', fontWeight: 'bold' }}>
        &larr; Back to Home
      </Link>
    </div>
  );
};

export default AllProjects;