import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import LoginForm from './components/LoginForm';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Services from './pages/Services';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
  const { isAuthenticated, userRole } = useAuth();

  return (
    <Router>
      {isAuthenticated && <Header role={userRole} />}
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to={userRole === 'admin' ? '/dashboard' : '/profile'} /> : <LoginForm />} />
        <Route path="/dashboard" element={isAuthenticated && userRole === 'admin' ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/" />} />
        <Route path="/services" element={isAuthenticated ? <Services /> : <Navigate to="/" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default function WrappedApp() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
