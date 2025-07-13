// ✅ src/pages/Documents.jsx
import React from 'react';
import Navbar from '../components/Navbar';

const Documents = () => {
  const drafts = ["Draft SWMS 1", "Draft SWMS 2"];
  const completed = ["SWMS Final 1", "SWMS Final 2"];

  return (
    <div>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">My SWMS</h2>

        <h3 className="text-lg font-semibold mb-2">Drafts</h3>
        <ul className="space-y-2 mb-6">
          {drafts.map((item, idx) => (
            <li key={idx} className="p-3 bg-yellow-100 rounded shadow">{item}</li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold mb-2">Completed</h3>
        <ul className="space-y-2">
          {completed.map((item, idx) => (
            <li key={idx} className="p-3 bg-green-100 rounded shadow">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Documents;