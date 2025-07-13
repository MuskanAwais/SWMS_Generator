// ✅ src/pages/ViewSWMS.jsx
import React from 'react';
import Navbar from '../components/Navbar';

const ViewSWMS = () => {
  const swms = {
    jobName: "Lighting Installation",
    address: "123 ABC Street, Sydney",
    trade: "Electrician",
    duration: "5 days",
    startDate: "2025-07-15",
    status: "Completed"
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 max-w-3xl mx-auto bg-white shadow rounded">
        <h2 className="text-2xl font-semibold mb-4">SWMS Details</h2>
        <ul className="space-y-2">
          <li><strong>Job Name:</strong> {swms.jobName}</li>
          <li><strong>Address:</strong> {swms.address}</li>
          <li><strong>Trade:</strong> {swms.trade}</li>
          <li><strong>Duration:</strong> {swms.duration}</li>
          <li><strong>Start Date:</strong> {swms.startDate}</li>
          <li><strong>Status:</strong> {swms.status}</li>
        </ul>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ViewSWMS;