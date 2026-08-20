import { useState } from "react";

function BookingPage() {
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");

  return (
    <div>
      <h1>Book Appointment</h1>

      <form>
        <div>
          <label>Patient Name</label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </div>

        <div>
          <label>Doctor Name</label>
          <input
            type="text"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
          />
        </div>

        <div>
          <label>Date</label>
          <input type="date" />
        </div>

        <div>
          <label>Time Slot</label>
          <input type="text" placeholder="10:00 AM - 11:00 AM" />
        </div>
      </form>

      <p>Patient: {patientName}</p>
      <p>Doctor: {doctorName}</p>
    </div>
  );
}

export default BookingPage;