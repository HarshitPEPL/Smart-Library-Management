import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, BookOpen, Package, Users, RepeatIcon, Bell, FileBarChart } from 'lucide-react';
import './StateAdminSidebar.css';

const StateAdminSidebar = () => {
  const navigate = useNavigate();  
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', path: '/state-admin-dashboard', icon: <Home size={20} /> },
    { label: 'Books Inventory', path: '/state-admin-books-inventory', icon: <BookOpen size={20} /> },
    { label: 'Asset Management', path: '/state-admin-asset-management', icon: <Package size={20} /> },
    { label: 'User Management', path: '/state-admin-user-management', icon: <Users size={20} /> },
    { label: 'Borrow & Return', path: '/state-admin-borrow-return', icon: <RepeatIcon size={20} /> },
    { label: 'Announcements', path: '/state-admin-announcements', icon: <Bell size={20} /> },
    { label: 'Reports', path: '/state-admin-reports', icon: <FileBarChart size={20} /> }
  ];

  const footerItems = [
    { label: 'About', path: '/about' },
    { label: 'Support', path: '/support' },
    { label: 'Terms & Condition', path: '/terms' }
  ];

  return (
    <div className="StateAdminSidebar">
      <div className="StateAdminSidebar-logo">
        <img
          src="logo.png"
          alt="State Library Logo"
          className="StateAdminSidebar-logoImage"
        />
      </div>

      <nav className="StateAdminSidebar-nav">
        <ul className="StateAdminSidebar-mainMenu">
          {menuItems.map((item) => (
            <li 
              key={item.path}
              className={`StateAdminSidebar-navItem ${
                location.pathname === item.path ? 'StateAdminSidebar-active' : ''
              }`}
              onClick={() => navigate(item.path)}
            >
              <span className="StateAdminSidebar-icon">{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>

        <ul className="StateAdminSidebar-footerMenu">
          {footerItems.map((item) => (
            <li 
              key={item.path}
              className="StateAdminSidebar-footerItem"
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

export default StateAdminSidebar;