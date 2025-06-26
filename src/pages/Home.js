import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaProjectDiagram, FaUserCircle, FaRegWindowMaximize, FaMobileAlt, FaCloud, FaCogs, FaDatabase, FaRobot, FaLaptopCode, FaNetworkWired, FaServer, FaChartBar, FaLock, FaGlobe } from 'react-icons/fa';
import './Home.css';

const ICON_POOL = [
  FaRegWindowMaximize, FaMobileAlt, FaCloud, FaCogs, FaDatabase, FaRobot, FaLaptopCode, FaNetworkWired, FaServer, FaChartBar, FaLock, FaGlobe, FaProjectDiagram, FaUserCircle
];
const ICON_COLORS = [
  '#667eea', '#764ba2', '#6c63ff', '#00bcd4', '#ff9800', '#4caf50', '#e91e63', '#2196f3', '#00bfae', '#ff4081', '#b388ff', '#00e676', '#ff1744', '#ffd600'
];

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample slider data - you can replace with your actual images and titles
  const slides = [
    {
      id: 1,
      image: '/slider1.jpg',
      title: 'We Build Systems. You Build Success.',
      subtitle: 'From custom software to complete ERP platforms.',
      description: 'We deliver comprehensive software solutions that drive your business success and operational excellence.'
    },
    {
      id: 2,
      image: '/slider2.jpg',
      title: 'Custom Software in Every Language, for Every Business.',
      subtitle: 'Node, Python, PHP, Java, Flutter — we code your way.',
      description: 'Expert development in multiple programming languages to create solutions that perfectly fit your business needs.'
    },
    {
      id: 3,
      image: '/slider3.jpg',
      title: 'Odoo Experts. Customized to Fit Your Business.',
      subtitle: 'Tailored ERP systems that grow with you.',
      description: 'Specialized Odoo implementation and customization services designed to scale with your business growth.'
    },
    {
      id: 4,
      image: '/slider4.jpg',
      title: 'Mobile App Development That Moves With You.',
      subtitle: 'iOS, Android & cross-platform apps — fast, scalable, secure.',
      description: 'Native and cross-platform mobile applications that keep pace with your business and user needs.'
    },
    {
      id: 5,
      image: '/slider5.jpg',
      title: 'From Idea to Execution — We Build Your Vision.',
      subtitle: 'End-to-end development for modern enterprises.',
      description: 'Complete development lifecycle from concept to deployment, turning your ideas into powerful business solutions.'
    },
    {
      id: 6,
      image: '/slider6.jpg',
      title: 'Digital Solutions Without Limits.',
      subtitle: 'Web, mobile, desktop, ERP — all under one roof.',
      description: 'Comprehensive digital solutions across all platforms and technologies, all delivered by one trusted partner.'
    },
    {
      id: 7,
      image: '/slider7.jpg',
      title: 'PMI IT: Your Technology Partner in Innovation.',
      subtitle: 'Reliable systems. Smarter operations.',
      description: 'Your trusted technology partner delivering innovative solutions that make your operations smarter and more efficient.'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide(current => (current === slides.length - 1 ? 0 : current + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide(current => (current === 0 ? slides.length - 1 : current - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="home">
      {/* Floating Icons - Fixed Position */}
      <div className="floating-icons">
        {Array.from({ length: 300 }).map((_, i) => {
          const Icon = ICON_POOL[Math.floor(Math.random() * ICON_POOL.length)];
          const color = ICON_COLORS[Math.floor(Math.random() * ICON_COLORS.length)];
          const left = getRandom(0, 100); // percent
          const top = getRandom(0, 100); // percent
          const size = getRandom(1.1, 2.2); // rem
          const delay = getRandom(0, 8); // seconds
          const duration = getRandom(6, 14); // seconds
          return (
            <span
              key={`floaticon-${i}`}
              className="swim-icon swim-random"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                color,
                fontSize: `${size}rem`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            >
              <Icon />
            </span>
          );
        })}
      </div>

      {/* Hero Slider Section */}
      <section className="hero-slider">
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`
              }}
            >
              {index === currentSlide && (
                <div className="slide-content" key={currentSlide}>
                  <h1 className="slide-title">{slide.title}</h1>
                  <h2 className="slide-subtitle">{slide.subtitle}</h2>
                  <p className="slide-description">{slide.description}</p>
                  <a
                    href="https://wa.me/97313676757"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button"
                  >
                    Get Started
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="slider-nav prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="slider-nav next" onClick={nextSlide}>
          <FaChevronRight />
        </button>

        {/* Dots Indicator */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <div className="welcome-content">
            <h2>Welcome to PMI IT</h2>
            <div className="styled-welcome-text">
              {/* Title */}
              <span className="welcome-highlight">
                Strategic Partnership between PMI IT and FutureCitiesCouncil Inc.
              </span>
              <div className="partnership-logos-row">
                <img
                  src="/logo.png"
                  alt="PMI IT Logo"
                  className="partnership-logo pmi-logo"
                />
                <img
                  src="/futurecities-logo.png"
                  alt="FutureCitiesCouncil Inc. Logo"
                  className="partnership-logo futurecities-logo"
                />
              </div>
              <p>
                PMI IT is proud to announce the formation of a strategic technology alliance with{' '}
                <strong className="welcome-company">FutureCitiesCouncil Inc.</strong>
                , a premier Canadian technology firm established in 2019, renowned for its expertise in developing intelligent systems and advanced IT solutions.
              </p>
              <p>
                <strong className="welcome-company">FutureCitiesCouncil Inc.</strong>
                {' '}has consistently delivered cutting-edge technology services across diverse industries in both Arab and Western markets, building deep expertise and a global outlook in addressing complex digital needs.
              </p>
              <p>
                This partnership is designed to merge the capabilities and knowledge of both organizations to offer state-of-the-art services, including comprehensive system architecture and software development, enterprise-level digital transformation, high-level IT consulting, AI-powered solutions, and intelligent infrastructure customized for sectors like healthcare, education, and e-commerce.
              </p>
              <p>
                Together, <strong className="welcome-company">PMI IT</strong> and{' '}
                <strong className="welcome-company">FutureCitiesCouncil Inc.</strong>
                {' '}aim to drive technological innovation, enhance operational performance, and contribute to building a smarter, more efficient digital future for clients across the globe.
              </p>
            </div>
            <FaRegWindowMaximize className="app-icon app-icon-right" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 