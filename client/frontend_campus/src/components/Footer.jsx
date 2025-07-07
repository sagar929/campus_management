import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Army Institute of Technology, Pune</p>
        <div className="flex space-x-4 text-xl">
          <a href="https://www.facebook.com/aitpune/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-blue-400" />
          </a>
          <a href="https://twitter.com/ait_pune" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-blue-400" />
          </a>
          <a href="https://www.linkedin.com/school/army-institute-of-technology-ait-pune/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-400" />
          </a>
          <a href="https://www.youtube.com/@aitpuneofficial2820" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-red-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
