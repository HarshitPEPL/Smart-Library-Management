import React, { useState } from 'react';
import './LibrarianAdminNavbar.css';
import { Search, ChevronDown, Languages, X, Book, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LibrarianAdminNavbar = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/librarian-admin-login');
  };

  const handleCancel = () => {
    setShowLogoutModal(false);
    navigate('/librarian-admin-dashboard');
  };

  const handleCloseProfile = () => {
    setShowProfileModal(false);
  };

  const navigateToWishlist = () => {
    navigate('/librarian-admin-wishlist');
  };

  return (
    <div className="LibrarianAdmin-Navbar-container">
      <div className="LibrarianAdmin-Navbar-content">
        <div className="LibrarianAdmin-Search-section">
          <div className="LibrarianAdmin-Search-wrapper">
            <input type="text" placeholder="Search" className="LibrarianAdmin-Search-input" />
            <Search className="LibrarianAdmin-Search-icon" size={20} />
          </div>
        </div>

        <div className="LibrarianAdmin-Nav-buttons">
          <div className="LibrarianAdmin-Dropdown">
            <button className="LibrarianAdmin-Nav-button">
              Add Books <ChevronDown size={16} />
            </button>
            <div className="LibrarianAdmin-Dropdown-content">
              <button 
                className='LibrarianAdmin-Dropdown-item'
                onClick={() => navigate('/librarian-add-hardcopy')}
              >
                Hardcopy
              </button>
              <button 
                className='LibrarianAdmin-Dropdown-item'
                onClick={() => navigate('/librarian-add-ebooks')}
              >
                Ebooks
              </button>
              <button 
                className='LibrarianAdmin-Dropdown-item'
                onClick={() => navigate('/librarian-add-audiobooks')}
              >
                Audiobooks
              </button>
              <button 
                className='LibrarianAdmin-Dropdown-item'
                onClick={() => navigate('/librarian-add-visualcontent')}
              >
                Visual Content
              </button>
            </div>
          </div>

          <div className="LibrarianAdmin-Dropdown">
            <button className="LibrarianAdmin-Nav-button">
              Portals <ChevronDown size={16} />
            </button>
            <div className="LibrarianAdmin-Dropdown-content">
              <button className="LibrarianAdmin-Dropdown-item" onClick={() => window.open('https://nptel.ac.in/', '_blank')}>
                NPTEL
              </button>
              <button className="LibrarianAdmin-Dropdown-item" onClick={() => window.open('https://swayam.gov.in/', '_blank')}>
                SWAYAM
              </button>
              <button className="LibrarianAdmin-Dropdown-item" onClick={() => window.open('https://diksha.gov.in/', '_blank')}>
                DIKSHA
              </button>
            </div>
          </div>

          <div className="LibrarianAdmin-Dropdown">
            <button className="LibrarianAdmin-Nav-button">
              <Languages size={16} />
              Lang <ChevronDown size={16} />
            </button>
            <div className="LibrarianAdmin-Dropdown-content">
              <button className="LibrarianAdmin-Dropdown-item">Hindi</button>
              <button className="LibrarianAdmin-Dropdown-item">English</button>
            </div>
          </div>

          <div className="LibrarianAdmin-Dropdown">
            <button className="LibrarianAdmin-Profile-button">
              <img src="user.png" alt="Profile" className="LibrarianAdmin-Profile-image" />
              Librarian <ChevronDown size={16} />
            </button>
            <div className="LibrarianAdmin-Dropdown-content">
              <button 
                className="LibrarianAdmin-Dropdown-item"
                onClick={() => setShowProfileModal(true)}
              >
                Profile
              </button>
              <button 
                className="LibrarianAdmin-Dropdown-item" 
                onClick={() => setShowLogoutModal(true)}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {showProfileModal && (
        <div className="LibrarianAdminProfile-overlay">
          <div className="LibrarianAdminProfile-modal">
            <div className="LibrarianAdminProfile-header">
              <h2 className="LibrarianAdminProfile-title">Account Setting</h2>
              <button 
                className="LibrarianAdminProfile-close-btn"
                onClick={handleCloseProfile}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="LibrarianAdminProfile-content">
              <h3 className="LibrarianAdminProfile-subtitle">Your Profile Picture</h3>
              
              <div className="LibrarianAdminProfile-top-section">
                <div className="LibrarianAdminProfile-avatar-container">
                  <img src="user.png" alt="Profile" className="LibrarianAdminProfile-avatar" />
                </div>
                
                <div className="LibrarianAdminProfile-stats">
                  <div className="LibrarianAdminProfile-stat-card readings">
                    <Book size={24} />
                    <div className="LibrarianAdminProfile-stat-content">
                      <h2>150</h2>
                      <p>Readings</p>
                    </div>
                  </div>
                  
                  <div 
                    className="LibrarianAdminProfile-stat-card wishlist"
                    onClick={navigateToWishlist}
                    role="button"
                    tabIndex={0}
                  >
                    <Heart size={24} />
                    <div className="LibrarianAdminProfile-stat-content">
                      <h2>15</h2>
                      <p>Wishlist</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="LibrarianAdminProfile-form">
                <div className="LibrarianAdminProfile-form-row">
                  <div className="LibrarianAdminProfile-form-group">
                    <label>Full name</label>
                    <input type="text" defaultValue="Librarian Admin User" readOnly />
                  </div>
                  <div className="LibrarianAdminProfile-form-group">
                    <label>UserName</label>
                    <input type="text" defaultValue="LibrarianUser" readOnly />
                  </div>
                </div>

                <div className="LibrarianAdminProfile-form-row">
                  <div className="LibrarianAdminProfile-form-group">
                    <label>Admin ID</label>
                    <input type="text" defaultValue="LADM12345" readOnly />
                  </div>
                  <div className="LibrarianAdminProfile-form-group">
                    <label>Contact number</label>
                    <input type="text" defaultValue="+91 9876543210" readOnly />
                  </div>
                </div>

                <div className="LibrarianAdminProfile-form-row">
                  <div className="LibrarianAdminProfile-form-group">
                    <label>Role</label>
                    <input type="text" defaultValue="Librarian Administrator" readOnly />
                  </div>
                  <div className="LibrarianAdminProfile-form-group">
                    <label>Department</label>
                    <input type="text" defaultValue="Library Management" readOnly />
                  </div>
                </div>

                <button 
                  className="LibrarianAdminProfile-update-btn"
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
        <div className="LibrarianAdminLogout-overlay">
          <div className="LibrarianAdminLogout-modal">
            <h2 className="LibrarianAdminLogout-title">Logout</h2>
            <p className="LibrarianAdminLogout-message">
              Are you sure you want to log out from the librarian admin panel?
            </p>
            <div className="LibrarianAdminLogout-buttons">
              <button 
                className="LibrarianAdminLogout-cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button 
                className="LibrarianAdminLogout-confirm-btn"
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

export default LibrarianAdminNavbar;