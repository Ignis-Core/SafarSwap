import "./Activity.css";
import { useState } from "react";

export default function Activity() {
  const [activeTab, setActiveTab] = useState("bought");

  return (
    <div className="activity-page">

      {/* LEFT PROFILE */}
      <div className="activity-left">
        <div className="profile-card">

          <div className="profile-header">
            <div className="avatar">A</div>
            <div>
              <h3>Aarav Sharma</h3>
              <p>Mumbai</p>
            </div>
          </div>

          <div className="profile-info">
            <div>
              <span>Email</span>
              <p>aarav@safarswap.com</p>
            </div>

            <div>
              <span>Phone</span>
              <p>98765 43210</p>
            </div>

            <div>
              <span>Member since</span>
              <p>Jan 2024</p>
            </div>
          </div>

          <div className="stats">
            <div>
              <h2>2</h2>
              <p>Tickets bought</p>
            </div>
            <div>
              <h2>2</h2>
              <p>Tickets sold</p>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="activity-right">

        <div className="activity-header">
          <div>
            <h1>My activity</h1>
            <p>All your buy and sell history in one place.</p>
          </div>

          {/* ✅ FIXED TABS */}
          <div className="tabs">
            <button
              className={activeTab === "bought" ? "active" : ""}
              onClick={() => setActiveTab("bought")}
            >
              Bought (2)
            </button>

            <button
              className={activeTab === "sold" ? "active" : ""}
              onClick={() => setActiveTab("sold")}
            >
              Sold (2)
            </button>
          </div>
        </div>

        {/* ✅ CONDITIONAL RENDERING */}

        {activeTab === "bought" && (
          <>
            <div className="ticket-card">
              <div>
                <span className="meta">PURCHASED • APR 22</span>
                <h3>Mumbai → Pune</h3>
              </div>

              <div className="right">
                <h3 className="price">₹650</h3>
                <span className="status">Completed</span>
              </div>
            </div>

            <div className="ticket-card">
              <div>
                <span className="meta">PURCHASED • MAR 14</span>
                <h3>Bengaluru → Goa</h3>
              </div>

              <div className="right">
                <h3 className="price">₹1199</h3>
                <span className="status">Completed</span>
              </div>
            </div>
          </>
        )}

        {activeTab === "sold" && (
          <>
            <div className="ticket-card">
              <div>
                <span className="meta">SOLD • APR 10</span>
                <h3>Delhi → Jaipur</h3>
              </div>

              <div className="right">
                <h3 className="price">₹800</h3>
                <span className="status">Completed</span>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
}