// src/components/BlogCTA.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/BlogCTA.css';

const BlogCTA = () => {
  return (
    <section id="blog-cta" className="blog-cta-section">
      <div className="blog-cta-container">
        <h2>Read My Latest Articles</h2>
        <p>I write about system development, cyber security, and modern web technologies. Check out my latest posts to see what I'm working on.</p>
        <Link to="/blog" className="cta-button">
          Visit the Blog
        </Link>
      </div>
    </section>
  );
};

export default BlogCTA;