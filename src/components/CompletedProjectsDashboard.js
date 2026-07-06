import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';
import './CompletedProjectsDashboard.css';

const STATS = [
  {
    key: 'projects',
    target: 40,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Successfully completed innovative solutions across all regions',
  },
  {
    key: 'countries',
    target: 7,
    suffix: '',
    label: 'Countries Covered',
    description: 'Successfully delivered projects in all 7 countries we serve',
  },
  {
    key: 'clients',
    target: 50,
    suffix: '+',
    label: 'Satisfied Clients',
    description: 'Built lasting partnerships through successful project delivery',
  },
  {
    key: 'success',
    target: 98,
    suffix: '%',
    label: 'Success Rate',
    description: 'Maintained excellence in every project we delivered',
  },
];

const CompletedProjectsDashboard = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const [values, setValues] = useState({
    projects: 0,
    countries: 0,
    clients: 0,
    success: 0,
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const startCounting = () => {
      const duration = 2400;
      const steps = 60;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep += 1;
        const progress = currentStep / steps;

        setValues(
          STATS.reduce((acc, stat) => {
            acc[stat.key] = Math.floor(stat.target * progress);
            return acc;
          }, {})
        );

        if (currentStep >= steps) {
          clearInterval(timer);
          setValues(
            STATS.reduce((acc, stat) => {
              acc[stat.key] = stat.target;
              return acc;
            }, {})
          );
        }
      }, stepDuration);

      return timer;
    };

    let timer = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;
        timer = startCounting();
        observer.disconnect();
      },
      { threshold: 0.35, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="completed-projects-section"
      id="countries"
      aria-labelledby="completed-projects-title"
    >
      <div className="completed-projects-inner">
        <SectionTitle
          as="h2"
          id="completed-projects-title"
          className="section-title-block--compact"
          title="Delivering Impact Across Industries"
        />
        <div className="completed-projects-stats">
          {STATS.map((stat) => (
            <article key={stat.key} className="completed-projects-stat">
              <div className="completed-projects-number">
                {values[stat.key]}
                {stat.suffix}
              </div>
              <h3 className="completed-projects-label">{stat.label}</h3>
              <p className="completed-projects-desc">{stat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompletedProjectsDashboard;
