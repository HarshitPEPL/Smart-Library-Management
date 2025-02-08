import React from 'react';
import StudentSidebar from '../../components/StudentSideBar';
import StudentNavBar from '../../components/StudentNavBar';
import './StudentCatalogue.css';

const StudentCatalogue = () => {
  return (
    <div className="Student-catalogue-layout">
      <StudentSidebar />
      <StudentNavBar />
        <div className="Student-catalogue-container">
          
          {/* Add your catalogue content here */}
        </div>
      
    </div>
  );
};

export default StudentCatalogue;