import { useRef, useState } from "react";
import "./Sell.css";

export default function Sell() {
  const fileRef = useRef();
  const [file, setFile] = useState(null);

  return (
    <div className="sell-container">

      <p className="tag">SELL A TICKET</p>

      <h1 className="title">Recover your ticket cost</h1>

      <p className="subtitle">
        List your unused bus ticket in under a minute. We hold the buyer's payment securely until you transfer the ticket.
      </p>

      <div className="card">

        <div className="grid">

          <div className="field">
            <label>Source</label>
            <input placeholder="Mumbai" />
          </div>

          <div className="field">
            <label>Destination</label>
            <input placeholder="Pune" />
          </div>

          <div className="field">
            <label>Date</label>
            <input type="date" />
          </div>

          <div className="field">
            <label>Departure time</label>
            <input type="time" />
          </div>

          <div className="field">
            <label>Seat number</label>
            <input placeholder="e.g. L12" />
          </div>

          <div className="field">
            <label>Bus operator</label>
            <input placeholder="VRL Travels (optional)" />
          </div>

          <div className="field">
            <label>Original price (₹)</label>
            <input placeholder="950" />
          </div>

          <div className="field">
            <label>Your resale price (₹)</label>
            <input placeholder="700" />
          </div>

        </div>

        <h4 className="upload-title">Upload ticket (PDF or image)</h4>

        {/* hidden file input */}
        <input
          type="file"
          ref={fileRef}
          style={{ display: "none" }}
          accept=".pdf,.png,.jpg"
          onChange={(e) => setFile(e.target.files[0])}
        />

        {/* upload box */}
        <div
          className="upload-box"
          onClick={() => fileRef.current.click()}
        >
          <div className="upload-icon">
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path 
      d="M12 16V4M12 4L7 9M12 4L17 9" 
      stroke="#94a3b8" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M4 20H20" 
      stroke="#94a3b8" 
      strokeWidth="2.5" 
      strokeLinecap="round"
    />
  </svg>
</div>
          <p>Click to choose a file</p>
          <span>PDF, JPG or PNG up to 5 MB</span>
        </div>

        {/* show file name */}
        {file && <p className="file-name">{file.name}</p>}

        <p className="terms">
  By listing you agree to our resale terms
</p>

        <div className="btn-container">
          <button className="btn">List ticket</button>
        </div>

      </div>
    </div>
  );
}