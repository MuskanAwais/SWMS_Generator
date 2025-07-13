import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">SWMS Generator</h1>
      <div className="space-x-4">
        <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
        <Link to="/create" className="text-gray-700 hover:text-blue-600">New SWMS</Link>
        <Link to="/documents" className="text-gray-700 hover:text-blue-600">My SWMS</Link>
        <Link to="/profile" className="text-gray-700 hover:text-blue-600">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
