import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/Footer';
import { FaUsers, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = 'Login | PeerConnectHub';
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        login();
      }, 1500);
    }
  };

  return (
    <div className="login-page">
      <Header />

      <main className="auth-main">
        <div className="container auth-container">
          <div className="auth-content">
            <div className="auth-card">
              <div className="auth-header">
                <FaUsers className="auth-logo" />
                <h1 className="auth-title">Welcome Back</h1>
                <p className="auth-subtitle">Log in to your PeerConnectHub account</p>
              </div>

              <form className="auth-form" onSubmit={handleSubmit}>
                {/* Email Input */}
                <div className={`form-group ${errors.email ? 'error' : ''}`}>
                  <label htmlFor="email" className="form-label">Email</label>
                  <div className="input-with-icon">
                    <FaEnvelope className="input-icon" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.email && <p className="error-message">{errors.email}</p>}
                </div>

                {/* Password Input */}
                <div className={`form-group ${errors.password ? 'error' : ''}`}>
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="input-with-icon">
                    <FaLock className="input-icon" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      className="form-input"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {errors.password && <p className="error-message">{errors.password}</p>}
                </div>

                {/* Remember Me Checkbox */}
                <div className="form-group checkbox-group">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <label htmlFor="rememberMe">Remember Me</label>
                </div>

                {/* Submit Button */}
                <button type="submit" className="auth-btn" disabled={isLoading}>
                  {isLoading ? 'Logging in...' : 'Login'}
                </button>
              </form>

              {/* Forgot Password & Sign-up Link */}
              <div className="auth-links">
                <Link to="/forgot-password">Forgot Password?</Link>
                <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;