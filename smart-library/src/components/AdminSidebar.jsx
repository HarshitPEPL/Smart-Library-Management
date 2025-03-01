import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, BookOpen, Package, Users, RepeatIcon, Bell, FileBarChart } from 'lucide-react';
import './AdminSidebar.css';

const AdminSidebar = () => {
  const navigate = useNavigate();  
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', path: '/admin-dashboard', icon: <Home size={20} /> },
    { label: 'Books Inventory', path: '/admin-books-inventory', icon: <BookOpen size={20} /> },
    { label: 'Asset Management', path: '/admin-asset-management', icon: <Package size={20} /> },
    { label: 'User Management', path: '/admin-user-management', icon: <Users size={20} /> },
    { label: 'Borrow & Return', path: '/admin-borrow-return', icon: <RepeatIcon size={20} /> },
    { label: 'Announcements', path: '/admin-announcements', icon: <Bell size={20} /> },
    { label: 'Reports', path: '/admin-reports', icon: <FileBarChart size={20} /> }
  ];

  const footerItems = [
    { label: 'About', path: '/about' },
    { label: 'Support', path: '/support' },
    { label: 'Terms & Condition', path: '/terms' }
  ];

  return (
    <div className="AdminSidebar">
      <div className="AdminSidebar-logo">
        <img
          src="logo.png"
          alt="Library Logo"
          className="AdminSidebar-logoImage"
        />
      </div>

      <nav className="AdminSidebar-nav">
        <ul className="AdminSidebar-mainMenu">
          {menuItems.map((item) => (
            <li 
              key={item.path}
              className={`AdminSidebar-navItem ${
                location.pathname === item.path ? 'AdminSidebar-active' : ''
              }`}
              onClick={() => navigate(item.path)}
            >
              <span className="AdminSidebar-icon">{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>

        <ul className="AdminSidebar-footerMenu">
          {footerItems.map((item) => (
            <li 
              key={item.path}
              className="AdminSidebar-footerItem"
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

export default AdminSidebar;