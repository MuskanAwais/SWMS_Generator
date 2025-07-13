import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const CreateSWMS = () => {
  const [form, setForm] = useState({
    jobName: '',
    address: '',
    tradeType: '',
    description: '',
    duration: '',
    startDate: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Step 1: Project Info</h2>
        <form className="space-y-4">
          <input name="jobName" placeholder="Job Name" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="address" placeholder="Project Address" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="tradeType" placeholder="Trade Type" onChange={handleChange} className="w-full p-2 border rounded" />
          <textarea name="description" placeholder="Project Description" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="duration" type="number" placeholder="Duration (days)" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="startDate" type="date" onChange={handleChange} className="w-full p-2 border rounded" />
          <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Next Step</button>
        </form>
      </div>
    </div>
  );
};

export default CreateSWMS;
