import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faHospital,
  faLocationDot,
  faStarHalf,
  faBriefcaseMedical,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import doctorsData from "../DoctorData";

const DoctorCard = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDoctorsList() {
      try {
        const response = await doctorsData();
        setDoctors(Array.isArray(response) ? response : []);
      } catch (err) {
        console.error("Error fetching doctors:", err);
        setDoctors([]);
      } finally {
        setLoading(false);
      }
    }
    getDoctorsList();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="animate-spin">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <section
      id="doctors"
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Our Expert Team
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Dentists
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Book trusted dental care with experienced specialists. Choose from
            our network of qualified dentists across the region.
          </p>
        </div>

        {/* Doctor Cards Grid - All in Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, idx) => (
            <div
              key={doctor.id || idx}
              className="group flex flex-col bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden hover:transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
            >
              {/* Doctor Image Section - Enhanced */}
              <div className="relative overflow-hidden bg-gradient-to-b from-blue-100 to-blue-50 h-56 flex-shrink-0">
                <img
                  src={doctor.avatar}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="w-full p-4 text-white">
                    <p className="text-sm font-semibold">Expert Dentist</p>
                  </div>
                </div>
              </div>

              {/* Doctor Info Section */}
              <div className="p-5 flex flex-col flex-1">
                {/* Name and Specialty */}
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {doctor.name}
                  </h3>
                  <div className="flex items-center text-blue-600 text-xs font-semibold space-x-2 mt-1">
                    <FontAwesomeIcon icon={faBriefcaseMedical} size="sm" />
                    <span className="line-clamp-1">{doctor.qualification}</span>
                  </div>
                </div>

                {/* Rating - Compact */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex space-x-0.5">
                    {[...Array(4)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStarHalf}
                        className="text-yellow-400"
                        size="xs"
                      />
                    ))}
                    <FontAwesomeIcon
                      icon={faStarHalf}
                      className="text-gray-300"
                      size="xs"
                    />
                  </div>
                  <span className="text-xs text-gray-600 font-medium">4.8</span>
                  <span className="text-xs text-gray-400">(250+)</span>
                </div>

                {/* Divider */}
                <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-3"></div>

                {/* Details - Compact */}
                <div className="space-y-2 mb-4 flex-1">
                  <div className="flex items-start space-x-2">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-blue-600 text-xs flex-shrink-0 mt-0.5"
                    />
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-700">
                        Experience
                      </p>
                      <p className="text-xs text-gray-600">
                        {doctor.years_experience}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <FontAwesomeIcon
                      icon={faHospital}
                      className="text-blue-600 text-xs flex-shrink-0 mt-0.5"
                    />
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-700">
                        Clinic
                      </p>
                      <p className="text-xs text-gray-600 line-clamp-1">
                        {doctor.clinic_name}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-blue-600 text-xs flex-shrink-0 mt-0.5"
                    />
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-700">
                        Location
                      </p>
                      <p className="text-xs text-gray-600">{doctor.location}</p>
                    </div>
                  </div>
                </div>

                {/* Availability Badge - Enhanced */}
                <div
                  className={`flex items-center justify-center px-2 py-1.5 rounded-lg text-xs font-bold mb-3 transition-colors ${
                    doctor.availableToday
                      ? "bg-green-100 text-green-700 group-hover:bg-green-200"
                      : "bg-amber-100 text-amber-700 group-hover:bg-amber-200"
                  }`}
                >
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                  {doctor.availableToday ? "Available Today" : "Soon Available"}
                </div>

                {/* Book Button - Improved */}
                <button
                  onClick={() => {
                    window.location.href = `/availability/${doctor.id || idx}`;
                  }}
                  className="w-full py-2.5 px-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
                >
                  <span>Book Now</span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size="sm"
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {doctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No doctors available at the moment. Please try again later.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorCard;
