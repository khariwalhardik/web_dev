import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import OTPVerification from "./components/OTPVerification";
import Home from "./components/Home";
import Login from "./components/Login";
import VerifyDocument from "./components/VerifyDocument";
import AdditionalInfo from "./components/AdditionalInfo";
import TermsAndConditions from "./components/TermsAndConditions";
import Dashboard from "./components/Dashboard"; // Import your Dashboard component
import { counterContext } from './context/context';

function App() {
  const [otpSessionId, setOtpSessionId] = useState(""); // Store otpSessionId here

  return (
    <counterContext.Provider value={{ otpSessionId, setOtpSessionId }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/verify-document" element={<VerifyDocument />} />
        <Route path="/additional-info" element={<AdditionalInfo />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        
        {/* Add dynamic dashboard route */}
        <Route path="/dashboard/:otpSessionId" element={<Dashboard />} />
      </Routes>
    </counterContext.Provider>
  );
}

export default App;





// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import SignUp from "./components/SignUp";
// import OTPVerification from "./components/OTPVerification";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import VerifyDocument from "./components/VerifyDocument";
// import AdditionalInfo from "./components/AdditionalInfo";
// import TermsAndConditions from "./components/TermsAndConditions";
// import { counterContext } from './context/context'
// import { useState } from "react";

// function App() {
//   const [otpSessionId, setOtpSessionId] = useState(""); // Store otpSessionId here

//   return (
//     <counterContext.Provider value={{otpSessionId,setOtpSessionId}}>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/otp-verification" element={<OTPVerification />} />
//       <Route path="/verify-document" element={<VerifyDocument />} />
//       <Route path="/additional-info" element={<AdditionalInfo />} />
//       <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
//     </Routes>
//     </counterContext.Provider>
//   );
// }

// export default App;
