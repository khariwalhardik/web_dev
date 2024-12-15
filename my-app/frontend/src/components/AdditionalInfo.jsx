import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./AdditionalInfo.css"; // Import the CSS file for styling
import { counterContext } from "../context/context";
const AdditionalInfo = () => {
  const valuex = useContext(counterContext); // value contains otpSessionId and setOtpSessionId,
  const [workplace, setWorkplace] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsRead, setTermsRead] = useState(false); // Flag to track if terms are read
  const navigate = useNavigate();
  // Retrieve stored data from sessionStorage if available
  useEffect(() => {
    const storedTermsAccepted = sessionStorage.getItem("termsAccepted");
  
    if (storedTermsAccepted === "true") {
      setTermsAccepted(true); // Enable the checkbox if terms are accepted in this session
      setTermsRead(true); // Allow submission
    }
  
    // Retrieve form data from sessionStorage
    const storedWorkplace = sessionStorage.getItem("workplace");
    const storedAddress = sessionStorage.getItem("address");
    const storedDob = sessionStorage.getItem("dob");
    const storedProfilePic = sessionStorage.getItem("profilePic");
  
    if (storedWorkplace) setWorkplace(storedWorkplace);
    if (storedAddress) setAddress(storedAddress);
    if (storedDob) setDob(storedDob);
    if (storedProfilePic) setProfilePic(storedProfilePic);
  }, []);

  useEffect(() => {
    if (!valuex.otpSessionId) {
      const storedOtpSessionId = sessionStorage.getItem("otpSessionId");
      if (storedOtpSessionId) {
        valuex.setOtpSessionId(storedOtpSessionId);
      }
    }
  }, [valuex]);
  
  

  // Store form data in localStorage
  const handleInputChange = (e, setter) => {
    const { value } = e.target;
    setter(value);
    sessionStorage.setItem(e.target.name, value); // Store each input in sessionStorage
  };
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0]; // Get the actual file object
    setProfilePic(file); // Store the file object
    sessionStorage.setItem("profilePic", file.name); // Optionally, store the filename in sessionStorage (not required for upload)
  };
  
  

  // // Handle file upload for profile picture
  // const handleFileUpload = (event) => {
  //   const fileName = event.target.files[0].name;
  //   setProfilePic(fileName);
  //   localStorage.setItem("profilePic", fileName); // Store profile picture in localStorage
  // };
  



  // Enable checkbox and submit button if user has read the terms
  // const handleScroll = () => {
  //   const termsContainer = document.querySelector("#terms-container");
  //   const checkbox = document.getElementById("terms");
  //   const submitButton = document.querySelector("button[type='submit']");

  //   if (termsContainer.scrollHeight - termsContainer.scrollTop === termsContainer.clientHeight) {
  //     setTermsRead(true);
  //     checkbox.disabled = false;
  //     submitButton.disabled = false;
  //   }
  // };

  // Handle the submit button click
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Check if all fields are filled
    if (!workplace) { alert("Please enter your workplace"); return; }
    if (!address) { alert("Please enter your address"); return; }
    if (!dob) { alert("Please enter your dob"); return; }
    if (!profilePic) { alert("Please upload your profile picture"); return; }
    if (!termsAccepted) { alert("Please accept the terms and conditions"); return; }
  
    const formData = new FormData();
    formData.append("otpSessionId", valuex.otpSessionId); // From context
    formData.append("workplace", workplace);
    formData.append("address", address);
    formData.append("dob", dob);
    formData.append("profilePic", profilePic); // Send the file object, not just the name
    console.log("formData", formData);
    try {
      const response = await fetch("http://localhost:5000/api/additional-info", {
        method: "POST",
        body: formData, // Use FormData for multipart file upload
      });
  
      if (response.ok) {
        alert("Information submitted successfully!");
        // Clear sessionStorage after successful submission
        sessionStorage.clear();
        navigate("/nextPage"); // Navigate to the next page
      } else {
        const data = await response.json();
        alert(data.message || "Failed to submit information.");
      }
    } catch (error) {
      console.error("Error submitting additional information:", error);
      alert("An error occurred. Please try again.");
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

            {/* Display the file name and image preview */}
            {profilePic && (
              <div className="file-name">
                {/* Show the file name */}
                {profilePic.name}
              </div>
            )}
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
