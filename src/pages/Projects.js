import React, { useState, useEffect, useRef } from 'react';
import { FaBuilding, FaShip, FaHospital, FaIndustry, FaShoppingCart, FaRoad, FaIndustry as FaIndustry2, FaCar, FaCogs, FaDatabase, FaGlobe, FaUsers, FaChartLine } from 'react-icons/fa';
import { SiJavascript, SiPython, SiReact, SiAngular, SiPostgresql, SiJava, SiOracle, SiKafka, SiFlutter } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const logosGridRef = useRef(null);

  const handleProjectClick = (project) => {
    setSelectedProject(selectedProject?.id === project.id ? null : project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  // Auto-slide functionality for company logos
  useEffect(() => {
    const logosGrid = logosGridRef.current;
    if (!logosGrid) return;

    const slideInterval = setInterval(() => {
      if (logosGrid.scrollLeft >= logosGrid.scrollWidth - logosGrid.clientWidth) {
        // Reset to beginning when reaching the end
        logosGrid.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Move to next position
        logosGrid.scrollTo({ 
          left: logosGrid.scrollLeft + 200, 
          behavior: 'smooth' 
        });
      }
    }, 2000); // 2 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Integrated Beneficiary Management System",
      icon: <FaUsers />,
      color: "#667eea",
      client: "Ministry of Social Affairs, Tunisia & World Bank",
      scope: "National platform for managing social aid aligned with USP 2030 standards",
      technologies: ["ERP Odoo", "React", "OpenMIS", "OpenG2P", "Python", "PostgreSQL"],
      region: "Tunisia & USA",
      type: "Government – Social Services",
      countries: ["tn", "us"],
      description: "A comprehensive national platform designed to streamline social aid distribution and beneficiary management across Tunisia, ensuring compliance with international standards and efficient service delivery."
    },
    {
      id: 2,
      title: "Public-Private Partnership Management Platform",
      icon: <FaBuilding />,
      color: "#764ba2",
      client: "Presidency of Government – Tunisia",
      scope: "Administrative system for managing public contracts and electronic document management (EDM)",
      technologies: ["Alfresco BPM", "PostgreSQL", "React"],
      region: "Tunisia & France",
      type: "Government – Legal/Administrative",
      countries: ["tn", "fr"],
      description: "Advanced administrative platform for managing public-private partnerships with integrated electronic document management and workflow automation."
    },
    {
      id: 3,
      title: "IRADA State Project Platform",
      icon: <FaChartLine />,
      color: "#f093fb",
      client: "Tunisia Government & European Delegation",
      scope: "Integrated information platform for national development initiatives",
      technologies: ["Odoo", "React", "Python", "PostgreSQL"],
      region: "Tunisia, France, Germany",
      type: "Government – Development Projects",
      countries: ["tn", "fr", "de"],
      description: "Comprehensive platform for managing and tracking national development initiatives with multi-stakeholder collaboration and real-time monitoring capabilities."
    },
    {
      id: 4,
      title: "ERP System for Maritime Logistics",
      icon: <FaShip />,
      color: "#4facfe",
      client: "Kdamk Shipping Company (Top 3 in Tunisia)",
      scope: "End-to-end ERP for shipping, forwarding, customs, and marine operations",
      technologies: ["ERP Odoo", "PostgreSQL"],
      region: "Tunisia",
      type: "Maritime & Transport",
      countries: ["tn"],
      description: "Complete maritime logistics solution covering shipping operations, customs management, and marine services for one of Tunisia's leading shipping companies."
    },
    {
      id: 5,
      title: "SAAS ERP for Healthcare",
      icon: <FaHospital />,
      color: "#43e97b",
      client: "Confidential – KSA",
      scope: "Healthcare ERP aligned with CBHI, National ID, SEHA, Nafis & PACS standards",
      technologies: ["Odoo", "Python", "PostgreSQL"],
      region: "Saudi Arabia",
      type: "Government – Healthcare",
      countries: ["sa"],
      description: "Comprehensive healthcare ERP system designed for Saudi Arabia's healthcare sector with full compliance to national healthcare standards and regulations."
    },
    {
      id: 6,
      title: "Food Industry ERP (HACCP-Aligned)",
      icon: <FaIndustry />,
      color: "#fa709a",
      client: "Holding Telli",
      scope: "ERP for integrated food production and agriculture sector",
      technologies: ["Odoo V14", "PostgreSQL"],
      region: "Tunisia",
      type: "ERP for Agro-industrial operations",
      countries: ["tn"],
      description: "Specialized ERP system for the food and agriculture industry with HACCP compliance, ensuring food safety and quality management throughout the production chain."
    },
    {
      id: 7,
      title: "E-commerce Platform for Delivery & Retail",
      icon: <FaShoppingCart />,
      color: "#ffecd2",
      client: "KANA Company",
      scope: "Delivery management platform with integrated e-commerce and Shopify",
      technologies: ["Odoo", "Angular", "Spring Boot"],
      region: "Tunisia & France",
      type: "Retail & Online Shopping",
      countries: ["tn", "fr"],
      description: "Integrated e-commerce and delivery management platform providing seamless online shopping experience with efficient delivery tracking and management."
    },
    {
      id: 8,
      title: "ERP for Building & Public Projects",
      icon: <FaRoad />,
      color: "#a8edea",
      client: "LGTB – Gabon",
      scope: "ERP platform aligned with ISO standards for infrastructure and construction",
      technologies: ["Odoo", "PostgreSQL"],
      region: "Gabon",
      type: "Public Sector – Construction",
      countries: ["ga"],
      description: "Comprehensive ERP solution for construction and infrastructure projects with ISO compliance and project management capabilities."
    },
    {
      id: 9,
      title: "Healthcare ERP for Clinics",
      icon: <FaHospital />,
      color: "#ff9a9e",
      client: "Clinic El Kendy (Ranked #2 in Libya)",
      scope: "ERP aligned with WHO & ICD11 standards for clinic management",
      technologies: ["Odoo V16", "PostgreSQL"],
      region: "Libya",
      type: "Private Healthcare",
      countries: ["ly"],
      description: "Advanced clinic management system with WHO and ICD11 compliance, designed for private healthcare facilities with comprehensive patient and medical record management."
    },
    {
      id: 10,
      title: "Electronic Industry ERP",
      icon: <FaIndustry2 />,
      color: "#d299c2",
      client: "Esol Company",
      scope: "ERP for managing industrial electronics manufacturing",
      technologies: ["Odoo V16", "PostgreSQL"],
      region: "France",
      type: "Industry – Electronics",
      countries: ["fr"],
      description: "Specialized ERP system for electronics manufacturing with production planning, quality control, and supply chain management capabilities."
    },
    {
      id: 11,
      title: "Chemical Industry ERP",
      icon: <FaCogs />,
      color: "#89f7fe",
      client: "Biodex",
      scope: "Full-stack ERP built from scratch for chemical manufacturing, aligned with ISCC",
      technologies: ["Java", "Oracle", "iReport"],
      region: "Tunisia & Germany",
      type: "Manufacturing – Chemicals",
      countries: ["tn", "de"],
      description: "Custom-built ERP system for chemical manufacturing with ISCC compliance, featuring advanced production planning and safety management."
    },
    {
      id: 12,
      title: "Platform Integration for Retail (POS)",
      icon: <FaDatabase />,
      color: "#f093fb",
      client: "Newrest Company",
      scope: "Retail platform with POS integration and microservices architecture",
      technologies: ["Angular", "Kafka", "Spring Boot"],
      region: "Tunisia & France",
      type: "Retail – POS Systems",
      countries: ["tn", "fr"],
      description: "Modern retail platform with integrated POS systems and microservices architecture for scalable and efficient retail operations."
    },
    {
      id: 13,
      title: "SaaS Car Rental Platform",
      icon: <FaCar />,
      color: "#4facfe",
      client: "Oxysoft Company",
      scope: "Multi-feature SaaS system for vehicle rental with mobile app integration",
      technologies: ["Odoo V16", "Angular", "Spring Boot", "Flutter"],
      region: "France",
      type: "Service – Car Rental",
      countries: ["fr"],
      description: "Comprehensive SaaS platform for car rental services with mobile app integration, fleet management, and customer booking systems."
    }
  ];

  return (
    <div className="projects">
      <div className="projects-content">
        <div className="container">
          {/* Company Logos Section */}
          <div className="company-logos-section">
            <div className="section-header">
              <h2>We Work With</h2>
              <p>Trusted by leading organizations across multiple industries</p>
            </div>
            <div className="company-logos-grid" ref={logosGridRef}>
              <div className="company-logo">
                <img src={process.env.PUBLIC_URL + "/logos/Company1.jpg"} alt="Company 1" />
              </div>
              <div className="company-logo">
                <img src={process.env.PUBLIC_URL + "/logos/Company2.jpg"} alt="Company 2" />
              </div>
              <div className="company-logo">
                <img src={process.env.PUBLIC_URL + "/logos/Company3.jpg"} alt="Company 3" />
              </div>
              <div className="company-logo">
                <img src={process.env.PUBLIC_URL + "/logos/Company4.jpg"} alt="Company 4" />
              </div>
              <div className="company-logo">
                <img src={process.env.PUBLIC_URL + "/logos/Company5.jpg"} alt="Company 5" />
              </div>
              <div className="company-logo">
                <img src={process.env.PUBLIC_URL + "/logos/Company6.jpg"} alt="Company 6" />
              </div>
              <div className="company-logo">
                <img src={process.env.PUBLIC_URL + "/logos/Company7.jpg"} alt="Company 7" />
              </div>
              <div className="company-logo">
                <img src={process.env.PUBLIC_URL + "/logos/Company8.jpg"} alt="Company 8" />
              </div>
              <div className="company-logo">
                <img src={process.env.PUBLIC_URL + "/logos/Company9.jpg"} alt="Company 9" />
              </div>
              <div className="company-logo">
                <img src={process.env.PUBLIC_URL + "/logos/Company10.jpg"} alt="Company 10" />
              </div>
              <div className="company-logo">
                <img src={process.env.PUBLIC_URL + "/logos/Company11.jpg"} alt="Company 11" />
              </div>
              <div className="company-logo">
                <img src={process.env.PUBLIC_URL + "/logos/Company12.jpg"} alt="Company 12" />
              </div>
              <div className="company-logo">
                <img src={process.env.PUBLIC_URL + "/logos/Company13.jpg"} alt="Company 13" />
              </div>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card ${selectedProject?.id === project.id ? 'active' : ''}`}
                onClick={() => handleProjectClick(project)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-card-icon" style={{ color: project.color }}>
                  {project.icon}
                </div>
                <div className="project-card-content">
                  <h3>{project.title}</h3>
                  <p>{project.scope}</p>
                  <div className="project-countries">
                    {project.countries.map((country, idx) => (
                      <img 
                        key={idx}
                        src={`https://flagcdn.com/w20/${country}.png`}
                        alt={`${country} flag`}
                        className="country-flag"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Details Modal */}
          {selectedProject && (
            <div className="project-details-modal" onClick={closeProjectDetails}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={closeProjectDetails}>×</button>
                <div className="modal-header">
                  <div className="modal-icon" style={{ color: selectedProject.color }}>
                    {selectedProject.icon}
                  </div>
                  <div className="modal-info">
                    <h2>{selectedProject.title}</h2>
                    <p className="modal-description">{selectedProject.description}</p>
                  </div>
                </div>
                <div className="modal-body">
                  <div className="modal-section">
                    <h3>Client</h3>
                    <p>{selectedProject.client}</p>
                  </div>
                  
                  <div className="modal-section">
                    <h3>Scope</h3>
                    <p>{selectedProject.scope}</p>
                  </div>
                  
                  <div className="modal-section">
                    <h3>Technologies Used</h3>
                    <div className="tech-tags">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-section">
                    <h3>Region</h3>
                    <p>{selectedProject.region}</p>
                  </div>
                  
                  <div className="modal-section">
                    <h3>Project Type</h3>
                    <p>{selectedProject.type}</p>
                  </div>
                  
                  <div className="modal-section">
                    <h3>Countries</h3>
                    <div className="country-flags">
                      {selectedProject.countries.map((country, idx) => (
                        <div key={idx} className="country-flag-item">
                          <img 
                            src={`https://flagcdn.com/w40/${country}.png`}
                            alt={`${country} flag`}
                            className="country-flag-large"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects; 