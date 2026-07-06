import React, { useState } from 'react';
import './HeaderBanner.css';

const PMI_LOGO_LOCAL = `${process.env.PUBLIC_URL}/pmi-it-logo.png`;
const PMI_LOGO_REMOTE =
  'https://res.cloudinary.com/dvybb2xnc/image/upload/v1751550832/pmi-it-logo_pegnsp.png';

const BANNER_IMAGE_SRC =
  'https://res.cloudinary.com/dvybb2xnc/image/upload/v1783333390/ChatGPT_Image_Jul_6_2026_01_21_52_PM_iuw4k7.png';

const HeaderBanner = () => {
  const [logoSrc, setLogoSrc] = useState(PMI_LOGO_LOCAL);

  return (
    <section className="header-banner" aria-label="Header banner area">
      <div className="header-banner-frame">
        <img src={BANNER_IMAGE_SRC} alt="" className="header-banner-image" />
        <div className="header-banner-brand">
          <img
            src={logoSrc}
            alt="PMI IT Logo"
            className="header-banner-logo"
            width={72}
            height={72}
            loading="eager"
            decoding="async"
            onError={() => {
              if (logoSrc !== PMI_LOGO_REMOTE) {
                setLogoSrc(PMI_LOGO_REMOTE);
              }
            }}
          />
          <span className="header-banner-title">PMI IT Solutions</span>
        </div>
      </div>
    </section>
  );
};

export default HeaderBanner;
