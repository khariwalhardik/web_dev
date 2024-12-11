import React, { useState } from "react";

const VerifyAccountPage = () => {
    const [govtId, setGovtId] = useState("");
    const [regDoc, setRegDoc] = useState("");
    const [workDoc, setWorkDoc] = useState("");
    const [aboutYourself, setAboutYourself] = useState("");

    // Trigger file input on click
    const triggerFileUpload = (id) => {
        document.getElementById(id).click();
    };

    return (
        <div className="container" style={{ display: 'flex' }}>
            <div className="left" style={{ width: '40vw', height: '100vh', backgroundColor: 'black' }}></div>
            <div className="right" style={{ width: '60vw', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <h1 style={{ fontSize: '30px', color: 'black', marginBottom: '10px', textAlign: 'center' }}>Verify Your Account</h1>
                <h2 style={{ fontSize: '24px', color: 'black', marginBottom: '20px', textAlign: 'center' }}>Upload the Following Documents</h2>
                <div className="note" style={{ fontSize: '12px', color: '#777', marginTop: '5px' }}>An asterisk (*) means it's a required field</div>
                <form>
                    {/* Government Issued ID */}
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label>* Government Issued ID Card</label>
                        <select value={govtId} onChange={(e) => setGovtId(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fafafa', fontSize: '14px' }}>
                            <option value="">Select a document</option>
                            <option value="aadhar">Aadhar Card</option>
                            <option value="pan">PAN Card</option>
                            <option value="voter">Voter ID Card</option>
                            <option value="passport">Passport</option>
                        </select>
                        <input type="file" id="govt-id-upload" accept=".pdf" style={{ display: 'none' }} />
                        <div className="upload-area" onClick={() => triggerFileUpload('govt-id-upload')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '2px dashed #ccc', padding: '10px', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#fafafa' }}>
                            <span>Click to upload document</span>
                            <span className="upload-icon" style={{ fontSize: '24px', color: 'black' }}>+</span>
                        </div>
                    </div>

                    {/* Registration Number */}
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label>* Registration Number</label>
                        <select value={regDoc} onChange={(e) => setRegDoc(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fafafa', fontSize: '14px' }}>
                            <option value="">Select a document</option>
                            <option value="certificate">Certificate</option>
                            <option value="license">License</option>
                            <option value="other">Other</option>
                        </select>
                        <input type="file" id="reg-upload" accept=".pdf" style={{ display: 'none' }} />
                        <div className="upload-area" onClick={() => triggerFileUpload('reg-upload')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '2px dashed #ccc', padding: '10px', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#fafafa' }}>
                            <span>Click to upload document</span>
                            <span className="upload-icon" style={{ fontSize: '24px', color: 'black' }}>+</span>
                        </div>
                    </div>

                    {/* Work License */}
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label>* Work License</label>
                        <select value={workDoc} onChange={(e) => setWorkDoc(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fafafa', fontSize: '14px' }}>
                            <option value="">Select a document</option>
                            <option value="driving">Driving License</option>
                            <option value="professional">Professional License</option>
                            <option value="other">Other</option>
                        </select>
                        <input type="file" id="work-upload" accept=".pdf" style={{ display: 'none' }} />
                        <div className="upload-area" onClick={() => triggerFileUpload('work-upload')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '2px dashed #ccc', padding: '10px', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#fafafa' }}>
                            <span>Click to upload document</span>
                            <span className="upload-icon" style={{ fontSize: '24px', color: 'black' }}>+</span>
                        </div>
                    </div>

                    {/* Tell About Yourself */}
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label>Tell About Yourself (Optional)</label>
                        <textarea value={aboutYourself} onChange={(e) => setAboutYourself(e.target.value)} placeholder="Write about yourself..." style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fafafa', fontSize: '14px', height: '220px' }}></textarea>
                        <div className="note" style={{ fontSize: '12px', color: '#777', marginTop: '5px' }}>This field is not compulsory.</div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" style={{ display: 'block', width: '100%', padding: '10px', background: 'black', color: 'white', border: 'none', borderRadius: '5px', fontSize: '14px', cursor: 'pointer', marginTop: '20px' }}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default VerifyAccountPage;
