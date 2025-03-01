// AdminLogin.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import "./AdminLogin.css";

const AdminLogin = () => {
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
    
    if (username && password) {
      navigate('/admin-dashboard');
    } else {
      alert("Please enter both username and password");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="adminlogin-wrapper">
      <div className="adminlogin-left">
        <img
          src="/studentlogin.png"
          alt="Books and Learning"
          className="adminlogin-image"
        />
      </div>
      <div className="adminlogin-right">
        <img
          src="/logo.png"
          alt="Logo"
          className="adminlogin-logo-image"
        />
        <p className="adminlogin-subtitle">Welcome Admin, Please enter your details</p>
        <p className="adminlogin-subsubtitle">Sign in to manage your Digital Library</p>
        <form className="adminlogin-form" onSubmit={handleLogin}>
          <div className="adminlogin-field">
            <label htmlFor="username" className="adminlogin-label">Username</label>
            <input
              type="text"
              id="username"
              className="adminlogin-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="adminlogin-field">
            <label htmlFor="password" className="adminlogin-label">Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="adminlogin-input"
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
          <div className="adminlogin-options">
            <label className="adminlogin-rememberme">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span className="remember-text">Remember Me</span>
            </label>
            <Link to="/admin-forgot-password" className="adminlogin-forgot">
              Forgot Password?
            </Link>
          </div>
          <button type="submit" className="adminlogin-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;