import React from 'react';
import SectionTitle from './SectionTitle';
import { partnerLogos } from '../data/partnerLogos';
import './PartnersMarquee.css';

const REGION_FLAGS = [
  { code: 'bh', name: 'Bahrain' },
  { code: 'sa', name: 'Saudi Arabia' },
  { code: 'ae', name: 'UAE' },
  { code: 'kw', name: 'Kuwait' },
  { code: 'om', name: 'Oman' },
  { code: 'qa', name: 'Qatar' },
  { code: 'tn', name: 'Tunisia' },
  { code: 'fr', name: 'France' },
  { code: 'de', name: 'Germany' },
];

const MarqueeItem = ({ partner }) => (
  <div className="partners-marquee-item">
    <div className="partners-marquee-logo">
      <img src={partner.image} alt={partner.alt} loading="lazy" />
    </div>
    <span className="partners-marquee-label">{partner.title}</span>
  </div>
);

const PartnersMarquee = () => {
  const items = partnerLogos.map((partner, index) => (
    <MarqueeItem partner={partner} key={`a-${partner.title}-${index}`} />
  ));

  const itemsDuplicate = partnerLogos.map((partner, index) => (
    <MarqueeItem partner={partner} key={`b-${partner.title}-${index}`} />
  ));

  return (
    <section className="partners-marquee-section" aria-label="Trusted by Industry Leaders">
      <div className="partners-marquee-bar">
        <div className="partners-marquee-header">
          <SectionTitle
            as="h2"
            className="section-title-block--compact"
            title="Trusted by Industry Leaders"
          />
          <div className="partners-region-flags" aria-label="Countries we serve">
            {REGION_FLAGS.map((country) => (
              <img
                key={country.code}
                src={`https://flagcdn.com/w40/${country.code}.png`}
                alt={`${country.name} flag`}
                className="partners-region-flag"
                loading="lazy"
                width="28"
                height="20"
              />
            ))}
          </div>
        </div>

        <div className="partners-marquee-fade partners-marquee-fade-left" aria-hidden="true" />
        <div className="partners-marquee-fade partners-marquee-fade-right" aria-hidden="true" />

        <div className="partners-marquee-viewport">
          <div className="partners-marquee-track">
            <div className="partners-marquee-row">{items}</div>
            <div className="partners-marquee-row" aria-hidden="true">{itemsDuplicate}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
