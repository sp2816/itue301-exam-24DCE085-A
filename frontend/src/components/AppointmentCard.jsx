function AppointmentCard({
  patientName,
  doctorName,
  date,
  timeSlot,
  status,
}) {
  return (
    <div className={`appointment-card status-${status}`}>
      <h3>Appointment Details</h3>

      <p>
        <strong>Patient:</strong> {patientName || "Not entered"}
      </p>

      <p>
        <strong>Doctor:</strong> {doctorName || "Not entered"}
      </p>

      <p>
        <strong>Date:</strong> {date || "Not selected"}
      </p>

      <p>
        <strong>Time:</strong> {timeSlot || "Not entered"}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        <span className="appointment-status">
          {status}
        </span>
      </p>
    </div>
  );
}

export default AppointmentCard;