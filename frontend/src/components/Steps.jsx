import "./Steps.css";

export default function Steps() {
  return (
    <section className="steps">
     <p className="how-it-works">HOW IT WORKS</p>
      <h2>Three steps. Zero stress.</h2>

      <div className="cards">
        <div className="card">
          <div className="step-number">1</div>
          <h3>List or browse</h3>
          <p>Sellers upload their unused ticket. Buyers browse verified listings.</p>
        </div>

        <div className="card">
          <div className="step-number">2</div>
          <h3>Pay securely</h3>
          <p>Payments are held until ticket transfer is confirmed.</p>
        </div>

        <div className="card">
         <div className="step-number">3</div>
          <h3>Travel happy</h3>
          <p>Buyer gets ticket, seller gets money instantly.</p>
        </div>
      </div>
    </section>
  );
}