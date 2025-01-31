import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import "./StudentLogin.css";

const StudentLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
    
    // Basic validation
    if (username && password) {
      // Add your authentication logic here if needed
      
      // Navigate to dashboard after successful login
      navigate('/dashboard');
    } else {
      // You might want to add error handling here
      alert("Please enter both username and password");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="studentlogin-wrapper">
      <div className="studentlogin-left">
        <img
          src="/studentlogin.png"
          alt="Books and Learning"
          className="studentlogin-image"
        />
      </div>
      <div className="studentlogin-right">
        <img
          src="/logo.png"
          alt="Logo"
          className="studentlogin-logo-image"
        />
        <p className="studentlogin-subtitle">Welcome Teacher, Please enter your details</p>
        <p className="studentlogin-subsubtitle">Sign in to continue to your Digital Library</p>
        <form className="studentlogin-form" onSubmit={handleLogin}>
          <div className="studentlogin-field">
            <label htmlFor="username" className="studentlogin-label">Username</label>
            <input
              type="text"
              id="username"
              className="studentlogin-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="studentlogin-field">
            <label htmlFor="password" className="studentlogin-label">Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="studentlogin-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <button
                type="button"
                className="password-toggle-button"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff size={20} className="password-toggle-icon" />
                ) : (
                  <Eye size={20} className="password-toggle-icon" />
                )}
              </button>
            </div>
          </div>
          <div className="studentlogin-options">
            <label className="studentlogin-rememberme">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span className="remember-text">Remember Me</span>
            </label>
            <Link to="/forgot-password" className="studentlogin-forgot">
              Forgot Password?
            </Link>
          </div>
          <button type="submit" className="studentlogin-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;