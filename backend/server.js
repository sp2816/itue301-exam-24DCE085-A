const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const Patient = require("./models/Patient");
const Doctor = require("./models/Doctor");
const Appointment = require("./models/Appointment");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// --------------------
// Middleware
// --------------------

app.use(cors());
app.use(express.json());

// Global request logger
const requestLogger = (req, res, next) => {
  console.log(
    `[${req.method}] ${req.originalUrl} [${new Date().toISOString()}]`
  );

  next();
};

app.use(requestLogger);

// --------------------
// In-memory data
// --------------------

let doctors = [
  {
    id: 1,
    name: "Dr. Sharma",
    specialisation: "Cardiology",
    available: true,
  },
  {
    id: 2,
    name: "Dr. Mehta",
    specialisation: "Neurology",
    available: true,
  },
  {
    id: 3,
    name: "Dr. Patel",
    specialisation: "Orthopedics",
    available: false,
  },
];

let appointments = [
  {
    id: 1,
    patientName: "Rahul Kumar",
    doctorName: "Dr. Sharma",
    date: "2026-08-25",
    timeSlot: "10:00 AM - 11:00 AM",
    status: "confirmed",
  },
];

// --------------------
// Routes
// --------------------

// GET all appointments
app.get("/api/v1/appointments", (req, res) => {
  res.status(200).json(appointments);
});

// POST new appointment
app.post("/api/v1/appointments", (req, res, next) => {
  const { patientName, doctorName, date, timeSlot, status } = req.body;

  if (!patientName || !doctorName || !date || !timeSlot) {
    const error = new Error(
      "patientName, doctorName, date and timeSlot are required"
    );

    error.statusCode = 400;

    return next(error);
  }

  const newAppointment = {
    id: appointments.length + 1,
    patientName,
    doctorName,
    date,
    timeSlot,
    status: status || "pending",
  };

  appointments.push(newAppointment);

  res.status(201).json(newAppointment);
});

// GET all doctors
app.get("/api/v1/doctors", (req, res) => {
  res.status(200).json(doctors);
});

// test Patient schema required fields unique email bloodGroup enum
app.post("/api/v1/patients", async (req, res, next) => {
  try {
    const patient = await Patient.create(req.body);

    res.status(201).json({
      success: true,
      data: patient,
    });
  } catch (error) {
    next(error);
  }
});

app.post("/api/v1/mongodb/doctors", async (req, res, next) => {
  try {
    const doctor = await Doctor.create(req.body);

    res.status(201).json({
      success: true,
      data: doctor,
    });
  } catch (error) {
    next(error);
  }
});

app.post("/api/v1/mongodb/appointments", async (req, res, next) => {
  try {
    const appointment = await Appointment.create(req.body);

    res.status(201).json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    next(error);
  }
});

// --------------------
// 404 handler
// --------------------

app.use((req, res, next) => {
  const error = new Error(`Route not found: ${req.originalUrl}`);

  error.statusCode = 404;

  next(error);
});

// --------------------
// Global error handler
// --------------------

app.use((err, req, res, next) => {
  console.error(err);

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((error) => ({
      field: error.path,
      message: error.message,
    }));

    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors,
    });
  }

  // MongoDB duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];

    return res.status(400).json({
      success: false,
      message: `${field} must be unique`,
    });
  }

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// mongoose connection
mongoose.connect(MONGO_URI).then(() => {
    console.log("MongoDB connected successfully");
  }).catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });

// --------------------
// Start server
// --------------------

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});