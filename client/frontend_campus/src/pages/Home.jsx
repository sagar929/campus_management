import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to AIT Campus Maintenance Portal</h1>
        <p className="text-lg md:text-xl mb-6">Register complaints and track resolutions efficiently.</p>
        <Link
          to="/register"
          className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold transform transition-transform duration-300 hover:scale-110 hover:bg-blue-200 shadow-md"
        >
          Register a Complaint
        </Link>
      </div>

      {/* How It Works Section */}
      <div className="bg-white bg-opacity-90 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">How It Works</h2>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          {[
            {
              step: "1",
              title: "Sign In / Sign Up",
              desc: "Create your account or log in to access the complaint portal.",
            },
            {
              step: "2",
              title: "Describe the Issue",
              desc: "Fill out the complaint form with category, description, and photo.",
            },
            {
              step: "3",
              title: "Connect with Your Campus",
              desc: "Stay in sync with campus facilities and support staff for quick issue resolution.",
            },
            {
              step: "4",
              title: "Get a Solution",
              desc: "Your issue is forwarded to the right department for quick resolution.",
            },
            {
              step: "5",
              title: "Rate Your Experience",
              desc: "Once resolved, provide feedback to improve services.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex-1 min-w-[200px] max-w-xs p-6 rounded-xl shadow bg-blue-50 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl text-blue-800 font-bold mb-2">{item.step}</div>
              <h3 className="text-lg font-semibold mb-2 text-blue-900">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Info Cards Section - Styled like How It Works */}
      <div className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Features</h2>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          {[
            {
              title: "Fast Complaint Redressal",
              desc: "Receive quick updates and responses for your maintenance issues.",
            },
            {
              title: "Worker Allocation",
              desc: "Professionals like electricians and plumbers assigned instantly.",
            },
            {
              title: "Real-Time Tracking",
              desc: "Monitor live status updates of all your complaints from dashboard.",
            },
            {
              title: "Rate Their Work",
              desc: "Give feedback and ratings after a task is completed for quality check.",
            },
            {
              title: "Complaint History",
              desc: "Access your previous complaints and status for records and re-checks.",
            },
            {
              title: "Admin & Warden Dashboard",
              desc: "Dedicated portals for staff to manage complaints and assign workers.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[200px] max-w-xs p-6 rounded-xl shadow bg-blue-50 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-2 text-blue-900">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;