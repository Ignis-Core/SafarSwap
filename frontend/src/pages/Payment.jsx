import "./Payment.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();
  const { state } = useLocation();

  // ✅ safety check
  if (!state) {
    return <h2 style={{ textAlign: "center" }}>No ticket selected</h2>;
  }

  // ✅ dynamic calculation
  const fee = Math.round(state.price * 0.05);
  const total = state.price + fee;

  return (
    <div className="payment-container">

      {/* BACK */}
      <p className="back" onClick={() => navigate(-1)}>← Back</p>

      <h2>Confirm & Pay</h2>
      <p className="sub">
        Review your ticket details before completing payment.
      </p>

      <div className="payment-card">

        {/* ROUTE */}
        <p className="operator">{state.operator}</p>
        <h3>{state.from} → {state.to}</h3>

        {/* DETAILS */}
        <div className="details">
          <div>
            <small>DATE</small>
            <p>{state.date}</p>
          </div>
          <div>
            <small>TIME</small>
            <p>{state.time}</p>
          </div>
          <div>
            <small>SEAT</small>
            <p>{state.seat}</p>
          </div>
        </div>

        {/* PRICE */}
        <div className="price-row">
          <span>Ticket price</span>
          <span>₹{state.price}</span>
        </div>

        <div className="price-row">
          <span>Platform fee (5%)</span>
          <span>₹{fee}</span>
        </div>

        <div className="total-row">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        {/* SECURE */}
        <div className="secure-box">
          🔒 Secure payment handled via backend <br />
          Your money is held safely and released after confirmation.
        </div>

        {/* BUTTON */}
        <button className="pay-btn">
          Pay ₹{total} securely
        </button>

      </div>
    </div>
  );
}