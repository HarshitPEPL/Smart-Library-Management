import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Book, Headphones, MonitorPlay, FileText, Bell, Library, Users, BookMarked } from 'lucide-react';
import './StudentSidebar.css';

const StudentSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: <Home size={20} /> },
    { label: 'E-Books', path: '/e-books', icon: <Book size={20} /> },
    { label: 'Audio Books', path: '/audio-books', icon: <Headphones size={20} /> },
    { label: 'Visual Content', path: '/visual-content', icon: <MonitorPlay size={20} /> },
    { label: 'Notes', path: '/notes', icon: <FileText size={20} /> },
    { label: 'Announcements', path: '/announcements', icon: <Bell size={20} /> },
    { label: 'Catalogue', path: '/catalogue', icon: <Library size={20} /> },
    { label: 'Our Legends', path: '/legends', icon: <Users size={20} /> },
    { label: 'Wishlist', path: '/wishlist', icon: <BookMarked size={20} /> }
  ];

  const footerItems = [
    { label: 'About', path: '/about' },
    { label: 'Support', path: '/support' },
    { label: 'Terms & Condition', path: '/terms' }
  ];

  return (
    <div className="StudentSidebar">
      <div className="StudentSidebar-logo">
        <img
          src="logo.png"
          alt="Library Logo"
          className="StudentSidebar-logoImage"
        />
      </div>

      <nav className="StudentSidebar-nav">
        <ul className="StudentSidebar-mainMenu">
          {menuItems.map((item) => (
            <li 
              key={item.path}
              className={`StudentSidebar-navItem ${
                location.pathname === item.path ? 'StudentSidebar-active' : ''
              }`}
              onClick={() => navigate(item.path)}
            >
              <span className="StudentSidebar-icon">{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>

        <ul className="StudentSidebar-footerMenu">
          {footerItems.map((item) => (
            <li 
              key={item.path}
              className="StudentSidebar-footerItem"
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default StudentSidebar;