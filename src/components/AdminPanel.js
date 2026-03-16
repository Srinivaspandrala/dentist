import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faUsers,
  faCheckCircle,
  faClipboard,
  faTrash,
  faEye,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

const AdminPanel = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const response = await fetch(`${API_BASE}/api/appointments`);
        if (!response.ok) {
          throw new Error("Failed to fetch appointments");
        }
        const data = await response.json();
        setAppointments(Array.isArray(data) ? data : []);
      } catch (err) {
        setError("Unable to load appointments.");
      } finally {
        setLoading(false);
      }
    }
    fetchAppointments();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      setAppointments(appointments.filter((appt) => appt.id !== id));
    }
  };

  const stats = [
    {
      icon: faCalendarAlt,
      label: "Total Appointments",
      value: appointments.length,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: faUsers,
      label: "Unique Patients",
      value: new Set(appointments.map((a) => a.patient_name)).size,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: faCheckCircle,
      label: "Completed",
      value: appointments.length,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin">
              <FontAwesomeIcon
                icon={faTooth}
                className="text-4xl text-blue-600"
              />
            </div>
            <p className="mt-4 text-gray-600 font-medium">
              Loading appointments...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
              <FontAwesomeIcon
                icon={faClipboard}
                className="text-white text-2xl"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
          </div>
          <p className="text-gray-600">
            Manage patient appointments and schedules
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <p className="text-red-800 font-medium">{error}</p>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${stat.bgColor}`}>
                  <FontAwesomeIcon
                    icon={stat.icon}
                    className={`text-2xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Appointments Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {appointments.length === 0 ? (
            <div className="p-12 text-center">
              <div className="text-gray-400 text-5xl mb-4">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Appointments
              </h3>
              <p className="text-gray-600">
                There are no appointments scheduled yet.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Patient Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Time
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Dentist
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Specialty
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appt, index) => (
                    <tr
                      key={appt.id}
                      className={`border-b border-gray-100 hover:bg-blue-50 transition ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="px-6 py-4">
                        <p className="font-medium text-gray-900">
                          {appt.patient_name}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-gray-600 text-sm">{appt.email}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-2 text-gray-900 font-medium">
                          <FontAwesomeIcon
                            icon={faCalendarAlt}
                            className="text-blue-500"
                          />
                          {appt.date}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-gray-900 font-medium">{appt.time}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-gray-900 font-medium">
                          {appt.doctor}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {appt.specialist}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-2 hover:bg-blue-100 rounded-lg transition text-blue-600 hover:text-blue-700">
                            <FontAwesomeIcon icon={faEye} />
                          </button>
                          <button
                            onClick={() => handleDelete(appt.id)}
                            className="p-2 hover:bg-red-100 rounded-lg transition text-red-600 hover:text-red-700"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
