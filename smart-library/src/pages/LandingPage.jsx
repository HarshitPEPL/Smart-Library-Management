

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LandingPage.css';

// const LandingPage = () => {
//   const navigate = useNavigate();
//   const [showDropdown, setShowDropdown] = useState(false);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.LandingPage-login-dropdown')) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   const handleLogin = (role) => {
//     switch(role) {
//       case 'teacher':
//         navigate('/teacher-login');
//         break;
//       case 'student':
//         navigate('/login');
//         break;
//       case 'admin':
//         navigate('/admin-login');
//         break;
//       default:
//         navigate('/login');
//     }
//     setShowDropdown(false);
//   };

//   return (
//     <div className="LandingPage-container">
//       <nav className="LandingPage-nav">
//         <div className="LandingPage-logo">
//           <img 
//             src="/logo.png" 
//             alt="अध्ययन Smart Library Logo" 
//             className="LandingPage-logo-image" 
//           />
//         </div>

//         <div className="LandingPage-nav-links">
//           <a href="/" className="LandingPage-nav-link">Home</a>
//           <a href="/books" className="LandingPage-nav-link">Books</a>
//           <a href="/about" className="LandingPage-nav-link">About us</a>
//           <a href="/contact" className="LandingPage-nav-link">Contact us</a>
//         </div>

//         <div className="LandingPage-login-dropdown">
//   <button 
//     className="LandingPage-login-btn"
//     onClick={(e) => {
//       e.stopPropagation();
//       setShowDropdown(!showDropdown);
//     }}
//   >
//     Login as School
//   </button>
//   {showDropdown && (
//     <div className="LandingPage-dropdown-menu">
//       <button 
//         className="LandingPage-dropdown-item"
//         onClick={() => handleLogin('student')}
//       >
//         Login as Student
//       </button>
//       <button 
//         className="LandingPage-dropdown-item"
//         onClick={() => handleLogin('teacher')}
//       >
//         Login as Teacher
//       </button>
//       <button 
//         className="LandingPage-dropdown-item"
//         onClick={() => handleLogin('admin')}
//       >
//         Login as Admin
//       </button>
//     </div>
//   )}
// </div>
//       </nav>

//       <main className="LandingPage-main">
//         <div className="LandingPage-content">
//           <h1 className="LandingPage-title">
//             <span className="LandingPage-title-primary">Adhyayan</span>
//             <span className="LandingPage-title-secondary">Smart Library</span>
//           </h1>
//           <p className="LandingPage-subtitle">Where Knowledge Meets Innovation!</p>
          
//           <div className="LandingPage-search">
//             <input 
//               type="text" 
//               placeholder="Search" 
//               className="LandingPage-search-input"
//             />
//             <button className="LandingPage-search-btn">Search</button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default LandingPage;

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showAdminDropdown, setShowAdminDropdown] = useState(false);
  const [showSchoolDropdown, setShowSchoolDropdown] = useState(false);
  const adminDropdownRef = useRef(null);
  const schoolDropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        adminDropdownRef.current && 
        !adminDropdownRef.current.contains(event.target) &&
        !event.target.closest('.admin-btn')
      ) {
        setShowAdminDropdown(false);
      }
      
      if (
        schoolDropdownRef.current && 
        !schoolDropdownRef.current.contains(event.target) &&
        !event.target.closest('.school-btn')
      ) {
        setShowSchoolDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogin = (role) => {
    switch(role) {
      case 'state-admin':
        navigate('/state-admin-login');
        break;
      case 'district-admin':
        navigate('/district-admin-login');
        break;
      case 'block-admin':
        navigate('/block-admin-login');
        break;
      case 'teacher':
        navigate('/teacher-login');
        break;
      case 'student':
        navigate('/student-login');
        break;
      case 'librarian':
        navigate('/librarian-login');
        break;
      case 'school':
        navigate('/admin-login');
        break;
      default:
        navigate('/login');
    }
    setShowAdminDropdown(false);
    setShowSchoolDropdown(false);
  };

  return (
    <div className="LandingPage-container">
      <div className="background-wave"></div>
      
      <nav className="LandingPage-nav">
        <div className="LandingPage-logo">
          <img 
            src="/logo.png" 
            alt="अध्ययन Smart Library Logo" 
            className="LandingPage-logo-image" 
          />
          
        </div>

        <div className="LandingPage-nav-links">
          <a href="/" className="LandingPage-nav-link">Home</a>
          <a href="/books" className="LandingPage-nav-link">Books</a>
          <a href="/about" className="LandingPage-nav-link">About us</a>
          <a href="/contact" className="LandingPage-nav-link">Contact us</a>
        </div>

        <div className="login-buttons">
          <div className="dropdown-container admin-container">
            <button 
              className="LandingPage-login-btn admin-btn"
              onClick={() => setShowAdminDropdown(!showAdminDropdown)}
            >
              Login as Admin
            </button>
            
            {showAdminDropdown && (
              <div className="dropdown-menu admin-dropdown" ref={adminDropdownRef}>
                <button 
                  className="dropdown-item"
                  onClick={() => handleLogin('state-admin')}
                >
                  Login as State Admin
                </button>
                <button 
                  className="dropdown-item"
                  onClick={() => handleLogin('district-admin')}
                >
                  Login as District Admin
                </button>
                <button 
                  className="dropdown-item"
                  onClick={() => handleLogin('block-admin')}
                >
                  Login as Block Admin
                </button>
              </div>
            )}
          </div>
          
          <div className="dropdown-container school-container">
            <button 
              className="LandingPage-login-btn school-btn"
              onClick={() => setShowSchoolDropdown(!showSchoolDropdown)}
            >
              Login As School
            </button>
            
            {showSchoolDropdown && (
              <div className="dropdown-menu school-dropdown" ref={schoolDropdownRef}>
                <button 
                  className="dropdown-item"
                  onClick={() => handleLogin('student')}
                >
                  Login as Student  
                </button>
                <button 
                  className="dropdown-item"
                  onClick={() => handleLogin('teacher')}
                >
                  Login as Teacher
                </button>
                <button 
                  className="dropdown-item"
                  onClick={() => handleLogin('librarian')}
                >
                  Login as Librarian
                </button>
                <button 
                  className="dropdown-item"
                  onClick={() => handleLogin('school')}
                >
                  Login as School
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="LandingPage-main">
        <div className="central-logo">
          <img 
            src="/logo.png" 
            alt="अध्ययन" 
            className="central-logo-image" 
          />
        </div>
        
        <p className="LandingPage-subtitle">Where Knowledge Meets Innovation!</p>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;