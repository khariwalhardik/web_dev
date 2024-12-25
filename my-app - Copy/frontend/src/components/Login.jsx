import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { counterContext } from "../context/context";
import { useContext } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();
    const valuex = useContext(counterContext); // value contains otpSessionId and setOtpSessionId,
  const handleOtpClick = async () => {
    if (!email || !phone) {
      alert("Both email and phone number are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, phone }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message); // Display success message
        setOtpSent(true);
        valuex.setOtpSessionId(data.otpSessionId); // Store otpSessionId from the response
        navigate("/otp-verification", {
          state: { otpSessionId: data.otpSessionId , fromLogin: true}, // Pass OTP session ID
        });
      } else {
        const data = await response.json();
        alert(data.message || "Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="left"></div>
      <div className="right">
        <h1>Login</h1>
        <div className="note">* Indicates a required field</div>
        <form>
          {/* Email ID */}
          <div className="form-group">
            <label>* Enter your Email ID</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email ID"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Mobile Number */}
          <div className="form-group">
            <label>* Enter your Mobile Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your Mobile Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Send OTP Button */}
          <button
            type="button"
            id="send-otp"
            onClick={handleOtpClick}
            disabled={otpSent}
          >
            {otpSent ? "OTP Sent" : "Send OTP"}
          </button>

          {/* Sign Up Link */}
          <div className="extra">
            Don't have an account? <a href="/signup">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
