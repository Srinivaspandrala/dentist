function initAppointments(db) {
  db.run(
    `
    CREATE TABLE IF NOT EXISTS patients (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      patient_name TEXT,
      email TEXT,
      phone TEXT,
      date TEXT,
      time TEXT,
      doctor TEXT,
      specialist TEXT
    )
  `,
    (err) => {
      if (err) {
        console.error("Error creating patients table:", err.message);
      }
    },
  );
}

function createAppointment(db, payload, callback) {
  const { patient_name, email, date, time, doctor, specialist } = payload;
  db.run(
    `INSERT INTO patients (patient_name, email, date, time, doctor, specialist) VALUES (?, ?, ?, ?, ?, ?)`,
    [patient_name, email, date, time, doctor, specialist],
    function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, { id: this.lastID });
    },
  );
}

function listAppointments(db, callback) {
  db.all(`SELECT * FROM patients ORDER BY id DESC`, [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
}

module.exports = {
  initAppointments,
  createAppointment,
  listAppointments,
};
