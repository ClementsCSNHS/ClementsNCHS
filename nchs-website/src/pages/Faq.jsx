import React, { useState } from 'react';
import '../styles/Faq.css';

const requirements = [
  'Chinese 1 class + Chinese 2 class + Is currently taking Chinese 3 AAC',
  'Chinese NSP class + is currently taking Chinese 3 AAC',
  'Chinese 1 CBE (Credit-by-Exam) + Chinese 2 class + Chinese 3 AAC (completed all)',
  'Chinese 1 & 2 CBE + Chinese 3 AAC (completed all)',
];

const reqNotes = [
  'Must have 85 or higher in ALL classes (80 or above in Chinese only for non-heritage students)',
  'No violations of Clements Honor Code or major disciplinary issues (detention, suspension, or other severe action)',
  'Understand and fulfill expectations and commitments',
];

const pointItems = [
  'Meetings – 1 point for attendance, 2 points with NCHS shirt',
  'Song suggestion – 1 point (cap: 1 pt per person per semester) — Officers will play the best songs before each meeting (point only awarded if your song is chosen)',
  'Performance/Presentation (members volunteer to present their own topic) – 2 points',
  'Meme submission – 1 point (cap: 1 pt per semester — Additional 0.5 point rewarded if meme is high quality enough to be chosen and posted on the NCHS Instagram (go follow it))',
  'Asia Society (virtual or in-person events) – 1 point (find events on asiasociety.org and write a paragraph reflection on the event)',
  'Other volunteering events – Please check Facebook and emails to stay up to date',
  'Bringing Chinese snacks/drinks to meetings – 1 point per item, must be shareable! (cap 2 times per semester)',
  'Miscellaneous points will be awarded at meetings (games, activities, contests, etc.)',
];

const faqs = [
  {
    q: "What happens if I can't make it to a meeting?",
    a: "Email Clements NCHS at clementsnchs@gmail.com with a proper excuse within 24 hours of the meeting. One unexcused absence will result in a bad standing, while two unexcused absences may result in immediate dismissal. Meeting agendas will be posted on the News and Events page.",
  },
  {
    q: 'Where are the meetings held?',
    a: "Room 2514 (Mrs. Jing's room), unless told otherwise.",
  },
  {
    q: 'How long are the meetings?',
    a: 'Between 30 min – 1 hour.',
  },
  {
    q: 'When are the meetings?',
    a: 'Every 3rd Tuesday of every month (unless otherwise noted).',
  },
  {
    q: 'What are the volunteering requirements?',
    a: 'TBD because of COVID-19.',
  },
];

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`accordion-item${open ? ' accordion-item--open' : ''}`}>
      <button className="accordion-trigger" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="accordion-icon">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="accordion-body">{a}</div>}
    </div>
  );
}

function Faq() {
  return (
    <div className="faq-page">

      <section className="faq-hero">
        <div className="faq-hero-label">Got Questions?</div>
        <h1 className="faq-title">FAQ</h1>
        <div className="faq-title-bar" />
        <p className="faq-contact">
          If you have any questions concerning anything, please contact one of the officers or Mrs. Jing. Thank you!
        </p>
      </section>

      <div className="faq-content">

        <section className="faq-card">
          <h2 className="faq-card-title">Requirements</h2>
          <p className="faq-card-label">Must be in...</p>
          <ul className="faq-bullet-list">
            {requirements.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          <ul className="faq-note-list">
            {reqNotes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </section>

        <section className="faq-card">
          <h2 className="faq-card-title">Meeting Attendance</h2>
          <p className="faq-body-text">
            Members <strong>MUST</strong> arrive before 3:00 to earn points and stay throughout the whole meeting unless they have a proper excuse.
          </p>
          <p className="faq-body-text">
            LABS are not considered as excuses. Excuses encompass band practice, doctor appointments, and illness.
          </p>
          <p className="faq-body-text">Up to 1 absence per semester.</p>
        </section>

        <section className="faq-card">
          <h2 className="faq-card-title">Common Questions</h2>
          <div className="accordion">
            {faqs.map((item, i) => (
              <AccordionItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </section>

        <section className="faq-card">
          <h2 className="faq-card-title">Point System</h2>
          <div className="faq-requirement-badge">
            Points required 1st semester: <strong>10 (by December meeting)</strong>
          </div>
          <ol className="faq-points-list">
            {pointItems.map((item, i) => (
              <li key={i} className="faq-points-item">
                <span className="faq-points-num">{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <p className="faq-calendar-note">
            Check the calendar to find out about upcoming cultural events!
          </p>
        </section>

      </div>
    </div>
  );
}

export default Faq;