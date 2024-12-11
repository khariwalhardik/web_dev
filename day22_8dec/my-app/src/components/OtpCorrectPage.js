import React from 'react';

const OtpCorrectPage = () => {
    const continueToDashboard = () => {
        alert("Redirecting to the dashboard...");
        // Replace with actual redirection logic if needed
        // window.location.href = "dashboard.html";
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f4f4' }}>
            <div style={{ width: '90%', maxWidth: '400px', padding: '20px', background: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '20px', color: 'green', marginBottom: '10px' }}>Verification Successful</h1>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '20px' }}>Your mobile number and email ID have been verified successfully.</p>
                <button
                    onClick={continueToDashboard}
                    style={{ width: '100%', padding: '10px', background: 'black', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '14px' }}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default OtpCorrectPage;
