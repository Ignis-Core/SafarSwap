import "./Hero.css";
import heroImg from "../assets/hero.png";
import { useNavigate } from "react-router-dom";


export default function Hero() {
    const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-left">
       <div className="badge">
  <span className="dot"></span>
  Peer-to-peer ticket resale
</div>

        <h1>
          Plans changed? <br />
          <span className="highlight">Swap</span> your bus ticket.
        </h1>

        <p className="desc">
          SafarSwap lets travellers safely resell unused bus tickets and buy
          verified ones — no scalpers, no scams. Just real people, real journeys.
        </p>

        <div className="buttons">
         <button className="btn-yellow" onClick={() => navigate("/buy")}>
  Buy a ticket
</button>

<button className="btn-dark" onClick={() => navigate("/sell")}>
  Sell my ticket
</button>
        </div>

        <div className="stats">
          <div><b>50k+</b><span>Tickets swapped</span></div>
          <div><b>4.8★</b><span>Avg. rating</span></div>
          <div><b>100%</b><span>Verified IDs</span></div>
        </div>
      </div>

      <div className="hero-right">
        <img src={heroImg} alt="bus" />
        <div className="avg-box">
  <p>Avg. savings</p>
  <h3>₹240</h3>
</div>
      </div>
    </section>
  );
}