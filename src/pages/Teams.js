import React, { useState, useEffect } from 'react';
import PageLoader from '../components/PageLoader';
import { useImageLoading } from '../hooks/useLoadingState';
import { IMAGES } from '../utils/imagePaths';
import './Teams.css';

const Teams = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Loai Aldaher',
      position: 'Head of IT – PMI',
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
  

  ];

  // Calculate combined experience
  const calculateCombinedExperience = () => {
    return teamMembers.reduce((total, member) => {
      const years = parseInt(member.experience);
      return total + years;
    }, 0);
  };

  const combinedExperience = calculateCombinedExperience();

  // Use the custom hook for image loading
  const { isLoading, loadedCount, totalImages } = useImageLoading(
    teamMembers.map(member => member.image)
  );

  const handleMemberClick = (member) => {
    setSelectedMember(selectedMember?.id === member.id ? null : member);
  };

  const closeDetails = () => {
    setSelectedMember(null);
  };

  if (isLoading) {
    return (
      <div className="teams">
        <PageLoader 
          text={`Loading team members... (${loadedCount}/${totalImages})`}
          size="large" 
          variant="centered"
        />
      </div>
    );
  }

  return (
    <div className="teams">
      {/* Floating Icons */}
      <div className="floating-icons">
        <div className="icon icon-1">👥</div>
        <div className="icon icon-2">💼</div>
        <div className="icon icon-3">🎯</div>
        <div className="icon icon-4">🚀</div>
        <div className="icon icon-5">💡</div>
        <div className="icon icon-6">🔧</div>
        <div className="icon icon-7">📊</div>
        <div className="icon icon-8">🌟</div>
        <div className="icon icon-9">🎨</div>
        <div className="icon icon-10">⚡</div>
        <div className="icon icon-11">🔒</div>
        <div className="icon icon-12">📈</div>
        <div className="icon icon-13">🛠️</div>
        <div className="icon icon-14">🎪</div>
        <div className="icon icon-15">🔍</div>
        <div className="icon icon-16">📋</div>
        <div className="icon icon-17">🎭</div>
        <div className="icon icon-18">🔮</div>
        <div className="icon icon-19">⚙️</div>
        <div className="icon icon-20">🎪</div>
        <div className="icon icon-21">🔬</div>
        <div className="icon icon-22">🎪</div>
        <div className="icon icon-23">🔧</div>
        <div className="icon icon-24">📱</div>
        <div className="icon icon-25">💻</div>
        <div className="icon icon-26">🌐</div>
        <div className="icon icon-27">🚀</div>
        <div className="icon icon-28">⚡</div>
        <div className="icon icon-29">📊</div>
        <div className="icon icon-30">🎯</div>
      </div>

      <div className="teams-content">
        <div className="container">
          {/* Header Section */}
          <div className="teams-header">
            <h1>Meet Our Team</h1>
            <p className="teams-subtitle">
              Passionate professionals dedicated to delivering exceptional technology solutions
            </p>
            <div className="team-stats">
              <div className="stat-item">
                <div className="stat-number">{teamMembers.length}</div>
                <div className="stat-label">Team Members</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{combinedExperience}+</div>
                <div className="stat-label">Years Combined Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">40+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
            </div>
          </div>

          {/* Team Members Circle Row */}
          <div className="team-circle-row">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className={`team-member-circle ${selectedMember?.id === member.id ? 'active' : ''}`}
                onClick={() => handleMemberClick(member)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="member-circle-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-circle-name">{member.name}</div>
                <div className="member-circle-position">{member.position}</div>
              </div>
            ))}
          </div>

          {/* Member Details Modal */}
          {selectedMember && (
            <div className="member-details-modal" onClick={closeDetails}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={closeDetails}>×</button>
                <div className="modal-header">
                  <div className="modal-image">
                    <img src={selectedMember.image} alt={selectedMember.name} />
                  </div>
                  <div className="modal-info">
                    <h2>{selectedMember.name}</h2>
                    <p className="modal-position">{selectedMember.position}</p>
                    <p className="modal-department">{selectedMember.department}</p>
                    <p className="modal-experience">{selectedMember.experience}</p>
                  </div>
                </div>
                <div className="modal-body">
                  <p className="modal-bio">{selectedMember.bio}</p>
                  <div className="modal-skills">
                    <h3>Skills & Expertise</h3>
                    <div className="skills-grid">
                      {selectedMember.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Join Our Team Section */}
          <div className="join-team-section">
            <div className="join-content">
              <h2>Join Our Team</h2>
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
    </div>
  );
};

export default Teams; 