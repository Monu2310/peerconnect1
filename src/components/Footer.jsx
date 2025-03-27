import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-container">
          <div className="footer-info">
            <Link to="/" className="footer-logo">
              <FaUsers className="footer-logo-icon" />
              <span className="footer-logo-text">PeerConnectHub</span>
            </Link>
            <p className="footer-description">
              Connecting college students for academic success and active lifestyles.
              Build meaningful connections, improve your grades, and stay active.
            </p>
            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          <div className="footer-links-container">
            <div className="footer-links">
              <h3 className="footer-links-title">Platform</h3>
              <ul className="footer-links-list">
                <li><Link to="/#features">Features</Link></li>
                <li><Link to="/#how-it-works">How It Works</Link></li>
                <li><Link to="/#testimonials">Testimonials</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h3 className="footer-links-title">Resources</h3>
              <ul className="footer-links-list">
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/partners">Campus Partners</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h3 className="footer-links-title">Legal</h3>
              <ul className="footer-links-list">
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/cookies">Cookie Policy</Link></li>
                <li><Link to="/accessibility">Accessibility</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} PeerConnectHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
