import { useState } from 'react';
import ScrollReveal from '../common/ScrollReveal';
import Modal from '../common/Modal';
import { organizationData } from '../../data/organizationData';
import './OrganizationSection.css';

const HIGHLIGHTED_IDS = [1, 4, 8]; // CBS 2025, Try Out Rujak, Career Dev

const OrganizationSection = () => {
  const [selectedOrg, setSelectedOrg] = useState(null);

  const highlightedOrgs = organizationData.filter(org => HIGHLIGHTED_IDS.includes(org.id));
  const otherOrgs = organizationData.filter(org => !HIGHLIGHTED_IDS.includes(org.id));

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
          </div>
        </ScrollReveal>

        {/* Highlighted Organizations */}
        <div className="org-highlighted-grid">
          {highlightedOrgs.map((org, index) => (
            <ScrollReveal key={org.id} direction="up" delay={0.1 * index}>
              <div
                className="org-highlight-card"
                onClick={() => setSelectedOrg(org)}
                data-cursor-hover
              >
                <div className="org-highlight-image">
                  {org.image ? (
                    <img src={org.image} alt={org.organization} className="org-highlight-img" />
                  ) : (
                    <div className="org-highlight-placeholder">
                      {org.organization.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                  <div className="org-highlight-overlay">
                    <span className="org-view-label">View Details</span>
                  </div>
                </div>
                <div className="org-highlight-info">
                  <span className="org-highlight-badge">{org.position}</span>
                  <h3 className="org-highlight-name">{org.organization}</h3>
                  <p className="org-highlight-duration">{org.duration}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Other Organizations - Compact Grid */}
        {otherOrgs.length > 0 && (
          <div className="org-other-wrapper">
            <h3 className="org-other-title">Other Involvement</h3>
            <div className="org-other-grid">
              {otherOrgs.map((org, index) => (
                <ScrollReveal key={org.id} direction="up" delay={0.05 * (index % 3)}>
                  <div
                    className="org-compact-card"
                    onClick={() => setSelectedOrg(org)}
                    data-cursor-hover
                  >
                    <div className="org-compact-image">
                      {org.image ? (
                        <img src={org.image} alt={org.organization} className="org-compact-img" />
                      ) : (
                        <div className="org-compact-placeholder">
                          {org.organization.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <div className="org-compact-info">
                      <p className="org-compact-position">{org.position}</p>
                      <p className="org-compact-name">{org.organization}</p>
                      <p className="org-compact-duration">{org.duration}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
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
