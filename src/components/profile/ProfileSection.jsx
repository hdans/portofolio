import ScrollReveal from '../common/ScrollReveal';
import { profileData } from '../../data/profileData';
import { skillsData } from '../../data/skillsData';
import landingImage from '../../assets/img/landing.jpg';
import './ProfileSection.css';

const ProfileSection = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/hdans',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/danishrahadian',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.789 0-9.514h3.554v1.347c.42-.648 1.36-1.573 3.322-1.573 2.429 0 4.251 1.547 4.251 4.875v5.865zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.704 1.956-1.704 1.187 0 1.915.75 1.948 1.704 0 .946-.761 1.704-1.989 1.704zm1.6 11.597h-3.2V9.338h3.2v11.114zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="profile-section" id="about">
      <div className="profile-container">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="section-header">
            <span className="section-number">01</span>
            <h2 className="section-title">About Me</h2>
            <div className="section-line" />
          </div>
        </ScrollReveal>

        {/* Main Content - Single Column */}
        <div className="profile-content">
          {/* Top Section - Summary with Social + Photo */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="summary-section">
              <div className="summary-grid">
                <div className="summary-text">
                  <p className="profile-summary">{profileData.summary}</p>
                  <div className="social-links">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon-link"
                        data-cursor-hover
                        aria-label={link.name}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="summary-photo">
                  <div className="photo-frame" data-cursor-hover>
                    <img src={landingImage} alt="Danish Rahadian" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Info Grid */}
          <div className="info-grid">
            {/* What I Do Card */}
            <ScrollReveal direction="left" delay={0.3}>
              <div className="info-card">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <h3 className="card-title">What I Do</h3>
                <div className="roles-list">
                  {profileData.roles.map((role, index) => (
                    <div key={index} className="role-item" data-cursor-hover>
                      <span className="role-bullet">▸</span>
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Education Card */}
            <ScrollReveal direction="right" delay={0.3}>
              <div className="info-card">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <h3 className="card-title">Education</h3>
                <div className="education-content">
                  <h4 className="university-name">{profileData.education.university}</h4>
                  <div className="education-meta">
                    <span className="meta-item">Semester {profileData.education.semester}</span>
                    <span className="gpa-badge">
                      GPA {profileData.education.gpa}
                    </span>
                  </div>
                  <p className="education-desc">{profileData.education.description}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Skills Section */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="skills-section">
            <h3 className="subsection-title">Technical Expertise</h3>
            <div className="skills-grid">
              <div className="skills-category">
                <h4 className="category-name">Languages</h4>
                <div className="skills-tags">
                  {skillsData.languages.map((skill, index) => (
                    <span key={index} className="skill-tag" data-cursor-hover>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="skills-category">
                <h4 className="category-name">Data Tools</h4>
                <div className="skills-tags">
                  {skillsData.tools.map((skill, index) => (
                    <span key={index} className="skill-tag" data-cursor-hover>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skills-category">
                <h4 className="category-name">ML & AI</h4>
                <div className="skills-tags">
                  {skillsData.mlAi.map((skill, index) => (
                    <span key={index} className="skill-tag" data-cursor-hover>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skills-category">
                <h4 className="category-name">Frameworks</h4>
                <div className="skills-tags">
                  {skillsData.frameworks.map((skill, index) => (
                    <span key={index} className="skill-tag" data-cursor-hover>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProfileSection;
