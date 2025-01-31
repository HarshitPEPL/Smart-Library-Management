import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentForget.css";

const StudentForget = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password email:", email);
    // Add your password reset logic here
    
    // Navigate to the success page
    navigate("/reset-requested");
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="studentforget-wrapper">
      <div className="studentforget-left">
        <img
          src="/studentlogin.png"
          alt="Books and Learning"
          className="studentforget-image"
        />
      </div>
      <div className="studentforget-right">
        <img
          src="/logo.png"
          alt="Logo"
          className="studentforget-logo-image"
        />
        <h2 className="studentforget-title">Forgot Password?</h2>
        <p className="studentforget-subtitle">
          No worries! Enter your username and we'll send the request
        </p>
        <form className="studentforget-form" onSubmit={handleSubmit}>
          <div className="studentforget-field">
            <label htmlFor="username" className="studentforget-label">
              Username
            </label>
            <input
              type="text"
              id="email"
              className="studentforget-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <button type="submit" className="studentforget-button">
            Send Reset Request
          </button>
          <button
            type="button"
            className="studentforget-back"
            onClick={handleBackToLogin}
          >
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentForget;