import React from 'react';
import './SuccessPage.css';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div className="success-container">
      <div className="success-card">
        <h1>🎉 Success!</h1>
        <p>Your bundle has been submitted successfully.</p>
        <button onClick={handleReturnHome}>Return to Homepage</button>
      </div>
    </div>
  );
};

export default SuccessPage;