import React from 'react';
import './Header.css';

const Header = ({ title, subtitle }) => {
    return (
        <header className="landing-header">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    );
};

export default Header;
