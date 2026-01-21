import ScrollReveal from '../common/ScrollReveal';
import { awardsData } from '../../data/awardsData';
import './AwardsSection.css';

const AwardsSection = () => {
  return (
    <section className="awards-section" id="awards">
      <div className="awards-container">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="section-header">
            <span className="section-number">03</span>
            <h2 className="section-title">Awards & Certifications</h2>
            <div className="section-line" />
          </div>
        </ScrollReveal>

        <div className="awards-grid">
          {awardsData.map((award, index) => (
            <ScrollReveal key={award.id} direction="up" delay={0.1 * ((index % 3) + 1)}>
              <div 
                className="award-card"
                data-cursor-hover
              >
                <div className="award-image">
                  {award.thumbnail ? (
                    <>
                      <img src={award.thumbnail} alt={award.title} className="award-img award-img-default" />
                      {award.image && (
                        <img src={award.image} alt={award.title} className="award-img award-img-hover" />
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
                <div className="award-info">
                  <h3 className="award-title">{award.title}</h3>
                  <p className="award-issuer">{award.issuer}</p>
                  <p className="award-date">{award.date}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
