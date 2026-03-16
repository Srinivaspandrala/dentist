import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTooth,
  faBrush,
  faBriefcaseMedical,
  faTeeth,
  faSyringe,
  faSmile,
  faTint,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const dentalServices = [
    {
      id: 1,
      title: "Routine Checkups",
      icon: faSmile,
      description:
        "Regular dental examinations to maintain optimal oral health and detect issues early.",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Professional Cleaning",
      icon: faBrush,
      description:
        "Deep cleaning and tartar removal to keep your teeth healthy and bright.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: 3,
      title: "Teeth Whitening",
      icon: faTint,
      description:
        "Professional whitening treatments to achieve a brighter, more confident smile.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: 4,
      title: "Root Canal Treatment",
      icon: faTooth,
      description:
        "Expert root canal therapy to save teeth and eliminate pain.",
      color: "from-orange-500 to-red-600",
    },
    {
      id: 5,
      title: "Orthodontics",
      icon: faTeeth,
      description:
        "Braces and aligners to straighten teeth and improve your bite.",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 6,
      title: "Dental Implants",
      icon: faBriefcaseMedical,
      description:
        "Permanent tooth replacement solutions for a natural-looking smile.",
      color: "from-amber-500 to-orange-600",
    },
    {
      id: 7,
      title: "Gum Treatment",
      icon: faShieldHalved,
      description: "Comprehensive gum disease treatment and preventive care.",
      color: "from-rose-500 to-pink-600",
    },
    {
      id: 8,
      title: "Cosmetic Dentistry",
      icon: faSyringe,
      description:
        "Aesthetic treatments including veneers and bonding for your perfect smile.",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Dental Care
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a full range of dental services to meet all your oral
            health needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {dentalServices.map((service) => (
            <div
              key={service.id}
              className="group h-full bg-white rounded-xl border border-gray-200 hover:border-blue-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:transform hover:-translate-y-1"
            >
              {/* Icon Section */}
              <div
                className={`h-40 bg-gradient-to-br ${service.color} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <FontAwesomeIcon
                  icon={service.icon}
                  size="3x"
                  className="text-white relative z-10 group-hover:scale-110 transition-transform"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a
                    href="/"
                    className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors group/link"
                  >
                    Learn More
                    <span className="ml-2 group-hover/link:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Improve Your Smile?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Book an appointment with our expert dentists today and take the
            first step towards optimal dental health.
          </p>
          <a
            href="#doctors"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Schedule Your Visit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
