import { useState } from 'react';
import ScrollReveal from '../common/ScrollReveal';
import { experienceData } from '../../data/experienceData';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggleExperience = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="section-header">
            <span className="section-number">02</span>
            <h2 className="section-title">Professional Experience</h2>
            <div className="section-line" />
          </div>
        </ScrollReveal>

        <div className="experience-list">
          {experienceData.map((exp, index) => (
            <ScrollReveal key={exp.id} direction="up" delay={0.1 * (index + 1)}>
              <div 
                className={`experience-item ${openId === exp.id ? 'active' : ''}`}
                onClick={() => toggleExperience(exp.id)}
                data-cursor-hover
              >
                <div className="experience-header">
                  <div className="experience-logo">
                    {exp.logo ? (
                      <img src={exp.logo} alt={exp.institution} className="logo-image" />
                    ) : (
                      <div className="logo-placeholder">
                        {exp.institution.charAt(0)}
                      </div>
                    )}
                  </div>
                  
                  <div className="experience-info">
                    <h3 className="experience-role">{exp.role}</h3>
                    <p className="experience-institution">{exp.institution}</p>
                    <p className="experience-duration">{exp.duration}</p>
                  </div>

                  <div className={`expand-icon ${openId === exp.id ? 'rotate' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="6 9 12 15 18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div className={`experience-description ${openId === exp.id ? 'open' : ''}`}>
                  <p>{exp.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
