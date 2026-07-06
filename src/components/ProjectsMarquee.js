import React from 'react';
import SectionTitle from './SectionTitle';
import { projects } from '../data/projects';
import './ProjectsMarquee.css';

const MarqueeItem = ({ project }) => (
  <div className="projects-marquee-item">
    <div className="projects-marquee-icon" style={{ '--project-color': project.color }}>
      {project.icon}
    </div>
    <span className="projects-marquee-label">{project.title}</span>
    <div className="projects-marquee-flags">
      {project.countries.map((country) => (
        <img
          key={country}
          src={`https://flagcdn.com/w40/${country}.png`}
          alt={`${country} flag`}
          className="projects-marquee-flag"
          loading="lazy"
        />
      ))}
    </div>
  </div>
);

const ProjectsMarquee = () => {
  const items = projects.map((project) => (
    <MarqueeItem project={project} key={`a-${project.id}`} />
  ));

  const itemsDuplicate = projects.map((project) => (
    <MarqueeItem project={project} key={`b-${project.id}`} />
  ));

  return (
    <section className="projects-marquee-section" aria-label="Success Stories & Digital Transformations">
      <div className="projects-marquee-bar">
        <div className="projects-marquee-header">
          <SectionTitle
            as="h2"
            className="section-title-block--compact"
            title="Success Stories & Digital Transformations"
          />
        </div>

        <div className="projects-marquee-fade projects-marquee-fade-left" aria-hidden="true" />
        <div className="projects-marquee-fade projects-marquee-fade-right" aria-hidden="true" />

        <div className="projects-marquee-viewport">
          <div className="projects-marquee-track">
            <div className="projects-marquee-row">{items}</div>
            <div className="projects-marquee-row" aria-hidden="true">{itemsDuplicate}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsMarquee;
