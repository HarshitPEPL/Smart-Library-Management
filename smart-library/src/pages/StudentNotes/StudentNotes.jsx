import React from 'react';
import StudentSidebar from '../../components/StudentSideBar';
import StudentNavBar from '../../components/StudentNavBar';
import './StudentNotes.css';

const StudentNotes = () => {
  return (
    <div className="StudentNotes-container">
      <StudentSidebar />
      <StudentNavBar />
        <div className="StudentNotes-content">
          {/* Add your notes content here */}
          
        </div>
      
    </div>
  );
};

export default StudentNotes;