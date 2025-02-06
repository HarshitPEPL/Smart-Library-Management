// import React from 'react';
// import './StudentNavBar.css';
// import { Search, ChevronDown, Languages } from 'lucide-react';

// const StudentNavBar = () => {
//   return (
//     <div className="Student-Navbar-container">
//       <div className="Student-Navbar-content">
//         <div className="Student-Search-section">
//           <div className="Student-Select-wrapper">
//             <select defaultValue="all" className="Student-Category-select">
//               <option value="all">All</option>
//               <option value="recommended">Recommended</option>
//               <option value="recent">Recent</option>
//               <option value="ebook">E-Books</option>
//               <option value="audiobook">Audio Books</option>
//               <option value="visualbook">Visual Contents</option>
//             </select>
//             <ChevronDown size={16} className="Student-Select-icon" />
//           </div>
//           <div className="Student-Search-wrapper">
//             <input type="text" placeholder="Search" className="Student-Search-input" />
//             <Search className="Student-Search-icon" size={20} />
//           </div>
//         </div>

//         <div className="Student-Nav-buttons">
//   <div className="Student-Dropdown">
//     <button className="Student-Nav-button">
//       Browse <ChevronDown size={16} />
//     </button>
//     <div className="Student-Dropdown-content">
//       <button className="Student-Dropdown-item">Categories</button>
//       <button className="Student-Dropdown-item">Author</button>
//       <button className="Student-Dropdown-item">Format</button>
//       <button className='Student-Dropdown-item'>Academic</button>
//       <button className='Student-Dropdown-item'>Non-Academic</button>
//     </div>
//   </div>

//   <div className="Student-Dropdown">
//     <button className="Student-Nav-button">
//       Portals <ChevronDown size={16} />
//     </button>
//       <div className="Student-Dropdown-content">
//     <button 
//       className="Student-Dropdown-item" 
//       onClick={() => window.open('https://nptel.ac.in/', '_blank')}
//     >
//          NPTEL
//     </button>

//     <button 
//       className="Student-Dropdown-item" 
//       onClick={() => window.open('https://swayam.gov.in/', '_blank')}
//     >
//          SWAYAM
//     </button>

//     <button 
//       className="Student-Dropdown-item" 
//       onClick={() => window.open('https://diksha.gov.in/', '_blank')}
//     >
//          DIKSHA
//     </button>

//     </div>
//   </div>

//   <div className="Student-Dropdown">
//     <button className="Student-Nav-button">
//       <Languages size={16} />
//       Lang <ChevronDown size={16} />
//     </button>
//     <div className="Student-Dropdown-content">
//       <button className="Student-Dropdown-item">Hindi</button>
//       <button className="Student-Dropdown-item">English</button>
//     </div>
//   </div>

//   <div className="Student-Dropdown">
//     <button className="Student-Profile-button">
//       <img src="user.png" alt="Profile" className="Student-Profile-image" />
//       Student <ChevronDown size={16} />
//     </button>
//     <div className="Student-Dropdown-content">
//       <button className="Student-Dropdown-item">Profile</button>
//       <button className="Student-Dropdown-item">Logout</button>
//     </div>
//   </div>
// </div>

//       </div>
//     </div>
//   );
// };

// export default StudentNavBar;



import React, { useState } from 'react';
import './StudentNavBar.css';
import { Search, ChevronDown, Languages } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudentNavBar = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/student-login'); // Ensure this matches the route path
};


  const handleCancel = () => {
    setShowLogoutModal(false);
    navigate('/student-dashboard'); // Ensure this matches your route path
};


  return (
    <div className="Student-Navbar-container">
      <div className="Student-Navbar-content">
        <div className="Student-Search-section">
          <div className="Student-Select-wrapper">
            <select defaultValue="all" className="Student-Category-select">
              <option value="all">All</option>
              <option value="recommended">Recommended</option>
              <option value="recent">Recent</option>
              <option value="ebook">E-Books</option>
              <option value="audiobook">Audio Books</option>
              <option value="visualbook">Visual Contents</option>
            </select>
            <ChevronDown size={16} className="Student-Select-icon" />
          </div>
          <div className="Student-Search-wrapper">
            <input type="text" placeholder="Search" className="Student-Search-input" />
            <Search className="Student-Search-icon" size={20} />
          </div>
        </div>

        <div className="Student-Nav-buttons">
          <div className="Student-Dropdown">
            <button className="Student-Nav-button">
              Browse <ChevronDown size={16} />
            </button>
            <div className="Student-Dropdown-content">
              <button className='Student-Dropdown-item'>Academic</button>
              <button className='Student-Dropdown-item'>Non-Academic</button>
            </div>
          </div>

          <div className="Student-Dropdown">
            <button className="Student-Nav-button">
              Portals <ChevronDown size={16} />
            </button>
            <div className="Student-Dropdown-content">
              <button 
                className="Student-Dropdown-item" 
                onClick={() => window.open('https://nptel.ac.in/', '_blank')}
              >
                NPTEL
              </button>

              <button 
                className="Student-Dropdown-item" 
                onClick={() => window.open('https://swayam.gov.in/', '_blank')}
              >
                SWAYAM
              </button>

              <button 
                className="Student-Dropdown-item" 
                onClick={() => window.open('https://diksha.gov.in/', '_blank')}
              >
                DIKSHA
              </button>
            </div>
          </div>

          <div className="Student-Dropdown">
            <button className="Student-Nav-button">
              <Languages size={16} />
              Lang <ChevronDown size={16} />
            </button>
            <div className="Student-Dropdown-content">
              <button className="Student-Dropdown-item">Hindi</button>
              <button className="Student-Dropdown-item">English</button>
            </div>
          </div>

          <div className="Student-Dropdown">
            <button className="Student-Profile-button">
              <img src="user.png" alt="Profile" className="Student-Profile-image" />
              Student <ChevronDown size={16} />
            </button>
            <div className="Student-Dropdown-content">
              <button className="Student-Dropdown-item">Profile</button>
              <button 
                className="Student-Dropdown-item" 
                onClick={() => setShowLogoutModal(true)}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {showLogoutModal && (
        <div className="StudentLogout-overlay">
          <div className="StudentLogout-modal">
            <h2 className="StudentLogout-title">Logout</h2>
            <p className="StudentLogout-message">
              Your learning journey doesn't end here! Do you really want to log out?
            </p>
            <div className="StudentLogout-buttons">
              <button 
                className="StudentLogout-cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button 
                className="StudentLogout-confirm-btn"
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

export default StudentNavBar;