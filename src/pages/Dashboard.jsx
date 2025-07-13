import React from 'react';
import Navbar from '../components/Navbar';

const Dashboard = () => (
  <div>
    <Navbar />
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded shadow">Credits: 10</div>
        <div className="bg-yellow-100 p-4 rounded shadow">Drafts: 2</div>
        <div className="bg-green-100 p-4 rounded shadow">Completed: 4</div>
      </div>
      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Create New SWMS
      </button>
    </div>
  </div>
);

export default Dashboard;
