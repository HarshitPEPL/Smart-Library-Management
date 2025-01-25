import React, { useState } from "react";
import "./StudentLogin.css";

const StudentLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
    // Add your login logic here
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

        {/* logo of image */}

        <img
            src="/logo.png"
            alt="Logo"
            className="studentlogin-logo-image"
        />  
              <p className="studentlogin-subtitle">Welcome Teacher, Please enter your details</p>
              <p2 className="studentlogin-subsubtitle">Sign in to continue to your Digital Library</p2>
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
            <input
              type="password"
              id="password"
              className="studentlogin-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
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
            <a href="#" className="studentlogin-forgot">Forgot Password?</a>
          </div>
          <button type="submit" className="studentlogin-button">Login</button>
        </form>
        </div>
    </div>
    
    
  );
};

export default StudentLogin;
