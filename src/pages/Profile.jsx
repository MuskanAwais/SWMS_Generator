// ✅ src/pages/Profile.jsx
import React from 'react';
import Navbar from '../components/Navbar';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="p-6 max-w-xl mx-auto bg-white shadow rounded">
        <h2 className="text-xl font-semibold mb-4">My Account</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Mobile Number" className="w-full p-2 border rounded" />
          <input type="file" className="w-full p-2 border rounded" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Update Profile</button>
        </form>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Billing Info</h3>
          <p>Plan: Monthly Subscription</p>
          <p>Credits: 6 remaining</p>
          <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Add Credits</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;