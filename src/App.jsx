import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Login from './login/page';
import Signup from './signup/page';
import Dashboard from './dashboard/page';
import StudyGroup from './study-group/page';
import SportsActivity from './sports-activity/page';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  const login = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.setItem('isAuthenticated', 'false');
    setIsAuthenticated(false);
  };

  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/login" 
          element={
            isAuthenticated ? 
            <Navigate to="/dashboard" /> : 
            <Login login={login} />
          } 
        />
        <Route 
          path="/signup" 
          element={
            isAuthenticated ? 
            <Navigate to="/dashboard" /> : 
            <Signup login={login} />
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated ? 
            <Dashboard logout={logout} /> : 
            <Navigate to="/login" />
          } 
        />
        <Route 
          path="/study-group/:id" 
          element={
            isAuthenticated ? 
            <StudyGroup logout={logout} /> : 
            <Navigate to="/login" />
          } 
        />
        <Route 
          path="/sports-activity/:id" 
          element={
            isAuthenticated ? 
            <SportsActivity logout={logout} /> : 
            <Navigate to="/login" />
          } 
        />
      </Routes>
    
  );
}

export default App;
