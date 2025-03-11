// StateLogin.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import "./StateLogin.css";

const StateLogin = () => {
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
      navigate('/state-admin-dashboard');
    } else {
      alert("Please enter both username and password");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="state-login-wrapper">
      <div className="state-login-left">
        <img
          src="/studentlogin.png"
          alt="Books and Learning"
          className="state-login-image"
        />
      </div>
      <div className="state-login-right">
        <img
          src="/logo.png"
          alt="Logo"
          className="state-login-logo-image"
        />
        <p className="state-login-subtitle">Welcome State Authority, Please enter your details</p>
        <p className="state-login-subsubtitle">Sign in to manage your State Digital Library</p>
        <form className="state-login-form" onSubmit={handleLogin}>
          <div className="state-login-field">
            <label htmlFor="username" className="state-login-label">Username</label>
            <input
              type="text"
              id="username"
              className="state-login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="state-login-field">
            <label htmlFor="password" className="state-login-label">Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="state-login-input"
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
          <div className="state-login-options">
            <label className="state-login-rememberme">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span className="remember-text">Remember Me</span>
            </label>
            <Link to="/state-forgot-password" className="state-login-forgot">
              Forgot Password?
            </Link>
          </div>
          <button type="submit" className="state-login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default StateLogin;