import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./Login.css"; // Import the CSS file

const Login = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const navigate = useNavigate(); // Initialize the navigate function

    const handleOtpClick = () => {
        if (email && phone) {
            alert("OTP sent to both your email and mobile number.");
            setOtpSent(true);
            navigate("/otp-verification"); // Redirect to OTP page after sending OTP
        } else {
            alert("Please fill in both fields.");
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
