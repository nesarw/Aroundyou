import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';
import AppRoutes from './routes';
// import BottomNav from './components/BottomNav';

const App = () => {
  // TODO: Add global modals, notifications, and improve layout
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="pb-16 min-h-screen">
          <AppRoutes />
        </div>
        {/* <BottomNav /> */}
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
