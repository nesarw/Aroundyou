import React from 'react';

const BottomNav = () => {
  // TODO: Implement BottomNav with 4 icons: Discover, Inbox, Matches, Profile
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
      <button>Discover</button>
      <button>Inbox</button>
      <button>Matches</button>
      <button>Profile</button>
    </nav>
  );
};

export default BottomNav; 