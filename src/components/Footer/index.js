import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faClock,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faTooth}
                  className="text-white text-lg"
                />
              </div>
              <span className="font-bold text-xl text-white">SmileCare</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We help you find trusted dental care and book appointments with
              experienced dentists in your area. Your smile is our priority.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#doctors"
                  className="hover:text-blue-400 transition-colors"
                >
                  Doctors
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition-colors"
                >
                  General Checkups
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Teeth Whitening
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Root Canal Treatment
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Orthodontics
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Dental Implants
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-blue-400 mt-1 flex-shrink-0"
                />
                <span className="text-sm">
                  123 Hitech City, Hyderabad, Telangana 501234
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="text-blue-400 mt-1 flex-shrink-0"
                />
                <a
                  href="tel:+919876543210"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  +91 9876543210
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-blue-400 mt-1 flex-shrink-0"
                />
                <a
                  href="mailto:info@smilecare.com"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  info@smilecare.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-blue-400 mt-1 flex-shrink-0"
                />
                <span className="text-sm">Mon-Fri: 8:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} SmileCare Dental Clinic. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
