import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';
import { scrollToSection } from '../utils/scrollToSection';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'countries', label: 'Countries' },
  { id: 'teams', label: 'Team' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  const getActiveClass = (sectionId) => {
    if (sectionId === 'home') {
      return activeSection === 'home' ? 'nav-link active' : 'nav-link';
    }
    return activeSection === sectionId ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      <div className="navbar-container">
        <button type="button" className="menu-icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
        </button>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                type="button"
                className={getActiveClass(item.id)}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
