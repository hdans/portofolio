import { motion } from 'framer-motion';
import TypeWriter from '../common/TypeWriter';
import '../common/TypeWriter.css';
import './HeroSection.css';

const HeroSection = () => {
  const roles = [
    'Product & Project Manager',
    'Technology Consulting & Business Analysis',
    'IT Governance, Risk & Compliance',
    'Full Stack & AI Engineer',
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
          Leading cross-functional teams, translating business requirements into delivery roadmaps, and shipping full-stack applications with AI-integrated features.
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
    </section>
  );
};

export default HeroSection;
