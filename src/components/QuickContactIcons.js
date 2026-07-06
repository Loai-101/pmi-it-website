import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, PhoneCall } from 'lucide-react';
import { contactInfo } from '../data/contactInfo';
import './QuickContactIcons.css';

const InstagramIcon = ({ size = 20, strokeWidth = 1.85 }) => (
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

const renderItemIcon = (item) => {
  if (item.logo) {
    return (
      <img
        src={item.logo}
        alt=""
        className="floating-contact-logo"
        loading="lazy"
      />
    );
  }

  if (item.id === 'instagram') {
    return <InstagramIcon />;
  }

  const LucideIcon = item.lucideIcon;
  return <LucideIcon size={20} strokeWidth={1.85} aria-hidden="true" />;
};

const contactItems = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: contactInfo.instagramHref,
    external: true,
  },
  {
    id: 'website',
    label: 'Official Website',
    href: contactInfo.websiteHref,
    external: true,
    logo: contactInfo.websiteLogo,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: contactInfo.whatsappHref,
    external: true,
    lucideIcon: MessageCircle,
  },
  {
    id: 'email',
    label: 'Email',
    href: contactInfo.emailHref,
    external: false,
    lucideIcon: Mail,
  },
  {
    id: 'call',
    label: 'Call',
    href: contactInfo.phoneHref,
    external: false,
    lucideIcon: PhoneCall,
  },
];

const QuickContactIcons = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return undefined;

    const addValueSection = document.querySelector('.add-value-quote');
    if (!addValueSection) return undefined;

    const updateVisibility = () => {
      const rect = addValueSection.getBoundingClientRect();
      setIsVisible(rect.bottom <= window.innerHeight * 0.72);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, [mounted]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isVisible && (
    <aside className="floating-contact-bar is-visible" aria-label="Quick contact and social links">
      <motion.div
        className="floating-contact-bar-motion"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -16 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <ul className="floating-contact-list">
        {contactItems.map((item) => (
          <li key={item.id} className="floating-contact-cell">
            <a
              href={item.href}
              className="floating-contact-btn"
              data-tooltip={item.label}
              {...(item.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              aria-label={item.label}
            >
              {renderItemIcon(item)}
            </a>
          </li>
        ))}
        </ul>
      </motion.div>
    </aside>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default QuickContactIcons;
