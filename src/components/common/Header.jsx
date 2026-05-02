import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInHero, setIsInHero] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Keep the menu visually integrated with hero until hero is mostly out of view.
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsInHero(heroBottom > 140);
      }
      
      // Detect active section
      const sections = ['about', 'experience', 'awards', 'organization', 'projects', 'contact'];
      let currentSection = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport
          if (rect.top <= 200) {
            currentSection = section;
          }
        }
      }
      
      // Special case: if we're near the bottom of the page, activate contact
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        currentSection = 'contact';
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'awards', label: 'Awards' },
    { id: 'organization', label: 'Organization' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const activeNavLabel = navItems.find((item) => item.id === activeSection)?.label || 'Home';

  return (
    <>
      <header className={`header ${isInHero ? 'header-hero' : ''} ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="header-container">
          <a href="#" className={`header-logo ${isInHero ? 'hero-mode' : ''}`} data-cursor-hover>
            {isInHero ? (
              <span className="explore-text">Menu</span>
            ) : (
              'DR'
            )}
          </a>

          <span className="header-current-label" aria-live="polite">
            {activeNavLabel}
          </span>

          {/* Desktop Navigation */}
          <nav className="header-nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.id)}
                data-cursor-hover
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            data-cursor-hover
          >
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation - Outside header for fullscreen */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, item.id)}
            style={{ animationDelay: `${index * 0.05}s` }}
            data-cursor-hover
          >
            <span className="nav-number">0{index + 1}</span>
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
};

export default Header;
