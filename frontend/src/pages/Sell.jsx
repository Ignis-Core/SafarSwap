import { useRef, useState } from "react";
import API from "../services/api";
import "./Sell.css";

export default function Sell() {
  const fileRef = useRef();
  const [file, setFile] = useState(null);
  const[preview,setPreview]=useState(null);
  const [fromLocation, setFromLocation] =
  useState("");

const [toLocation, setToLocation] =
  useState("");

const [date, setDate] =
  useState("");

const [time, setTime] =
  useState("");

const [seatNumber, setSeatNumber] =
  useState("");

const [operator, setOperator] =
  useState("");

const [originalPrice, setOriginalPrice] =
  useState("");

const [price, setPrice] =
  useState("");

const [
  preferredGender,
  setPreferredGender
] = useState("Any");
const [
  femaleOnly,
  setFemaleOnly
] = useState(false);
const handleSell = async () => {

  try {

    const token =
      localStorage.getItem("token");

    const response = await fetch(

      `${API}/ticket/add`,

      {
        method: "POST",

        headers: {

          "Content-Type":
            "application/json",

          Authorization:
            `Bearer ${token}`,
        },

        body: JSON.stringify({

          fromLocation,
          toLocation,
          date,
          time,
          seatNumber,
          operator,
          originalPrice,
          price,
          preferredGender,
          femaleOnly,
        }),
      }
    );

    const data =
      await response.text();

    alert(data);

  } catch (error) {

    console.log(error);

    alert("Error selling ticket");
  }
};
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
           <input
  placeholder="Mumbai"
  onChange={(e) =>
    setFromLocation(e.target.value)
  }
/>
          </div>

          <div className="field">
            <label>Destination</label>
            <input
  placeholder="Pune"
  onChange={(e) =>
    setToLocation(e.target.value)
  }
/>
          </div>

          <div className="field">
            <label>Date</label>
           <input
  type="date"
  onChange={(e) =>
    setDate(e.target.value)
  }
/>
          </div>

          <div className="field">
            <label>Departure time</label>
            <input
  type="time"
  onChange={(e) =>
    setTime(e.target.value)
  }
/>
          </div>

          <div className="field">
            <label>Seat number</label>
            <input
  placeholder="e.g. L12"
  onChange={(e) =>
    setSeatNumber(e.target.value)
  }
/>
          </div>

          <div className="field">
            <label>Bus operator</label>
            <input
  placeholder="VRL Travels (optional)"
  onChange={(e) =>
    setOperator(e.target.value)
  }
/>
          </div>

          <div className="field">
            <label>Original price (₹)</label>
            <input
  placeholder="950"
  onChange={(e) =>
    setOriginalPrice(e.target.value)
  }
/>
          </div>

          <div className="field">
            <label>Your resale price (₹)</label>
            <input
  placeholder="700"
  onChange={(e) =>
    setPrice(e.target.value)
  }
/>
          </div>

        </div>
<div className="field">

  <label>
    Preferred Passenger
  </label>

  <select
    onChange={(e) =>
      setPreferredGender(
        e.target.value
      )
    }
  >

    <option>Any</option>

    <option>Male</option>

    <option>Female</option>

  </select>

</div><div className="field">

  <label>

    <input
      type="checkbox"
      onChange={(e) =>
        setFemaleOnly(
          e.target.checked
        )
      }
    />

    Female only journey ❤️

  </label>

</div>
        <h4 className="upload-title">Upload ticket (PDF or image)</h4>

        {/* hidden file input */}
        <input
          type="file"
          ref={fileRef}
          style={{ display: "none" }}
          accept=".pdf,.png,.jpg"
          onChange={(e) => {

  const selectedFile =
    e.target.files[0];

  setFile(selectedFile);

  if (selectedFile) {

    setPreview(

      URL.createObjectURL(
        selectedFile
      )
    );
  }
}}
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
        {
  preview && (

    <div className="preview-box">

      <p className="preview-title">
        Ticket Preview
      </p>

      {
        file.type.includes("image")
        ? (

          <img
            src={preview}
            alt="ticket"
            className="preview-image"
          />
        )

        : (

          <iframe
            src={preview}
            title="ticket-preview"
            className="preview-pdf"
          />
        )
      }

    </div>
  )
}

        <p className="terms">
  By listing you agree to our resale terms
</p>

        <div className="btn-container">
          <button className="btn" onClick={handleSell}>List ticket</button>
        </div>

      </div>
    </div>
  );
}