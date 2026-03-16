const DENTISTS = [
  {
    name: "Dr. Sunitha Rao",
    qualification: "BDS, MDS (Prosthodontics)",
    years_experience: "10+",
    clinic_name: "Sunitha Dental Care",
    address: "12A, Jubilee Hills Road",
    location: "Hyderabad",
    avatar:
      "https://www.shutterstock.com/image-photo/head-shot-woman-wearing-white-600nw-1529466836.jpg",
  },
  {
    name: "Dr. Ramya Iyer",
    qualification: "BDS, MDS (Pedodontics)",
    years_experience: "8+",
    clinic_name: "Little Smiles Dental",
    address: "45, MG Road",
    location: "Bengaluru",
    avatar:
      "https://static.vecteezy.com/system/resources/thumbnails/048/638/758/small/female-doctor-in-a-with-a-gray-background-free-photo.jpg",
  },
  {
    name: "Dr. Vinay Kumar",
    qualification: "BDS, MDS (Oral Surgery)",
    years_experience: "9+",
    clinic_name: "SmileCraft Dental Studio",
    address: "22, Hitech City",
    location: "Hyderabad",
    avatar:
      "https://media.istockphoto.com/id/1311511363/photo/headshot-portrait-of-smiling-male-doctor-with-tablet.jpg?s=612x612&w=0&k=20&c=w5TecWtlA_ZHRpfGh20II-nq5AvnhpFu6BfOfMHuLMA=",
  },
  {
    name: "Dr. Yashwanth",
    qualification: "BDS, MDS (Orthodontics)",
    years_experience: "7+",
    clinic_name: "Align Dental Clinic",
    address: "78, Park Street",
    location: "Chennai",
    avatar:
      "https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg",
  },
  {
    name: "Dr. Shivaji",
    qualification: "BDS, MDS (Periodontics)",
    years_experience: "11+",
    clinic_name: "Healthy Gums Dental",
    address: "9, Banjara Hills",
    location: "Hyderabad",
    avatar:
      "https://static.vecteezy.com/system/resources/thumbnails/048/628/084/small/doctor-in-casual-attire-with-background-free-photo.jpg",
  },
  {
    name: "Dr. Suresh Varma",
    qualification: "BDS, MDS (Endodontics)",
    years_experience: "12+",
    clinic_name: "RootCare Dental",
    address: "15, Boat Club Road",
    location: "Pune",
    avatar:
      "https://static.vecteezy.com/system/resources/thumbnails/059/946/764/small/portrait-of-friendly-european-doctor-in-workwear-with-stethoscope-on-neck-posing-in-clinic-interior-looking-and-smiling-at-camera-photo.jpg",
  },
];

const TIME_SLOTS = [
  "9am-10am",
  "10am-11am",
  "11am-12pm",
  "12pm-1pm",
  "2pm-3pm",
  "4pm-5pm",
  "5pm-6pm",
  "6pm-8pm",
  "8pm-9pm",
];

function initDentistAvailability(db) {
  db.run(
    `
    CREATE TABLE IF NOT EXISTS doctor_availability (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      qualification TEXT,
      years_experience TEXT,
      clinic_name TEXT,
      address TEXT,
      location TEXT,
      avatar TEXT,
      date TEXT,
      time_slot TEXT,
      status TEXT
    )
  `,
    (err) => {
      if (err) {
        console.error("Error creating doctor_availability table:", err.message);
      } else {
        ensureDentistColumns(db, () => {
          const currentDate = new Date().toISOString().split("T")[0];
          ensureDayData(db, currentDate, () => {});
        });
      }
    },
  );
}

