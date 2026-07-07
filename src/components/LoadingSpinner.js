import React, { useState, useEffect } from 'react';
import './LoadingSpinner.css';

const PMI_LOGO_LOCAL = `${process.env.PUBLIC_URL}/pmi-it-logo.png`;
const PMI_LOGO_REMOTE =
  'https://res.cloudinary.com/dvybb2xnc/image/upload/v1751550832/pmi-it-logo_pegnsp.png';
const BACKGROUND_IMAGE =
  'https://res.cloudinary.com/dvybb2xnc/image/upload/v1783333390/ChatGPT_Image_Jul_6_2026_01_21_52_PM_iuw4k7.png';

const LoadingSpinner = ({ isLoading = true, onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [logoSrc, setLogoSrc] = useState(PMI_LOGO_LOCAL);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setIsVisible(false);

      const timer = setTimeout(() => {
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isLoading, onLoadingComplete]);

  useEffect(() => {
    if (!isLoading) return undefined;

    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 92 ? prev : prev + Math.random() * 12));
    }, 280);

    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
    }
  }, [isLoading]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`loading-spinner ${!isLoading ? 'fade-out' : ''}`} role="status" aria-live="polite">
      <img
        src={BACKGROUND_IMAGE}
        alt=""
        className="loading-bg-image"
        decoding="async"
      />
      <div className="loading-bg-shade" aria-hidden="true" />
      <div className="loading-spinner-glow" aria-hidden="true" />

      <div className="loading-spinner-inner">
        <div className="loading-hero-brand">
          <img
            src={logoSrc}
            alt="PMI IT Logo"
            className="loading-hero-logo"
            width={72}
            height={72}
            decoding="async"
            onError={() => {
              if (logoSrc !== PMI_LOGO_REMOTE) {
                setLogoSrc(PMI_LOGO_REMOTE);
              }
            }}
          />
          <span className="loading-hero-title">PMI IT Solutions</span>
        </div>

        <div className="loading-progress" aria-hidden="true">
          <div className="loading-progress-track">
            <div
              className="loading-progress-bar"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>

        <p className="loading-text">Loading PMI IT Solutions</p>
        <p className="loading-subtitle">Preparing your experience...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
