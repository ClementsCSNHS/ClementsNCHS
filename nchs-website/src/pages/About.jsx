import React from 'react';
import '../styles/About.css';

import groupPhoto2021 from '../assets/group-2021.png';
import groupPhoto2023 from '../assets/group-2023.png';
import officerRicky from '../assets/officer-ricky.png';
import officerJessica from '../assets/officer-jessica.png';
import officerSophia from '../assets/officer-sophia.png';
import officerCaroline from '../assets/officer-caroline.png';
import officerCindy from '../assets/officer-cindy.png';

const officers = [
  { title: 'President', name: 'Ricky Huang', img: officerRicky },
  { title: 'Vice President', name: 'Jessica Xu', img: officerJessica },
  { title: 'Secretary', name: 'Sophia Qi', img: officerSophia },
  { title: 'Event Coordinator', name: 'Caroline Liu', img: officerCaroline },
  { title: 'Historian / Webmaster', name: 'Cindy Zheng', img: officerCindy },
];

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <div className="about-hero-label">Who We Are</div>
        <h1 className="about-title">ABOUT US</h1>
        <div className="about-title-bar" />
      </section>

      <section className="about-description">
        <div className="about-description-inner">
          <p>
            Welcome! We are the Clements High School chapter of the National
            Chinese Honor Society.
          </p>
          <p>
            According to the CLASS, "the National Chinese Honor Society (NCHS)
            is dedicated to the advancement of Chinese language study in public
            and independent secondary schools and is sponsored by the national
            Chinese Language Association of Secondary-Elementary Schools
            (CLASS).
          </p>
          <p>
            The National Chinese Honor Society was established in November,
            1993 to recognize those accomplished high school students who study
            Chinese as the second language. It is not only a scholastic
            organization but also promotes and recognizes those with good
            citizenship, leadership quality, and community service among
            qualified students. The society's goal is to encourage its members
            to become life-long knowledge seekers to reach a better
            understanding to the Chinese language and culture, to be able to
            play the active role as the builders of the twenty-first century."
          </p>
        </div>
      </section>

      <section className="about-gallery">
        <div className="gallery-frame">
          <img src={groupPhoto2021} alt="CSNHS group photo 2021" />
          <div className="gallery-caption">2021-22 Chapter</div>
        </div>
        <div className="gallery-frame">
          <img src={groupPhoto2023} alt="CSNHS group photo 2023" />
          <div className="gallery-caption">2023-24 Chapter</div>
        </div>
      </section>

      <section className="officers-section">
        <div className="officers-header">
          <h2 className="officers-title">NCHS OFFICERS</h2>
          <div className="officers-title-bar" />
        </div>
        <div className="officers-row">
          {officers.map((o) => (
            <div className="officer-card" key={o.name}>
              <div className="officer-img-wrap">
                <img src={o.img} alt={o.name} />
              </div>
              <div className="officer-info">
                <div className="officer-role">{o.title}</div>
                <div className="officer-name">{o.name}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="sponsor-note">
          Faculty Sponsor: <strong>Mrs. Jing</strong>
        </div>
      </section>

    </div>
  );
}

export default About;