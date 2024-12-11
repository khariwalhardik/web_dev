import React, { useState } from 'react';
import api from '../api';

const OTPVerification = () => {
  const [form, setForm] = useState({ email: '', otp: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/verify-otp', form);
      alert(response.data.message);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      alert(error.response.data.message || 'Error verifying OTP');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="otp" placeholder="OTP" onChange={handleChange} />
      <button type="submit">Verify OTP</button>
    </form>
  );
};

export default OTPVerification;
