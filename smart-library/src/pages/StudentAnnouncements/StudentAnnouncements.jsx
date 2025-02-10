// import React from 'react';
// import StudentNavBar from '../../components/StudentNavBar';
// import StudentSidebar from '../../components/StudentSideBar';
// import './StudentAnnouncements.css';

// const StudentAnnouncements = () => {
//   return (
//     <div className="StudentAnnouncements">
//       <StudentSidebar />
//         <StudentNavBar />
//         <div className="StudentAnnouncements-content">

//           {/* Add your announcements content here */}
//         </div>
      
//     </div>
//   );
// };

// export default StudentAnnouncements;

import React, { useState } from 'react';
import { X } from 'lucide-react';
import StudentNavBar from '../../components/StudentNavBar';
import StudentSidebar from '../../components/StudentSideBar';
import './StudentAnnouncements.css';

const announcements = [
  {
    id: 1,
    title: "Library System Maintenance",
    details: "The library management system will undergo scheduled maintenance this weekend. Please complete any pending book returns or renewals before Saturday 8 PM.",
    date: "2025-02-08",
    importance: "high"
  },
  {
    id: 2,
    title: "New Digital Resources Available",
    details: "We've added 500+ new e-books to our digital collection, focusing on Computer Science, Engineering, and Medical Sciences. Access them through your student portal.",
    date: "2025-02-07",
    importance: "medium"
  },
  {
    id: 3,
    title: "Extended Library Hours During Finals",
    details: "The library will remain open until midnight from February 15th to March 1st to support students during final examinations.",
    date: "2025-02-06",
    importance: "high"
  },
  {
    id: 4,
    title: "Guest Speaker Series",
    details: "Distinguished author Dr. Sarah Johnson will be giving a talk on 'The Future of Digital Libraries' on February 20th at 3 PM in the Main Auditorium.",
    date: "2025-02-05",
    importance: "medium"
  },
  {
    id: 5,
    title: "New Study Room Booking System",
    details: "We've launched a new online booking system for study rooms. Book your space up to 2 weeks in advance through the student portal.",
    date: "2025-02-04",
    importance: "high"
  },
  {
    id: 6,
    title: "Library App Update",
    details: "Please update your library mobile app to the latest version to access new features including quick book renewal and digital ID cards.",
    date: "2025-02-03",
    importance: "medium"
  },
  {
    id: 7,
    title: "Research Database Workshop",
    details: "Learn how to effectively use our research databases. Workshop scheduled for February 25th at 1 PM in the Computer Lab.",
    date: "2025-02-02",
    importance: "medium"
  },
  {
    id: 8,
    title: "New Journal Subscriptions",
    details: "The library has subscribed to 5 new academic journals in the field of Biotechnology and Environmental Science.",
    date: "2025-02-01",
    importance: "low"
  },
  {
    id: 9,
    title: "Library Survey",
    details: "Help us improve our services by participating in our annual library satisfaction survey. Complete it by February 28th to enter a prize draw.",
    date: "2025-01-31",
    importance: "medium"
  },
  {
    id: 10,
    title: "New Print Credit System",
    details: "Starting March 1st, we're implementing a new print credit system. Each student will receive 500 free pages per semester.",
    date: "2025-01-30",
    importance: "high"
  }
];

const StudentAnnouncements = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [timeFilter, setTimeFilter] = useState('all');
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const announcementsPerPage = 6;

  const getFilteredAnnouncements = () => {
    const currentDate = new Date();
    let filteredData = [...announcements];

    if (timeFilter === 'week') {
      const oneWeekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
      filteredData = announcements.filter(ann => new Date(ann.date) >= oneWeekAgo);
    } else if (timeFilter === 'month') {
      const oneMonthAgo = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);
      filteredData = announcements.filter(ann => new Date(ann.date) >= oneMonthAgo);
    }

    return filteredData;
  };

  const filteredAnnouncements = getFilteredAnnouncements();
  const totalPages = Math.ceil(filteredAnnouncements.length / announcementsPerPage);

  // Get current announcements
  const indexOfLastAnnouncement = currentPage * announcementsPerPage;
  const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
  const currentAnnouncements = filteredAnnouncements.slice(
    indexOfFirstAnnouncement,
    indexOfLastAnnouncement
  );

  return (
    <div className="StudentAnnouncements">
      <StudentSidebar />
      <StudentNavBar />
      <div className="StudentAnnouncements-container">
        <div className="StudentAnnouncements-filterButtons">
          <button 
            className={`StudentAnnouncements-filterBtn ${timeFilter === 'week' ? 'StudentAnnouncements-active' : ''}`}
            onClick={() => {
              setTimeFilter('week');
              setCurrentPage(1);
            }}
          >
            1 Week
          </button>
          <button 
            className={`StudentAnnouncements-filterBtn ${timeFilter === 'month' ? 'StudentAnnouncements-active' : ''}`}
            onClick={() => {
              setTimeFilter('month');
              setCurrentPage(1);
            }}
          >
            1 Month
          </button>
          <button 
            className={`StudentAnnouncements-filterBtn ${timeFilter === 'all' ? 'StudentAnnouncements-active' : ''}`}
            onClick={() => {
              setTimeFilter('all');
              setCurrentPage(1);
            }}
          >
            All
          </button>
        </div>

        <div className="StudentAnnouncements-grid">
          {currentAnnouncements.map((announcement) => (
            <div key={announcement.id} className="StudentAnnouncements-card">
              <div className={`StudentAnnouncements-importanceIndicator StudentAnnouncements-${announcement.importance}`}></div>
              <h3>{announcement.title}</h3>
              <p className="StudentAnnouncements-date">{announcement.date}</p>
              <button 
                className="StudentAnnouncements-detailBtn"
                onClick={() => setSelectedAnnouncement(announcement)}
              >
                Detail
              </button>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="StudentAnnouncements-pagination">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`StudentAnnouncements-pageBtn ${currentPage === index + 1 ? 'StudentAnnouncements-active' : ''}`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}

        {selectedAnnouncement && (
          <div className="StudentAnnouncements-modalOverlay">
            <div className="StudentAnnouncements-modal">
              <button 
                className="StudentAnnouncements-closeBtn"
                onClick={() => setSelectedAnnouncement(null)}
              >
                <X size={24} />
              </button>
              <h2>{selectedAnnouncement.title}</h2>
              <p>{selectedAnnouncement.details}</p>
              <p className="StudentAnnouncements-date">Posted on: {selectedAnnouncement.date}</p>
              <button 
                className="StudentAnnouncements-backBtn"
                onClick={() => setSelectedAnnouncement(null)}
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentAnnouncements;