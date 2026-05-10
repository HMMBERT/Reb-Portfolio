// src/pages/SinglePost.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allBlogPosts } from '../blogData'; // Import the blog data
import '../components/CSS/SinglePost.css'; // Corrected path to the new CSS file

const SinglePost = () => {
  const { slug } = useParams();
  const post = allBlogPosts.find((p) => p.slug === slug);

  // If no post is found, show a styled message
  if (!post) {
    return (
      <div className="post-not-found">
        <h2>Post Not Found</h2>
        <p>Sorry, we couldn't find the article you're looking for.</p>
        <Link to="/blog" className="back-link">&larr; Return to Blog</Link>
      </div>
    );
  }

  return (
    <div className="single-post-section">
      {/* --- NEW: Banner Image --- */}
      <img src={post.image} alt={post.title} className="single-post-banner" />
      
      <div className="single-post-container">
        <h1 className="single-post-title">{post.title}</h1>

        {/* --- NEW: Post Metadata --- */}
        <div className="post-meta">
          <span className="meta-author">By {post.author}</span>
          <span className="meta-date">{post.date}</span>
          <span className="meta-category">{post.category}</span>
        </div>
        
        <div className="single-post-content">
          {/* Improved rendering for paragraphs */}
          {post.fullContent.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        <Link to="/blog" className="back-link">&larr; Back to All Posts</Link>
      </div>
    </div>
  );
};

export default SinglePost;