import { useState, useEffect } from 'react';

const SECTION_IDS = ['home', 'services', 'projects', 'countries', 'teams', 'contact'];

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      let current = 'home';
      for (const id of SECTION_IDS) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
};
