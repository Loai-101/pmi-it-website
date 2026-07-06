import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLoader from '../components/PageLoader';
import SectionReveal from '../components/SectionReveal';
import { useImageLoading } from '../hooks/useLoadingState';
import './Countries.css';

const Countries = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    projects: 0,
    countries: 0,
    clients: 0
  });
  const [animatedCards, setAnimatedCards] = useState([]);

  const countries = useMemo(() => [
    {
      name: 'UAE',
      flag: 'https://flagcdn.com/w320/ae.png',
      capital: 'Abu Dhabi',
      color: '#00732F'
    },
    {
      name: 'Kuwait',
      flag: 'https://flagcdn.com/w320/kw.png',
      capital: 'Kuwait City',
      color: '#009639'
    },
    {
      name: 'Qatar',
      flag: 'https://flagcdn.com/w320/qa.png',
      capital: 'Doha',
      color: '#8D1B3D'
    },
    {
      name: 'Saudi Arabia',
      flag: 'https://flagcdn.com/w320/sa.png',
      capital: 'Riyadh',
      color: '#006C35'
    },
    {
      name: 'Bahrain',
      flag: 'https://flagcdn.com/w320/bh.png',
      capital: 'Manama',
      color: '#CE1126'
    },
    {
      name: 'France',
      flag: 'https://flagcdn.com/w320/fr.png',
      capital: 'Paris',
      color: '#002395'
    },
    {
      name: 'Tunisia',
      flag: 'https://flagcdn.com/w320/tn.png',
      capital: 'Tunis',
      color: '#E70013'
    },
    {
      name: 'Gabon',
      flag: 'https://flagcdn.com/w320/ga.png',
      capital: 'Libreville',
      color: '#009E60'
    },
    {
      name: 'Germany',
      flag: 'https://flagcdn.com/w320/de.png',
      capital: 'Berlin',
      color: '#000000'
    },
    {
      name: 'Libya',
      flag: 'https://flagcdn.com/w320/ly.png',
      capital: 'Tripoli',
      color: '#239F47'
    }
  ], []);

  const { isLoading, loadedCount, totalImages } = useImageLoading(
    countries.map(country => country.flag)
  );

  useEffect(() => {
    if (!isLoading) {
      const animateCards = () => {
        countries.forEach((_, index) => {
          setTimeout(() => {
            setAnimatedCards(prev => [...prev, index]);
          }, index * 300);
        });
      };

      const timeout = setTimeout(animateCards, 500);
      return () => clearTimeout(timeout);
    }
  }, [isLoading, countries]);

  useEffect(() => {
    if (!isLoading) {
      const animateNumbers = () => {
        const targets = { projects: 40, countries: 10, clients: 150 };
        const duration = 8000;
        const steps = 120;
        const stepDuration = duration / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;

          setAnimatedNumbers({
            projects: Math.floor(targets.projects * progress),
            countries: Math.floor(targets.countries * progress),
            clients: Math.floor(targets.clients * progress)
          });

          if (currentStep >= steps) {
            clearInterval(timer);
            setAnimatedNumbers(targets);
          }
        }, stepDuration);

        return () => clearInterval(timer);
      };

      const timeout = setTimeout(animateNumbers, 500);
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <SectionReveal id="countries" className="countries">
        <PageLoader
          text={`Loading flags... (${loadedCount}/${totalImages})`}
          size="large"
          variant="centered"
        />
      </SectionReveal>
    );
  }

  return (
    <SectionReveal id="countries" className="countries">
      <Helmet>
        <title>Our Regional Presence - PMI IT | Serving 10 Countries</title>
        <meta name="description" content="PMI IT serves clients across 10 countries in the Gulf region and beyond. Discover our global presence and successful project delivery across multiple regions." />
        <meta name="keywords" content="Gulf region, international presence, UAE, Kuwait, Qatar, Saudi Arabia, Bahrain, France, Tunisia, global IT services" />
        <link rel="canonical" href="https://it-solutions.pmi-me.net/countries" />

        <meta property="og:title" content="Our Regional Presence - PMI IT" />
        <meta property="og:description" content="PMI IT serves clients across 10 countries in the Gulf region and beyond. Discover our global presence and successful project delivery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://it-solutions.pmi-me.net/countries" />
        <meta property="og:image" content="https://res.cloudinary.com/dvybb2xnc/image/upload/v1751550832/pmi-it-logo_pegnsp.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Regional Presence - PMI IT" />
        <meta name="twitter:description" content="PMI IT serves clients across 10 countries in the Gulf region and beyond. Discover our global presence and successful project delivery." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dvybb2xnc/image/upload/v1751550832/pmi-it-logo_pegnsp.png" />
      </Helmet>

      <div className="countries-content">
        <div className="container">
          <div className="countries-title">
            <h1>Our Regional Presence</h1>
            <p className="countries-subtitle">Serving clients across 10 countries in the Gulf region and beyond</p>
          </div>
          <div className="countries-grid">
            {countries.map((country, index) => (
              <div
                key={index}
                className={`country-card ${animatedCards.includes(index) ? 'animate' : ''}`}
                style={{
                  '--country-color': country.color,
                  animationDelay: `${index * 0.3}s`
                }}
              >
                <div className="country-flag">
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="flag-image"
                  />
                </div>
                <div className="country-info">
                  <h3>{country.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="goals-dashboard">
            <h2>Delivering Impact Across Industries</h2>
            <div className="timeline-container">
              <div className="timeline-line"></div>
              <div className="goals-timeline">
                <div className="goal-column">
                  <div className="goal-item">
                    <div className="goal-icon">🚀</div>
                    <div className="goal-number">{animatedNumbers.projects}+</div>
                    <div className="goal-label">Projects Delivered</div>
                    <div className="goal-description">Successfully completed innovative solutions across all regions</div>
                    <div className="timeline-dot"></div>
                  </div>
                </div>
                <div className="goal-column">
                  <div className="goal-item">
                    <div className="goal-icon">🌍</div>
                    <div className="goal-number">{animatedNumbers.countries}</div>
                    <div className="goal-label">Countries Covered</div>
                    <div className="goal-description">Successfully delivered projects in all 10 countries we serve</div>
                    <div className="timeline-dot"></div>
                  </div>
                </div>
                <div className="goal-column">
                  <div className="goal-item">
                    <div className="goal-icon">👥</div>
                    <div className="goal-number">{animatedNumbers.clients}+</div>
                    <div className="goal-label">Satisfied Clients</div>
                    <div className="goal-description">Built lasting partnerships through successful project delivery</div>
                    <div className="timeline-dot"></div>
                  </div>
                </div>
                <div className="goal-column">
                  <div className="goal-item">
                    <div className="goal-icon">🎯</div>
                    <div className="goal-number">98%</div>
                    <div className="goal-label">Success Rate</div>
                    <div className="goal-description">Maintained excellence in every project we delivered</div>
                    <div className="timeline-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
};

export default Countries;