function ensureDentistColumns(db, callback) {
  const desired = [
    { name: "qualification", type: "TEXT" },
    { name: "years_experience", type: "TEXT" },
    { name: "clinic_name", type: "TEXT" },
    { name: "address", type: "TEXT" },
    { name: "location", type: "TEXT" },
  ];

  db.all(`PRAGMA table_info(doctor_availability)`, [], (err, rows) => {
    if (err) {
      console.error("Error reading table info:", err.message);
      return callback();
    }

    const existing = new Set(rows.map((row) => row.name));
    const missing = desired.filter((col) => !existing.has(col.name));
    if (missing.length === 0) {
      return callback();
    }

    let pending = missing.length;
    missing.forEach((col) => {
      db.run(
        `ALTER TABLE doctor_availability ADD COLUMN ${col.name} ${col.type}`,
        (alterErr) => {
          if (alterErr) {
            console.error(
              `Error adding column ${col.name}:`,
              alterErr.message,
            );
          }
          pending -= 1;
          if (pending === 0) {
            callback();
          }
        },
      );
    });
  });
}

function ensureDayData(db, date, callback) {
  db.get(
    `SELECT COUNT(*) AS count FROM doctor_availability WHERE date = ?`,
    [date],
    (err, row) => {
      if (err) {
        console.error(
          `Error checking existing data for date ${date}:`,
          err.message,
        );
        return callback();
      }

      const seedDay = () => {
        const stmt = db.prepare(`
        INSERT INTO doctor_availability
        (name, qualification, years_experience, clinic_name, address, location, avatar, date, time_slot, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'available')
      `);

        for (const dentist of DENTISTS) {
          for (const slot of TIME_SLOTS) {
            stmt.run(
              dentist.name,
              dentist.qualification,
              dentist.years_experience,
              dentist.clinic_name,
              dentist.address,
              dentist.location,
              dentist.avatar,
              date,
              slot,
              (err) => {
                if (err) {
                  console.error(
                    `Error inserting data for dentist ${dentist.name} on ${date} at ${slot}:`,
                    err.message,
                  );
                }
              },
            );
          }
        }

        stmt.finalize((err) => {
          if (err) {
            console.error(
              "Error finalizing ensureDayData statement:",
              err.message,
            );
          }
          callback();
        });
      };

      if (row.count > 0) {
        db.get(
          `SELECT COUNT(*) AS missing FROM doctor_availability WHERE date = ? AND (qualification IS NULL OR clinic_name IS NULL)`,
          [date],
          (missingErr, missingRow) => {
            if (missingErr) {
              console.error(
                "Error checking dentist columns:",
                missingErr.message,
              );
              return callback();
            }
            if (missingRow.missing > 0) {
              db.run(
                `DELETE FROM doctor_availability WHERE date = ?`,
                [date],
                (deleteErr) => {
                  if (deleteErr) {
                    console.error(
                      "Error resetting dentist data:",
                      deleteErr.message,
                    );
                    return callback();
                  }
                  seedDay();
                },
              );
            } else {
              return callback();
            }
          },
        );
        return;
      }

      seedDay();
    },
  );
}

function getSchedule(db, date, callback) {
  ensureDayData(db, date, () => {
    db.all(
      `SELECT * FROM doctor_availability WHERE date = ?`,
      [date],
      (err, rows) => {
        if (err) {
          return callback(err);
        }

        const grouped = {};
        for (const row of rows) {
          if (!grouped[row.name]) {
            grouped[row.name] = {
              name: row.name,
              qualification: row.qualification,
              years_experience: row.years_experience,
              clinic_name: row.clinic_name,
              address: row.address,
              location: row.location,
              avatar: row.avatar,
              availableToday: true,
              date,
              slots: {},
            };
          }
          grouped[row.name].slots[row.time_slot] = row.status;
        }

        callback(null, Object.values(grouped));
      },
    );
  });
}

function updateSchedule(db, payload, callback) {
  const { name, date, time_slot, status } = payload;
  db.run(
    `UPDATE doctor_availability SET status = ? WHERE name = ? AND date = ? AND time_slot = ?`,
    [status, name, date, time_slot],
    function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, { changes: this.changes });
    },
  );
}

module.exports = {
  DENTISTS,
  TIME_SLOTS,
  initDentistAvailability,
  ensureDayData,
  getSchedule,
  updateSchedule,
};
