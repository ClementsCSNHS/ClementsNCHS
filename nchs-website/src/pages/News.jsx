import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/News.css';
import { posts } from '../data/posts.jsx';

const CALENDAR_EMBED = 'https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America%2FChicago&color=%23c98a1a';

const archiveMonths = [
  { label: 'September 2025', count: 1 },
  { label: 'March 2025', count: 1 },
  { label: 'February 2025', count: 1 },
  { label: 'January 2025', count: 1 },
  { label: 'December 2024', count: 1 },
  { label: 'November 2024', count: 1 },
  { label: 'October 2024', count: 2 },
  { label: 'May 2024', count: 1 },
  { label: 'April 2024', count: 1 },
  { label: 'March 2024', count: 1 },
  { label: 'February 2024', count: 1 },
  { label: 'January 2024', count: 1 },
  { label: 'December 2023', count: 1 },
  { label: 'October 2023', count: 1 },
  { label: 'September 2023', count: 1 },
  { label: 'May 2023', count: 1 },
  { label: 'February 2023', count: 4 },
  { label: 'October 2022', count: 1 },
  { label: 'August 2022', count: 1 },
  { label: 'February 2022', count: 1 },
];

const POSTS_PER_PAGE = 5;

function News() {
  const [page, setPage] = useState(1);
  const [activeMonth, setActiveMonth] = useState(null);

  const filteredPosts = activeMonth
    ? posts.filter((p) => p.date === activeMonth)
    : posts;

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const visiblePosts = filteredPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  function handleMonthClick(label) {
    if (activeMonth === label) {
      setActiveMonth(null);
    } else {
      setActiveMonth(label);
      setPage(1);
    }
    document.querySelector('.news-posts-section')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="news-page">

      <section className="news-hero">
        <div className="news-hero-label">Stay Up To Date</div>
        <h1 className="news-title">NEWS &amp; EVENTS</h1>
        <div className="news-title-bar" />
      </section>

      <section className="news-calendar-section">
        <div className="news-calendar-left">
          <div className="meeting-dates">
            <h2 className="meeting-dates-heading">Meeting Dates:</h2>
            <p className="meeting-dates-sub">One Tuesday a month at 3 PM in Mrs. Jing's room (2514)</p>
          </div>
          <p className="calendar-disclaimer">*ALL DATES SUBJECT TO CHANGE*</p>
          <div className="calendar-wrapper">
            <iframe
              src={CALENDAR_EMBED}
              title="NCHS Meeting Calendar"
              className="calendar-iframe"
            />
          </div>
        </div>

        <aside className="news-sidebar">
          <h3 className="sidebar-heading">Recent Posts</h3>
          <div className="sidebar-divider" />
          {posts.length === 0 ? (
            <p className="sidebar-empty">Posts coming soon!</p>
          ) : (
            <ul className="sidebar-posts">
              {posts.slice(0, 6).map((post) => (
                <li key={post.id} className="sidebar-post-item">
                  <Link to={`/news/${post.id}`} className="sidebar-post-link">
                    {post.image && (
                      <div className="sidebar-post-img-wrap">
                        <img src={post.image} alt={post.title} />
                      </div>
                    )}
                    <span className="sidebar-post-title">{post.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </aside>
      </section>

      <section className="news-posts-section">
        <div className="news-posts-header">
          <h2 className="news-posts-title">
            {activeMonth ? `Posts from ${activeMonth}` : 'Meeting Posts'}
          </h2>
          {activeMonth && (
            <button className="archive-clear" onClick={() => { setActiveMonth(null); setPage(1); }}>
              Clear filter
            </button>
          )}
          <div className="news-title-bar" />
        </div>

        <div className="news-posts-layout">
          <div className="news-posts-main">
            {visiblePosts.length === 0 ? (
              <div className="posts-empty">
                <p>
                  {activeMonth
                    ? `No posts found for ${activeMonth}.`
                    : 'Meeting posts will appear here — check back soon!'}
                </p>
              </div>
            ) : (
              visiblePosts.map((post) => (
                <Link to={`/news/${post.id}`} key={post.id} className="post-card">
                  <div className="post-card-img-wrap">
                    {post.image ? (
                      <img src={post.image} alt={post.title} />
                    ) : (
                      <div className="post-card-img-placeholder" />
                    )}
                  </div>
                  <div className="post-card-body">
                    <div className="post-card-date">{post.date}</div>
                    <h3 className="post-card-title">{post.title}</h3>
                    <p className="post-card-excerpt">{post.excerpt}</p>
                    <span className="post-card-read">Read more</span>
                  </div>
                </Link>
              ))
            )}

            {totalPages > 1 && (
              <div className="pagination">
                <button
                  className="page-btn"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  &lsaquo;
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    className={`page-btn${page === n ? ' page-btn--active' : ''}`}
                    onClick={() => setPage(n)}
                  >
                    {n}
                  </button>
                ))}
                <button
                  className="page-btn"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                >
                  &rsaquo;
                </button>
              </div>
            )}
          </div>

          <aside className="archive-sidebar">
            <h3 className="sidebar-heading">Archive</h3>
            <div className="sidebar-divider" />
            <ul className="archive-list">
              {archiveMonths.map((m) => (
                <li
                  key={m.label}
                  className={`archive-item${activeMonth === m.label ? ' archive-item--active' : ''}`}
                  onClick={() => handleMonthClick(m.label)}
                >
                  {m.label} <span className="archive-count">({m.count})</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

    </div>
  );
  
}

export default News;