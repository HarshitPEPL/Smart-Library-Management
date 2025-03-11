import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import "./StudentForgetRequested.css";

const StudentForgetRequested = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="studentforget-requested-wrapper">
      <div className="studentforget-requested-left">
        <img
          src="/studentlogin.png"
          alt="Books and Learning"
          className="studentforget-requested-image"
        />
      </div>
      <div className="studentforget-requested-right">
        <img
          src="/logo.png"
          alt="Logo"
          className="studentforget-requested-logo-image"
        />
        <div className="student-forget-requested-success-icon">
          <CheckCircle size={64} color="#42bb4e" />
        </div>
        <h2 className="studentforget-requested-title">Request Sent Successfully!</h2>
        <p className="studentforget-requested-subtitle">
          We have sent the password reset instructions to your admin. Please check with them for further assistance.
        </p>
        <button
          type="button"
          className="studentforget-requested-button"
          onClick={handleBackToLogin}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default StudentForgetRequested;