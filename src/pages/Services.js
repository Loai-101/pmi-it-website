import React, { useState, useEffect } from 'react';
import './Services.css';
import { FaCode, FaCogs, FaBuilding, FaMobile, FaDatabase, FaCloud, FaJava, FaShoppingCart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { 
  SiJavascript, SiPython, SiCplusplus, SiPhp, SiRuby, SiGo, SiRust, SiSwift, SiKotlin, SiReact, SiAngular, SiVuedotjs, SiNodedotjs, SiDjango, SiLaravel, SiSpring, SiDotnet, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiDocker, SiKubernetes, SiGooglecloud, SiFirebase, SiFlutter, SiIonic, SiOdoo, SiWordpress, SiShopify, SiMagento, SiPrestashop
} from 'react-icons/si';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleWhatsAppClick = (serviceName) => {
    const phoneNumber = '+1234567890'; // Replace with your actual WhatsApp number
    const message = `Hi! I'm interested in your ${serviceName} service. Can you provide more information?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const technologies = {
    programmingLanguages: [
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
      { name: 'Python', icon: <SiPython />, color: '#3776AB' },
      { name: 'Java', icon: <FaJava />, color: '#ED8B00' },
      { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
      { name: 'C#', icon: <SiDotnet />, color: '#512BD4' },
      { name: 'PHP', icon: <SiPhp />, color: '#777BB4' },
      { name: 'Ruby', icon: <SiRuby />, color: '#CC342D' },
      { name: 'Go', icon: <SiGo />, color: '#00ADD8' },
      { name: 'Rust', icon: <SiRust />, color: '#000000' },
      { name: 'Swift', icon: <SiSwift />, color: '#FA7343' },
      { name: 'Kotlin', icon: <SiKotlin />, color: '#7F52FF' }
    ],
    frameworks: [
      { name: 'React', icon: <SiReact />, color: '#61DAFB' },
      { name: 'Angular', icon: <SiAngular />, color: '#DD0031' },
      { name: 'Vue.js', icon: <SiVuedotjs />, color: '#4FC08D' },
      { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
      { name: 'Django', icon: <SiDjango />, color: '#092E20' },
      { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20' },
      { name: 'Spring', icon: <SiSpring />, color: '#6DB33F' },
      { name: '.NET', icon: <SiDotnet />, color: '#512BD4' }
    ],
    databases: [
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
      { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
      { name: 'Redis', icon: <SiRedis />, color: '#DC382D' }
    ],
    mobileDevelopment: [
      { name: 'React Native', icon: <div style={{fontSize: '2.5rem', color: '#61DAFB'}}>📱</div>, color: '#61DAFB' },
      { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
      { name: 'Ionic', icon: <SiIonic />, color: '#3880FF' },
      { name: 'Cordova', icon: <FaMobile />, color: '#E8E8E8' },
      { name: 'Swift', icon: <SiSwift />, color: '#FA7343' },
      { name: 'Kotlin', icon: <SiKotlin />, color: '#7F52FF' }
    ],
    ecommerce: [
      { name: 'Odoo', icon: <SiOdoo />, color: '#714B67' },
      { name: 'WordPress', icon: <SiWordpress />, color: '#21759B' },
      { name: 'Shopify', icon: <SiShopify />, color: '#7AB55C' },
      { name: 'Magento', icon: <SiMagento />, color: '#EE6723' },
      { name: 'OpenCart', icon: <FaShoppingCart />, color: '#2D5C88' },
      { name: 'PrestaShop', icon: <SiPrestashop />, color: '#DF0067' }
    ],
    cloudDevOps: [
      { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
      { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
      { name: 'AWS', icon: <FaCloud />, color: '#FF9900' },
      { name: 'Google Cloud', icon: <SiGooglecloud />, color: '#4285F4' },
      { name: 'Azure', icon: <FaCloud />, color: '#0078D4' },
      { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' }
    ]
  };

  const technologyCategories = [
    { key: 'programmingLanguages', title: 'Programming Languages', icon: <FaCode /> },
    { key: 'frameworks', title: 'Frameworks & Libraries', icon: <FaCogs /> },
    { key: 'mobileDevelopment', title: 'Mobile Development', icon: <FaMobile /> },
    { key: 'ecommerce', title: 'E-commerce & CMS', icon: <FaDatabase /> },
    { key: 'databases', title: 'Databases', icon: <FaDatabase /> },
    { key: 'cloudDevOps', title: 'Cloud & DevOps', icon: <FaCloud /> }
  ];

  const nextSlide = () => {
    setCurrentSlide(current => 
      current === technologyCategories.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(current => 
      current === 0 ? technologyCategories.length - 1 : current - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, currentSlide]);

  const handleSliderInteraction = () => {
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: "Custom Development from Scratch",
      subtitle: "Full-Cycle Development",
      description: "We offer full-cycle development services to build systems, applications, or websites from the ground up using any programming language that fits the project.",
      details: "From concept to deployment, we transform ideas into fully functional digital solutions designed for scalability and innovation.",
      features: [
        "Custom system development",
        "Multi-language support",
        "Scalable architecture",
        "End-to-end solutions"
      ],
      popular: false
    },
    {
      id: 2,
      icon: <FaCogs />,
      title: "Ready-Made Systems by PMI IT",
      subtitle: "Pre-Built Solutions",
      description: "We provide a range of pre-built systems developed in-house, which can be customized to match your business needs.",
      details: "These solutions offer fast deployment, cost-efficiency, and high quality without compromising flexibility.",
      features: [
        "Pre-built systems",
        "Customizable solutions",
        "Fast deployment",
        "Cost-effective"
      ],
      popular: true
    },
    {
      id: 3,
      icon: <FaBuilding />,
      title: "Enterprise Solutions",
      subtitle: "Public & Private Sectors",
      description: "We specialize in building fully integrated systems for both government and private organizations, enabling centralized control and seamless connectivity across departments.",
      details: "Drive efficiency and support complete digital transformation with our enterprise-grade solutions.",
      features: [
        "Government systems",
        "Private sector solutions",
        "Centralized control",
        "Digital transformation"
      ],
      popular: false
    }
  ];

  return (
    <div className="services">
      <div className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div 
                key={service.id} 
                className={`service-card ${service.popular ? 'popular' : ''}`}
              >
                {service.popular && <div className="popular-badge">Most Popular</div>}
                
                <div className="service-icon">
                  {service.icon}
                </div>
                
                <div className="service-header">
                  <h3>{service.title}</h3>
                  <p className="service-subtitle">{service.subtitle}</p>
                </div>
                
                <div className="service-description">
                  <p>{service.description}</p>
                  <p className="service-details">{service.details}</p>
                </div>
                
                <div className="service-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>
                        <span className="feature-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="service-cta">
                  <button 
                    className="service-btn"
                    onClick={() => handleWhatsAppClick(service.title)}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Showcase Section */}
      <div className="technology-showcase">
        <div className="container">
          <div className="showcase-header">
            <h2>🛠️ Technologies We Master</h2>
            <p>Comprehensive expertise across all major programming languages, frameworks, and platforms</p>
          </div>

          <div className="technology-slider">
            <div className="slide-counter">
              {currentSlide + 1} / {technologyCategories.length}
            </div>
            <div 
              className="technology-slider-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {technologyCategories.map((category, index) => (
                <div key={category.key} className="tech-category">
                  <h3>{category.icon} {category.title}</h3>
                  <div className="tech-grid">
                    {technologies[category.key].map((tech, techIndex) => (
                      <div key={techIndex} className="tech-item" style={{ '--tech-color': tech.color }}>
                        <div className="tech-icon">{tech.icon}</div>
                        <span className="tech-name">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows - Matching Home Page Style */}
            <button 
              className="slider-nav prev"
              onClick={() => {
                prevSlide();
                handleSliderInteraction();
              }}
              disabled={currentSlide === 0}
            >
              <FaChevronLeft />
            </button>
            
            <button 
              className="slider-nav next"
              onClick={() => {
                nextSlide();
                handleSliderInteraction();
              }}
              disabled={currentSlide === technologyCategories.length - 1}
            >
              <FaChevronRight />
            </button>

            {/* Dots Indicator - Matching Home Page Style */}
            <div className="slider-dots">
              {technologyCategories.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => {
                    goToSlide(index);
                    handleSliderInteraction();
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 