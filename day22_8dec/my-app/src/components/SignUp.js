import React, { useState } from 'react';

const SignUp = () => {
  // Define state for form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  // Handle OTP button click event
  const handleSendOtp = () => {
    if (email && mobile) {
      alert('OTP sent to both your email and mobile number.');
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <div className="container" style={{ display: 'flex' }}>
      <div className="left" style={{ width: '40vw', height: '100vh', backgroundColor: 'black' }}></div>
      <div className="right" style={{ width: '60vw', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <h1 style={{ fontSize: '30px', color: 'black', marginBottom: '20px' }}>Sign Up</h1>
        <div className="note" style={{ fontSize: '12px', color: '#777', marginBottom: '10px' }}>* Indicates a required field</div>
        <form>
          {/* Full Name */}
          <div className="form-group" style={{ margin: '30px 0px' }}>
            <input
              type="text"
              id="username"
              placeholder="*Enter your full name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ width: '100%', padding: '13px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fafafa', fontSize: '14px', marginBottom: '10px' }}
            />
          </div>

          {/* Email */}
          <div className="form-group" style={{ margin: '30px 0px' }}>
            <input
              type="email"
              id="email"
              placeholder="*Enter your Email-ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '13px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fafafa', fontSize: '14px', marginBottom: '10px' }}
            />
          </div>

          {/* Mobile Number */}
          <div className="form-group" style={{ margin: '30px 0px' }}>
            <input
              type="tel"
              id="mobile"
              placeholder="*Enter your Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              style={{ width: '100%', padding: '13px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fafafa', fontSize: '14px', marginBottom: '10px' }}
            />
          </div>

          {/* Send OTP Button */}
          <button
            type="button"
            onClick={handleSendOtp}
            style={{ width: '100%', padding: '10px', background: 'black', color: 'white', border: 'none', borderRadius: '5px', fontSize: '14px', cursor: 'pointer' }}
          >
            Send OTP
          </button>

          {/* Already have an account */}
          <div className="extra" style={{ fontSize: '12px', color: '#777', textAlign: 'center', marginTop: '20px' }}>
            Already have an account? <a href="/login" style={{ color: 'blue' }}>Log In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
