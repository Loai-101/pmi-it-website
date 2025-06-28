import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaProjectDiagram, FaEnvelope, FaWhatsapp, FaInstagram, FaPhone, FaUsers } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { MdMiscellaneousServices } from 'react-icons/md';
import { GiFlyingFlag } from 'react-icons/gi';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleEmailClick = () => {
    window.open('mailto:info@pmi-it.com', '_blank');
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+97313676757';
    const message = 'Hi! I\'m interested in your services. Can you provide more information?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/pmi_it?igsh=MW9ydjRtdWRwMWgweQ==', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+97313676757', '_blank');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/logo.png" alt="PMI IT Logo" className="logo-img" />
          <span className="logo-text">PMI IT</span>
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              <AiFillHome className="nav-icon" /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/services" 
              className={location.pathname === '/services' ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              <MdMiscellaneousServices className="nav-icon" /> Services
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/projects" 
              className={location.pathname === '/projects' ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              <FaProjectDiagram className="nav-icon" /> Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/countries" 
              className={location.pathname === '/countries' ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              <GiFlyingFlag className="nav-icon" /> Countries
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/teams" 
              className={location.pathname === '/teams' ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              <FaUsers className="nav-icon" /> Teams
            </Link>
          </li>
        </ul>

        {/* Contact Icons */}
        <div className="contact-icons">
          <button 
            className="contact-icon phone-icon" 
            onClick={handlePhoneClick}
            title="Call us at +97313676757"
          >
            <FaPhone />
          </button>
          <button 
            className="contact-icon email-icon" 
            onClick={handleEmailClick}
            title="Email us at info@pmi-it.com"
          >
            <FaEnvelope />
          </button>
          <button 
            className="contact-icon whatsapp-icon" 
            onClick={handleWhatsAppClick}
            title="WhatsApp us at +97313676757"
          >
            <FaWhatsapp />
          </button>
          <button 
            className="contact-icon instagram-icon" 
            onClick={handleInstagramClick}
            title="Follow us on Instagram @pmi_it"
          >
            <FaInstagram />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 