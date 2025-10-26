import React, { useEffect } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  useEffect(() => {
    // Dynamic year in footer
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-content p');
    if (footerText && footerText.textContent?.includes('2024')) {
      footerText.textContent = footerText.textContent.replace('2024', currentYear.toString());
    }
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2024 Anuhya Ramisetty. All rights reserved.</p>
          <p>Built with passion and modern web technologies.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;