import React from 'react';
import StudentNavBar from '../../components/StudentNavBar';
import StudentSidebar from '../../components/StudentSideBar';
import './StudentWishlist.css';

const StudentWishlist = () => {
  return (
    <div className="StudentWishlist">
      <StudentSidebar />
      <StudentNavBar />
        <div className="StudentWishlist-content">
          
          {/* Add your wishlist content here */}
        </div>
      
    </div>
  );
};

export default StudentWishlist;