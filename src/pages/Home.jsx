import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/Footer';
import { FaBookOpen, FaTrophy, FaUsers, FaArrowRight, FaCheck, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const Home = () => {
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    // Animate elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Scroll to section if hash is present in URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="home-page">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container hero-container">
            <div className="hero-content animate-on-scroll">
              <h1 className="hero-title">Connect with peers for study and sports</h1>
              <p className="hero-description">
                PeerConnectHub helps college students find study partners and sports teammates on campus.
                Build connections, improve your grades, and stay active.
              </p>
              <div className="hero-buttons">
                <Link to="/signup" className="btn btn-primary btn-lg">
                  Get Started <FaArrowRight className="btn-icon" />
                </Link>
                <a href="#how-it-works" className="btn btn-outline btn-lg">
                  Learn More
                </a>
              </div>
            </div>
            
            <div className="hero-image-container animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80" 
                alt="Students collaborating" 
                className="hero-image"
              />
              <div className="floating-card card-1">
                <FaBookOpen className="floating-card-icon" />
                <span>200+ Study Groups</span>
              </div>
              <div className="floating-card card-2">
                <FaTrophy className="floating-card-icon" />
                <span>50+ Sports Activities</span>
              </div>
              <div className="floating-card card-3">
                <FaUsers className="floating-card-icon" />
                <span>5000+ Students</span>
              </div>
            </div>
          </div>
          
          <div className="hero-wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#f8f9fa" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" ref={featuresRef} className="features-section">
          <div className="container">
            <div className="section-header animate-on-scroll">
              <h2 className="section-title">Features</h2>
              <p className="section-description">
                Everything you need to connect with peers and succeed in college
              </p>
            </div>
            
            <div className="features-grid">
              <div className="feature-card animate-on-scroll">
                <div className="feature-icon-container">
                  <FaBookOpen className="feature-icon" />
                </div>
                <h3 className="feature-title">Study Groups</h3>
                <p className="feature-description">
                  Create or join study groups for specific courses, subjects, or projects. 
                  Schedule sessions and track progress together.
                </p>
                <ul className="feature-list">
                  <li><FaCheck className="check-icon" /> Course-specific groups</li>
                  <li><FaCheck className="check-icon" /> Shared study materials</li>
                  <li><FaCheck className="check-icon" /> Session scheduling</li>
                </ul>
              </div>
              
              <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <div className="feature-icon-container">
                  <FaTrophy className="feature-icon" />
                </div>
                <h3 className="feature-title">Sports Activities</h3>
                <p className="feature-description">
                  Find teammates for casual games, intramural sports, or workout partners. 
                  Organize events and reserve campus facilities.
                </p>
                <ul className="feature-list">
                  <li><FaCheck className="check-icon" /> Team formation</li>
                  <li><FaCheck className="check-icon" /> Event scheduling</li>
                  <li><FaCheck className="check-icon" /> Facility booking</li>
                </ul>
              </div>
              
              <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.4s' }}>
                <div className="feature-icon-container">
                  <FaUsers className="feature-icon" />
                </div>
                <h3 className="feature-title">Peer Matching</h3>
                <p className="feature-description">
                  Our smart algorithm matches you with compatible peers based on your courses, 
                  interests, schedule, and goals.
                </p>
                <ul className="feature-list">
                  <li><FaCheck className="check-icon" /> AI-powered matching</li>
                  <li><FaCheck className="check-icon" /> Compatibility scoring</li>
                  <li><FaCheck className="check-icon" /> Personalized recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section id="how-it-works" ref={howItWorksRef} className="how-it-works-section">
          <div className="container">
            <div className="section-header animate-on-scroll">
              <h2 className="section-title">How It Works</h2>
              <p className="section-description">
                Getting started with PeerConnectHub is easy
              </p>
            </div>
            
            <div className="steps-container">
              <div className="step animate-on-scroll">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3 className="step-title">Create Your Profile</h3>
                  <p className="step-description">
                    Sign up and build your profile with your courses, interests, schedule, and goals.
                  </p>
                </div>
                <div className="step-icon-container">
                  <FaGraduationCap className="step-icon" />
                </div>
              </div>
              
              <div className="step-connector"></div>
              
              <div className="step animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3 className="step-title">Find or Create Groups</h3>
                  <p className="step-description">
                    Browse existing study groups and sports activities or create your own to match your needs.
                  </p>
                </div>
                <div className="step-icon-container">
                  <FaUsers className="step-icon" />
                </div>
              </div>
              
              <div className="step-connector"></div>
              
              <div className="step animate-on-scroll" style={{ animationDelay: '0.4s' }}>
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3 className="step-title">Connect and Collaborate</h3>
                  <p className="step-description">
                    Meet up with your peers, study together, play sports, and build lasting connections.
                  </p>
                </div>
                <div className="step-icon-container">
                  <FaCalendarAlt className="step-icon" />
                </div>
              </div>
            </div>
            
            <div className="how-it-works-image-container animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                alt="Students working together" 
                className="how-it-works-image"
              />
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" ref={testimonialsRef} className="testimonials-section">
          <div className="container">
            <div className="section-header animate-on-scroll">
              <h2 className="section-title">Student Success Stories</h2>
              <p className="section-description">
                See how PeerConnectHub has helped students across campus
              </p>
            </div>
            
            <div className="testimonials-slider animate-on-scroll">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    "I was struggling with Organic Chemistry until I found a study group through PeerConnectHub. 
                    We meet twice a week and my grades have improved significantly!"
                  </p>
                </div>
                <div className="testimonial-author">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Sarah J." 
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">Shivam</h4>
                    <p className="testimonial-role">Biology Major</p>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    "As a transfer student, I didn't know many people on campus. Through PeerConnectHub, 
                    I joined an intramural basketball team and made some of my closest friends."
                  </p>
                </div>
                <div className="testimonial-author">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Manish" 
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">Manas</h4>
                    <p className="testimonial-role">Computer Science Major</p>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    "Finding study partners for my advanced math courses was always difficult until I used PeerConnectHub. 
                    Now I have a reliable group that helps me stay on track."
                  </p>
                </div>
                <div className="testimonial-author">
                  <img 
                    src="https://randomuser.me/api/portraits/women/68.jpg" 
                    alt="Anchal" 
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">Akhil</h4>
                    <p className="testimonial-role">Mathematics Major</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content animate-on-scroll">
              <h2 className="cta-title">Ready to connect with peers?</h2>
              <p className="cta-description">
                Join thousands of students already using PeerConnectHub to succeed in college.
              </p>
              <div className="cta-buttons">
                <Link to="/signup" className="btn btn-primary btn-lg">
                  Sign Up Now
                </Link>
                <Link to="/login" className="btn btn-outline btn-lg">
                  Log In
                </Link>
              </div>
            </div>
          </div>
          
          <div className="cta-wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
