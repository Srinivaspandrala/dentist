const API_BASE =
  process.env.REACT_APP_API_BASE || "https://dentist-2a03.onrender.com";
const DOCTORS_API_URL = `${API_BASE}/api/schedule`;

const doctorsData = async () => {
  const response = await fetch(DOCTORS_API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch doctors data");
  }
  const data = await response.json();
  return data;
};

export default doctorsData;
