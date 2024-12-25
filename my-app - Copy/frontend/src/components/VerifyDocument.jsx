import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./VerifyDocument.css";
import { counterContext } from "../context/context";
const VerifyDocument = () => {

  const navigate = useNavigate();
  const valuex = useContext(counterContext); // value contains otpSessionId and setOtpSessionId, signUpSessionId and setSignUpSessionId

  const [govtIdOption, setGovtIdOption] = useState("");
  const [govtIdNumber, setGovtIdNumber] = useState("");
  const [regOption, setRegOption] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [workOption, setWorkOption] = useState("");
  const [workNumber, setWorkNumber] = useState("");
  const [aboutYourself, setAboutYourself] = useState(""); // State for "Tell About Yourself"

  const otpSessionId = valuex.otpSessionId;
  useEffect(() => {
    if (otpSessionId) {
      sessionStorage.setItem("otpSessionId", otpSessionId);
    }
  }, [otpSessionId]);

  const handleOptionChange = (type, value) => {
    if (type === "govt-id") setGovtIdOption(value);
    if (type === "reg") setRegOption(value);
    if (type === "work") setWorkOption(value);
  };

  const handleNumberChange = (type, value) => {
    if (type === "govt-id") setGovtIdNumber(value);
    if (type === "reg") setRegNumber(value);
    if (type === "work") setWorkNumber(value);
  };

  const handleTextAreaChange = (event) => {
    setAboutYourself(event.target.value);
  };

  const handleNextClick = async () => {
    if (!govtIdOption || !govtIdNumber) {
      alert("Please select and provide a valid Government Issued ID.");
      return;
    }
    if (!regOption || !regNumber) {
      alert("Please select and provide a valid Registration Number.");
      return;
    }
    if (!workOption || !workNumber) {
      alert("Please select and provide a valid Work License number.");
      return;
    }

    const formData = {
      otpSessionId,
      govtIdOption,
      govtIdNumber,
      regOption,
      regNumber,
      workOption,
      workNumber,
      aboutYourself,
    };

    try {
      const response = await fetch("http://localhost:5000/api/verify-document", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Details submitted successfully!");
        navigate("/additional-info");
      } else {
        const data = await response.json();
        alert(data.message || "Failed to submit details.");
      }
    } catch (error) {
      console.error("Error submitting details:", error);
      // alert("Error submitting details. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="left"></div>
      <div className="right">
        <h1>Verify Your Account</h1>
        <h2>Provide the Following Details</h2>
        <div className="note">An asterisk (*) means it's a required field</div>
        <form>
          {/* Government Issued ID */}
          <div className="form-group">
            <label>* Government Issued ID Card</label>
            <select
              id="govt-id-select"
              value={govtIdOption}
              onChange={(e) => handleOptionChange("govt-id", e.target.value)}
            >
              <option value="">Select a document</option>
              <option value="aadhar">Aadhar Card</option>
              <option value="pan">PAN Card</option>
              <option value="voter">Voter ID Card</option>
              <option value="passport">Passport</option>
            </select>
            <input
              type="text"
              placeholder="Enter ID number"
              value={govtIdNumber}
              onChange={(e) => handleNumberChange("govt-id", e.target.value)}
              disabled={!govtIdOption}
            />
          </div>

          {/* Registration Number */}
          <div className="form-group">
            <label>* Registration Number</label>
            <select
              id="reg-select"
              value={regOption}
              onChange={(e) => handleOptionChange("reg", e.target.value)}
            >
              <option value="">Select a document</option>
              <option value="certificate">Certificate</option>
              <option value="license">License</option>
              <option value="other">Other</option>
            </select>
            <input
              type="text"
              placeholder="Enter Registration number"
              value={regNumber}
              onChange={(e) => handleNumberChange("reg", e.target.value)}
              disabled={!regOption}
            />
          </div>

          {/* Work License */}
          <div className="form-group">
            <label>* Work License</label>
            <select
              id="work-select"
              value={workOption}
              onChange={(e) => handleOptionChange("work", e.target.value)}
            >
              <option value="">Select a document</option>
              <option value="driving">Driving License</option>
              <option value="professional">Professional License</option>
              <option value="other">Other</option>
            </select>
            <input
              type="text"
              placeholder="Enter License number"
              value={workNumber}
              onChange={(e) => handleNumberChange("work", e.target.value)}
              disabled={!workOption}
            />
          </div>

          {/* Tell About Yourself */}
          <div className="form-group">
            <label>Tell About Yourself (Optional)</label>
            <textarea
              placeholder="Write about yourself..."
              style={{ height: "220px" }}
              value={aboutYourself}
              onChange={handleTextAreaChange}
            ></textarea>
            <div className="note">This field is not compulsory.</div>
          </div>

          {/* Next Button */}
          <button type="button" onClick={handleNextClick}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyDocument;
