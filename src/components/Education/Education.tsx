import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'VVITU',
      grade: 'CGPA: 81.7%',
      year: '2022 - Present'
    },
    {
      degree: 'Intermediate',
      institution: 'Nri Junior College',
      grade: '94%',
      year: '2020 - 2022'
    },
    {
      degree: 'Class 10',
      institution: 'Chanakya School',
      grade: '86%',
      year: '2020'
    }
  ];

  const certifications = [
    { title: 'Crash Course on Python', provider: 'Coursera', icon: 'fab fa-python' },
    { title: 'Programming in Java', provider: 'NPTEL', icon: 'fab fa-java' },
    { title: 'Cloud Computing', provider: 'NPTEL', icon: 'fas fa-cloud' },
    { title: 'DBMS & SQL', provider: 'Infosys', icon: 'fas fa-database' },
    { title: 'HTML & CSS', provider: 'EdX', icon: 'fab fa-html5' },
    { title: 'AWS Fundamentals', provider: 'Coursera', icon: 'fab fa-aws' }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        <div className="education-content">
          <div className="education-timeline">
            <h3>Academic Journey</h3>
            <div className="timeline">
              {educationData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{item.degree}</h4>
                    <p className="institution">{item.institution}</p>
                    <p className="grade">{item.grade}</p>
                    <span className="year">{item.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="certifications">
            <h3>Certifications</h3>
            <div className="cert-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-card">
                  <i className={cert.icon}></i>
                  <h4>{cert.title}</h4>
                  <p>{cert.provider}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;