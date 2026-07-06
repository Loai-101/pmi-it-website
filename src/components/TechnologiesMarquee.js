import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { allTechnologies } from '../data/technologies';
import './TechnologiesMarquee.css';

const MarqueeItem = ({ tech }) => (
  <div
    className="tech-marquee-item"
    style={{ '--tech-color': tech.color }}
  >
    <div className="tech-marquee-icon">{tech.icon}</div>
    <span className="tech-marquee-label">{tech.name}</span>
  </div>
);

const TechnologiesMarquee = () => {
  const items = allTechnologies.map((tech, index) => (
    <MarqueeItem tech={tech} key={`a-${tech.name}-${index}`} />
  ));

  const itemsDuplicate = allTechnologies.map((tech, index) => (
    <MarqueeItem tech={tech} key={`b-${tech.name}-${index}`} />
  ));

  return (
    <section className="tech-marquee-section" aria-label="Technologies Powering Innovation">
      <div className="tech-marquee-bar">
        <div className="tech-marquee-header">
          <SectionTitle
            as="h2"
            className="section-title-block--compact"
            title="Technologies Powering Innovation"
          />
        </div>

        <div className="tech-marquee-fade tech-marquee-fade-left" aria-hidden="true" />
        <div className="tech-marquee-fade tech-marquee-fade-right" aria-hidden="true" />

        <div className="tech-marquee-viewport">
          <div className="tech-marquee-track">
            <div className="tech-marquee-row">{items}</div>
            <div className="tech-marquee-row" aria-hidden="true">{itemsDuplicate}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesMarquee;
