const API_BASE =
  process.env.REACT_APP_API_BASE || "https://dentist-2a03.onrender.com";
const doctorsData = async (date) => {
  const url = new URL(`${API_BASE}/api/schedule`);
  if (date) {
    url.searchParams.set("date", date);
  }
  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Failed to fetch doctors data");
  }
  const data = await response.json();
  return data;
};

export default doctorsData;
