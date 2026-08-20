import { useState } from "react";

function BookingPage() {
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");

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

          <div className="form-group">
            <label htmlFor="appointmentDate">
              Date
            </label>

            <input
              id="appointmentDate"
              type="date"
            />
          </div>

          <div className="form-group">
            <label htmlFor="timeSlot">
              Time Slot
            </label>

            <input
              id="timeSlot"
              type="text"
              placeholder="10:00 AM - 11:00 AM"
            />
          </div>

          <button
            type="submit"
            className="booking-button"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;