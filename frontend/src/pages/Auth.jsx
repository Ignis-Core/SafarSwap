import "./Auth.css";
import { useState } from "react";
import API from "../services/api";
import { useNavigate} from "react-router-dom";
export default function Auth() {

  const [activeTab, setActiveTab] = useState("signin");
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  const [name, setName] = useState("");
const [age, setAge] = useState("");
const [gender, setGender] = useState("");
const [phone, setPhone] = useState("");
const [city, setCity] = useState("");
  const navigate=useNavigate();
const handleLogin = async () => {

  try {

    const response = await fetch(`${API}/user/login`, {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    const token = await response.text();

    if (response.ok) {

      localStorage.setItem("token", token);

      alert("Login Successful ");
      window.location.href="/";

    } else {

      alert(token);
    }

  } catch (error) {

    console.log(error);

    alert("Server Error");
  }
};
// onChange={(e) => setEmail(e.target.value)}
// onChange={(e) => setPassword(e.target.value)}
// onClick={handleLogin}
const handleSignup = async () => {

  try {

    const response = await fetch(`${API}/user/signup`, {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        age,
        gender,
        phone,
        city,
        email,
        password,
      }),
    });

    const data = await response.text();

    if (response.ok) {

      alert("Signup Successful ");

      setActiveTab("signin");

    } else {

      alert(data);
    }

  } catch (error) {

    console.log(error);

    alert("Server Error");
  }
};
  return (
    <div className="auth-page">

      {/* LEFT SIDE */}
      <div className="auth-left">
        <h1>
          Welcome to <span>SafarSwap</span>
        </h1>

        <p>
          Join 50,000+ travellers who buy and sell verified bus tickets with confidence.
        </p>

        <ul>
          <li>🟡 Verified seller IDs & ratings</li>
          <li>🟡 Money held safely until ticket transfer</li>
          <li>🟡 “Safe for female” journeys highlighted</li>
        </ul>
      </div>

      {/* RIGHT CARD */}
      <div className="auth-card">

        {/* TOGGLE */}
        <div className="auth-tabs">
          <button
            className={activeTab === "signin" ? "active" : ""}
            onClick={() => setActiveTab("signin")}
          >
            Sign in
          </button>

          <button
            className={activeTab === "signup" ? "active" : ""}
            onClick={() => setActiveTab("signup")}
          >
            Sign up
          </button>
        </div>

        {/* SIGN IN */}
        {activeTab === "signin" && (
          <>
            <h2>Welcome back</h2>
            <p className="sub">Sign in to continue your journey.</p>

            <label>Email</label>
            <input
  type="email"
  placeholder="you@example.com"
  onChange={(e) => setEmail(e.target.value)}
/>

            <label>Password</label>
            <input
  type="password"
  placeholder="••••••••"
  onChange={(e) => setPassword(e.target.value)}
/>

           <button
  className="primary-btn"
  onClick={handleLogin}
>
  Sign in
</button>

            <div className="divider">OR CONTINUE WITH</div>

            <button className="google-btn">
              Continue with Google
            </button>

            <p className="switch">
              New to SafarSwap?{" "}
              <span onClick={() => setActiveTab("signup")}>
                Create an account
              </span>
            </p>
          </>
        )}

        {/* SIGN UP */}
        {activeTab === "signup" && (
          <>
            <h2>Create your account</h2>
            <p className="sub">It only takes a minute to join.</p>

            <label>Full name</label>
            <input
  placeholder="Aarav Sharma"
  onChange={(e) => setName(e.target.value)}
/>

            <div className="row">
              <div>
                <label>Age</label>
                <input
  placeholder="24"
  onChange={(e) => setAge(e.target.value)}
/>
              </div>

              <div>
                <label>Gender</label>
                <select
  onChange={(e) => setGender(e.target.value)}
>
  <option>Select</option>
  <option>Male</option>
  <option>Female</option>
</select>
              </div>
            </div>

            <label>Phone</label>
            <input
  placeholder="9876543210"
  onChange={(e) => setPhone(e.target.value)}
/>

            <label>City</label>
            <input
  placeholder="Mumbai"
  onChange={(e) => setCity(e.target.value)}
/>

            <label>Email</label>
            <input
  placeholder="you@example.com"
  onChange={(e) => setEmail(e.target.value)}
/>

            <label>Password</label>
            <input
  type="password"
  placeholder="••••••••"
  onChange={(e) => setPassword(e.target.value)}
/>
<p
  onClick={() => navigate("/forgot")}
  style={{
    cursor: "pointer",
    color: "blue",
  }}
>
  Forgot Password?
</p>

            <button className="primary-btn" onClick={handleSignup}>
              Create account
            </button>

            <div className="divider">OR CONTINUE WITH</div>

            <button className="google-btn">
               Continue with Google
            </button>

            <p className="switch">
              Already have an account?{" "}
              <span onClick={() => setActiveTab("signin")}>
                Sign in
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}