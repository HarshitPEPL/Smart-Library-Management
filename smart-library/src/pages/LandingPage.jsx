// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LandingPage.css';

// const LandingPage = () => {
//   const navigate = useNavigate();
//   const [showDropdown, setShowDropdown] = useState(false);

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
//                 <div className="LandingPage-logo">
//             <img 
//                 src="/logo.png" 
//                 alt="अध्ययन Smart Library Logo" 
//                 className="LandingPage-logo-image" 
//             />
//             </div>

//         <div className="LandingPage-nav-links">
//           <a href="/" className="LandingPage-nav-link">Home</a>
//           <a href="/books" className="LandingPage-nav-link">Books</a>
//           <a href="/about" className="LandingPage-nav-link">About us</a>
//           <a href="/contact" className="LandingPage-nav-link">Contact us</a>
//         </div>
//         <div className="LandingPage-login-dropdown">
//           <button 
//             className="LandingPage-login-btn"
//             onClick={() => setShowDropdown(!showDropdown)}
//           >
//             Login
//           </button>
//           {showDropdown && (
//             <div className="LandingPage-dropdown-menu">
//               <button 
//                 className="LandingPage-dropdown-item"
//                 onClick={() => handleLogin('student')}
//               >
//                 Login as Student
//               </button>
//               <button 
//                 className="LandingPage-dropdown-item"
//                 onClick={() => handleLogin('teacher')}
//               >
//                 Login as Teacher
//               </button>
//               <button 
//                 className="LandingPage-dropdown-item"
//                 onClick={() => handleLogin('admin')}
//               >
//                 Login as Admin
//               </button>
//             </div>
//           )}
//         </div>
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


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.LandingPage-login-dropdown')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleLogin = (role) => {
    switch(role) {
      case 'teacher':
        navigate('/teacher-login');
        break;
      case 'student':
        navigate('/login');
        break;
      case 'admin':
        navigate('/admin-login');
        break;
      default:
        navigate('/login');
    }
    setShowDropdown(false);
  };

  return (
    <div className="LandingPage-container">
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

        <div className="LandingPage-login-dropdown">
  <button 
    className="LandingPage-login-btn"
    onClick={(e) => {
      e.stopPropagation();
      setShowDropdown(!showDropdown);
    }}
  >
    Login
  </button>
  {showDropdown && (
    <div className="LandingPage-dropdown-menu">
      <button 
        className="LandingPage-dropdown-item"
        onClick={() => handleLogin('student')}
      >
        Login as Student
      </button>
      <button 
        className="LandingPage-dropdown-item"
        onClick={() => handleLogin('teacher')}
      >
        Login as Teacher
      </button>
      <button 
        className="LandingPage-dropdown-item"
        onClick={() => handleLogin('admin')}
      >
        Login as Admin
      </button>
    </div>
  )}
</div>
      </nav>

      <main className="LandingPage-main">
        <div className="LandingPage-content">
          <h1 className="LandingPage-title">
            <span className="LandingPage-title-primary">Adhyayan</span>
            <span className="LandingPage-title-secondary">Smart Library</span>
          </h1>
          <p className="LandingPage-subtitle">Where Knowledge Meets Innovation!</p>
          
          <div className="LandingPage-search">
            <input 
              type="text" 
              placeholder="Search" 
              className="LandingPage-search-input"
            />
            <button className="LandingPage-search-btn">Search</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;