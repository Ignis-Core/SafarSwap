import "./Buy.css";
import { useState, useEffect } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Buy() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [tickets, setTickets] =
  useState([]);

  const navigate = useNavigate(); 
  useEffect(() => {

  fetchTickets();

}, []);
const fetchTickets = async () => {

  try {

    const token =
      localStorage.getItem("token");

    const response = await fetch(

      `${API}/ticket/all`,

      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

    const data =
      await response.json();

    setTickets(data);

  } catch (error) {

    console.log(error);
  }
};// ✅ must be inside component

  // const tickets = [
  //   {
  //     id: 1,
  //     operator: "VRL Travels",
  //     from: "Mumbai",
  //     to: "Pune",
  //     date: "Tonight",
  //     time: "10:30 PM",
  //     seat: "L12",
  //     price: 650,
  //     originalPrice: 850,
  //     rating: 4.8,
  //     verified: true,
  //     safe: true,
  //     discount: "24% off",
  //   },
  //   {
  //     id: 2,
  //     operator: "Orange Tours",
  //     from: "Delhi",
  //     to: "Jaipur",
  //     date: "Apr 25",
  //     time: "06:15 AM",
  //     seat: "U7",
  //     price: 720,
  //     originalPrice: 980,
  //     rating: 4.6,
  //     verified: true,
  //     safe: false,
  //     discount: "27% off",
  //   },
  //   {
  //     id: 3,
  //     operator: "RedBus Premium",
  //     from: "Bengaluru",
  //     to: "Goa",
  //     date: "Apr 26",
  //     time: "09:00 PM",
  //     seat: "L3",
  //     price: 1199,
  //     originalPrice: 1400,
  //     rating: 4.9,
  //     verified: true,
  //     safe: true,
  //     discount: "20% off",
  //   },
  //   {
  //     id: 4,
  //     operator: "SRS Travels",
  //     from: "Hyderabad",
  //     to: "Chennai",
  //     date: "Apr 27",
  //     time: "11:45 PM",
  //     seat: "L9",
  //     price: 880,
  //     originalPrice: 1100,
  //     rating: 4.5,
  //     verified: true,
  //     safe: false,
  //     discount: "20% off",
  //   },
  //   {
  //     id: 5,
  //     operator: "Neeta Travels",
  //     from: "Ahmedabad",
  //     to: "Mumbai",
  //     date: "Apr 25",
  //     time: "08:00 AM",
  //     seat: "U14",
  //     price: 540,
  //     originalPrice: 700,
  //     rating: 4.4,
  //     verified: true,
  //     safe: true,
  //     discount: "23% off",
  //   },
  //   {
  //     id: 6,
  //     operator: "Kallada Travels",
  //     from: "Kochi",
  //     to: "Bengaluru",
  //     date: "Apr 28",
  //     time: "07:30 PM",
  //     seat: "L2",
  //     price: 999,
  //     originalPrice: 1200,
  //     rating: 4.7,
  //     verified: true,
  //     safe: false,
  //     discount: "23% off",
  //   },
  // ];

  const filtered = tickets.filter(
    (t) =>
      t.fromLocation.toLowerCase().includes(from.toLowerCase()) &&
      t.toLocation.toLowerCase().includes(to.toLowerCase())
  );

  return (
    <div className="buy-page">
      <h1>Find your next ride</h1>

      <p className="sub">
        Verified resale tickets — usually 20–40% off the original price.
      </p>

      {/* SEARCH */}
      <div className="search-box">
        <input
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />

        <input
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button>Search</button>
      </div>

      {/* <p className="note">
        Showing sample listings — backend not reachable.
      </p> */}

      {/* CARDS */}
      <div className="cards">
        {filtered.map((t) => (
          <div className="card" key={t.id}>
            {/* TOP */}
            <div className="card-top">
              <div className="tags">
                {t.verified && (
                  <span className="verified">● Verified</span>
                )}
                {t.verifiedSeller && (
                  <span className="verified">
                    Trusted Seller
                  </span>
                )}

                {t.safeForFemale && (
                  <span className="tag pink">
                    Safe for Female ❤️
                  </span>
                )}{
  t.preferredGender ===
  "Female" && (

    <span className="tag pink">
      Female Only 💖
    </span>
  )
}

{
  t.preferredGender ===
  "Male" && (

    <span className="tag blue">
      Male Only
    </span>
  )
}

                <span className="discount">{t.discount}</span>
              </div>

              <div className="rating-box">

  <span className="rating">
    ⭐ {t.sellerRating?.toFixed(1)}
  </span>

  <small>
    ({t.sellerTotalRatings} ratings)
  </small>

</div>
            </div>

            <p className="operator">{t.sellerName}</p>

            <h3>
              {t.fromLocation} → {t.toLocation}
            </h3>

            {/* DETAILS */}
            <div className="details">
              <div>
                <small>DATE</small>
                <p>{t.date}</p>
              </div>
              <div>
                <small>TIME</small>
                <p>{t.time}</p>
              </div>
              <div>
                <small>SEAT</small>
                <p>{t.seatNumber}</p>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="bottom">
              <div>
                <p className="price">₹{t.price}</p>
                <span className="old">₹{t.originalPrice}</span>
              </div>

              <button
                className="buy-btn"
                onClick={() => navigate("/payment", {

  state: {

    ticket: t

  }

})}
              >
                Buy now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}