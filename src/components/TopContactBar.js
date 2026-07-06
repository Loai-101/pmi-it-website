import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { contactInfo } from '../data/contactInfo';
import './TopContactBar.css';

const TopContactBar = () => (
  <div className="top-contact-bar" role="region" aria-label="Contact information">
    <div className="top-contact-bar-inner">
      <div className="top-contact-details">
        <a href={contactInfo.phoneHref} className="top-contact-item" title={`Call us at ${contactInfo.phone}`}>
          <Phone size={14} strokeWidth={2} aria-hidden="true" />
          <span>{contactInfo.phone}</span>
        </a>
        <a href={contactInfo.emailHref} className="top-contact-item" title={`Email us at ${contactInfo.email}`}>
          <Mail size={14} strokeWidth={2} aria-hidden="true" />
          <span>{contactInfo.email}</span>
        </a>
      </div>

      <div className="top-contact-actions">
        <a
          href={contactInfo.whatsappHref}
          className="top-contact-icon whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          title={`WhatsApp us at ${contactInfo.phone}`}
          aria-label={`WhatsApp us at ${contactInfo.phone}`}
        >
          <MessageCircle size={15} strokeWidth={2} />
        </a>
        <a
          href={contactInfo.instagramHref}
          className="top-contact-icon instagram"
          target="_blank"
          rel="noopener noreferrer"
          title="Follow us on Instagram @pmi_it"
          aria-label="Follow us on Instagram @pmi_it"
        >
          <FaInstagram size={14} />
        </a>
      </div>
    </div>
  </div>
);

export default TopContactBar;
