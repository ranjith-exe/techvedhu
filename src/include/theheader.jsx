import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import whitelogo from "../../src/assets/company/whitelogo-techvedhu.svg";


function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={whitelogo} alt="Tech Vedhu Logo" className="w-2/4" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 font-semibold relative z-50">
          <a href="#" className="hover:text-gray-300">Home</a>

          {/* Internship Program with Dropdown */}
          <div className="relative group">
            <a href="#" className="hover:text-gray-300 flex items-center">
              Internship Program
              <FiChevronDown className="ml-1" />
            </a>
            <div className="absolute left-0 top-full mt-1 hidden group-hover:flex flex-col bg-white text-black py-2 rounded shadow-lg w-full z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">PYTHON</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">CLOUD COMPUTING</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">ARTIFICIAL INTELLIGENCE</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">CYBER SECURITY</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">DATA SCIENCE</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">APP DEVELOPMENT</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">WEB DEVELOPMENT</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">DIGITAL MARKETING</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">MACHINE LEARNING</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">MARKETING AND SALES</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">JAVA</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">HUMAN RESOURCE</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">UI/UX</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">FINANCE</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">STOCK MARKET</a>
            </div>
          </div>

          {/* Placement Assurance with Dropdown */}
          <div className="relative group">
            <a href="#" className="hover:text-gray-300 flex items-center">
              Placement Assurance
              <FiChevronDown className="ml-1" />
            </a>
            <div className="absolute left-0 top-full mt-1 hidden group-hover:flex flex-col bg-white text-black py-2 rounded shadow-lg w-full z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Fullstack Developer</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Android Developer</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Data analysis and Data science</a>
            </div>
          </div>

          {/* More with Dropdown */}
          <div className="relative group">
            <a href="#" className="hover:text-gray-300 flex items-center">
              More
              <FiChevronDown className="ml-1" />
            </a>
            <div className="absolute left-0 top-full mt-1 hidden group-hover:flex flex-col bg-white text-black py-2 rounded shadow-lg w-220 z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">About Us</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Contact</a>
            </div>
          </div>
        </nav>

        {/* Login/Signup Button */}
        <a
          href="#"
          className="hidden md:block font-medium border border-white  px-4 py-2 rounded hover:bg-white hover:text-blue-900"
        >
          Login/Signup
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-blue-800 text-white">
          <a href="#" className="block px-4 py-2 hover:bg-blue-700">Home</a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-700">Internship Program</a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-700">Placement assurance</a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-700">More</a>
          <a href="#" className="block px-4 py-2 border-t border-white hover:bg-blue-700">
            Login/Signup
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
