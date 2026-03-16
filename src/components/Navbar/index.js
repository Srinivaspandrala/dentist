import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faSearch,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              scrollToTop();
              setIsOpen(false);
            }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🦷</span>
            </div>
            <span className="font-bold text-xl text-gray-900 hidden sm:inline">
              SmileCare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              onClick={scrollToTop}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              Home
            </Link>
            <a
              href="#services"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              Services
            </a>
            <a
              href="#doctors"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              Doctors
            </a>
            <a
              href="#about"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors flex items-center space-x-1"
            >
              <FontAwesomeIcon icon={faPhone} className="text-blue-600" />
              <span>Contact</span>
            </a>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/login"
              onClick={scrollToTop}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Login
            </Link>
            <a href="#doctors" className="btn-primary text-sm">
              Book Appointment
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-colors"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={() => {
                scrollToTop();
                setIsOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              Home
            </Link>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              Services
            </a>
            <a
              href="#doctors"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              Doctors
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              <FontAwesomeIcon icon={faPhone} className="text-blue-600" />{" "}
              Contact
            </a>
            <div className="px-3 py-2 space-y-2">
              <Link
                to="/login"
                onClick={() => {
                  scrollToTop();
                  setIsOpen(false);
                }}
                className="block w-full text-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Login
              </Link>
              <a
                href="#doctors"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
