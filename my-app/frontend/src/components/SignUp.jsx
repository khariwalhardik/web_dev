import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { counterContext } from '../context/context'
import { useContext } from "react";
const SignUp = () => {
    const valuex=useContext(counterContext);//value contains otpSessionId and setOtpSessionId , signUpSessionId and setSignUpSessionId
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSignUp = async () => {
        const { name, email, phone } = formData;

        if (name && email && phone) {
            try {
                const response = await fetch("http://localhost:5000/api/signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, phone }),
                });

                const data = await response.json();

                if (response.ok) {
                    alert(`Sign-Up successful! An OTP has been sent to ${email}.`);
                    valuex.setOtpSessionId(data.otpSessionId); // Store otpSessionId from the response
                    // Pass otpSessionId to OTPVerification page
                    navigate("/otp-verification", {
                        state: { otpSessionId: data.otpSessionId },
                    });

                    // Optionally, trigger OTP sending via a service like MSG91 (if not done on backend)
                    // Example:
                    // const configuration = {
                    //     widgetId: "YOUR_WIDGET_ID",
                    //     tokenAuth: "YOUR_AUTH_KEY",
                    //     identifier: phone,
                    //     success: (data) => {
                    //         console.log("OTP sent to phone:", data);
                    //         alert("OTP sent to your mobile phone.");
                    //     },
                    //     failure: (error) => {
                    //         console.error("OTP failed:", error);
                    //         alert("Failed to send OTP to mobile.");
                    //     },
                    // };
                    // window.initSendOTP(configuration); // Initialize OTP widget
                } else {
                    alert(data.message || "Failed to sign up.");
                }
            } catch (error) {
                console.error("Error signing up:", error);
                alert("Failed to sign up. Please try again.");
            }
        } else {
            alert("Please fill in all required fields.");
        }
    };

    return (
        <div className="container">
            <div className="left"></div>
            <div className="right">
                <h1>Sign Up</h1>
                <div className="note">* Indicates a required field</div>
                <form>
                    <div className="form-group" style={{ marginTop: "4vh" }}>
                        <input
                            type="text"
                            id="name"
                            placeholder="*Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            id="email"
                            placeholder="*Enter your Email-ID"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            id="phone"
                            placeholder="*Enter your Mobile Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="button" onClick={handleSignUp}>
                        Sign Up
                    </button>
                    {/* Sign Up Link */}
                    <div className="extra">
                        Already have an account! <a href="/login">LogIn</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
