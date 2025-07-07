import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img src="/ait_logo.jpeg" alt="AIT Logo" className="h-10 w-10 rounded-full" />
        <h1 className="text-xl font-semibold">AIT Campus Portal</h1>
      </div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/register" className="hover:underline">Register Complaint</Link>
        <a href="https://www.aitpune.com/History-AIT.aspx" target="_blank" rel="noopener noreferrer" className="hover:underline">About AIT</a>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
