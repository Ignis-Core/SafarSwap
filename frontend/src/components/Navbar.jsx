import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
     // ✅ inside component

      const [isLoggedIn, setIsLoggedIn] =
  useState(false);

useEffect(() => {

  const token =
    localStorage.getItem("token");

  if (token) {

    setIsLoggedIn(true);
  }

}, []);
 const handleLogout = () => {

  localStorage.removeItem("token");

  setIsLoggedIn(false);

  navigate("/auth");
};

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
        {
  isLoggedIn ? (

    <div className="profile-section">

      <button
        className="profile-btn"
        onClick={() =>
          navigate("/activity")
        }
      >
        👤 Profile
      </button>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

    </div>

  ) : (

    <button
      onClick={() =>
        navigate("/auth")
      }
      className="sign-btn"
    >
      Sign in
    </button>

  )
}

      </div>
    </div>
  );
}