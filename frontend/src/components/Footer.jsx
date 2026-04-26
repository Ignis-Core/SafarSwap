import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* LEFT */}
        <div className="footer-left">
       <div className="logo">
  <div className="logo-box">S</div>

  <div className="logo-text">
    Safar<span>Swap</span>
  </div>
</div>

          <p>
            India's friendly bus-ticket resale community. Plans changed? List
            your ticket. Need a ticket on a sold-out route? Grab one from a
            verified traveller.
          </p>
        </div>

        {/* PRODUCT */}
        <div className="footer-links">
          <h4>PRODUCT</h4>
          <a href="#">Buy a ticket</a>
          <a href="#">Sell a ticket</a>
          <a href="#">My activity</a>
        </div>

        {/* COMPANY */}
        <div className="footer-links">
          <h4>COMPANY</h4>
          <a href="#">About</a>
          <a href="#">Terms & Privacy</a>
          <a href="#">Contact</a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 SafarSwap. All rights reserved.</p>
        <p>Made with care for safer journeys.</p>
      </div>
    </footer>
  );
}