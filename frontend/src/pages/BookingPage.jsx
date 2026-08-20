import { useState } from "react";

function BookingPage() {
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Book an Appointment</h1>

        <p>
          Fill in the details below to schedule your hospital
          appointment.
        </p>
      </div>

      <div className="booking-card">
        <form className="booking-form">
          {/* Patient Name */}
          <div className="form-group">
            <label htmlFor="patientName">
              Patient Name
            </label>

            <input
              id="patientName"
              type="text"
              placeholder="Enter patient name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
          </div>

          {/* Doctor Name */}
          <div className="form-group">
            <label htmlFor="doctorName">
              Doctor Name
            </label>

            <input
              id="doctorName"
              type="text"
              placeholder="Enter doctor name"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
            />
          </div>

          {/* Date */}
          <div className="form-group">
            <label htmlFor="appointmentDate">
              Date
            </label>

            <input
              id="appointmentDate"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Time Slot */}
          <div className="form-group">
            <label htmlFor="timeSlot">
              Time Slot
            </label>

            <input
              id="timeSlot"
              type="text"
              placeholder="10:00 AM - 11:00 AM"
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="booking-button"
          >
            Book Appointment
          </button>
        </form>

        {/* useState Output */}
        <div className="appointment-card" style={{ marginTop: "25px" }}>
          <h3>Current Appointment Details</h3>

          <p>
            <strong>Patient:</strong>{" "}
            {patientName || "Not entered"}
          </p>

          <p>
            <strong>Doctor:</strong>{" "}
            {doctorName || "Not entered"}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {date || "Not selected"}
          </p>

          <p>
            <strong>Time:</strong>{" "}
            {timeSlot || "Not entered"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;