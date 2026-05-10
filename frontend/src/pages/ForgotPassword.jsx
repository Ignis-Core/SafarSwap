import { useState } from "react";
import API from "../services/api";

export default function ForgotPassword() {

  const [email, setEmail] = useState("");

  const handleReset = async () => {

    try {

      const response = await fetch(
        `${API}/user/reset-password`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
          }),
        }
      );

      const text = await response.text();

      alert(text);

    } catch (error) {

      console.log(error);

      alert("Server Error");
    }
  };

  return (

    <div style={{ padding: "40px" }}>

      <h1>Forgot Password</h1>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <button onClick={handleReset}>
        Send Reset Link
      </button>

    </div>
  );
}