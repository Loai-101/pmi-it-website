import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa';
import './PartnershipSlider.css';

const PartnershipSlider = ({ slides = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleParagraphs, setVisibleParagraphs] = useState([]);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide(current => (current === slides.length - 1 ? 0 : current + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide(current => (current === 0 ? slides.length - 1 : current - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
    
    // If pausing, show all paragraphs immediately
    if (!isPaused) {
      const currentSlideData = slides[currentSlide];
      if (currentSlideData && currentSlideData.description) {
        const paragraphs = currentSlideData.description.split('\n\n');
        // Show all paragraphs immediately
        setVisibleParagraphs(paragraphs.map((_, index) => index));
      }
    }
  };

  // Reset and animate paragraphs when slide changes
  useEffect(() => {
    console.log('Slide changed to:', currentSlide);
    setVisibleParagraphs([]);
    
    const currentSlideData = slides[currentSlide];
    if (currentSlideData && currentSlideData.description) {
      const paragraphs = currentSlideData.description.split('\n\n');
      console.log('Found paragraphs:', paragraphs.length);
      
      // If paused, show all paragraphs immediately
      if (isPaused) {
        setVisibleParagraphs(paragraphs.map((_, index) => index));
        return;
      }
      
      // Animate paragraphs one by one with a slight initial delay
      setTimeout(() => {
        paragraphs.forEach((_, index) => {
          setTimeout(() => {
            console.log('Making paragraph visible:', index);
            setVisibleParagraphs(prev => {
              const newVisible = [...prev, index];
              console.log('Visible paragraphs:', newVisible);
              return newVisible;
            });
          }, index * 1000); // 1000ms delay between each paragraph
        });
      }, 500); // Initial delay before starting animations
    }
  }, [currentSlide, slides, isPaused]);

  // Auto-slide every 6 seconds (longer for reading) - only when not paused
  useEffect(() => {
    if (isPaused) return; // Don't auto-slide when paused
    
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  if (slides.length === 0) {
    return null;
  }

  return (
    <div className="partnership-slider">
      <div className="partnership-slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={`slide-${index}-${currentSlide}`} className={`partnership-slide ${slide.showLogos ? 'text-only' : 'image-only'}`}>
            {slide.showLogos && (
              <div className="partnership-content">
                <div className="partnership-description">
                  {slide.description && slide.description.split('\n\n').map((paragraph, idx) => (
                    <p 
                      key={`paragraph-${idx}-${currentSlide}`}
                      className={`partnership-paragraph ${visibleParagraphs.includes(idx) ? 'visible' : ''}`}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    ></p>
                  ))}
                </div>
              </div>
            )}
            {slide.image && (
              <div className="partnership-image" style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <img 
                  src={slide.image} 
                  alt="Partnership Agreement"
                  style={{ width: '100%', maxWidth: '900px', maxHeight: '80vh', objectFit: 'contain', margin: '0 auto', boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="partnership-nav prev" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className="partnership-nav next" onClick={nextSlide}>
        <FaChevronRight />
      </button>

      {/* Pause/Play Button */}
      <button 
        className="partnership-pause-btn" 
        onClick={togglePause} 
        title={isPaused ? "Resume auto-slide & animations" : "Pause auto-slide & show all content"}
      >
        {isPaused ? <FaPlay /> : <FaPause />}
      </button>

      {/* Slide Counter */}
      <div className="partnership-counter">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Dots Indicator */}
      <div className="partnership-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`partnership-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnershipSlider; 