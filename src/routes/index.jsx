import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Discover from '../pages/Discover';
import Inbox from '../pages/Inbox';
import Matches from '../pages/Matches';
import Profile from '../pages/Profile';
import Chat from '../pages/Chat';
import Whisperreveal from '../pages/Whisperreveal';

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/discover" element={<Discover />} />
    <Route path="/inbox" element={<Inbox />} />
    <Route path="/matches" element={<Matches />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/chat/:id" element={<Chat />} />
    <Route path="/whisperreveal" element={<Whisperreveal />} />
    <Route path="*" element={<Login />} />
  </Routes>
);

export default AppRoutes; 