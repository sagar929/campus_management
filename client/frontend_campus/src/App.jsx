import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RegisterComplaint from './pages/RegisterComplaint';
// import AdminPage from './pages/Admin';
import Contact from './pages/ContactUs';
import ManagerDashboard from './pages/ManagerDashboard'; // <-- imported correctly
import { AuthProvider } from './context/AuthContext';
import AuthModal from './pages/Login';
import RoleBasedRedirect from './pages/RoleBasedRedirect';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <AuthProvider>
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<AuthModal />} />
              <Route path="/register" element={<RegisterComplaint />} />
              {/* <Route path="/admin" element={<AdminPage />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/manager" element={<ManagerDashboard />} />
              
              <Route path="/dashboard" element={<RoleBasedRedirect />} />
            </Routes>
          </div>
        </AuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
