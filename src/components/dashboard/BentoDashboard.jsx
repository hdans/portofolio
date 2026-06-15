import { useState } from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profileData';
import { projectsData } from '../../data/projectsData';
import { experienceData } from '../../data/experienceData';
import { skillsData } from '../../data/skillsData';
import { awardsData } from '../../data/awardsData';
import { organizationData } from '../../data/organizationData';
import Modal from '../common/Modal';
import './BentoDashboard.css';
import cvPdf from '../../assets/pdf/Consulting CV - Danish Rahadian.pdf';
import landingImage from '../../assets/img/landing.jpg';

const BentoDashboard = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => {
    setActiveModal('image');
    setSelectedImage(image);
  };

  const closeModal = () => {
    setActiveModal(null);
    setSelectedImage(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className="bento-dashboard-wrapper">
      <motion.div 
        className="bento-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Intro */}
        <motion.div className="bento-card intro-card" variants={cardVariants}>
          <p className="greeting">Hi, I'm Danish -</p>
          <h1 className="headline">
            Project Manager, IT Business Analyst & Full Stack Developer based in Indonesia.
          </h1>
        </motion.div>

        {/* Photo */}
        <motion.div className="bento-card photo-card" variants={cardVariants}>
          <img src={landingImage} alt="Danish" className="profile-photo" loading="lazy" />
        </motion.div>

        {/* Socials */}
        <motion.div className="bento-card socials-card" variants={cardVariants}>
          <div className="social-grid">
            <a href="https://linkedin.com/in/danishrahadian" target="_blank" rel="noreferrer" className="social-btn">in</a>
            <a href="https://github.com/hdans" target="_blank" rel="noreferrer" className="social-btn">gh</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn">ig</a>
            <a href="mailto:danishrme@gmail.com" className="social-btn">@</a>
          </div>
        </motion.div>

        {/* CV */}
        <motion.a 
          href={cvPdf} 
          download="Danish_Rahadian_CV.pdf"
          className="bento-card cv-card" 
          variants={cardVariants}
        >
          <p className="card-label">RESUME</p>
          <h3 className="card-title">Download CV</h3>
        </motion.a>

        {/* About */}
        <motion.div className="bento-card about-card" variants={cardVariants}>
          <p className="card-label">ABOUT ME</p>
          <h3 className="card-title">Passionate about bridging business strategy with AI & Full-Stack Implementation.</h3>
          <p className="card-desc">
            Informatics Engineering student at Padjadjaran University (GPA 3.96/4.00) with proven experience leading cross-functional teams, translating business requirements into delivery roadmaps, and managing end-to-end project lifecycles. Built and delivered multiple client-grade full-stack web applications and AI-integrated features from scratch to production. Comfortable operating at the intersection of business analysis, data-driven decision support, and structured project delivery.
          </p>
        </motion.div>

        {/* Full Experience Timeline */}
        <motion.div className="bento-card experience-full-card" variants={cardVariants}>
          <p className="card-label">PROFESSIONAL EXPERIENCE</p>
          <div className="timeline-list">
            {experienceData.map((exp, i) => (
              <div key={i} className="timeline-item">
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-inst">{exp.institution}</h4>
                <p className="timeline-date">{exp.duration}</p>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stack */}
        <motion.div className="bento-card stack-card" variants={cardVariants}>
          <p className="card-label">TECH STACK & TOOLS</p>
          <div className="stack-icons">
            {skillsData.frameworks.concat(skillsData.languages, skillsData.mlAi, skillsData.tools).map((skill, i) => (
              <span key={i} className="stack-pill">{skill}</span>
            ))}
          </div>
        </motion.div>

        {/* Organizations */}
        <motion.div className="bento-card organization-card" variants={cardVariants}>
          <p className="card-label">LEADERSHIP & ORGANIZATION</p>
          <div className="timeline-list">
            {organizationData.map((org, i) => (
              <div key={i} className="timeline-item">
                <h3 className="timeline-role">{org.position}</h3>
                <h4 className="timeline-inst">{org.organization}</h4>
                <p className="timeline-date">{org.duration}</p>
                <p className="timeline-desc">{org.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div className="bento-card awards-card" variants={cardVariants}>
          <p className="card-label">AWARDS & ACHIEVEMENTS</p>
          <div className="timeline-list">
            {awardsData.map((award, i) => (
              <div key={i} className="timeline-item">
                <h3 className="timeline-role">{award.title}</h3>
                <h4 className="timeline-inst">{award.issuer}</h4>
                <p className="timeline-date">{award.date}</p>
                {award.image && (
                  <button 
                    onClick={() => openImageModal(award.image)} 
                    style={{ background: 'transparent', border: '1px solid #333', color: '#fff', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', width: 'fit-content', marginTop: '0.5rem' }}
                  >
                    View Certificate
                  </button>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        {projectsData.map((project, i) => (
          <motion.div 
            key={project.id}
            className="bento-card project-card-full" 
            variants={cardVariants}
            onClick={() => openImageModal(project.image)}
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="project-info">
              <p className="card-label">{project.category} / {project.year}</p>
              <h3 className="card-title" style={{ fontSize: '2rem' }}>{project.title}</h3>
              <p className="card-desc" style={{ marginBottom: '1.5rem', whiteSpace: 'pre-wrap' }}>
                {project.longDescription}
              </p>
              <div className="stack-icons">
                {project.techStack.map(t => <span key={t} className="stack-pill">{t}</span>)}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Contact */}
        <motion.div className="bento-card contact-card" variants={cardVariants}>
          <h3 className="contact-title">Have a project or opportunity in mind?</h3>
          <button 
            className="copy-email-btn"
            onClick={() => navigator.clipboard.writeText('danishrme@gmail.com')}
          >
            Copy email: danishrme@gmail.com
          </button>
        </motion.div>

      </motion.div>

      {/* Image Modal for Certificates and Project Previews */}
      <Modal isOpen={activeModal === 'image'} onClose={closeModal}>
        {selectedImage && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
            <img src={selectedImage} alt="Preview" style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: '8px' }} />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default BentoDashboard;
