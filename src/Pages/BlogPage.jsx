// src/pages/BlogPage.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom'; 
import '../components/CSS/BlogPage.css';

const BlogPage = () => {
  return (
    <section className="blog-page-section">
      <div className="blog-page-container">
        <div className="blog-page-header">
          <h2>From the Blog</h2>
          <p>Insights on web development, Cybersecurity, and growing your business in the Philippines.</p>
        </div>

      
        <Outlet />

        <div className="back-link-container">
          <Link to="/" className="back-link">&larr; Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;