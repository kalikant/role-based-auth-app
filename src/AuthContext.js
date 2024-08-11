import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const login = (username, password) => {
    // Replace with actual authentication logic
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      setUserRole('admin');
    } else if (username === 'user' && password === 'user') {
      setIsAuthenticated(true);
      setUserRole('regular_user');
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
