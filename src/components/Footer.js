import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-bottom">
      &copy; {new Date().getFullYear()} PMI IT. All rights reserved.
    </div>
  </footer>
);

export default Footer; 