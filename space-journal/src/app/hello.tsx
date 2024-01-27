import React from 'react';
import './globals.css';
const WelcomePage = ({ name }) => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-text">Welcome {name}</h1>
    </div>
  );
};

export default WelcomePage;