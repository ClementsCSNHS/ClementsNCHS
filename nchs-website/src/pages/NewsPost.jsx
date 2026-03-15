import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/NewsPost.css';
import { posts } from '../data/posts.jsx';

function NewsPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="newspost-notfound">
        <h2>Post not found.</h2>
        <Link to="/news" className="newspost-back">Back to News &amp; Events</Link>
      </div>
    );
  }

  return (
    <div className="newspost-page">
      <div className="newspost-inner">
        <Link to="/news" className="newspost-back">&larr; Back to News &amp; Events</Link>
        <div className="newspost-date">{post.date}</div>
        <h1 className="newspost-title">{post.title}</h1>
        <div className="newspost-divider" />
        {post.image && (
          <div className="newspost-img-wrap">
            <img src={post.image} alt={post.title} />
          </div>
        )}
        <div className="newspost-body">
          {post.body}
        </div>
      </div>
    </div>
  );
}

export default NewsPost;