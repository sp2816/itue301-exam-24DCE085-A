import { useState } from "react";
import AppointmentCard from "../components/AppointmentCard";

function BookingPage() {
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [status, setStatus] = useState("pending");

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
              onChange={(e) =>
                setPatientName(e.target.value)
              }
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
              onChange={(e) =>
                setDoctorName(e.target.value)
              }
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
              onChange={(e) =>
                setDate(e.target.value)
              }
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
              onChange={(e) =>
                setTimeSlot(e.target.value)
              }
            />
          </div>

          {/* Status */}
          <div className="form-group">
            <label htmlFor="status">
              Appointment Status
            </label>

            <select
              id="status"
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
            >
              <option value="pending">
                Pending
              </option>

              <option value="confirmed">
                Confirmed
              </option>

              <option value="cancelled">
                Cancelled
              </option>
            </select>
          </div>

          <button
            type="button"
            className="booking-button"
          >
            Book Appointment
          </button>
        </form>

        {/* Appointment Card */}
        <AppointmentCard
          patientName={patientName}
          doctorName={doctorName}
          date={date}
          timeSlot={timeSlot}
          status={status}
        />
      </div>
    </div>
  );
}

export default BookingPage;