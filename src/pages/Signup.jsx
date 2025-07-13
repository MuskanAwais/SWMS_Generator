import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form>
        <input type="text" placeholder="Full Name" className="w-full p-2 border rounded mb-4" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-4" />
        <input type="text" placeholder="Mobile Number" className="w-full p-2 border rounded mb-4" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-4" />
        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Create Account</button>
      </form>
      <p className="mt-4 text-sm text-center">
        Already have an account? <Link to="/" className="text-blue-600">Login</Link>
      </p>
    </div>
  </div>
);

export default Signup;
