import React, { useState } from 'react';
import './AdminNavBar.css';
import { Search, ChevronDown, Languages, X, Book, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminNavBar = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/admin-login');
  };

  const handleCancel = () => {
    setShowLogoutModal(false);
    navigate('/admin-dashboard');
  };

  const handleCloseProfile = () => {
    setShowProfileModal(false);
  };

  const navigateToWishlist = () => {
    navigate('/admin-wishlist');
  };

  return (
    <div className="Admin-Navbar-container">
      <div className="Admin-Navbar-content">
        <div className="Admin-Search-section">
          
          <div className="Admin-Search-wrapper">
            <input type="text" placeholder="Search" className="Admin-Search-input" />
            <Search className="Admin-Search-icon" size={20} />
          </div>
        </div>

        <div className="Admin-Nav-buttons">
          

          <div className="Admin-Dropdown">
            <button className="Admin-Nav-button">
              Portals <ChevronDown size={16} />
            </button>
            <div className="Admin-Dropdown-content">
              <button className="Admin-Dropdown-item" onClick={() => window.open('https://nptel.ac.in/', '_blank')}>
                NPTEL
              </button>
              <button className="Admin-Dropdown-item" onClick={() => window.open('https://swayam.gov.in/', '_blank')}>
                SWAYAM
              </button>
              <button className="Admin-Dropdown-item" onClick={() => window.open('https://diksha.gov.in/', '_blank')}>
                DIKSHA
              </button>
            </div>
          </div>

          <div className="Admin-Dropdown">
            <button className="Admin-Nav-button">
              <Languages size={16} />
              Lang <ChevronDown size={16} />
            </button>
            <div className="Admin-Dropdown-content">
              <button className="Admin-Dropdown-item">Hindi</button>
              <button className="Admin-Dropdown-item">English</button>
            </div>
          </div>

          <div className="Admin-Dropdown">
            <button className="Admin-Profile-button">
              <img src="user.png" alt="Profile" className="Admin-Profile-image" />
              Admin <ChevronDown size={16} />
            </button>
            <div className="Admin-Dropdown-content">
              <button 
                className="Admin-Dropdown-item"
                onClick={() => setShowProfileModal(true)}
              >
                Profile
              </button>
              <button 
                className="Admin-Dropdown-item" 
                onClick={() => setShowLogoutModal(true)}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {showProfileModal && (
        <div className="AdminProfile-overlay">
          <div className="AdminProfile-modal">
            <div className="AdminProfile-header">
              <h2 className="AdminProfile-title">Account Setting</h2>
              <button 
                className="AdminProfile-close-btn"
                onClick={handleCloseProfile}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="AdminProfile-content">
              <h3 className="AdminProfile-subtitle">Your Profile Picture</h3>
              
              <div className="AdminProfile-top-section">
                <div className="AdminProfile-avatar-container">
                  <img src="user.png" alt="Profile" className="AdminProfile-avatar" />
                </div>
                
                <div className="AdminProfile-stats">
                  <div className="AdminProfile-stat-card readings">
                    <Book size={24} />
                    <div className="AdminProfile-stat-content">
                      <h2>120</h2>
                      <p>Readings</p>
                    </div>
                  </div>
                  
                  <div 
                    className="AdminProfile-stat-card wishlist"
                    onClick={navigateToWishlist}
                    role="button"
                    tabIndex={0}
                  >
                    <Heart size={24} />
                    <div className="AdminProfile-stat-content">
                      <h2>10</h2>
                      <p>Wishlist</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="AdminProfile-form">
                <div className="AdminProfile-form-row">
                  <div className="AdminProfile-form-group">
                    <label>Full name</label>
                    <input type="text" defaultValue="Admin User" readOnly />
                  </div>
                  <div className="AdminProfile-form-group">
                    <label>UserName</label>
                    <input type="text" defaultValue="AdminUser" readOnly />
                  </div>
                </div>

                <div className="AdminProfile-form-row">
                  <div className="AdminProfile-form-group">
                    <label>Admin ID</label>
                    <input type="text" defaultValue="ADM12345" readOnly />
                  </div>
                  <div className="AdminProfile-form-group">
                    <label>Contact number</label>
                    <input type="text" defaultValue="+91 9876543210" readOnly />
                  </div>
                </div>

                <div className="AdminProfile-form-row">
                  <div className="AdminProfile-form-group">
                    <label>Role</label>
                    <input type="text" defaultValue="System Administrator" readOnly />
                  </div>
                  <div className="AdminProfile-form-group">
                    <label>Department</label>
                    <input type="text" defaultValue="Library Management" readOnly />
                  </div>
                </div>

                <button 
                  className="AdminProfile-update-btn"
                  onClick={handleCloseProfile}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showLogoutModal && (
        <div className="AdminLogout-overlay">
          <div className="AdminLogout-modal">
            <h2 className="AdminLogout-title">Logout</h2>
            <p className="AdminLogout-message">
              Are you sure you want to log out from the admin panel?
            </p>
            <div className="AdminLogout-buttons">
              <button 
                className="AdminLogout-cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button 
                className="AdminLogout-confirm-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminNavBar;