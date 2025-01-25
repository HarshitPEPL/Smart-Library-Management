import React from 'react';
import './LandingPage.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ModuleCard from './components/ModuleCard';

const LandingPage = () => {
    const modules = [
        { title: 'Student', description: 'Access your library account and resources.', link: '/student', color: '#2196f3' },
        { title: 'Teacher', description: 'Manage classes and resources for students.', link: '/teacher', color: '#ff9800' },
        { title: 'Librarian', description: 'Track inventory and library operations.', link: '/librarian', color: '#673ab7' },
        { title: 'State Level', description: 'Monitor library statistics and performance.', link: '/state', color: '#e91e63' },
    ];

    return (
        <div className="landing-page">
            <Header title="Smart Library" subtitle="Your gateway to a smarter library experience." />
            <main className="landing-content">
                <h2>Select Your Module</h2>
                <div className="module-grid">
                    {modules.map((module, index) => (
                        <ModuleCard key={index} title={module.title} description={module.description} link={module.link} color={module.color} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
