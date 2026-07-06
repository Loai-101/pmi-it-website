import React from 'react';
import SectionReveal from '../components/SectionReveal';
import ProjectsMarquee from '../components/ProjectsMarquee';
import './Projects.css';

const Projects = () => (
  <SectionReveal id="projects" className="projects">
    <ProjectsMarquee />
  </SectionReveal>
);

export default Projects;
