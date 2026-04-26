import "./About.css";
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();
  return (
    <section className="about">

      {/* HEADER */}
      <p className="about-tag">ABOUT SAFARSWAP</p>

      <h1>
        Bus tickets that flex with your <br /> plans.
      </h1>

      <p className="about-desc">
        SafarSwap was built for the millions of Indians whose travel plans
        change at the last minute. Instead of losing money on a non-refundable
        ticket — or getting stuck on a sold-out route — we let real travellers
        safely swap tickets with each other.
      </p>

      {/* FEATURES */}
      <div className="about-cards">

        <div className="about-card">
          <h3>Trust by default</h3>
          <p>Every seller is KYC-verified and rated by past buyers.</p>
        </div>

        <div className="about-card">
          <h3>Fair pricing</h3>
          <p>Resale price can never exceed the original — we enforce it.</p>
        </div>

        <div className="about-card">
          <h3>Safer journeys</h3>
          <p>Female travellers can filter for ‘Safe for Female’ listings.</p>
        </div>

      </div>

      {/* STORY BOX */}
      <div className="story-box">
        <h2>Our story</h2>

        <p>
          SafarSwap started after our co-founder missed a Mumbai–Pune bus because
          of a delayed meeting and lost ₹950. He realised dozens of travellers
          in his WhatsApp group had the same problem every week. Today,
          SafarSwap powers over 50,000 ticket swaps a month across twelve Indian states.
        </p>
<button onClick={() => navigate("/buy")} className="btn-yellow">
  Find a ticket
</button>
      </div>

    </section>
  );
}