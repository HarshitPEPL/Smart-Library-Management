// StateForget.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./StateForget.css";

const StateForget = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email for password reset:", email);
    
    if (email) {
      // In a real app, you would send a request to your backend for OTP
      navigate('/state-reset-requested', { state: { email } });
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <div className="state-forget-wrapper">
      <div className="state-forget-left">
        <img
          src="/studentlogin.png"
          alt="Books and Learning"
          className="state-forget-image"
        />
      </div>
      <div className="state-forget-right">
        <img
          src="/logo.png"
          alt="Logo"
          className="state-forget-logo-image"
        />
        <p className="state-forget-subtitle">Forgot Password</p>
        <p className="state-forget-subsubtitle">Enter your email to receive a verification code</p>
        <form className="state-forget-form" onSubmit={handleSubmit}>
          <div className="state-forget-field">
            <label htmlFor="email" className="state-forget-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="state-forget-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <button type="submit" className="state-forget-button">Send Verification Code</button>
          <div className="state-forget-back">
            <Link to="/state-login" className="state-forget-back-link">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StateForget;