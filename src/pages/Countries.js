import React, { useState, useEffect } from 'react';
import './Countries.css';

const Countries = () => {
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
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    projects: 0,
    countries: 0,
    clients: 0
  });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === countries.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Animate numbers
  useEffect(() => {
    const animateNumbers = () => {
      const targets = { projects: 100, countries: 7, clients: 500 };
      const duration = 2000;
      const steps = 60;
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
  }, []);

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
          </div>
          <div className="countries-slider">
            <div className="countries-slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {countries.map((country, index) => (
                <div 
                  key={index} 
                  className="country-card slider-card"
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
                    <p className="country-capital">Capital: {country.capital}</p>
                  </div>
                  <div className="country-overlay">
                    <div className="overlay-content">
                      <h3>Ready to work with {country.name}?</h3>
                      <p>Let's discuss your technology needs</p>
                      <button 
                        className="contact-btn"
                        onClick={() => {
                          const phoneNumber = '+1234567890';
                          const message = `Hi! I'm interested in your services in ${country.name}. Can you provide more information?`;
                          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                          window.open(whatsappUrl, '_blank');
                        }}
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="slider-dots">
            {countries.map((_, idx) => (
              <button
                key={idx}
                className={`slider-dot ${currentSlide === idx ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to country ${idx + 1}`}
              />
            ))}
          </div>
          <div className="goals-dashboard">
            <h2>Our 2025 Goals</h2>
            <div className="timeline-container">
              <div className="timeline-line"></div>
              <div className="goals-timeline">
                <div className="goal-column">
                  <div className="goal-item">
                    <div className="goal-icon">🚀</div>
                    <div className="goal-number">{animatedNumbers.projects}+</div>
                    <div className="goal-label">Projects Completed</div>
                    <div className="goal-description">Expanding our portfolio across the Gulf region</div>
                    <div className="timeline-dot"></div>
                  </div>
                </div>
                <div className="goal-column">
                  <div className="goal-item">
                    <div className="goal-icon">🌍</div>
                    <div className="goal-number">{animatedNumbers.countries}</div>
                    <div className="goal-label">Countries Served</div>
                    <div className="goal-description">Extending our reach to Oman and Tunisia</div>
                    <div className="timeline-dot"></div>
                  </div>
                </div>
                <div className="goal-column">
                  <div className="goal-item">
                    <div className="goal-icon">💼</div>
                    <div className="goal-number">{animatedNumbers.clients}+</div>
                    <div className="goal-label">Happy Clients</div>
                    <div className="goal-description">Building long-term partnerships</div>
                    <div className="timeline-dot"></div>
                  </div>
                </div>
                <div className="goal-column">
                  <div className="goal-item">
                    <div className="goal-icon">⚡</div>
                    <div className="goal-number">24/7</div>
                    <div className="goal-label">Support Coverage</div>
                    <div className="goal-description">Round-the-clock technical assistance</div>
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