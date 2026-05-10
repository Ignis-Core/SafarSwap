import "./Activity.css";
import { useEffect, useState } from "react";
import API from "../services/api";

export default function Activity() {
  
  const [activeTab, setActiveTab] = useState("bought");
  const [sales, setSales] = useState([]);

const [purchases, setPurchases] = useState([]);

const [user, setUser] = useState(null);
useEffect(() => {

  fetchSales();

  fetchPurchases();

  fetchUser();

}, []);
const fetchUser = async () => {

  try {

    const token =
      localStorage.getItem("token");

    const response = await fetch(
      `${API}/user/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    setUser(data);

  } catch (error) {

    console.log(error);
  }
};const fetchSales = async () => {

  try {

    const token =
      localStorage.getItem("token");

    const response = await fetch(
      `${API}/ticket/my-sales`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    setSales(data);

  } catch (error) {

    console.log(error);
  }
};const fetchPurchases = async () => {

  try {

    const token =
      localStorage.getItem("token");

    const response = await fetch(
      `${API}/ticket/my-purchases`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    setPurchases(data);

  } catch (error) {

    console.log(error);
  }
};

  return (
    <div className="activity-page">

      {/* LEFT PROFILE */}
      <div className="activity-left">
        <div className="profile-card">

          <div className="profile-header">
            <div className="avatar">A</div>
            <div>
              <h3>{user?.name}</h3>
              <p>{user?.city}</p>
            </div>
          </div>

          <div className="profile-info">
            <div>
              <span>Email</span>
              <p>{user?.email}</p>
            </div>

            <div>
              <span>Phone</span>
              <p>{user?.phone}</p>
            </div>

            <div>
              <span>Member since</span>
              <p>Jan 2024</p>
            </div>
          </div>

          <div className="stats">
            <div>
              <h2>{purchases.length}</h2>
              <p>Tickets bought</p>
            </div>
            <div>
              <h2>{sales.length}</h2>
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
              Bought ({purchases.length})
            </button>

            <button
              className={activeTab === "sold" ? "active" : ""}
              onClick={() => setActiveTab("sold")}
            >
              Sold ({sales.length})
            </button>
          </div>
        </div>

        {/* ✅ CONDITIONAL RENDERING */}

       {activeTab === "bought" && (

  <>
    {
      purchases.map((ticket) => (

        <div
          className="ticket-card"
          key={ticket.id}
        >

          <div>

            <span className="meta">
              PURCHASED
            </span>

            <h3>
              {ticket.fromCity}
              {" → "}
              {ticket.toCity}
            </h3>

          </div>

          <div className="right">

            <h3 className="price">
              ₹{ticket.price}
            </h3>

            <span className="status">
              Completed
            </span>

          </div>

        </div>
      ))
    }
  </>
)}

      {activeTab === "sold" && (

  <>
    {
      sales.map((ticket) => (

        <div
          className="ticket-card"
          key={ticket.id}
        >

          <div>

            <span className="meta">
              SOLD
            </span>

            <h3>
              {ticket.fromCity}
              {" → "}
              {ticket.toCity}
            </h3>

          </div>

          <div className="right">

            <h3 className="price">
              ₹{ticket.price}
            </h3>

            <span className="status">
              Completed
            </span>

          </div>

        </div>
      ))
    }
  </>
)}

      </div>
    </div>
  );
}