import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

import './css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-icons">
          <a href="https://github.com/Mohitmadelwar" target="_blank" rel="noopener noreferrer">
            <FaGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/mohit-madelwar-80252b1b3/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={32} />
          </a>
          <a href="https://x.com/MMadelwar" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={32} />
          </a>
        </div>
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} Mohit Madelwar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
