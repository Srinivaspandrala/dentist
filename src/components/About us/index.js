import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTooth,
  faHeartbeat,
  faUserMd,
  faAward,
  faCheck,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  const features = [
    {
      icon: faAward,
      title: "Award-Winning Care",
      description: "Recognized for excellence in dental healthcare",
    },
    {
      icon: faTooth,
      title: "Expert Dentists",
      description: "Highly qualified and experienced professionals",
    },
    {
      icon: faHeartbeat,
      title: "Patient-Centered",
      description: "Your comfort and satisfaction is our priority",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-10 blur-3xl transform -skew-x-12"></div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Our Dental Clinic"
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>

              {/* Badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-lg py-3 px-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faSmile}
                    className="text-blue-600 text-2xl"
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-lg">10k+</p>
                    <p className="text-sm text-gray-600">Happy Patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                About Us
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Your Smile is Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For over 15 years, we've been dedicated to providing world-class
                dental care with a personal touch. Our team of expert dentists
                uses the latest technology and techniques to ensure your smile
                remains beautiful and healthy.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600">
                      <FontAwesomeIcon
                        icon={feature.icon}
                        className="text-white"
                        size="lg"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                <span>Our Commitment</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-600 mt-1 flex-shrink-0"
                  />
                  <span>Using latest dental technology and techniques</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-600 mt-1 flex-shrink-0"
                  />
                  <span>Providing compassionate and personalized care</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-600 mt-1 flex-shrink-0"
                  />
                  <span>
                    Ensuring comfort and satisfaction for every patient
                  </span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <a
              href="#doctors"
              className="btn-primary inline-flex items-center space-x-2 text-base"
            >
              <span>Schedule Your Visit</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
