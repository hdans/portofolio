import { useRef, useEffect, useState } from 'react';
import ScrollReveal from '../common/ScrollReveal';
import { awardsData } from '../../data/awardsData';
import './AwardsSection.css';

const AwardsSection = () => {
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Clone the array multiple times to create the infinite illusion
  const infiniteAwards = [...awardsData, ...awardsData, ...awardsData, ...awardsData];
  
  useEffect(() => {
    // Start at the second set to allow scrolling left immediately
    if (sliderRef.current) {
      // Small timeout to ensure styles are applied
      setTimeout(() => {
        if (!sliderRef.current) return;
        const firstCard = sliderRef.current.querySelector('.award-card');
        const gap = 40; // 2.5rem = 40px gap
        const cardWidth = firstCard ? firstCard.offsetWidth + gap : 550; 
        sliderRef.current.scrollLeft = awardsData.length * cardWidth;
      }, 100);
    }
  }, []);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    
    const slider = sliderRef.current;
    const scrollLeft = slider.scrollLeft;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const singleSetWidth = slider.scrollWidth / 4; 
    
    if (scrollLeft <= singleSetWidth * 0.5) {
      slider.scrollLeft = scrollLeft + (singleSetWidth * 2);
    } 
    else if (scrollLeft >= maxScroll - (singleSetWidth * 0.5)) {
      slider.scrollLeft = scrollLeft - (singleSetWidth * 2);
    }
  };

  const progressRef = useRef(null);

  // Continuous Auto-scroll effect
  useEffect(() => {
    let animationFrameId;
    let lastTime = performance.now();
    let isScrolling = !isHovered;
    let timeoutId;
    
    // When hover ends, wait a brief moment (500ms) before resuming scroll
    if (!isHovered) {
      isScrolling = false;
      timeoutId = setTimeout(() => {
        isScrolling = true;
      }, 500); 
    }

    const animateScroll = (currentTime) => {
      if (sliderRef.current) {
        if (isScrolling) {
          const deltaTime = currentTime - lastTime;
          const speed = 0.05; // 0.05px per ms ≈ 50px per second
          sliderRef.current.scrollLeft += speed * deltaTime;
        }

        // Update progress bar
        if (progressRef.current) {
          const scrollLeft = sliderRef.current.scrollLeft;
          const singleSetWidth = sliderRef.current.scrollWidth / 4; 
          // Calculate percentage based on one full set of cards
          const progress = (scrollLeft % singleSetWidth) / singleSetWidth * 100;
          progressRef.current.style.width = `${progress}%`;
        }
      }
      
      lastTime = currentTime;
      animationFrameId = requestAnimationFrame(animateScroll);
    };
    
    animationFrameId = requestAnimationFrame(animateScroll);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isHovered]);

  return (
    <section className="awards-section" id="awards">
      <div className="awards-container">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="section-header-wrapper">
            <div className="section-header">
              <span className="section-number">03</span>
              <h2 className="section-title">Awards & Certifications</h2>
              <div className="section-line" />
            </div>
            
            <div className="slider-progress-container">
              <div className="slider-progress-track">
                <div className="slider-progress-fill" ref={progressRef}></div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div 
            className="awards-slider-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="awards-slider" 
              ref={sliderRef}
              onScroll={handleScroll}
            >
              {infiniteAwards.map((award, index) => (
                <div 
                  key={`${award.id}-${index}`}
                  className="award-card"
                  data-cursor-hover
                >
                  <div className="award-image-container">
                    <div className="award-image">
                      {award.thumbnail ? (
                        <>
                          <img src={award.thumbnail} alt={award.title} className="award-img award-img-default" loading="lazy" />
                          {award.image && (
                            <img src={award.image} alt={award.title} className="award-img award-img-hover" loading="lazy" />
                          )}
                        </>
                      ) : (
                        <div className="image-placeholder">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="award-info">
                    <div className="award-date-badge">{award.date}</div>
                    <h3 className="award-title">{award.title}</h3>
                    <p className="award-issuer">
                      <span className="issuer-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </span>
                      {award.issuer}
                    </p>
                  </div>
                </div>
              ))}
              
              <div className="slider-spacer"></div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AwardsSection;
