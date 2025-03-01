// AdminForgetRequested.jsx
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./AdminForgetRequested.css";

const AdminForgetRequested = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1); // 1 for OTP, 2 for password reset
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    // Auto-focus on first OTP input
    if (inputRefs[0].current) {
      inputRefs[0].current.focus();
    }
  }, []);

  const handleOtpChange = (index, value) => {
    if (value === "" || /^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus to next input after entering a digit
      if (value !== "" && index < 3) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");
    console.log("Verifying OTP:", fullOtp);
    
    if (fullOtp.length === 4) {
      // In a real app, you would validate the OTP with your backend
      setStep(2); // Move to password reset step
    } else {
      alert("Please enter a valid 4-digit OTP");
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);
    
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    
    // In a real app, you would send the new password to your backend
    alert("Password reset successful!");
    navigate('/admin-login');
  };

  return (
    <div className="adminforgetrequested-wrapper">
      <div className="adminforgetrequested-left">
        <img
          src="/studentlogin.png"
          alt="Books and Learning"
          className="adminforgetrequested-image"
        />
      </div>
      <div className="adminforgetrequested-right">
        <img
          src="/logo.png"
          alt="Logo"
          className="adminforgetrequested-logo-image"
        />
        
        {step === 1 ? (
          <>
            <p className="adminforgetrequested-subtitle">Verify Your Email</p>
            <p className="adminforgetrequested-subsubtitle">
              We've sent a 4-digit code to {email}
            </p>
            <form className="adminforgetrequested-form" onSubmit={handleVerifyOtp}>
              <div className="adminforgetrequested-otp-container">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={inputRefs[index]}
                    type="text"
                    className="adminforgetrequested-otp-input"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    maxLength={1}
                  />
                ))}
              </div>
              <button type="submit" className="adminforgetrequested-button">
                Verify Code
              </button>
              <div className="adminforgetrequested-back">
                <Link to="/admin-forgot-password" className="adminforgetrequested-back-link">
                  Back to Forgot Password
                </Link>
              </div>
            </form>
          </>
        ) : (
          <>
            <p className="adminforgetrequested-subtitle">Reset Your Password</p>
            <p className="adminforgetrequested-subsubtitle">
              Create a new secure password
            </p>
            <form className="adminforgetrequested-form" onSubmit={handleResetPassword}>
              <div className="adminforgetrequested-field">
                <label htmlFor="newPassword" className="adminforgetrequested-label">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className="adminforgetrequested-input"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  required
                />
              </div>
              <div className="adminforgetrequested-field">
                <label htmlFor="confirmPassword" className="adminforgetrequested-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="adminforgetrequested-input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  required
                />
              </div>
              <button type="submit" className="adminforgetrequested-button">
                Reset Password
              </button>
              <div className="adminforgetrequested-back">
                <Link to="/admin-login" className="adminforgetrequested-back-link">
                  Back to Login
                </Link>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminForgetRequested;