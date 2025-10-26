import React, { useEffect } from 'react';
import './About.css';

const About: React.FC = () => {
  useEffect(() => {
    // Counter animation for stats
    const animateCounters = () => {
      const counters = document.querySelectorAll('.stat-item h3');
      
      counters.forEach(counter => {
        const target = counter.textContent || '';
        const numericTarget = parseFloat(target.replace(/[^\d.]/g, ''));
        const suffix = target.replace(/[\d.]/g, '');
        
        if (!isNaN(numericTarget)) {
          let current = 0;
          const increment = numericTarget / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= numericTarget) {
              current = numericTarget;
              clearInterval(timer);
            }
            counter.textContent = Math.floor(current) + suffix;
          }, 40);
        }
      });
    };

    // Trigger counter animation when stats section is visible
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
      statsObserver.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        statsObserver.unobserve(statsSection);
      }
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a dedicated Computer Science student at VVIT with a passion for creating innovative digital solutions. My journey in technology spans front development, AI integration.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>6+</h3>
                <p>Certifications</p>
              </div>
              <div className="stat-item">
                <h3>2+</h3>
                <p>Major Projects</p>
              </div>
              <div className="stat-item">
                <h3>81.7%</h3>
                <p>Current CGPA</p>
              </div>
            </div>
          </div>
          <div className="about-skills-preview">
            <h3>Core Competencies</h3>
            <ul className="skills-list">
              <li><i className="fas fa-check"></i> Front End Development</li>
              <li><i className="fas fa-check"></i> Database Management</li>
              <li><i className="fas fa-check"></i> AI/ML Applications</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;