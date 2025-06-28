import React, { useState, useEffect } from 'react';
import PageLoader from '../components/PageLoader';
import { useImageLoading } from '../hooks/useLoadingState';
import './Teams.css';

const Teams = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Ahmed Al-Mansouri',
      position: 'CEO & Founder',
      department: 'Leadership',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Visionary leader with 15+ years of experience in technology and business development.',
      skills: ['Strategic Planning', 'Business Development', 'Technology Leadership'],
      experience: '15+ Years'
    },
    {
      id: 2,
      name: 'Mohammed Al-Rashid',
      position: 'Lead Developer',
      department: 'Development',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Full-stack developer with expertise in modern web technologies and mobile development.',
      skills: ['React', 'Node.js', 'Flutter', 'Python'],
      experience: '8+ Years'
    },
    {
      id: 3,
      name: 'Fatima Al-Zahra',
      position: 'UI/UX Designer',
      department: 'Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Creative designer focused on user experience and modern interface design.',
      skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Prototyping'],
      experience: '6+ Years'
    },
    {
      id: 4,
      name: 'David Chen',
      position: 'DevOps Engineer',
      department: 'Technology',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      bio: 'DevOps specialist ensuring smooth deployment and infrastructure management.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      experience: '7+ Years'
    },
    {
      id: 5,
      name: 'Aisha Al-Sabah',
      position: 'Project Manager',
      department: 'Management',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      bio: 'Experienced project manager delivering successful projects on time and budget.',
      skills: ['Project Management', 'Agile', 'Scrum', 'Risk Management'],
      experience: '9+ Years'
    },
    {
      id: 6,
      name: 'James Wilson',
      position: 'Business Analyst',
      department: 'Business',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
      bio: 'Business analyst bridging the gap between business needs and technical solutions.',
      skills: ['Business Analysis', 'Requirements Gathering', 'Process Improvement'],
      experience: '5+ Years'
    }
  ];

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
                <div className="stat-number">6+</div>
                <div className="stat-label">Team Members</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">60+</div>
                <div className="stat-label">Years Combined Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
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