import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./OTPVerification.css";
import { counterContext } from '../context/context'
import { useContext } from "react";
const OTPVerification = () => {
  const valuex=useContext(counterContext);//value contains otpSessionId and setOtpSessionId , signUpSessionId and setSignUpSessionId

  const [otpMobile, setOtpMobile] = useState("");
  const [otpEmail, setOtpEmail] = useState("");
  const [timer, setTimer] = useState(600); // 10 minutes = 600 seconds
  const [canResend, setCanResend] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  // const [otpSessionId, setOtpSessionId] = useState("");
  //using context api
  const location = useLocation();
  const otpSessionId = valuex.otpSessionId;
  const fromSignup = location.state?.fromSignup;
  const fromLogin = location.state?.fromLogin;
  const navigate = useNavigate(); // Hook for navigation
  // const location = useLocation(); // Hook to access location state

  // useEffect(() => {

  //   if (timer > 0) {
  //     const interval = setInterval(() => {
  //       setTimer((prevTime) => prevTime - 1);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   } else {
  //     setCanResend(true); // Enable resend button after 10 minutes
  //   }
  // }, [timer, location]);

  const handleVerifyOtp = async () => {
    if (!otpMobile || !otpEmail) {
      setVerificationMessage("Please enter both OTPs.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otpMobile, otpEmail, otpSessionId }),
      });

      const data = await response.json();

      if (response.ok) {
        setVerificationMessage("OTP verified successfully!");
        setIsVerified(true);
        setTimeout(() => {
          if (fromSignup) {
            navigate("/verify-document"); // Signup flow
          } else if (fromLogin) {

            // navigate("/newpage"); // Login flow
            navigate(`/dashboard/${otpSessionId}`);
          }// Redirect to VerifyDocument page after verification
        }, 200); // Delay the redirection for 2 seconds to show the success message
      } else {
        setVerificationMessage(data.message || "Invalid OTP. Please try again.");
        setIsVerified(false);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setVerificationMessage("An error occurred. Please try again.");
    }
  };

  const handleResendOtp = async () => {
    setTimer(600); // Reset the timer to 10 minutes when OTP is resent
    setCanResend(false); // Disable the resend button
    try {
      const response = await fetch("http://localhost:5000/api/resend-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otpSessionId }), // Send the session ID to resend OTP
      });

      const data = await response.json();
      if (response.ok) {
        alert("OTP has been resent.");
      } else {
        alert(data.message || "Failed to resend OTP.");
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
      alert("An error occurred while resending OTP.");
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="container">
      <div className="left"></div>
      <div className="right">
        <h1>OTP Verification</h1>
        <div className="note">* Indicates a required field</div>
        <form>
          {/* OTP from Mobile */}
          <div className="form-group" style={{ marginTop: "10vh" }}>
            <input
              type="text"
              placeholder="*Enter OTP from Mobile"
              value={otpMobile}
              onChange={(e) => setOtpMobile(e.target.value)}
              required
            />
          </div>

          {/* OTP from Email */}
          <div className="form-group">
            <input
              type="text"
              placeholder="*Enter OTP from Email-ID"
              value={otpEmail}
              onChange={(e) => setOtpEmail(e.target.value)}
              required
            />
          </div>

          {/* Verify OTP Button */}
          <button type="button" onClick={handleVerifyOtp}>
            Verify OTP
          </button>

          {/* Timer and Resend OTP Button */}
          <div className="extra">
            {canResend ? (
              <span>
                Didn't Receive OTP? <a href="#" onClick={handleResendOtp}>Resend</a>
              </span>
            ) : (
              <span>
                Resend OTP in {formatTime(timer)}
              </span>
            )}
          </div>

          {/* Verification Message */}
          {verificationMessage && (
            <div
              className={`verification-message ${isVerified ? "success" : "error"}`}
            >
              {verificationMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default OTPVerification;
