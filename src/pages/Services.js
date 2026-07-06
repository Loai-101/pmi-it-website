import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import SectionReveal from '../components/SectionReveal';
import SectionTitle from '../components/SectionTitle';
import './Services.css';
import { FaCode, FaCogs, FaBuilding, FaShoppingCart, FaIndustry, FaShip, FaHospital, FaCar, FaHandshake, FaUsers, FaChartLine, FaLaptopCode, FaServer, FaGlobe, FaShieldAlt, FaRocket, FaPalette, FaNetworkWired } from 'react-icons/fa';
import { SiOdoo } from 'react-icons/si';
import { getWhatsAppUrl } from '../data/contactInfo';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleWhatsAppClick = (serviceName) => {
    const message = `Hi! I'm interested in your ${serviceName} service. Can you provide more information?`;
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const handleServiceClick = (service) => {
    setSelectedService(selectedService?.id === service.id ? null : service);
  };

  const closeServiceDetails = () => {
    setSelectedService(null);
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

  // Detailed services data
  const detailedServices = [
    {
      id: 1,
      title: "Odoo Development",
      icon: <SiOdoo />,
      color: "#714B67",
      description: "Comprehensive Odoo solutions for business automation",
      details: {
        coreCompetencies: [
          "Business consulting and needs assessment",
          "Odoo backend development (custom modules, workflows, automation)",
          "Odoo frontend development (custom UI, themes, website builder)",
          "Web services and API integration (REST, XML-RPC, external systems)"
        ],
        deploymentModels: [
          "SaaS (Cloud-based) solutions",
          "On-premise deployments on client infrastructure"
        ],
        sectorExpertise: [
          "Healthcare: Clinics and medical centers",
          "Maritime and shipping logistics",
          "Industrial sectors: Agro-food, chemicals, carpentry, construction",
          "E-commerce and online retail",
          "Automotive spare parts distribution",
          "NGOs and funding agencies"
        ]
      }
    },
    {
      id: 2,
      title: "Custom Software Development",
      icon: <FaCode />,
      color: "#667eea",
      description: "Tailored software solutions for your business needs",
      details: {
        coreCompetencies: [
          "Business consulting and technical needs analysis",
          "Software architecture and system design",
          "Data architecture and database modeling",
          "Development of AI-powered solutions (prediction, automation, intelligent processing)"
        ],
        technologies: [
          "Frontend: Angular, React, ReactJS",
          "Backend: Java, Spring Boot",
          "API & Web Services: RESTful APIs, Microservices architecture"
        ],
        sectorExpertise: [
          "Point of Sale (POS) systems and retail platforms",
          "Corporate and governmental portals",
          "Electronic Document Management Systems (EDMS)",
          "Information systems for ministries and public institutions",
          "Product and supplier catalog platforms",
          "Human Resources self-service portals (HR Portals)"
        ]
      }
    },
    {
      id: 3,
      title: "Enterprise Solutions",
      icon: <FaBuilding />,
      color: "#764ba2",
      description: "Large-scale solutions for government and corporate sectors",
      details: {
        coreCompetencies: [
          "Enterprise architecture design",
          "System integration and migration",
          "Legacy system modernization",
          "Scalable infrastructure planning"
        ],
        deploymentModels: [
          "On-premise enterprise deployments",
          "Hybrid cloud solutions",
          "Multi-tenant architectures"
        ],
        sectorExpertise: [
          "Government ministries and institutions",
          "Large corporations and multinationals",
          "Financial institutions and banks",
          "Healthcare systems and hospitals",
          "Educational institutions",
          "Transportation and logistics"
        ]
      }
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      icon: <FaShoppingCart />,
      color: "#f093fb",
      description: "Complete e-commerce platforms and online retail solutions",
      details: {
        coreCompetencies: [
          "E-commerce platform development",
          "Payment gateway integration",
          "Inventory management systems",
          "Customer relationship management"
        ],
        technologies: [
          "Odoo E-commerce",
          "Custom e-commerce platforms",
          "Mobile commerce applications",
          "Multi-channel retail solutions"
        ],
        sectorExpertise: [
          "Online retail and marketplaces",
          "B2B e-commerce platforms",
          "Subscription-based services",
          "Digital product sales",
          "Auction and bidding platforms",
          "Social commerce integration"
        ]
      }
    },
    {
      id: 5,
      title: "Healthcare Systems",
      icon: <FaHospital />,
      color: "#4facfe",
      description: "Specialized healthcare management and patient care systems",
      details: {
        coreCompetencies: [
          "Electronic Health Records (EHR) systems",
          "Patient management and scheduling",
          "Medical billing and insurance integration",
          "Telemedicine platform development"
        ],
        technologies: [
          "HIPAA-compliant systems",
          "Medical device integration",
          "Health data analytics",
          "Mobile health applications"
        ],
        sectorExpertise: [
          "Hospitals and medical centers",
          "Clinics and private practices",
          "Pharmaceutical companies",
          "Medical laboratories",
          "Health insurance providers",
          "Medical research institutions"
        ]
      }
    },
    {
      id: 6,
      title: "Logistics & Maritime",
      icon: <FaShip />,
      color: "#43e97b",
      description: "Comprehensive logistics and maritime management solutions",
      details: {
        coreCompetencies: [
          "Supply chain management systems",
          "Fleet and vessel tracking",
          "Cargo and container management",
          "Port operations optimization"
        ],
        technologies: [
          "IoT and sensor integration",
          "GPS and tracking systems",
          "Real-time monitoring platforms",
          "Predictive analytics"
        ],
        sectorExpertise: [
          "Shipping companies and fleets",
          "Port authorities and terminals",
          "Freight forwarders",
          "Maritime logistics providers",
          "Customs and border control",
          "Maritime insurance companies"
        ]
      }
    }
  ];

  return (
    <SectionReveal id="services" className="services">
      {/* Detailed Services Section */}
      <div className="detailed-services-section">
        <div className="container">
          <SectionTitle
            as="h1"
            title="Solutions Designed for Growth"
          />
          
          <div className="detailed-services-grid">
            {detailedServices.map((service, index) => (
              <div 
                key={service.id} 
                className={`detailed-service-card ${selectedService?.id === service.id ? 'active' : ''}`}
                onClick={() => handleServiceClick(service)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-card-icon" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Service Details Modal */}
          {selectedService && createPortal(
            <div className="service-details-modal" onClick={closeServiceDetails}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={closeServiceDetails}>×</button>
                <div className="modal-header">
                  <div className="modal-icon" style={{ color: selectedService.color }}>
                    {selectedService.icon}
                  </div>
                  <div className="modal-info">
                    <h2>{selectedService.title}</h2>
                    <p className="modal-description">{selectedService.description}</p>
                  </div>
                </div>
                <div className="modal-body">
                  {selectedService.details.coreCompetencies && (
                    <div className="modal-section">
                      <h3>Core Competencies</h3>
                      <ul>
                        {selectedService.details.coreCompetencies.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {selectedService.details.deploymentModels && (
                    <div className="modal-section">
                      <h3>Deployment Models</h3>
                      <ul>
                        {selectedService.details.deploymentModels.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {selectedService.details.technologies && (
                    <div className="modal-section">
                      <h3>Technologies Used</h3>
                      <ul>
                        {selectedService.details.technologies.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {selectedService.details.sectorExpertise && (
                    <div className="modal-section">
                      <h3>Sector Expertise</h3>
                      <ul>
                        {selectedService.details.sectorExpertise.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="modal-footer">
                  <button 
                    className="contact-btn"
                    onClick={() => handleWhatsAppClick(selectedService.title)}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>,
            document.body
          )}
        </div>
      </div>

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

    </SectionReveal>
  );
};

export default Services; 