import React, { useEffect } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  useEffect(() => {
    // Typing effect for hero subtitle
    const typeWriter = (element: HTMLElement, text: string, speed = 100) => {
      let i = 0;
      element.innerHTML = '';
      
      const type = () => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      };
      
      type();
    };

    // Initialize typing effect
    const subtitle = document.querySelector('.hero-subtitle') as HTMLElement;
    if (subtitle) {
      const originalText = subtitle.textContent || '';
      typeWriter(subtitle, originalText, 50);
    }

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero') as HTMLElement;
      const rate = scrolled * -0.5;
      
      if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Anuhya Ramisetty</span>
            </h1>
            <h2 className="hero-subtitle">Aspiring Front End Developer & Computer Science Student</h2>
            <p className="hero-description">
              Passionate about building innovative web applications with React.js, Node.js, and emerging technologies like AI.<br />
              Currently pursuing B.Tech in Computer Science with a focus on creating impactful digital solutions.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary" onClick={(e) => handleButtonClick(e, '#projects')}>View My Work</a>
              <a href="#contact" className="btn btn-secondary" onClick={(e) => handleButtonClick(e, '#contact')}>Get In Touch</a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-avatar">
              <img 
                src="/WhatsApp Image 2025-10-11 at 18.49.15_80f0167e.jpg" 
                alt="Anuhya Ramisetty" 
                className="avatar-image"
              />
              <div className="floating-icons">
                <div className="floating-icon" style={{'--delay': '0s'} as React.CSSProperties}><i className="fab fa-react"></i></div>
                <div className="floating-icon" style={{'--delay': '1s'} as React.CSSProperties}><i className="fab fa-node-js"></i></div>
                <div className="floating-icon" style={{'--delay': '2s'} as React.CSSProperties}><i className="fab fa-python"></i></div>
                <div className="floating-icon" style={{'--delay': '3s'} as React.CSSProperties}><i className="fab fa-js"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;