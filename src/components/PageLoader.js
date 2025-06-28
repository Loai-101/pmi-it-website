import React from 'react';
import './PageLoader.css';

const PageLoader = ({ 
  text = 'Loading...', 
  size = 'medium', 
  variant = 'default',
  className = '' 
}) => {
  const getSpinnerClass = () => {
    switch (size) {
      case 'small':
        return 'page-loader-small';
      case 'large':
        return 'page-spinner';
      default:
        return 'page-spinner';
    }
  };

  const getContainerClass = () => {
    switch (variant) {
      case 'inline':
        return 'page-loader-inline';
      case 'centered':
        return 'page-loader-container';
      default:
        return 'page-loader';
    }
  };

  return (
    <div className={`${getContainerClass()} ${className}`}>
      <div className={getSpinnerClass()}></div>
      {text && <div className="page-loader-text">{text}</div>}
    </div>
  );
};

export default PageLoader; 