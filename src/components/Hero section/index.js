import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faCalendarAlt,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-50 py-12 sm:py-20 lg:py-28">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full opacity-20 translate-y-1/3 -translate-x-1/3"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 z-10">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Smile,{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  Our Priority
                </span>
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-lg">
                Book your dentist appointment online easily. Get expert dental
                care from qualified professionals in your area.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#doctors"
                className="btn-primary inline-flex items-center justify-center space-x-2 text-base"
              >
                <FontAwesomeIcon icon={faCalendarAlt} />
                <span>Book Appointment</span>
                <FontAwesomeIcon icon={faArrowRight} size="sm" />
              </a>
              <a
                href="tel:+1234567890"
                className="btn-secondary inline-flex items-center justify-center space-x-2 text-base"
              >
                <FontAwesomeIcon icon={faPhoneAlt} />
                <span>Call Now</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="flex flex-col items-center sm:items-start space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                  500+
                </div>
                <p className="text-sm text-gray-600">Dentists</p>
              </div>
              <div className="flex flex-col items-center sm:items-start space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                  10k+
                </div>
                <p className="text-sm text-gray-600">Happy Patients</p>
              </div>
              <div className="flex flex-col items-center sm:items-start space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                  4.9★
                </div>
                <p className="text-sm text-gray-600">Rating</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden md:flex justify-center items-center">
            <div className="absolute w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl opacity-10 blur-3xl"></div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/damoxc2du/image/upload/v1754043000/Screenshot_2025-08-01_153757-removebg-preview_vhtwj1.png"
                alt="Professional Dentist"
                className="max-w-md w-full h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
