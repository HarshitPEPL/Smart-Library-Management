// AdminForget.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./AdminForget.css";

const AdminForget = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email for password reset:", email);
    
    if (email) {
      // In a real app, you would send a request to your backend for OTP
      navigate('/admin-reset-requested', { state: { email } });
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <div className="adminforget-wrapper">
      <div className="adminforget-left">
        <img
          src="/studentlogin.png"
          alt="Books and Learning"
          className="adminforget-image"
        />
      </div>
      <div className="adminforget-right">
        <img
          src="/logo.png"
          alt="Logo"
          className="adminforget-logo-image"
        />
        <p className="adminforget-subtitle">Forgot Password</p>
        <p className="adminforget-subsubtitle">Enter your email to receive a verification code</p>
        <form className="adminforget-form" onSubmit={handleSubmit}>
          <div className="adminforget-field">
            <label htmlFor="email" className="adminforget-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="adminforget-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <button type="submit" className="adminforget-button">Send Verification Code</button>
          <div className="adminforget-back">
            <Link to="/admin-login" className="adminforget-back-link">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminForget;