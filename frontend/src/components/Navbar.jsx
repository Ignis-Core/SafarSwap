import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();   // ✅ inside component

  return (
    <div className="navbar">
      <div className="nav-container">

        <div className="logo">
          <div className="logo-box">S</div>
          <span>
            Safar<span className="yellow">Swap</span>
          </span>
        </div>

        <div className="nav-links">

          <NavLink to="/" end
            className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>

          <NavLink to="/buy"
            className={({ isActive }) => isActive ? "active" : ""}>
            Buy Ticket
          </NavLink>

          <NavLink to="/sell"
            className={({ isActive }) => isActive ? "active" : ""}>
            Sell Ticket
          </NavLink>

          <NavLink to="/activity"
            className={({ isActive }) => isActive ? "active" : ""}>
            My Activity
          </NavLink>

          <NavLink to="/about"
            className={({ isActive }) => isActive ? "active" : ""}>
            About
          </NavLink>

        </div>

        {/* ✅ SIGN IN BUTTON (CORRECT PLACE) */}
        <button
          onClick={() => navigate("/auth")}
          className="sign-btn"
        >
          Sign in
        </button>

      </div>
    </div>
  );
}