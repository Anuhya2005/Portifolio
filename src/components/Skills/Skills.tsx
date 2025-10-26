import React, { useEffect } from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  useEffect(() => {
    // Skill tags hover effect
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
      const handleMouseEnter = () => {
        (tag as HTMLElement).style.transform = 'scale(1.05)';
      };
      
      const handleMouseLeave = () => {
        (tag as HTMLElement).style.transform = 'scale(1)';
      };

      tag.addEventListener('mouseenter', handleMouseEnter);
      tag.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        tag.removeEventListener('mouseenter', handleMouseEnter);
        tag.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  const skillCategories = [
    {
      icon: 'fas fa-code',
      title: 'Programming Languages',
      skills: ['JavaScript', 'Java', 'Python']
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Frontend Development',
      skills: ['React.js', 'HTML5', 'CSS3', 'Responsive Design']
    },
    {
      icon: 'fas fa-server',
      title: 'Backend & Databases',
      skills: ['Node.js', 'MongoDB', 'SQL']
    },
    {
      icon: 'fas fa-tools',
      title: 'Tools & Platforms',
      skills: ['Git', 'VS Code', 'Chrome DevTools']
    },
    {
      icon: 'fas fa-brain',
      title: 'AI Tools',
      skills: ['ChatGPT', 'Gemini', 'Perplexity AI', 'Lovable.AI']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-icon">
                <i className={category.icon}></i>
              </div>
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;