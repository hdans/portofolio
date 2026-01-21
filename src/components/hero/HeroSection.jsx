import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../common/Modal';
import TypeWriter from '../common/TypeWriter';
import '../common/TypeWriter.css';
import './HeroSection.css';
import cvPdf from '../../assets/pdf/CV Danish Rahadian - Data Scientist Internhip.pdf';

const HeroSection = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  
  const roles = [
    'Data Scientist',
    'Data Analyst',
    'Machine Learning/AI Engineer',
    'Full Stack Developer'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-grid-pattern" />
        <div className="hero-accent-shape" />
      </div>

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-eyebrow" variants={itemVariants}>
          <TypeWriter 
            words={roles}
            typingSpeed={80}
            deletingSpeed={40}
            pauseTime={2000}
          />
        </motion.div>
        
        <motion.h1 className="hero-title" variants={itemVariants}>
          Danish<br />
          <span className="hero-title-accent">Rahadian</span>
        </motion.h1>
        
        <motion.p className="hero-subtitle" variants={itemVariants}>
          Data Scientist, Data Analyst, ML/AI Engineer, & Automation crafting intelligent solutions through data-driven modeling and scalable systems.
        </motion.p>

        <motion.div className="hero-cta-group" variants={itemVariants}>
          <a href="#projects" className="hero-cta hero-cta-primary" data-cursor-hover>
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#about" className="hero-cta hero-cta-secondary" data-cursor-hover>
            About Me
          </a>
          <button 
            className="hero-cta hero-cta-cv" 
            onClick={() => setIsCvModalOpen(true)}
            data-cursor-hover
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            View CV
          </button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </motion.div>

      {/* CV Modal */}
      <Modal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)}>
        <div className="cv-modal-content">
          <h2 className="cv-modal-title">My CV</h2>
          <div className="cv-pdf-container">
            <iframe 
              src={cvPdf} 
              title="CV"
              className="cv-pdf-viewer"
            />
          </div>
          <a 
            href={cvPdf} 
            download="Danish_Rahadian_CV.pdf" 
            className="cv-download-btn"
            data-cursor-hover
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
          </a>
        </div>
      </Modal>
    </section>
  );
};

export default HeroSection;
