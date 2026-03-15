import React from 'react';
import '../styles/Points.css';

const pointItems = [
  { num: 1, text: 'Meetings – 1 point for attendance, 2 points with NCHS shirt' },
  { num: 2, text: 'Song suggestion – 1 point (cap: 1 pt per person per semester)' },
  { num: 3, text: 'Performance/Presentation (members volunteer to present their own topic) – 2 points' },
  { num: 4, text: 'Meme submission – 1 point (cap: 1 pt per semester — Additional 0.5 point rewarded if meme is high quality enough to be chosen and posted on the NCHS Instagram (go follow it))' },
  { num: 5, text: 'Asia Society (virtual or in-person events) – 1 point (find events on asiasociety.org and write a paragraph reflection on the event)' },
  { num: 6, text: 'Other volunteering events – Please check Facebook and emails to stay up to date' },
  { num: 7, text: 'Bringing Chinese snacks/drinks to meetings – 1 point per item, must be shareable! (cap 2 times per semester)' },
  { num: 8, text: 'Miscellaneous points will be awarded at meetings (games, activities, contests, etc.)' },
];

const SHEET_EMBED = 'https://docs.google.com/spreadsheets/d/1gNg8KLSs0mVDZuTaOh1vvthWISo6IjyMjsmfn5vQOkg/edit?usp=sharing&rm=minimal&widget=true&headers=false';
const SHEET_LINK = 'https://docs.google.com/spreadsheets/d/1gNg8KLSs0mVDZuTaOh1vvthWISo6IjyMjsmfn5vQOkg/edit?usp=sharing';

function Points() {
  return (
    <div className="points-page">

      <section className="points-hero">
        <div className="points-hero-label">Track Your Progress</div>
        <h1 className="points-title">POINTS</h1>
        <div className="points-title-bar" />
      </section>

      <section className="points-info">
        <div className="points-info-inner">
          <h2 className="points-section-heading">How do I earn points?</h2>
          <div className="points-requirement">
            Points Requirement: <strong>14 before April 2025 meeting</strong>
          </div>
          <ol className="points-list">
            {pointItems.map((item) => (
              <li key={item.num} className="points-list-item">
                <span className="points-num">{item.num}</span>
                <span className="points-text">{item.text}</span>
              </li>
            ))}
          </ol>
          <p className="points-calendar-note">
            Check the calendar to find out about upcoming cultural events!
          </p>
        </div>
      </section>

      <section className="points-sheet-section">
        <div className="points-sheet-header">
          <h2 className="points-sheet-title">Points Spreadsheet</h2>
          <div className="points-title-bar" />
        </div>
        <div className="points-sheet-wrapper">
          <iframe
            src={SHEET_EMBED}
            title="NCHS Points Spreadsheet"
            className="points-sheet-iframe"
            allowFullScreen
          />
        </div>
        <div className="sheet-link-row">
          <a
            href={SHEET_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="sheet-link"
          >
            Open spreadsheet in Google Sheets
          </a>
        </div>
      </section>

    </div>
  );
}

export default Points;