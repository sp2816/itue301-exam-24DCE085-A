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
    return <h2>Loading doctors...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Doctors</h1>

      {data.length === 0 ? (
        <p>No doctors available.</p>
      ) : (
        data.map((doctor) => (
          <div key={doctor.id}>
            <h2>{doctor.name}</h2>

            <p>
              <strong>Specialisation:</strong>{" "}
              {doctor.specialisation}
            </p>

            <p>
              <strong>Availability:</strong>{" "}
              {doctor.available ? "Available" : "Not Available"}
            </p>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default DoctorsPage;