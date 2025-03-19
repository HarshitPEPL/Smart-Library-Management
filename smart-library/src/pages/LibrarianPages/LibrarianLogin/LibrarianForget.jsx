// LibrarianForget.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LibrarianForget.css";

const LibrarianForget = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email for password reset:", email);
    
    if (email) {
      // In a real app, you would send a request to your backend for OTP
      navigate('/librarian-reset-requested', { state: { email } });
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <div className="librarian-forget-wrapper">
      <div className="librarian-forget-left">
        <img
          src="/studentlogin.png"
          alt="Library Books"
          className="librarian-forget-image"
        />
      </div>
      <div className="librarian-forget-right">
        <img
          src="/logo.png"
          alt="Logo"
          className="librarian-forget-logo-image"
        />
        <p className="librarian-forget-subtitle">Forgot Password</p>
        <p className="librarian-forget-subsubtitle">Enter your email to receive a verification code</p>
        <form className="librarian-forget-form" onSubmit={handleSubmit}>
          <div className="librarian-forget-field">
            <label htmlFor="email" className="librarian-forget-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="librarian-forget-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <button type="submit" className="librarian-forget-button">Send Verification Code</button>
          <div className="librarian-forget-back">
            <Link to="/librarian-login" className="librarian-forget-back-link">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LibrarianForget;