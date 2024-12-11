import React, { useEffect, useState } from "react";
import { useNavigate ,useLocation} from "react-router-dom";
import "./VerifyDocument.css";

const VerifyDocument = () => {
  const [govtIdFile, setGovtIdFile] = useState(null);
  const [regFile, setRegFile] = useState(null);
  const [workFile, setWorkFile] = useState(null);
  const [govtIdSelected, setGovtIdSelected] = useState(false);
  const [regSelected, setRegSelected] = useState(false);
  const [workSelected, setWorkSelected] = useState(false);

  const [govtIdOption, setGovtIdOption] = useState("");
  const [regOption, setRegOption] = useState("");
  const [workOption, setWorkOption] = useState("");
  const [aboutYourself, setAboutYourself] = useState(""); // State for "Tell About Yourself"
  const [otpSessionId, setOtpSessionId] = useState(""); // For storing OTP session ID
  const navigate = useNavigate(); // Hook for navigation
  const location = useLocation(); // Hook to access location state
  // const navigate = useNavigate();
  useEffect(() => {
    // Get otpSessionId from the navigation state passed by SignUp page
    if (location.state && location.state.otpSessionId) {
      setOtpSessionId(location.state.otpSessionId);
    }
  }, [location]);
  const handleFileChange = (type, event) => {
    const file = event.target.files[0];
    if (file) {
      if (type === "govt-id") {
        setGovtIdFile(file.name);
      }
      if (type === "reg") {
        setRegFile(file.name);
      }
      if (type === "work") {
        setWorkFile(file.name);
      }
    }
  };

  const handleOptionChange = (type, event) => {
    const value = event.target.value;
    if (type === "govt-id") {
      setGovtIdOption(value);
      setGovtIdSelected(value !== "");
    }
    if (type === "reg") {
      setRegOption(value);
      setRegSelected(value !== "");
    }
    if (type === "work") {
      setWorkOption(value);
      setWorkSelected(value !== "");
    }
  };

  const handleTextAreaChange = (event) => {
    setAboutYourself(event.target.value);  // Update state with textarea content
  };

  const handleNextClick = async () => {
    if (!govtIdFile || !govtIdSelected) {
      alert("Please upload a valid Government Issued ID.");
      return;
    }
    if (!regFile || !regSelected) {
      alert("Please upload a valid Registration Number document.");
      return;
    }
    if (!workFile || !workSelected) {
      alert("Please upload a valid Work License document.");
      return;
    }

    const formData = new FormData();
    formData.append("email", "user@example.com"); // Replace with actual email
    formData.append("govtIdOption", govtIdOption);
    formData.append("regOption", regOption);
    formData.append("workOption", workOption);
    formData.append("govtIdFile", document.getElementById("govt-id-upload").files[0]);
    formData.append("regFile", document.getElementById("reg-upload").files[0]);
    formData.append("workFile", document.getElementById("work-upload").files[0]);
    formData.append("aboutYourself", aboutYourself); // Append the "Tell About Yourself" text

    try {
      const response = await fetch("http://localhost:5000/api/verify-document", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Documents uploaded successfully!");
        navigate("/additional-info");
      } else {
        const data = await response.json();
        alert(data.message || "Failed to upload documents");
      }
    } catch (error) {
      console.error("Error uploading documents:", error);
      alert("Error uploading documents. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="left"></div>
      <div className="right">
        <h1>Verify Your Account</h1>
        <h2>Upload the Following Documents</h2>
        <div className="note">An asterisk (*) means it's a required field</div>
        <form>
          {/* Government Issued ID */}
          <div className="form-group">
            <label>* Government Issued ID Card</label>
            <select
              id="govt-id-select"
              value={govtIdOption}
              onChange={(e) => handleOptionChange("govt-id", e)}
            >
              <option value="">Select a document</option>
              <option value="aadhar">Aadhar Card</option>
              <option value="pan">PAN Card</option>
              <option value="voter">Voter ID Card</option>
              <option value="passport">Passport</option>
            </select>
            <input
              type="file"
              id="govt-id-upload"
              accept=".pdf, .jpg, .jpeg, .png"
              style={{ display: govtIdSelected ? "block" : "none" }}
              onChange={(e) => handleFileChange("govt-id", e)}
              disabled={!govtIdSelected}
            />
            {govtIdFile && <div className="file-name">{govtIdFile}</div>}
          </div>

          {/* Registration Number */}
          <div className="form-group">
            <label>* Registration Number</label>
            <select
              id="reg-select"
              value={regOption}
              onChange={(e) => handleOptionChange("reg", e)}
            >
              <option value="">Select a document</option>
              <option value="certificate">Certificate</option>
              <option value="license">License</option>
              <option value="other">Other</option>
            </select>
            <input
              type="file"
              id="reg-upload"
              accept=".pdf, .jpg, .jpeg, .png"
              style={{ display: regSelected ? "block" : "none" }}
              onChange={(e) => handleFileChange("reg", e)}
              disabled={!regSelected}
            />
            {regFile && <div className="file-name">{regFile}</div>}
          </div>

          {/* Work License */}
          <div className="form-group">
            <label>* Work License</label>
            <select
              id="work-select"
              value={workOption}
              onChange={(e) => handleOptionChange("work", e)}
            >
              <option value="">Select a document</option>
              <option value="driving">Driving License</option>
              <option value="professional">Professional License</option>
              <option value="other">Other</option>
            </select>
            <input
              type="file"
              id="work-upload"
              accept=".pdf, .jpg, .jpeg, .png"
              style={{ display: workSelected ? "block" : "none" }}
              onChange={(e) => handleFileChange("work", e)}
              disabled={!workSelected}
            />
            {workFile && <div className="file-name">{workFile}</div>}
          </div>

          {/* Tell About Yourself */}
          <div className="form-group">
            <label>Tell About Yourself (Optional)</label>
            <textarea
              placeholder="Write about yourself..."
              style={{ height: "220px" }}
              value={aboutYourself}
              onChange={handleTextAreaChange} // Add the onChange handler for the textarea
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
