import React from 'react';
import { Link } from 'react-router-dom';
import './ModuleCard.css';

const ModuleCard = ({ title, description, link, color }) => {
    return (
        <Link to={link} className="module-card" style={{ backgroundColor: color }}>
            <h3>hello</h3>
            <p>{description}</p>
        </Link>
    );
};

export default ModuleCard;
