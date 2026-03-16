import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faCalendarAlt,
  faArrowLeft,
  faCheckCircle,
  faExclamationCircle,
  faStarHalf,
  faClock,
  faPhone,
  faEnvelope,
  faLocationDot,
  faHospital,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import doctorsData from "../DoctorData";

const API_BASE =
  process.env.REACT_APP_API_BASE || "https://dentist-2a03.onrender.com";

const DoctorAvailability = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [activeMonth, setActiveMonth] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: new Date().toISOString().slice(0, 10),
    time_slot: "",
  });

  useEffect(() => {
    async function fetchDoctor() {
      try {
        const data = await doctorsData();
        const found = Array.isArray(data)
          ? data.find((doc, idx) => String(doc.id || idx) === String(id))
          : null;
        setDoctor(found || null);
      } catch (err) {
        console.error("Error fetching doctor:", err);
        setDoctor(null);
      }
    }
    fetchDoctor();
  }, [id]);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      patient_name: form.name,
      email: form.email,
      phone: form.phone,
      date: form.date,
      time: form.time_slot,
      doctor: doctor?.name,
      specialist: doctor?.qualification,
    };
    try {
      const createRes = await fetch(`${API_BASE}/api/patients`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!createRes.ok) {
        const errorText = await createRes.text();
        throw new Error(errorText || "Failed booking appointment");
      }

      setBookingSuccess(true);
      setShowModal(false);
      setTimeout(() => {
        setBookingSuccess(false);
        navigate("/");
      }, 3000);
    } catch (err) {
      console.error("Booking error:", err);
      alert("Failed to book appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!doctor)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="text-4xl text-gray-400 mb-4"
          />
          <p className="text-xl text-gray-600">Dentist not found</p>
          <button onClick={() => navigate("/")} className="mt-4 btn-primary">
            Go Back Home
          </button>
        </div>
      </div>
    );

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium mb-4"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Back</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900">
            Book Your Appointment
          </h1>
        </div>
      </div>

      {/* Success Message */}
      {bookingSuccess && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-600 text-xl mt-1 flex-shrink-0"
            />
            <div>
              <h3 className="font-bold text-green-900">
                Appointment Booked Successfully!
              </h3>
              <p className="text-green-800 text-sm mt-1">
                A confirmation email has been sent to {form.email}. You will be
                redirected shortly.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Doctor Info Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 card">
              {/* Doctor Image */}
              <div className="relative mb-6">
                <img
                  src={doctor.avatar}
                  alt={doctor.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Doctor Details */}
              <div className="space-y-2 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {doctor.name}
                </h2>
                <p className="text-blue-600 font-semibold flex items-center space-x-1">
                  <FontAwesomeIcon icon={faStarHalf} size="sm" />
                  <span>{doctor.qualification}</span>
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-6 pb-6 border-b border-gray-200">
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStarHalf}
                      className="text-yellow-400 text-sm"
                    />
                  ))}
                  <FontAwesomeIcon
                    icon={faStarHalf}
                    className="text-gray-300 text-sm"
                  />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  4.8 (250+ reviews)
                </span>
              </div>

              {/* Info Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="text-blue-600 text-lg flex-shrink-0 mt-1"
                  />
                  <div>
                    <p className="text-sm text-gray-600">Experience</p>
                    <p className="font-semibold text-gray-900">
                      {doctor.years_experience} years
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FontAwesomeIcon
                    icon={faHospital}
                    className="text-blue-600 text-lg flex-shrink-0 mt-1"
                  />
                  <div>
                    <p className="text-sm text-gray-600">Clinic</p>
                    <p className="font-semibold text-gray-900">
                      {doctor.clinic_name}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-blue-600 text-lg flex-shrink-0 mt-1"
                  />
                  <div>
                    <p className="text-sm text-gray-600">Address</p>
                    <p className="font-semibold text-gray-900">
                      {doctor.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full btn-primary"
                >
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                  Book Appointment
                </button>
                <button
                  onClick={() => setShowAbout(true)}
                  className="w-full btn-secondary"
                >
                  About Doctor
                </button>
              </div>
            </div>
          </div>

          {/* Right: Calendar & Booking Form */}
          <div className="lg:col-span-2">
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Select Date & Time
              </h3>

              {/* Quick Date Selection */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-gray-600 mb-3">
                  Select a date
                </p>
                <div className="grid grid-cols-7 gap-2">
                  {[...Array(7)].map((_, i) => {
                    const date = new Date();
                    date.setDate(date.getDate() + i);
                    const dateStr = date.toISOString().slice(0, 10);
                    const isSelected = form.date === dateStr;

                    return (
                      <button
                        key={i}
                        onClick={() => setForm({ ...form, date: dateStr })}
                        className={`p-3 rounded-lg text-center transition-colors ${
                          isSelected
                            ? "bg-blue-600 text-white font-bold"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        <div className="text-xs font-semibold">
                          {date.toLocaleDateString("en-US", {
                            weekday: "short",
                          })}
                        </div>
                        <div className="text-lg font-bold">
                          {date.getDate()}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slot Selection */}
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-3">
                  Select a time
                </p>
                <div className="grid grid-cols-4 gap-3">
                  {timeSlots.map((slot) => {
                    const isSelected = form.time_slot === slot;
                    return (
                      <button
                        key={slot}
                        onClick={() => setForm({ ...form, time_slot: slot })}
                        className={`p-3 rounded-lg text-center font-medium transition-colors ${
                          isSelected
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick Info */}
              <div className="mt-8 pt-6 border-t border-gray-200 bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Appointment Details
                </h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>
                    📅 Date:{" "}
                    {new Date(form.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p>🕐 Time: {form.time_slot || "Not selected"}</p>
                  <p>👨‍⚕️ Doctor: {doctor.name}</p>
                  <p>📍 Duration: 30 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">
                Patient Information
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FontAwesomeIcon icon={faX} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="input-field"
                  required
                  value={form.name}
                  onChange={handleFormChange}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="input-field"
                  required
                  value={form.email}
                  onChange={handleFormChange}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="input-field"
                  required
                  value={form.phone}
                  onChange={handleFormChange}
                />
              </div>

              <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                <p className="text-sm font-semibold text-gray-700">
                  Appointment Details
                </p>
                <p className="text-sm text-gray-600">
                  📅{" "}
                  {new Date(form.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <p className="text-sm text-gray-600">
                  🕐 {form.time_slot || "Select a time"}
                </p>
              </div>

              <button
                type="submit"
                disabled={
                  loading ||
                  !form.name ||
                  !form.email ||
                  !form.phone ||
                  !form.time_slot
                }
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Booking..." : "Confirm Booking"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* About Doctor Modal */}
      {showAbout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">
                About Dr. {doctor.name}
              </h3>
              <button
                onClick={() => setShowAbout(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FontAwesomeIcon icon={faX} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Dr. {doctor.name} is an experienced {doctor.qualification} with{" "}
                {doctor.years_experience} years of dedicated practice. With
                expertise in comprehensive dental care, Dr. {doctor.name} is
                committed to providing exceptional treatment and ensuring
                patient satisfaction. Their compassionate approach combined with
                modern techniques makes them a trusted dental professional.
              </p>

              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <h4 className="font-semibold text-gray-900">Specializations</h4>
                <p className="text-gray-700">{doctor.qualification}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <h4 className="font-semibold text-gray-900">
                  Clinic Information
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Clinic Name:</strong> {doctor.clinic_name}
                  </p>
                  <p>
                    <strong>Location:</strong> {doctor.location}
                  </p>
                  <p>
                    <strong>Experience:</strong> {doctor.years_experience} years
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowAbout(false)}
                className="w-full btn-primary mt-4"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorAvailability;
