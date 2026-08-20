import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        <span>MedCare Plus</span>
      </NavLink>

      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/doctors"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Doctors
        </NavLink>

        <NavLink
          to="/booking"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Booking
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;