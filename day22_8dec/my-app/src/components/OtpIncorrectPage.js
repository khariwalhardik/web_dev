import React, { useState } from 'react';

const OtpIncorrectPage = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleVerifyOtp = () => {
        if (email && phone) {
            alert('OTP sent to both your email and mobile number.');
        } else {
            alert('Please fill in both fields.');
        }
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '40vw', height: '100vh', backgroundColor: 'black' }}></div>
            <div style={{ width: '60vw', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <h1>OTP Verification</h1>
                <div className="error-message" style={{ color: 'red', fontSize: '14px', textAlign: 'center' }}>The OTP entered is incorrect. Please try again.</div>
                <form>
                    <div style={{ marginTop: '10vh', marginBottom: '20px' }}>
                        <input
                            type="email"
                            placeholder="*Enter OTP from Mobile Number"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: '100%', padding: '13px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fafafa', fontSize: '14px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <input
                            type="tel"
                            placeholder="*Enter OTP from Email-ID"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={{ width: '100%', padding: '13px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fafafa', fontSize: '14px' }}
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleVerifyOtp}
                        style={{ width: '100%', padding: '10px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px', fontSize: '14px', cursor: 'pointer' }}
                    >
                        Verify OTP
                    </button>
                    <div style={{ fontSize: '12px', color: '#777', textAlign: 'center', marginTop: '20px' }}>
                        Didn't receive OTP? <a href="signup.html">Resend</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OtpIncorrectPage;

