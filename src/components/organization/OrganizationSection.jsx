import { useState } from 'react';
import ScrollReveal from '../common/ScrollReveal';
import Modal from '../common/Modal';
import { organizationData } from '../../data/organizationData';
import './OrganizationSection.css';

const OrganizationCard = ({ org, index, onClick, showHorizontalRight, showHorizontalLeft, showVerticalRight, showVerticalLeft, showMobileVertical }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine position: left (even index) or right (odd index)
  const isLeft = index % 2 === 0;
  
  // Row number (0, 1, 2, 3...)
  const row = Math.floor(index / 2);
  
  // Rotation: left cards rotate right (+), right cards rotate left (-)  
  const rotation = isLeft ? 3 : -3;
  
  // Size class based on row pattern
  // Row 0: left bigger, Row 1: right bigger, Row 2: left bigger...
  const isEvenRow = row % 2 === 0;
  const isBigger = (isEvenRow && isLeft) || (!isEvenRow && !isLeft);
  const sizeClass = isBigger ? 'card-big' : 'card-small';

  return (
    <div 
      className={`organization-card-wrapper ${sizeClass}`}
      onClick={onClick}
      data-cursor-hover
    >
      <div 
        className="organization-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div className="org-image">
          {org.image ? (
            <img src={org.image} alt={org.organization} className="org-image-img" />
          ) : (
            <div className="org-image-placeholder">
              {org.organization.substring(0, 2).toUpperCase()}
            </div>
          )}
        </div>
        
        {isHovered && (
          <div className="org-overlay">
            <p className="org-position">{org.position}</p>
            <p className="org-name">{org.organization}</p>
          </div>
        )}
      </div>
      
      {/* Connectors attached to card wrapper */}
      {showHorizontalRight && (
        <div className="connector connector-horizontal-right" />
      )}
      {showHorizontalLeft && (
        <div className="connector connector-horizontal-left" />
      )}
      {showVerticalRight && (
        <div className="connector connector-vertical-right" />
      )}
      {showVerticalLeft && (
        <div className="connector connector-vertical-left" />
      )}
      {showMobileVertical && (
        <div className="connector connector-mobile-vertical" />
      )}
    </div>
  );
};

const OrganizationSection = () => {
  const [selectedOrg, setSelectedOrg] = useState(null);

  return (
    <section className="organization-section" id="organization">
      <div className="organization-container">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="section-header-wrapper">
            <div className="section-header">
              <span className="section-number">04</span>
              <h2 className="section-title">Organization</h2>
              <div className="section-line"></div>
            </div>
            <p className="section-hint">Click for more Information!</p>
          </div>
        </ScrollReveal>

        <div className="organization-grid">
          {organizationData.map((org, index) => {
            // Position in grid
            const isLeft = index % 2 === 0;
            const row = Math.floor(index / 2);
            const isEvenRow = row % 2 === 0;
            const hasNextItem = index + 1 < organizationData.length;
            const hasNextRow = index + 2 < organizationData.length;
            const isLastItem = index === organizationData.length - 1;
            
            // Zigzag pattern:
            // Even rows (0, 2, 4): horizontal from left, vertical from right
            // Odd rows (1, 3, 5): horizontal from right, vertical from left
            
            // Hanya satu card yang punya horizontal connector per row
            const showHorizontalRight = isEvenRow && isLeft && hasNextItem;
            const showHorizontalLeft = !isEvenRow && !isLeft && hasNextItem;
            
            // Show vertical connector on right card for even rows, left card for odd rows (desktop)
            const showVerticalFromRight = isEvenRow && !isLeft && hasNextRow;
            const showVerticalFromLeft = !isEvenRow && isLeft && hasNextRow;
            
            // Mobile: show vertical connector on ALL cards except last
            const showMobileVertical = !isLastItem;
            
            return (
              <ScrollReveal key={org.id} direction="up" delay={0.05 * (index % 4)}>
                <div className={`org-card-container row-${isEvenRow ? 'even' : 'odd'}`}>
                  <OrganizationCard 
                    org={org} 
                    index={index}
                    onClick={() => setSelectedOrg(org)}
                    showHorizontalRight={showHorizontalRight}
                    showHorizontalLeft={showHorizontalLeft}
                    showVerticalRight={showVerticalFromRight}
                    showVerticalLeft={showVerticalFromLeft}
                    showMobileVertical={showMobileVertical}
                  />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedOrg} 
        onClose={() => setSelectedOrg(null)}
      >
        {selectedOrg && (
          <div className="org-modal-content">
            <div className="org-modal-image">
              {selectedOrg.image ? (
                <img src={selectedOrg.image} alt={selectedOrg.organization} className="modal-org-img" />
              ) : (
                <div className="modal-org-placeholder">
                  {selectedOrg.organization.substring(0, 2).toUpperCase()}
                </div>
              )}
            </div>
            <h3 className="modal-position">{selectedOrg.position}</h3>
            <p className="modal-organization">{selectedOrg.organization}</p>
            <p className="modal-duration">{selectedOrg.duration}</p>
            <p className="modal-description" style={{ whiteSpace: 'pre-line' }}>{selectedOrg.description}</p>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default OrganizationSection;
