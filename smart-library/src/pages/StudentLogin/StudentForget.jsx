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
          No worries! Enter your email and we'll send you reset instructions.
        </p>
        <form className="studentforget-form" onSubmit={handleSubmit}>
          <div className="studentforget-field">
            <label htmlFor="email" className="studentforget-label">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="studentforget-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <button type="submit" className="studentforget-button">
            Send Reset Instructions
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