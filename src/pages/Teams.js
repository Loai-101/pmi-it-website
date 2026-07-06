import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal, { RevealItem } from '../components/SectionReveal';
import SectionTitle from '../components/SectionTitle';
import './Teams.css';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Loai Aldaher',
      position: 'Team Leader',
      department: 'LEADERSHIP',
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1751552078/team1_ibiine.jpg",
      bio: 'Visionary IT leader with over 5 years of experience in software development, system architecture, and digital transformation. Specialized in building scalable solutions, leading cross-functional teams, and integrating smart technologies tailored to business goals.',
      skills: ['Full-Stack Development', 'System Integration', 'Smart Solutions & Automation', 'Team Leadership', 'Business-Driven IT Strategy'],
      experience: '5+ Years'
    },
    {
      id: 2,
      name: 'Dr. Chouache Sofiene',
      position: 'Project Director & Business Analyst',
      department: 'PROJECT & STRATEGIC LEADERSHIP',
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1751552079/team2_nganip.png",
      bio: 'Strategic project leader with over 20 years of experience in project & program management, enterprise architecture, and business consulting. Expert in aligning business goals with smart system designs and ensuring quality delivery across multidisciplinary teams.',
      skills: ['Project & Program Management', 'Business Analysis & Consulting', 'Enterprise Architecture & Systems Design', 'Quality & Delivery Assurance', 'Team Leadership & Communication'],
      experience: '20+ Years'
    },
    {
      id: 3,
      name: 'Bayrem Frej',
      position: 'Tech Lead',
      department: 'TECHNICAL LEADERSHIP',
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1751552080/team3_pracsj.png",
      bio: 'Experienced Tech Lead with over 7 years of expertise in designing and supervising modern software architectures (microservices, cloud), enforcing clean code principles, and mentoring development teams. Skilled at bridging business and technical needs, driving agile practices, and ensuring delivery quality across complex environments.',
      skills: ['Software Architecture (Microservices, Cloud)', 'Team Leadership & Mentoring', 'Agile & DevOps Coordination', 'Business-Technical Alignment', 'Code Quality & Clean Coding Standards'],
      experience: '7+ Years'
    },
    {
      id: 4,
      name: 'Ghada Hleli ',
      position: 'Odoo Developer',
      department: 'DEVELOPMENT',
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1751552082/team4_qkwcpy.png",
      bio: 'Experienced Odoo developer with comprehensive expertise in backend and frontend development, system integration, and DevOps. Specialized in building custom modules and solutions across various business domains including Sales, Purchase, Inventory, Accounting, HR, CRM, and eCommerce.',
      skills: ['Backend Development (Python & Odoo ORM)', 'Frontend Development (XML & QWeb)', 'Web and API Integration', 'DevOps / System Administration', 'Odoo Studio', 'Agile / Scrum Methodology'],
      experience: '5+ Years'
    },
    {
      id: 5,
      name: 'Ahlen Raissi',
      position: 'Odoo Developer',
      department: 'ODOO DEVELOPMENT',
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1751552083/team5_tgx5ze.png",
      bio: 'Experienced Odoo developer with 5+ years of expertise in backend (Python & Odoo ORM) and frontend (XML & QWeb) development. Proven track record in delivering tailored Odoo solutions for maritime shipping, healthcare ERP, eCommerce, and website platforms.',
      skills: ['Backend: Python & Odoo ORM', 'Frontend: XML & QWeb', 'Web & API Integration', 'DevOps & System Administration', 'Agile Collaboration & Problem Solving'],
      experience: '5+ Years'
    },
    {
      id: 6,
      name: 'Hamza Riabi',
      position: 'Sr Data Scientist | Data Engineer',
      department: 'DATA SCIENCE & AI',
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1754203497/WhatsApp_Image_2025-08-03_at_09.42.04_fbede4b3_swcyfo.jpg",
      bio: 'Experienced Data Scientist and Engineer with a strong background in designing and deploying machine learning models, building robust data pipelines, and delivering AI-powered solutions across industries. Proven ability to drive data strategy, automate analytics workflows, and lead end-to-end AI/ML projects from ideation to production. Skilled in modern data platforms, cloud environments, and distributed computing systems. Adept at collaborating with cross-functional teams to align technology with business value.',
      skills: ['Machine Learning & AI (Deep Learning, NLP, LLMs, Anomaly Detection)', 'Data Engineering (ETL/ELT, Airflow, Big Data, Spark, Data Lakes)', 'Programming (Python, R, SQL, PySpark)', 'Tools & Frameworks (TensorFlow, Scikit-learn, MLflow, LangChain, Dask)', 'Databases (PostgreSQL, MongoDB, SQL Server, S3)', 'BI & Visualization (Power BI, Tableau, Plotly)', 'Cloud & DevOps (AWS, Docker, Git, OVHCloud)'],
      experience: '5+ Years'
    },
    {
      id: 7,
      name: 'Hamza Selmi',
      position: 'Mobile App Developer | Flutter & Web Integration Specialist',
      department: 'MOBILE & WEB DEVELOPMENT',
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1754205500/Screenshot_2025-08-03_101800_uk4c2z.png",
      bio: 'Motivated and results-driven Software Engineer with a strong background in cross-platform mobile application development. Over 4 years of experience delivering scalable and user-friendly mobile apps integrated with powerful backend systems. Specialized in Flutter and Dart, with solid experience in building real-time features, API integrations, and responsive UI/UX. Adept at working across the full development lifecycle—from interface design to deployment. Also experienced in full-stack web development, making him versatile in both mobile and web ecosystems.',
      skills: ['Mobile Development (Flutter, Dart, Cross-Platform Apps)', 'Front-End (Angular, Vue.js, React.js, HTML5, CSS3, Tailwind CSS, SASS)', 'Back-End (Laravel, PHP, Laravel Livewire, Node.js, REST APIs)', 'Real-Time Apps (Socket.IO, WebSockets, Google Maps Integration)', 'Tools & DevOps (Git, Asana, WordPress, Adobe Photoshop, Illustrator)', 'Databases (MySQL, NoSQL)', 'Platforms (Mobile Apps, SaaS, E-commerce, Geo-based Services)'],
      experience: '4+ Years'
    },
  ];

  const calculateCombinedExperience = () => {
    return teamMembers.reduce((total, member) => {
      const years = parseInt(member.experience);
      return total + years;
    }, 0);
  };

  const combinedExperience = calculateCombinedExperience();

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const closeDetails = () => {
    setSelectedMember(null);
  };

  useEffect(() => {
    if (!selectedMember) return undefined;

    const handleEscape = (e) => {
      if (e.key === 'Escape') closeDetails();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedMember]);

  return (
    <SectionReveal id="teams" className="team">
      <div className="team-content">
        <div className="container">
          <SectionTitle
            as="h1"
            title="The Experts Behind Every Solution"
          />

          <div className="team-stats-bar">
            <div className="team-stat-card">
              <div className="team-stat-value">{teamMembers.length}</div>
              <div className="team-stat-label">Team Members</div>
            </div>
            <div className="team-stat-card">
              <div className="team-stat-value">{combinedExperience}+</div>
              <div className="team-stat-label">Years Combined Experience</div>
            </div>
            <div className="team-stat-card">
              <div className="team-stat-value">40+</div>
              <div className="team-stat-label">Projects Delivered</div>
            </div>
          </div>

          <div className="team-cards-grid">
            {teamMembers.map((member) => (
              <RevealItem key={member.id} className="team-card-reveal">
                <button
                  type="button"
                  className={`team-member-card ${selectedMember?.id === member.id ? 'is-active' : ''}`}
                  onClick={() => handleMemberClick(member)}
                  aria-label={`View profile of ${member.name}`}
                >
                  <div className="team-card-avatar-wrap">
                    <div className="team-card-avatar">
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                  <h3 className="team-card-name">{member.name}</h3>
                  <p className="team-card-role">{member.position}</p>
                  <span className="team-card-cta">View Profile</span>
                </button>
              </RevealItem>
            ))}
          </div>

          {createPortal(
            <AnimatePresence>
              {selectedMember && (
                <motion.div
                  className="member-details-modal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  onClick={closeDetails}
                >
                  <motion.div
                    className="team-modal-content"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="team-modal-name"
                    initial={{ opacity: 0, scale: 0.92, y: 28 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 28 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button type="button" className="team-modal-close" onClick={closeDetails} aria-label="Close profile">
                      ×
                    </button>

                    <div className="team-modal-header">
                      <div className="team-modal-avatar">
                        <img
                          src={selectedMember.image}
                          alt={selectedMember.name}
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                      <div className="team-modal-info">
                        <h2 id="team-modal-name">{selectedMember.name}</h2>
                        <p className="team-modal-role">{selectedMember.position}</p>
                        <p className="team-modal-department">{selectedMember.department}</p>
                        <p className="team-modal-experience">{selectedMember.experience}</p>
                      </div>
                    </div>

                    <div className="team-modal-body">
                      {selectedMember.bio && (
                        <p className="team-modal-bio">{selectedMember.bio}</p>
                      )}

                      {selectedMember.skills?.length > 0 && (
                        <div className="team-modal-skills">
                          <h3>Skills & Expertise</h3>
                          <div className="team-skills-grid">
                            {selectedMember.skills.map((skill, skillIndex) => (
                              <span key={skillIndex} className="team-skill-tag">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>,
            document.body
          )}

          <div className="join-team-section">
            <div className="join-content">
              <SectionTitle
                title="Build the Future With Us"
                className="section-title-block--join"
              />
              <p>
                We're always looking for talented individuals who are passionate about technology 
                and innovation. Join us in building the future of digital solutions.
              </p>
              <div className="join-buttons">
                <a 
                  href="https://wa.me/97313676757?text=Hi! I'm interested in joining your team. Can you tell me more about current opportunities?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="join-btn primary"
                >
                  Apply Now
                </a>
                <a 
                  href="mailto:careers@pmi-it.com"
                  className="join-btn secondary"
                >
                  Send Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
};

export default Team;
