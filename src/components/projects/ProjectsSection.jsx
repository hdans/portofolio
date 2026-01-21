import { useState } from 'react';
import ScrollReveal from '../common/ScrollReveal';
import Modal from '../common/Modal';
import { projectsData } from '../../data/projectsData';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projectsData.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="section-header">
            <span className="section-number">05</span>
            <h2 className="section-title">Projects</h2>
            <div className="section-line"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-tab ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
                data-cursor-hover
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} direction="up" delay={0.1 * (index % 3)}>
              <div 
                className="project-card"
                onClick={() => setSelectedProject(project)}
                data-cursor-hover
              >
                <div className="project-image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-img" />
                  ) : (
                    <div className="project-image-placeholder" />
                  )}
                  <div className="project-category-badge">{project.category}</div>
                  <div className="project-overlay">
                    <span className="view-details">View Details</span>
                  </div>
                </div>
                
                <div className="project-info">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="tech-tag more">+{project.techStack.length - 4}</span>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="project-modal-content">
            <div className="project-modal-image">
              {selectedProject.image ? (
                <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />
              ) : (
                <div className="modal-image-placeholder" />
              )}
              <div className="modal-category-badge">{selectedProject.category}</div>
            </div>
            
            <div className="modal-header">
              <h3 className="modal-title">{selectedProject.title}</h3>
              <span className="modal-year">{selectedProject.year}</span>
            </div>
            
            <p className="modal-description">{selectedProject.longDescription}</p>
            
            <div className="modal-tech-stack">
              <h4 className="tech-stack-title">Tech Stack</h4>
              <div className="tech-stack-tags">
                {selectedProject.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-stack-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="modal-links">
              {selectedProject.github && (
                <a 
                  href={selectedProject.github} 
                  className="project-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-cursor-hover
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ProjectsSection;
