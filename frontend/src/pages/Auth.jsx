import "./Auth.css";
import { useState } from "react";

export default function Auth() {
  const [activeTab, setActiveTab] = useState("signin");

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
            <input type="email" placeholder="you@example.com" />

            <label>Password</label>
            <input type="password" placeholder="••••••••" />

            <button className="primary-btn">Sign in</button>

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
            <input placeholder="Aarav Sharma" />

            <div className="row">
              <div>
                <label>Age</label>
                <input placeholder="24" />
              </div>

              <div>
                <label>Gender</label>
                <select>
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <label>Phone</label>
            <input placeholder="9876543210" />

            <label>City</label>
            <input placeholder="Mumbai" />

            <label>Email</label>
            <input placeholder="you@example.com" />

            <label>Password</label>
            <input type="password" placeholder="••••••••" />

            <button className="primary-btn">Create account</button>

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