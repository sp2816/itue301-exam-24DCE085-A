import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="home-page">
      <div className="home-content">
       
        

        <h2>Hospital Appointment System</h2>

        <p>
          Welcome to MedCare Plus Hospital. Find qualified doctors,
          check their availability, and book your appointment with
          ease.
        </p>

        <div className="home-actions">
          <Link to="/doctors" className="primary-button">
            Find a Doctor
          </Link>

          <Link to="/booking" className="secondary-button">
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomePage;