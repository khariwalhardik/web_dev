import React, { useState } from "react";

const AdditionalInfoPage = () => {
    const [workplace, setWorkplace] = useState("");
    const [address, setAddress] = useState("");
    const [dob, setDob] = useState("");
    const [profilePic, setProfilePic] = useState(null);

    // Trigger file input on click
    const triggerFileUpload = (id) => {
        document.getElementById(id).click();
    };

    return (
        <div className="container" style={{ display: 'flex' }}>
            <div className="left" style={{ width: '40vw', height: '100vh', backgroundColor: 'black' }}></div>
            <div className="right" style={{ width: '60vw', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <form>
                    <h1 style={{ fontSize: '30px', color: 'black', marginBottom: '10px' }}>Workplace Information</h1>
                    {/* Workplace */}
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label>Workplace</label>
                        <input type="text" id="workplace" value={workplace} onChange={(e) => setWorkplace(e.target.value)} placeholder="Enter your workplace" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fafafa', fontSize: '14px' }} />
                    </div>

                    <h1 style={{ fontSize: '30px', color: 'black', marginBottom: '10px' }}>Additional Information</h1>
                    {/* Address */}
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label>Address</label>
                        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your address" style={{ height: '150px', width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fafafa', fontSize: '14px' }} />
                    </div>

                    {/* Date of Birth */}
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label>Date of Birth</label>
                        <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fafafa', fontSize: '14px' }} />
                    </div>

                    {/* Profile Picture Upload */}
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label>Profile Picture</label>
                        <input type="file" id="profile-pic-upload" accept="image/*" style={{ display: 'none' }} />
                        <div className="upload-area" onClick={() => triggerFileUpload('profile-pic-upload')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '2px dashed #ccc', padding: '10px', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#fafafa' }}>
                            <span>Click to upload image</span>
                            <span className="upload-icon" style={{ fontSize: '24px', color: 'black' }}>+</span>
                        </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <div className="checkbox-container" style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" id="terms" />
                            <label htmlFor="terms">By verifying and adding details, you agree to the <a href="/terms-condition">terms and conditions</a>.</label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" style={{ display: 'block', width: '100%', padding: '10px', background: 'black', color: 'white', border: 'none', borderRadius: '5px', fontSize: '14px', cursor: 'pointer', marginTop: '20px' }}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AdditionalInfoPage;
