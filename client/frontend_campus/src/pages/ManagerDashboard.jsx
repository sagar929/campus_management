import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const departments = [
  { name: 'Plumbing', path: 'plumbing' },
  { name: 'Electrical', path: 'electrical' },
  { name: 'Carpentry', path: 'carpentry' },
  { name: 'Internet', path: 'internet' },
  { name: 'Cleaning', path: 'cleaning' },
  { name: 'Medical', path: 'medical' },
  { name: 'Other', path: 'other' },
];

const ManagerDashboard = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [selectedDept, setSelectedDept] = useState(null);
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user'); 
    localStorage.removeItem('token');
    navigate('/');
  };

  // Fetch complaints when department changes
  // const express = require("express");
  // const Complaint = require("../models/complaintModal");
  // const verifyToken = require("../middlewares/authMiddleware");
  // const authorizeRole = require("../middlewares/roleMiddleware");
  // const router = express.Router();
  
  // // Manager fetches complaints by category
  // router.get("/:category", async (req, res) => {
  //   try {
  //     const category = req.params.category;
  //     const complaints = await Complaint.find({
  //       category: { $regex: new RegExp(`^${category}$`, "i") }
  //     });
  //     res.json(complaints);
  //   } catch (err) {
  //     res.status(500).json({ message: "Error fetching complaints" });
  //   }
  // });
  
  // module.exports = router;
  useEffect(() => {
    if (!selectedDept) return;
    setLoading(true);
    fetch(`https://campus-management-backend.onrender.com/api/complaints/${selectedDept}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        setComplaints(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [selectedDept, token]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">Manager Dashboard</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center mb-8">
        {departments.map((dept) => (
          <button
            key={dept.path}
            onClick={() => setSelectedDept(dept.path)}
            className={`bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-5 py-3 rounded-xl shadow-md transition-transform duration-300 transform hover:scale-105 text-center w-full ${
              selectedDept === dept.path ? 'ring-4 ring-blue-300' : ''
            }`}
          >
            {dept.name}
          </button>
        ))}
      </div>

      <div className="flex justify-center mb-8">
        <button
          onClick={handleLogout}
          className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition-transform duration-300 transform hover:scale-110"
        >
          Logout
        </button>
      </div>

      {/* Complaints Section */}
      {selectedDept && (
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-700 capitalize">{selectedDept} Complaints</h2>
          {loading ? (
            <p>Loading...</p>
          ) : complaints.length === 0 ? (
            <p>No complaints found for this department.</p>
          ) : (
            <ul className="space-y-2">
  {complaints.map((c) => (
    <li
      key={c._id}
      className="bg-white p-4 rounded shadow flex items-center justify-between"
    >
      <div>
        <strong>{c.name}</strong> ({c.email})<br />
        <span className="font-semibold">Room:</span> {c.roomNo}<br />
        {c.message}
      </div>
      <button
        onClick={async () => {
         await fetch(`https://campus-management-backend.onrender.com/api/auth/complaint/${c._id}`, {
  method: "DELETE",
  headers: { Authorization: `Bearer ${token}` }
});
setComplaints((prev) => prev.filter((comp) => comp._id !== c._id));
        }}
        className="ml-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800"
      >
        Done
      </button>
    </li>
  ))}
</ul>
          )}
        </div>
      )}
    </div>
  );
};

export default ManagerDashboard;