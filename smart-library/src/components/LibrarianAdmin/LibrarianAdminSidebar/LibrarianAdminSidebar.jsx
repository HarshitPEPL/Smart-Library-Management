import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, BookOpen, Package, Users, RepeatIcon, Bell, BookCheckIcon } from 'lucide-react';
import './LibrarianAdminSidebar.css';

const LibrarianAdminSidebar = () => {
  const navigate = useNavigate();  
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', path: '/librarian-dashboard', icon: <Home size={20} /> },
    { label: 'Books Inventory', path: '/librarian-books-inventory', icon: <BookOpen size={20} /> },
    { label: 'Asset Management', path: '/librarian-asset-management', icon: <Package size={20} /> },
    { label: 'User Management', path: '/librarian-user-management', icon: <Users size={20} /> },
    { label: 'Borrow & Return', path: '/librarian-borrow-return', icon: <RepeatIcon size={20} /> },
    { label: 'Catalogue', path: '/librarian-catalogue', icon: <BookCheckIcon size={20} /> },
    { label: 'Announcements', path: '/librarian-announcements', icon: <Bell size={20} /> }
  ];

  const footerItems = [
    { label: 'About', path: '/about' },
    { label: 'Support', path: '/support' },
    { label: 'Terms & Condition', path: '/terms' }
  ];

  return (
    <div className="LibrarianAdminSidebar">
      <div className="LibrarianAdminSidebar-logo">
        <img
          src="logo.png"
          alt="Library Logo"
          className="LibrarianAdminSidebar-logoImage"
        />
      </div>

      <nav className="LibrarianAdminSidebar-nav">
        <ul className="LibrarianAdminSidebar-mainMenu">
          {menuItems.map((item) => (
            <li 
              key={item.path}
              className={`LibrarianAdminSidebar-navItem ${
                location.pathname === item.path ? 'LibrarianAdminSidebar-active' : ''
              }`}
              onClick={() => navigate(item.path)}
            >
              <span className="LibrarianAdminSidebar-icon">{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>

        <ul className="LibrarianAdminSidebar-footerMenu">
          {footerItems.map((item) => (
            <li 
              key={item.path}
              className="LibrarianAdminSidebar-footerItem"
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

export default LibrarianAdminSidebar;