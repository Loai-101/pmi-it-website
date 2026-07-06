import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowUp,
} from 'lucide-react';
import { contactInfo } from '../data/contactInfo';
import { scrollToSection } from '../utils/scrollToSection';
import './Footer.css';

const LOGO_URL =
  'https://res.cloudinary.com/dvybb2xnc/image/upload/v1751550832/pmi-it-logo_pegnsp.png';

const InstagramIcon = ({ size = 18, strokeWidth = 1.85 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const COMPANY_DESCRIPTION =
  'Empowering organizations through innovative software, enterprise solutions, and digital transformation.';

const QUICK_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Countries', id: 'countries' },
  { label: 'Team', id: 'teams' },
  { label: 'Contact', id: 'contact' },
];

const SOLUTIONS = [
  'Odoo Development',
  'Custom Software',
  'Mobile Apps',
  'ERP Systems',
  'Healthcare Systems',
  'Enterprise Solutions',
];

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: '-80px' });

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="footer" id="contact">
      <div className="footer-gradient-line" aria-hidden="true" />

      <motion.div
        className="footer-shell"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="footer-main">
          <div className="footer-grid">
            {/* Column 1 — Company */}
            <div className="footer-col footer-col--company">
              <div className="footer-brand-block">
                <img src={LOGO_URL} alt="PMI IT Logo" className="footer-logo" />
                <span className="footer-brand-name">PMI IT Solutions</span>
              </div>
              <p className="footer-description">{COMPANY_DESCRIPTION}</p>
              <div className="footer-social" aria-label="Social and contact links">
                <a
                  href={contactInfo.instagramHref}
                  className="footer-social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={contactInfo.emailHref}
                  className="footer-social-btn"
                  aria-label="Email"
                  title="Email"
                >
                  <Mail size={18} strokeWidth={1.85} />
                </a>
                <a
                  href={contactInfo.phoneHref}
                  className="footer-social-btn"
                  aria-label="Phone"
                  title="Phone"
                >
                  <Phone size={18} strokeWidth={1.85} />
                </a>
              </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div className="footer-col">
              <h3 className="footer-col-title">Quick Links</h3>
              <nav className="footer-links" aria-label="Footer navigation">
                {QUICK_LINKS.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    className="footer-link"
                    onClick={() => scrollToSection(link.id)}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Column 3 — Solutions */}
            <div className="footer-col">
              <h3 className="footer-col-title">Solutions</h3>
              <nav className="footer-links" aria-label="Solutions">
                {SOLUTIONS.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="footer-link"
                    onClick={() => scrollToSection('services')}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Column 4 — Contact */}
            <div className="footer-col">
              <h3 className="footer-col-title">Contact Information</h3>
              <ul className="footer-contact-list">
                <li>
                  <a href={contactInfo.phoneHref} className="footer-contact-item">
                    <Phone size={16} strokeWidth={1.85} aria-hidden="true" />
                    <span>{contactInfo.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={contactInfo.emailHref} className="footer-contact-item">
                    <Mail size={16} strokeWidth={1.85} aria-hidden="true" />
                    <span>{contactInfo.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={contactInfo.websiteHref}
                    className="footer-contact-item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe size={16} strokeWidth={1.85} aria-hidden="true" />
                    <span>{contactInfo.websiteHref.replace(/^https?:\/\//, '')}</span>
                  </a>
                </li>
                <li>
                  <span className="footer-contact-item footer-contact-item--static">
                    <MapPin size={16} strokeWidth={1.85} aria-hidden="true" />
                    <span>Gulf Region</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollTop}
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp size={20} strokeWidth={2} />
          </button>
        </div>

        <div className="footer-bottom-bar">
          <p className="footer-bottom-item footer-bottom-item--left">
            &copy; 2022 PMI IT Solutions. All Rights Reserved.
          </p>
          <p className="footer-bottom-item footer-bottom-item--center">
            Made with <span className="footer-heart" aria-hidden="true">❤️</span> by PMI IT Solutions
          </p>
          <p className="footer-bottom-item footer-bottom-item--right footer-company">
            Digital Transformation Partner
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
