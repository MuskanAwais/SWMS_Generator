// ✅ Update src/App.js to include all routes
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import CreateSWMS from './pages/CreateSWMS';
import Documents from './pages/Documents';
import ViewSWMS from './pages/ViewSWMS';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateSWMS />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/swms/:id" element={<ViewSWMS />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;