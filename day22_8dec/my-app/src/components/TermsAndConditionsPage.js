import React from 'react';

const TermsAndConditionsPage = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '40vw', height: '100vh', backgroundColor: 'black' }}></div>
            <div style={{ width: '60vw', padding: '20px', margin: '10px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <h1 style={{ fontSize: '30px', textAlign: 'center', color: 'black', marginBottom: '20px' }}>Terms and Conditions</h1>
                <div style={{ maxHeight: '400px', overflowY: 'scroll', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fafafa', marginBottom: '20px' }}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus laborum ea dolores sed et!...</p>
                    {/* You can replace the content here with actual terms */}
                </div>
                <div className="checkbox-container" style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" id="accept" style={{ width: 'auto', marginRight: '10px' }} />
                    <label htmlFor="accept" style={{ fontSize: '14px' }}>I agree to the Terms and Conditions</label>
                </div>
                <button
                    onClick={() => alert('Terms Accepted')}
                    style={{ width: '100%', padding: '10px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px', fontSize: '14px', cursor: 'pointer', marginTop: '20px' }}
                >
                    Accept
                </button>
            </div>
        </div>
    );
};

export default TermsAndConditionsPage;
