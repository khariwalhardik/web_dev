import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import OTPVerification from './components/OTPVerification';

const App = () => (
  <Router>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify-otp" element={<OTPVerification />} />
    </Routes>
  </Router>
);

export default App;
