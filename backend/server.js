const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const { initDentistAvailability } = require("./models/Dentist");
const { initAppointments } = require("./models/Appointment");
const createDentistRoutes = require("./routes/dentistRoutes");
const createAppointmentRoutes = require("./routes/appointmentRoutes");
require("dotenv").config();

const app = express();

// Initialize the database connection
const db = new sqlite3.Database("database.db", (err) => {
  if (err) {
    console.error("Failed to connect to the database:", err.message);
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Initialize tables and seed data
initDentistAvailability(db);
initAppointments(db);

// Routes
app.use("/api", createDentistRoutes(db));
app.use("/api", createAppointmentRoutes(db));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT);
