const express = require("express");
const nodemailer = require("nodemailer");
const {
  createAppointment,
  listAppointments,
} = require("../models/Appointment");

function createAppointmentRoutes(db) {
  const router = express.Router();

  router.post("/patients", (req, res) => {
    const { patient_name, email, date, time, doctor, specialist } = req.body;
    console.log("Received patient data:", req.body);

    if (!patient_name || !email || !date || !time || !doctor || !specialist) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    createAppointment(
      db,
      { patient_name, email, date, time, doctor, specialist },
      (err) => {
        if (err) {
          console.error(
            "Database error while inserting patient:",
            err.message,
          );
          return res.status(500).json({ error: "DB error" });
        }

        const emailUser = process.env.EMAIL;
        const emailKey = process.env.EMAIL_KEY;

        const mailOptions = {
          from: `"Dentist Appointments ${emailUser || "no-reply"}"`,
          to: email,
          subject: "Dentist Appointment Confirmation",
          text: `Hi ${patient_name},

Your appointment is confirmed. Here are the details:

Dentist: ${doctor}
Qualification: ${specialist}
Date: ${date}
Time: ${time}

If you need to reschedule, please contact the clinic.

Thank you for choosing us,
Dentist Appointment Team
`,
        };

        if (!emailUser || !emailKey) {
          return res.status(200).json({
            message:
              "Appointment booked successfully! Email skipped (missing credentials).",
            emailSent: false,
          });
        }

        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: emailUser,
            pass: emailKey,
          },
        });

        transporter.sendMail(mailOptions, (error) => {
          if (error) {
            console.error("Error sending email:", error.message);
            return res.status(200).json({
              message: "Appointment booked successfully! Email failed to send.",
              emailSent: false,
            });
          }
          res.status(200).json({
            message:
              "Appointment booked successfully! Confirmation email sent.",
            emailSent: true,
          });
        });
      },
    );
  });

  router.get("/appointments", (req, res) => {
    listAppointments(db, (err, rows) => {
      if (err) {
        console.error(
          "Database error while fetching appointments:",
          err.message,
        );
        return res.status(500).json({ error: "DB error" });
      }
      res.json(rows);
    });
  });

  return router;
}

module.exports = createAppointmentRoutes;
