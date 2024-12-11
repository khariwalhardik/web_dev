import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdditionalInfo.css"; // Import the CSS file for styling

const AdditionalInfo = () => {
  const [workplace, setWorkplace] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsRead, setTermsRead] = useState(false); // Flag to track if terms are read
  const navigate = useNavigate();

  // Retrieve stored data from sessionStorage if available
  useEffect(() => {
    // Check if the terms were accepted in this session
    const storedTermsAccepted = sessionStorage.getItem("termsAccepted");

    if (storedTermsAccepted === "true") {
      setTermsAccepted(true); // Enable the checkbox if terms are accepted in this session
      setTermsRead(true); // Allow submission
    }

    // Retrieve form data if available
    const storedWorkplace = localStorage.getItem("workplace");
    const storedAddress = localStorage.getItem("address");
    const storedDob = localStorage.getItem("dob");
    const storedProfilePic = localStorage.getItem("profilePic");

    if (storedWorkplace) setWorkplace(storedWorkplace);
    if (storedAddress) setAddress(storedAddress);
    if (storedDob) setDob(storedDob);
    if (storedProfilePic) setProfilePic(storedProfilePic);
  }, []);

  // Store form data in localStorage
  const handleInputChange = (e, setter) => {
    const { value } = e.target;
    setter(value);
    localStorage.setItem(e.target.name, value); // Store each input in localStorage
  };

  // Handle file upload for profile picture
  const handleFileUpload = (event) => {
    const fileName = event.target.files[0].name;
    setProfilePic(fileName);
    localStorage.setItem("profilePic", fileName); // Store profile picture in localStorage
  };

  // Enable checkbox and submit button if user has read the terms
  const handleScroll = () => {
    const termsContainer = document.querySelector("#terms-container");
    const checkbox = document.getElementById("terms");
    const submitButton = document.querySelector("button[type='submit']");

    if (termsContainer.scrollHeight - termsContainer.scrollTop === termsContainer.clientHeight) {
      setTermsRead(true);
      checkbox.disabled = false;
      submitButton.disabled = false;
    }
  };

  // Handle the submit button click
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!workplace || !address || !dob || !profilePic || !termsAccepted) {
      alert("Please fill out all fields, upload a profile picture, and accept the terms and conditions.");
    } else {
      alert("Information submitted successfully!");
      // Redirect to another page after submission (if needed)
      navigate("/nextPage"); // Replace with the desired route
    }
  };

  // Handle terms acceptance (store in sessionStorage)
  const handleTermsChange = () => {
    setTermsAccepted(!termsAccepted);
    if (!termsAccepted) {
      sessionStorage.setItem("termsAccepted", "true"); // Store terms acceptance for this session
    } else {
      sessionStorage.removeItem("termsAccepted"); // Remove on deselect
    }
  };

  return (
    <div className="container">
      <div className="left"></div>
      <div className="right">
        <form onSubmit={handleSubmit}>
          <h1>Workplace Information</h1>
          <div className="form-group">
            <label>Workplace</label>
            <input
              type="text"
              name="workplace"
              value={workplace}
              onChange={(e) => handleInputChange(e, setWorkplace)}
              placeholder="Enter your workplace"
            />
          </div>

          <h1>Additional Information</h1>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => handleInputChange(e, setAddress)}
              placeholder="Enter your address"
              style={{ height: "150px" }}
            />
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={dob}
              onChange={(e) => handleInputChange(e, setDob)}
            />
          </div>

          <div className="form-group">
            <label>Profile Picture</label>
            <input
              type="file"
              id="profile-pic-upload"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
            <div
              className="upload-area"
              onClick={() => document.getElementById("profile-pic-upload").click()}
            >
              <span>Click to upload image</span>
              <span className="upload-icon">+</span>
            </div>
            {profilePic && <div className="file-name">{profilePic}</div>}
          </div>

          <div className="form-group">
            <div className="checkbox-container" style={{ padding: "10px 0px" }}>
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                disabled={!termsRead} // Disable checkbox unless terms have been read
                onChange={handleTermsChange} // Handle terms acceptance change
              />
              <label htmlFor="terms">
                By verifying and adding details, you agree to the{" "}
                <a href="/terms-and-conditions">terms and conditions</a>.
              </label>
            </div>
          </div>

          <button type="submit" disabled={!termsAccepted}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdditionalInfo;
