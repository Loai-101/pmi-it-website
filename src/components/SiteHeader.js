import React from 'react';
import TopContactBar from './TopContactBar';
import HeaderBanner from './HeaderBanner';
import Navbar from './Navbar';
import './SiteHeader.css';

const SiteHeader = () => (
  <header className="site-header">
    <TopContactBar />
    <HeaderBanner />
    <Navbar />
  </header>
);

export default SiteHeader;
