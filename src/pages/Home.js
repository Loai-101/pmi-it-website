import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IMAGES } from '../utils/imagePaths';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample slider data - you can replace with your actual images and titles
  const slides = [
    {
      id: 1,
      image: "https://res.cloudinary.com/demo/image/upload/v1680000000/slider1.png",
      title: 'We Build Systems. You Build Success.',
      subtitle: 'From custom software to complete ERP platforms.',
      description: 'We deliver comprehensive software solutions that drive your business success and operational excellence.'
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/demo/image/upload/v1680000000/slider2.png",
      title: 'Custom Software in Every Language, for Every Business.',
      subtitle: 'Node, Python, PHP, Java, Flutter — we code your way.',
      description: 'Expert development in multiple programming languages to create solutions that perfectly fit your business needs.'
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/demo/image/upload/v1680000000/slider3.png",
      title: 'Odoo Experts. Customized to Fit Your Business.',
      subtitle: 'Tailored ERP systems that grow with you.',
      description: 'Specialized Odoo implementation and customization services designed to scale with your business growth.'
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/demo/image/upload/v1680000000/slider4.png",
      title: 'Mobile App Development That Moves With You.',
      subtitle: 'iOS, Android & cross-platform apps — fast, scalable, secure.',
      description: 'Native and cross-platform mobile applications that keep pace with your business and user needs.'
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/demo/image/upload/v1680000000/slider5.png",
      title: 'From Idea to Execution — We Build Your Vision.',
      subtitle: 'End-to-end development for modern enterprises.',
      description: 'Complete development lifecycle from concept to deployment, turning your ideas into powerful business solutions.'
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/demo/image/upload/v1680000000/slider6.jpg",
      title: 'Digital Solutions Without Limits.',
      subtitle: 'Web, mobile, desktop, ERP — all under one roof.',
      description: 'Comprehensive digital solutions across all platforms and technologies, all delivered by one trusted partner.'
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/demo/image/upload/v1680000000/slider7.jpg",
      title: 'PMI IT: Your Technology Partner in Innovation.',
      subtitle: 'Reliable systems. Smarter operations.',
      description: 'Your trusted technology partner delivering innovative solutions that make your operations smarter and more efficient.'
    }
  ];

  // Partnership slides data
  const partnershipSlides = [
    {
      title: "Strategic Partnership Announcement",
      subtitle: "PMI IT & FutureCitiesCouncil Inc.",
      description: "PMI IT is proud to announce the formation of a strategic technology alliance with FutureCitiesCouncil Inc., a premier Canadian technology firm established in 2019, renowned for its expertise in developing intelligent systems and advanced IT solutions.\n\nFutureCitiesCouncil Inc. has consistently delivered cutting-edge technology services across diverse industries in both Arab and Western markets, building deep expertise and a global outlook in addressing complex digital needs.\n\nThis partnership is designed to merge the capabilities and knowledge of both organizations to offer state-of-the-art services, including comprehensive system architecture and software development, enterprise-level digital transformation, high-level IT consulting, AI-powered solutions, and intelligent infrastructure customized for sectors like healthcare, education, and e-commerce.\n\nTogether, PMI IT and FutureCitiesCouncil Inc. aim to drive technological innovation, enhance operational performance, and contribute to building a smarter, more efficient digital future for clients across the globe.",
      image: null // No image for this slide
    },
    {
      title: "Partnership Agreement",
      subtitle: "Official Partnership Documentation",
      description: "Our strategic partnership agreement represents the formal commitment between PMI IT and FutureCitiesCouncil Inc. to collaborate on innovative technology solutions and deliver exceptional value to our clients worldwide.",
      image: IMAGES.PARTNERSHIP_AGREEMENT // Your agreement image
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
                  <div className="slide-logo">
                    <img src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1751550832/pmi-it-logo_pegnsp.png" alt="PMI IT Logo" className="pmi-logo" />
                  </div>
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

      {/* About Title with Logos */}
      <div className="container" style={{ marginTop: '40px', marginBottom: '10px' }}>
        <div className="about-logos-section">
          <div className="about-logo about-logo-left">
            <img src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1751550832/pmi-it-logo_pegnsp.png" alt="PMI IT Logo" className="about-logo-img" />
          </div>
          <h2 className="section-title" style={{ textAlign: 'center', fontSize: '2.4rem', fontWeight: 700, margin: 0, color: '#667eea', letterSpacing: '1px' }}>About</h2>
          <div className="about-logo about-logo-right">
            <img src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1751551231/futurecities-logo_qgotzj.jpg" alt="FutureCitiesCouncil Logo" className="about-logo-img" />
          </div>
        </div>
      </div>

      {/* About Content Section */}
      <section className="about-content-section">
        <div className="container">
          <div className="about-content">
            <p>
              <strong>PMI IT</strong> is proud to announce the formation of a strategic technology alliance with <strong>FutureCitiesCouncil Inc.</strong>, a premier Canadian technology firm established in 2019, renowned for its expertise in developing intelligent systems and advanced IT solutions.
            </p>
            <p>
              <strong>FutureCitiesCouncil Inc.</strong> has consistently delivered cutting-edge technology services across diverse industries in both Arab and Western markets, building deep expertise and a global outlook in addressing complex digital needs.
            </p>
            <p>
              This partnership is designed to merge the capabilities and knowledge of both organizations to offer state-of-the-art services, including comprehensive system architecture and software development, enterprise-level digital transformation, high-level IT consulting, AI-powered solutions, and intelligent infrastructure customized for sectors like healthcare, education, and e-commerce.
            </p>
            <p>
              Together, <strong>PMI IT</strong> and <strong>FutureCitiesCouncil Inc.</strong> aim to drive technological innovation, enhance operational performance, and contribute to building a smarter, more efficient digital future for clients across the globe.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 