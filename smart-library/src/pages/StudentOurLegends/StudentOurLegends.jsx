import React from 'react';
import StudentNavBar from '../../components/StudentNavBar';
import StudentSidebar from '../../components/StudentSideBar';
import './StudentOurLegends.css';

const StudentOurLegends = () => {
  return (
    <div className="StudentOurLegends-container">
      <StudentSidebar />
      <StudentNavBar />
        <div className="StudentOurLegends-main">
          {/* Add your legends content here */}
        </div>
    </div>
  );
};

export default StudentOurLegends;