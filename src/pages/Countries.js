import React, { useState, useEffect } from 'react';
import PageLoader from '../components/PageLoader';
import { useImageLoading } from '../hooks/useLoadingState';
import './Countries.css';

const Countries = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    projects: 0,
    countries: 0,
    clients: 0
  });

  const countries = [
    {
      name: 'Bahrain',
      flag: 'https://flagcdn.com/w320/bh.png',
      capital: 'Manama',
      color: '#CE1126'
    },
    {
      name: 'United Arab Emirates',
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
    }
  ];

  // Use the custom hook for image loading
  const { isLoading, loadedCount, totalImages } = useImageLoading(
    countries.map(country => country.flag)
  );

  // Animate numbers
  useEffect(() => {
    if (!isLoading) {
      const animateNumbers = () => {
        const targets = { projects: 100, countries: 7, clients: 500 };
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

      // Start animation after a delay
      const timeout = setTimeout(animateNumbers, 500);
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="countries">
        <PageLoader 
          text={`Loading flags... (${loadedCount}/${totalImages})`}
          size="large" 
          variant="centered"
        />
      </div>
    );
  }

  return (
    <div className="countries">
      {/* Floating Icons */}
      <div className="floating-icons">
        <div className="icon icon-1">🚀</div>
        <div className="icon icon-2">💻</div>
        <div className="icon icon-3">🌐</div>
        <div className="icon icon-4">📱</div>
        <div className="icon icon-5">⚡</div>
        <div className="icon icon-6">🔧</div>
        <div className="icon icon-7">📊</div>
        <div className="icon icon-8">🎯</div>
        <div className="icon icon-9">🌟</div>
        <div className="icon icon-10">💡</div>
        <div className="icon icon-11">🔒</div>
        <div className="icon icon-12">📈</div>
        <div className="icon icon-13">🛠️</div>
        <div className="icon icon-14">🎨</div>
        <div className="icon icon-15">🔍</div>
        <div className="icon icon-16">📋</div>
        <div className="icon icon-17">🎪</div>
        <div className="icon icon-18">🔮</div>
        <div className="icon icon-19">⚙️</div>
        <div className="icon icon-20">🎭</div>
        <div className="icon icon-21">🔬</div>
        <div className="icon icon-22">🎪</div>
        <div className="icon icon-23">🔧</div>
        <div className="icon icon-24">📱</div>
        <div className="icon icon-25">💻</div>
        <div className="icon icon-26">🌐</div>
        <div className="icon icon-27">🚀</div>
        <div className="icon icon-28">⚡</div>
        <div className="icon icon-29">📊</div>
        <div className="icon icon-30">🎯</div>
      </div>
      
      <div className="countries-content">
        <div className="container">
          <div className="countries-title">
            <h1>Our Regional Presence</h1>
            <p className="countries-subtitle">Serving clients across 7 countries in the Gulf region and beyond</p>
          </div>
          <div className="countries-grid">
            {countries.map((country, index) => (
              <div 
                key={index} 
                className="country-card"
                style={{ '--country-color': country.color }}
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
            <h2>Our Completed Projects</h2>
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
                    <div className="goal-description">Successfully delivered projects in all 7 countries we serve</div>
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
                    <div className="goal-number">100%</div>
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
    </div>
  );
};

export default Countries; 