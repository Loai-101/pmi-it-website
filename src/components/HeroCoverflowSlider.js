import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation, Keyboard } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { contactInfo } from '../data/contactInfo';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './HeroCoverflow.css';

const HeroCoverflowSlider = ({ slides }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="hero-coverflow" aria-label="Hero slider">
      <div className="hero-coverflow-bg" aria-hidden="true" />
      <div className="hero-coverflow-grid" aria-hidden="true" />
      <div className="hero-coverflow-glow" aria-hidden="true" />

      <div className="hero-coverflow-inner">
        <div className="hero-coverflow-carousel">
          <Swiper
            className="hero-coverflow-swiper"
            modules={[EffectCoverflow, Autoplay, Navigation, Keyboard]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            loop
            speed={700}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            keyboard={{ enabled: true, onlyInViewport: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: -24,
              depth: 200,
              modifier: 1.6,
              slideShadows: false,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="hero-coverflow-slide">
                <div className="coverflow-slide-card">
                  <img src={slide.image} alt="" className="coverflow-slide-img" />
                  <div className="coverflow-slide-shade" aria-hidden="true" />
                  <div className="coverflow-slide-content">
                    <div className="slide-logo">
                      <img
                        alt="PMI IT Logo"
                        className="pmi-logo"
                        src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1751550832/pmi-it-logo_pegnsp.png"
                      />
                    </div>
                    <h1 className="slide-title">{slide.title}</h1>
                    <h2 className="slide-subtitle">{slide.subtitle}</h2>
                    <p className="slide-description">{slide.description}</p>
                    <a
                      href={contactInfo.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-button"
                    >
                      Get Started
                      <ArrowRight size={14} strokeWidth={2.5} className="cta-arrow" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            ref={prevRef}
            className="hero-coverflow-nav hero-coverflow-prev"
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} strokeWidth={2} />
          </button>
          <button
            type="button"
            ref={nextRef}
            className="hero-coverflow-nav hero-coverflow-next"
            aria-label="Next slide"
          >
            <ChevronRight size={22} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroCoverflowSlider;
