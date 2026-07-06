import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Home from './Home';
import Services from './Services';
import Projects from './Projects';
import Team from './Teams';
import QuickContactIcons from '../components/QuickContactIcons';
import { scrollToSection } from '../utils/scrollToSection';
import '../styles/landing.css';
import '../styles/premium.css';
import '../styles/section-surfaces.css';
import '../styles/responsive.css';

const Landing = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const timer = setTimeout(() => {
        scrollToSection(hash);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <div className="landing-page">
      <Helmet>
        <title>PMI IT - Professional IT Services & Solutions | Gulf Region</title>
        <meta name="description" content="PMI IT delivers comprehensive software solutions, custom development, Odoo ERP systems, and mobile apps. Your trusted technology partner in the Gulf Region for digital transformation." />
        <meta name="keywords" content="IT services, software development, Odoo ERP, mobile apps, digital transformation, Gulf Region, custom software" />
        <link rel="canonical" href="https://it-solutions.pmi-me.net/" />

        <meta property="og:title" content="PMI IT - Professional IT Services & Solutions" />
        <meta property="og:description" content="Comprehensive software solutions, custom development, Odoo ERP systems, and mobile apps. Your trusted technology partner in the Gulf Region." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://it-solutions.pmi-me.net/" />
        <meta property="og:image" content="https://res.cloudinary.com/dvybb2xnc/image/upload/v1751550832/pmi-it-logo_pegnsp.png" />
        <meta property="og:site_name" content="PMI IT" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PMI IT - Professional IT Services & Solutions" />
        <meta name="twitter:description" content="Comprehensive software solutions, custom development, Odoo ERP systems, and mobile apps. Your trusted technology partner in the Gulf Region." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dvybb2xnc/image/upload/v1751550832/pmi-it-logo_pegnsp.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PMI IT",
            "url": "https://it-solutions.pmi-me.net",
            "logo": "https://res.cloudinary.com/dvybb2xnc/image/upload/v1751550832/pmi-it-logo_pegnsp.png",
            "description": "Professional IT Services and Solutions in the Gulf Region",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Gulf Region"
            },
            "sameAs": []
          })}
        </script>
      </Helmet>

      <Home />
      <Services />
      <Projects />
      <Team />
      <QuickContactIcons />
    </div>
  );
};

export default Landing;
