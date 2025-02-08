import React from 'react';
import StudentNavBar from '../../components/StudentNavBar';
import StudentSidebar from '../../components/StudentSideBar';
import './StudentAnnouncements.css';

const StudentAnnouncements = () => {
  return (
    <div className="StudentAnnouncements">
      <StudentSidebar />
        <StudentNavBar />
        <div className="StudentAnnouncements-content">
          <h1>Announcements</h1>
          {/* Add your announcements content here */}
        </div>
      
    </div>
  );
};

export default StudentAnnouncements;