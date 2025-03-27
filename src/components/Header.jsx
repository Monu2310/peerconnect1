import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUsers, FaSearch, FaBell, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ isAuthenticated, logout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [messages, setMessages] = useState(2);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <FaUsers className="logo-icon" />
          <span className="logo-text">PeerConnectHub</span>
        </Link>

        {!isAuthenticated && location.pathname === '/' && (
          <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link to="/#features" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Features
            </Link>
            <Link to="/#how-it-works" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              How It Works
            </Link>
            <Link to="/#testimonials" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Testimonials
            </Link>
          </nav>
        )}

        <div className="header-right">
          {isAuthenticated ? (
            <>
              <div className="search-container">
                <FaSearch className="search-icon" />
                <input type="text" placeholder="Search for groups, peers..." className="search-input" />
              </div>
              
              <div className="notification-icon">
                <FaBell />
                {notifications > 0 && <span className="badge">{notifications}</span>}
              </div>
              
              <div className="message-icon">
                <FaEnvelope />
                {messages > 0 && <span className="badge">{messages}</span>}
              </div>
              
              <div className="user-profile" onClick={() => document.getElementById('user-dropdown').classList.toggle('active')}>
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="avatar" />
                <div id="user-dropdown" className="dropdown-menu">
                  <div className="dropdown-header">
                    <p className="user-name">John Doe</p>
                    <p className="user-email">john.doe@university.edu</p>
                  </div>
                  <Link to="/profile" className="dropdown-item">Profile</Link>
                  <Link to="/settings" className="dropdown-item">Settings</Link>
                  <button onClick={logout} className="dropdown-item logout">Log out</button>
                </div>
              </div>
            </>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="btn btn-outline">Log In</Link>
              <Link to="/signup" className="btn btn-primary">Sign Up</Link>
            </div>
          )}
          
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {!isAuthenticated ? (
            <>
              <Link to="/#features" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
                Features
              </Link>
              <Link to="/#how-it-works" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
                How It Works
              </Link>
              <Link to="/#testimonials" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
                Testimonials
              </Link>
              <div className="mobile-auth">
                <Link to="/login" className="btn btn-outline-mobile" onClick={() => setIsMobileMenuOpen(false)}>
                  Log In
                </Link>
                <Link to="/signup" className="btn btn-primary-mobile" onClick={() => setIsMobileMenuOpen(false)}>
                  Sign Up
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="mobile-search">
                <FaSearch className="mobile-search-icon" />
                <input type="text" placeholder="Search..." className="mobile-search-input" />
              </div>
              <Link to="/dashboard" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
                Dashboard
              </Link>
              <Link to="/profile" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
                Profile
              </Link>
              <Link to="/messages" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
                Messages
                {messages > 0 && <span className="mobile-badge">{messages}</span>}
              </Link>
              <Link to="/notifications" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
                Notifications
                {notifications > 0 && <span className="mobile-badge">{notifications}</span>}
              </Link>
              <button 
                    onClick={() => {
                    logout(); 
                    setIsMobileMenuOpen(false);
                }} 
                    className="mobile-link logout">
                        Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;

                     

