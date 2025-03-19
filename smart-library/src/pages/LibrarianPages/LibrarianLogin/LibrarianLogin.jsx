// LibrarianLogin.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import "./LibrarianLogin.css";

const LibrarianLogin = () => {
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
      navigate('/librarian-dashboard');
    } else {
      alert("Please enter both username and password");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="librarian-login-wrapper">
      <div className="librarian-login-left">
        <img
          src="/studentlogin.png"
          alt="Library Books"
          className="librarian-login-image"
        />
      </div>
      <div className="librarian-login-right">
        <img
          src="/logo.png"
          alt="Logo"
          className="librarian-login-logo-image"
        />
        <p className="librarian-login-subtitle">Welcome Librarian, Please enter your details</p>
        <p className="librarian-login-subsubtitle">Sign in to manage your Library Resources</p>
        <form className="librarian-login-form" onSubmit={handleLogin}>
          <div className="librarian-login-field">
            <label htmlFor="username" className="librarian-login-label">Username</label>
            <input
              type="text"
              id="username"
              className="librarian-login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="librarian-login-field">
            <label htmlFor="password" className="librarian-login-label">Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="librarian-login-input"
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
          <div className="librarian-login-options">
            <label className="librarian-login-rememberme">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span className="remember-text">Remember Me</span>
            </label>
            <Link to="/librarian-forgot-password" className="librarian-login-forgot">
              Forgot Password?
            </Link>
          </div>
          <button type="submit" className="librarian-login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LibrarianLogin;