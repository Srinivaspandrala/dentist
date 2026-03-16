const express = require("express");
const { getSchedule, updateSchedule } = require("../models/Dentist");

function createDentistRoutes(db) {
  const router = express.Router();

  router.get("/schedule", (req, res) => {
    const date = req.query.date || new Date().toISOString().split("T")[0];
    getSchedule(db, date, (err, grouped) => {
      if (err) {
        console.error("Database error while fetching schedule:", err.message);
        return res.status(500).json({ error: "DB error" });
      }
      res.json(grouped);
    });
  });

  router.put("/schedule", (req, res) => {
    const { name, date, time_slot, status } = req.body;
    if (!name || !date || !time_slot || !status) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    updateSchedule(db, { name, date, time_slot, status }, (err, result) => {
      if (err) {
        console.error("Database error while updating schedule:", err.message);
        return res.status(500).json({ error: "DB error" });
      }
      if (result.changes === 0) {
        return res.status(404).json({ error: "No matching record found" });
      }
      res.json({ success: true });
    });
  });

  return router;
}

module.exports = createDentistRoutes;
