// src/pages/BlogList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { allBlogPosts } from '../blogData'; // Import data
import '../components/CSS/BlogPage.css'; // We can reuse this CSS

const BlogList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(allBlogPosts);

  useEffect(() => {
    const filtered = allBlogPosts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchQuery]);

  return (
    <>
      <div className="search-bar-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search articles..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {filteredPosts.length > 0 ? (
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <div key={post.id} className="blog-card">
              {/* --- NEW: Display the post image --- */}
              <Link to={`/blog/${post.slug}`}>
                <img src={post.image} alt={post.title} className="blog-card-image" />
              </Link>
              <div className="blog-card-content">
                {/* --- NEW: Display category and date --- */}
                <div className="blog-card-meta">
                  <span className="blog-card-category">{post.category}</span>
                  <span className="blog-card-date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="read-more-btn">
                  Read More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-results-message">No articles found.</p>
      )}
    </>
  );
};

export default BlogList;