# Dentist Appointment (Monorepo)

This repo reorganizes the existing frontend and backend into a clean, structured layout without changing business logic.

## Structure

```
dentist-appointment/
├── backend/
│   ├── server.js
│   ├── models/
│   │   ├── Dentist.js
│   │   └── Appointment.js
│   └── routes/
│       ├── dentistRoutes.js
│       └── appointmentRoutes.js
├── public/
├── src/
│   ├── components/
│   ├── App.js
│   └── index.js
└── README.md
```

## Setup

### Backend

```bash
cd backend
npm install
node server.js
```

### Frontend

```bash
npm install
npm start
```

## API Endpoints

- `GET /api/schedule` (availability for a date)
- `PUT /api/schedule` (update slot status)
- `POST /api/patients` (book appointment)
- `GET /api/appointments` (list appointments)
