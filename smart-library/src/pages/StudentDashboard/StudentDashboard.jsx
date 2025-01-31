// import React from 'react';
// import './StudentDashboard.css';
// import StudentSideBar from '../../components/StudentSideBar';

// const StudentDashboard = () => {
//   return (
//     <div className="StudentDashboard">
      
//       <StudentSideBar />
//     </div>
//   );
// };

// export default StudentDashboard;


import React from 'react';
import './StudentDashboard.css';
import StudentNavBar from '../../components/StudentNavBar';
import StudentSideBar from '../../components/StudentSideBar';

const StudentDashboard = () => {
  return (
    <div className="StudentDashboard">
      <StudentNavBar />
      <StudentSideBar />
    </div>
  );
};

export default StudentDashboard;