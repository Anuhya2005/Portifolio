import React, { useEffect } from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  useEffect(() => {
    // Project cards tilt effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      const handleMouseMove = (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left;
        const y = mouseEvent.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      };
      
      const handleMouseLeave = () => {
        (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  const projects = [
    {
      title: 'Lab Requirement Management System',
      description: 'Built a full-stack web platform using React.js, Node.js, and MongoDB to report and track lab hardware issues. Implemented role-based access for incharges and admins, improving communication and speeding up issue resolution.',
      technologies: ['React.js', 'Node.js', 'MongoDB'],
      icon: 'fas fa-laptop-code'
    },
    {
      title: 'Organic Product Traceability',
      description: 'Built a system using blockchain to track organic farming, with IoT sensors to monitor water, fertilizer, and pesticide use in real time. Used AI to check if the farming followed organic rules, helping farmers earn more and giving consumers clear, trustworthy information.',
      technologies: ['Blockchain', 'IoT', 'AI/ML'],
      icon: 'fas fa-seedling'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <i className={project.icon}></i>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href="#" className="project-link"><i className="fab fa-github"></i> Code</a>
                  <a href="#" className="project-link"><i className="fas fa-external-link-alt"></i> Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;