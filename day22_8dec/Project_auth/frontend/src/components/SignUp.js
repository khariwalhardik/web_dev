import React, { useState } from 'react';
import api from '../api';

const SignUp = () => {
  const [form, setForm] = useState({ fullName: '', email: '', mobile: '', userType: 'customer' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/signup', form);
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message || 'Error signing up');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="fullName" placeholder="Full Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="mobile" placeholder="Mobile" onChange={handleChange} />
      <select name="userType" onChange={handleChange}>
        <option value="customer">Customer</option>
        <option value="expert">Expert</option>
      </select>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
