import { useEffect, useState } from "react";

function DoctorsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:5000/api/v1/doctors"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch doctors");
        }

        const doctors = await response.json();

        setData(doctors);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return (
      <div className="page-container">
        <div className="status-message">
          Loading doctors...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <div className="error-message">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Our Doctors</h1>

        <p>
          Meet our experienced healthcare professionals and check
          their current availability.
        </p>
      </div>

      {data.length === 0 ? (
        <div className="status-message">
          No doctors available.
        </div>
      ) : (
        <div className="doctors-grid">
          {data.map((doctor) => (
            <div className="doctor-card" key={doctor.id}>
              

              <h2>{doctor.name}</h2>

              <p className="doctor-specialisation">
                {doctor.specialisation}
              </p>

              <span
                className={`availability ${
                  doctor.available
                    ? "available"
                    : "unavailable"
                }`}
              >
                {doctor.available
                  ? "● Available"
                  : "● Not Available"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DoctorsPage;