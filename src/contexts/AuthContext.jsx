import React, { createContext } from 'react';

// TODO: Implement AuthContext logic and provider
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // TODO: Add auth state and methods
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider; 