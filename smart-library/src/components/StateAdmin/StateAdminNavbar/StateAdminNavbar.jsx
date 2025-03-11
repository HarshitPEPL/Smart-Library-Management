import React, { useState } from 'react';
import './StateAdminNavbar.css';
import { Search, ChevronDown, Languages, X, Book, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StateAdminNavbar = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/state-admin-login');
  };

  const handleCancel = () => {
    setShowLogoutModal(false);
    navigate('/state-admin-dashboard');
  };

  const handleCloseProfile = () => {
    setShowProfileModal(false);
  };

  const navigateToWishlist = () => {
    navigate('/state-admin-wishlist');
  };

  return (
    <div className="StateAdmin-Navbar-container">
      <div className="StateAdmin-Navbar-content">
        <div className="StateAdmin-Search-section">
          <div className="StateAdmin-Select-wrapper">
            <select defaultValue="all" className="StateAdmin-Category-select">
              <option value="all">All</option>
              <option value="recommended">Recommended</option>
              <option value="recent">Recent</option>
              <option value="ebook">E-Books</option>
              <option value="audiobook">Audio Books</option>
              <option value="visualbook">Visual Contents</option>
            </select>
            <ChevronDown size={16} className="StateAdmin-Select-icon" />
          </div>
          <div className="StateAdmin-Search-wrapper">
            <input type="text" placeholder="Search" className="StateAdmin-Search-input" />
            <Search className="StateAdmin-Search-icon" size={20} />
          </div>
        </div>

        <div className="StateAdmin-Nav-buttons">
          <div className="StateAdmin-Dropdown">
            <button className="StateAdmin-Nav-button">
              Browse <ChevronDown size={16} />
            </button>
            <div className="StateAdmin-Dropdown-content">
              <button className='StateAdmin-Dropdown-item'>Academic</button>
              <button className='StateAdmin-Dropdown-item'>Non-Academic</button>
            </div>
          </div>

          <div className="StateAdmin-Dropdown">
            <button className="StateAdmin-Nav-button">
              Portals <ChevronDown size={16} />
            </button>
            <div className="StateAdmin-Dropdown-content">
              <button className="StateAdmin-Dropdown-item" onClick={() => window.open('https://nptel.ac.in/', '_blank')}>
                NPTEL
              </button>
              <button className="StateAdmin-Dropdown-item" onClick={() => window.open('https://swayam.gov.in/', '_blank')}>
                SWAYAM
              </button>
              <button className="StateAdmin-Dropdown-item" onClick={() => window.open('https://diksha.gov.in/', '_blank')}>
                DIKSHA
              </button>
            </div>
          </div>

          <div className="StateAdmin-Dropdown">
            <button className="StateAdmin-Nav-button">
              <Languages size={16} />
              Lang <ChevronDown size={16} />
            </button>
            <div className="StateAdmin-Dropdown-content">
              <button className="StateAdmin-Dropdown-item">Hindi</button>
              <button className="StateAdmin-Dropdown-item">English</button>
            </div>
          </div>

          <div className="StateAdmin-Dropdown">
            <button className="StateAdmin-Profile-button">
              <img src="user.png" alt="Profile" className="StateAdmin-Profile-image" />
              State Admin <ChevronDown size={16} />
            </button>
            <div className="StateAdmin-Dropdown-content">
              <button 
                className="StateAdmin-Dropdown-item"
                onClick={() => setShowProfileModal(true)}
              >
                Profile
              </button>
              <button 
                className="StateAdmin-Dropdown-item" 
                onClick={() => setShowLogoutModal(true)}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {showProfileModal && (
        <div className="StateAdminProfile-overlay">
          <div className="StateAdminProfile-modal">
            <div className="StateAdminProfile-header">
              <h2 className="StateAdminProfile-title">Account Setting</h2>
              <button 
                className="StateAdminProfile-close-btn"
                onClick={handleCloseProfile}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="StateAdminProfile-content">
              <h3 className="StateAdminProfile-subtitle">Your Profile Picture</h3>
              
              <div className="StateAdminProfile-top-section">
                <div className="StateAdminProfile-avatar-container">
                  <img src="user.png" alt="Profile" className="StateAdminProfile-avatar" />
                </div>
                
                <div className="StateAdminProfile-stats">
                  <div className="StateAdminProfile-stat-card readings">
                    <Book size={24} />
                    <div className="StateAdminProfile-stat-content">
                      <h2>150</h2>
                      <p>Readings</p>
                    </div>
                  </div>
                  
                  <div 
                    className="StateAdminProfile-stat-card wishlist"
                    onClick={navigateToWishlist}
                    role="button"
                    tabIndex={0}
                  >
                    <Heart size={24} />
                    <div className="StateAdminProfile-stat-content">
                      <h2>15</h2>
                      <p>Wishlist</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="StateAdminProfile-form">
                <div className="StateAdminProfile-form-row">
                  <div className="StateAdminProfile-form-group">
                    <label>Full name</label>
                    <input type="text" defaultValue="State Admin User" readOnly />
                  </div>
                  <div className="StateAdminProfile-form-group">
                    <label>UserName</label>
                    <input type="text" defaultValue="StateAdminUser" readOnly />
                  </div>
                </div>

                <div className="StateAdminProfile-form-row">
                  <div className="StateAdminProfile-form-group">
                    <label>Admin ID</label>
                    <input type="text" defaultValue="SADM12345" readOnly />
                  </div>
                  <div className="StateAdminProfile-form-group">
                    <label>Contact number</label>
                    <input type="text" defaultValue="+91 9876543210" readOnly />
                  </div>
                </div>

                <div className="StateAdminProfile-form-row">
                  <div className="StateAdminProfile-form-group">
                    <label>Role</label>
                    <input type="text" defaultValue="State Administrator" readOnly />
                  </div>
                  <div className="StateAdminProfile-form-group">
                    <label>Department</label>
                    <input type="text" defaultValue="State Library Management" readOnly />
                  </div>
                </div>

                <button 
                  className="StateAdminProfile-update-btn"
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
        <div className="StateAdminLogout-overlay">
          <div className="StateAdminLogout-modal">
            <h2 className="StateAdminLogout-title">Logout</h2>
            <p className="StateAdminLogout-message">
              Are you sure you want to log out from the state admin panel?
            </p>
            <div className="StateAdminLogout-buttons">
              <button 
                className="StateAdminLogout-cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button 
                className="StateAdminLogout-confirm-btn"
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

export default StateAdminNavbar;