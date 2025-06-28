import React, { useState, useEffect } from 'react';
import './LoadingSpinner.css';
import logo from '../logo.svg';

const LoadingSpinner = ({ isLoading = true, onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [loadingText, setLoadingText] = useState('Loading PMI IT');
  const [loadingSubtitle, setLoadingSubtitle] = useState('Preparing your experience...');

  useEffect(() => {
    if (!isLoading) {
      // Start fade out animation
      setIsVisible(false);
      
      // Wait for animation to complete, then call onLoadingComplete
      const timer = setTimeout(() => {
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      }, 500); // Match the CSS transition duration

      return () => clearTimeout(timer);
    }
  }, [isLoading, onLoadingComplete]);

  useEffect(() => {
    // Rotate through different loading messages
    const messages = [
      'Loading PMI IT',
      'Initializing Services',
      'Preparing Solutions',
      'Setting Up Experience'
    ];

    const subtitles = [
      'Preparing your experience...',
      'Loading our services...',
      'Setting up solutions...',
      'Almost ready...'
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (isLoading) {
        currentIndex = (currentIndex + 1) % messages.length;
        setLoadingText(messages[currentIndex]);
        setLoadingSubtitle(subtitles[currentIndex]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`loading-spinner ${!isLoading ? 'fade-out' : ''}`}>
      <div className="spinner-container">
        <div className="logo-spinner">
          <img src={logo} alt="PMI IT Logo" />
        </div>
        <div className="spinner"></div>
        <div className="loading-text">{loadingText}</div>
        <div className="loading-subtitle">{loadingSubtitle}</div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 