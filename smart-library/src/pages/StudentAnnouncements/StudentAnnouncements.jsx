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

// import React, { useState } from 'react';
// import { X } from 'lucide-react';
// import StudentNavBar from '../../components/StudentNavBar';
// import StudentSidebar from '../../components/StudentSideBar';
// import './StudentAnnouncements.css';

// const announcements = [
//   {
//     id: 1,
//     title: "Library System Maintenance",
//     details: "The library management system will undergo scheduled maintenance this weekend. Please complete any pending book returns or renewals before Saturday 8 PM.",
//     date: "2025-02-08",
//     importance: "high"
//   },
//   {
//     id: 2,
//     title: "New Digital Resources Available",
//     details: "We've added 500+ new e-books to our digital collection, focusing on Computer Science, Engineering, and Medical Sciences. Access them through your student portal.",
//     date: "2025-02-07",
//     importance: "medium"
//   },
//   {
//     id: 3,
//     title: "Extended Library Hours During Finals",
//     details: "The library will remain open until midnight from February 15th to March 1st to support students during final examinations.",
//     date: "2025-02-06",
//     importance: "high"
//   },
//   {
//     id: 4,
//     title: "Guest Speaker Series",
//     details: "Distinguished author Dr. Sarah Johnson will be giving a talk on 'The Future of Digital Libraries' on February 20th at 3 PM in the Main Auditorium.",
//     date: "2025-02-05",
//     importance: "medium"
//   },
//   {
//     id: 5,
//     title: "New Study Room Booking System",
//     details: "We've launched a new online booking system for study rooms. Book your space up to 2 weeks in advance through the student portal.",
//     date: "2025-02-04",
//     importance: "high"
//   },
//   {
//     id: 6,
//     title: "Library App Update",
//     details: "Please update your library mobile app to the latest version to access new features including quick book renewal and digital ID cards.",
//     date: "2025-02-03",
//     importance: "medium"
//   },
//   {
//     id: 7,
//     title: "Research Database Workshop",
//     details: "Learn how to effectively use our research databases. Workshop scheduled for February 25th at 1 PM in the Computer Lab.",
//     date: "2025-02-02",
//     importance: "medium"
//   },
//   {
//     id: 8,
//     title: "New Journal Subscriptions",
//     details: "The library has subscribed to 5 new academic journals in the field of Biotechnology and Environmental Science.",
//     date: "2025-02-01",
//     importance: "low"
//   },
//   {
//     id: 9,
//     title: "Library Survey",
//     details: "Help us improve our services by participating in our annual library satisfaction survey. Complete it by February 28th to enter a prize draw.",
//     date: "2025-01-31",
//     importance: "medium"
//   },
//   {
//     id: 10,
//     title: "New Print Credit System",
//     details: "Starting March 1st, we're implementing a new print credit system. Each student will receive 500 free pages per semester.",
//     date: "2025-01-30",
//     importance: "high"
//   }
// ];

// const StudentAnnouncements = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [timeFilter, setTimeFilter] = useState('all');
//   const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
//   const announcementsPerPage = 6;

//   const getFilteredAnnouncements = () => {
//     const currentDate = new Date();
//     let filteredData = [...announcements];

//     if (timeFilter === 'week') {
//       const oneWeekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
//       filteredData = announcements.filter(ann => new Date(ann.date) >= oneWeekAgo);
//     } else if (timeFilter === 'month') {
//       const oneMonthAgo = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);
//       filteredData = announcements.filter(ann => new Date(ann.date) >= oneMonthAgo);
//     }

//     return filteredData;
//   };

//   const filteredAnnouncements = getFilteredAnnouncements();
//   const totalPages = Math.ceil(filteredAnnouncements.length / announcementsPerPage);

//   // Get current announcements
//   const indexOfLastAnnouncement = currentPage * announcementsPerPage;
//   const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
//   const currentAnnouncements = filteredAnnouncements.slice(
//     indexOfFirstAnnouncement,
//     indexOfLastAnnouncement
//   );

//   return (
//     <div className="StudentAnnouncements">
//       <StudentSidebar />
//       <StudentNavBar />
//       <div className="StudentAnnouncements-container">
//         <div className="StudentAnnouncements-filterButtons">
//           <button 
//             className={`StudentAnnouncements-filterBtn ${timeFilter === 'week' ? 'StudentAnnouncements-active' : ''}`}
//             onClick={() => {
//               setTimeFilter('week');
//               setCurrentPage(1);
//             }}
//           >
//             1 Week
//           </button>
//           <button 
//             className={`StudentAnnouncements-filterBtn ${timeFilter === 'month' ? 'StudentAnnouncements-active' : ''}`}
//             onClick={() => {
//               setTimeFilter('month');
//               setCurrentPage(1);
//             }}
//           >
//             1 Month
//           </button>
//           <button 
//             className={`StudentAnnouncements-filterBtn ${timeFilter === 'all' ? 'StudentAnnouncements-active' : ''}`}
//             onClick={() => {
//               setTimeFilter('all');
//               setCurrentPage(1);
//             }}
//           >
//             All
//           </button>
//         </div>

//         <div className="StudentAnnouncements-grid">
//           {currentAnnouncements.map((announcement) => (
//             <div key={announcement.id} className="StudentAnnouncements-card">
//               <div className={`StudentAnnouncements-importanceIndicator StudentAnnouncements-${announcement.importance}`}></div>
//               <h3>{announcement.title}</h3>
//               <p className="StudentAnnouncements-date">{announcement.date}</p>
//               <button 
//                 className="StudentAnnouncements-detailBtn"
//                 onClick={() => setSelectedAnnouncement(announcement)}
//               >
//                 Detail
//               </button>
//             </div>
//           ))}
//         </div>

//         {totalPages > 1 && (
//           <div className="StudentAnnouncements-pagination">
//             {[...Array(totalPages)].map((_, index) => (
//               <button
//                 key={index + 1}
//                 className={`StudentAnnouncements-pageBtn ${currentPage === index + 1 ? 'StudentAnnouncements-active' : ''}`}
//                 onClick={() => setCurrentPage(index + 1)}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         )}

//         {selectedAnnouncement && (
//           <div className="StudentAnnouncements-modalOverlay">
//             <div className="StudentAnnouncements-modal">
//               <button 
//                 className="StudentAnnouncements-closeBtn"
//                 onClick={() => setSelectedAnnouncement(null)}
//               >
//                 <X size={24} />
//               </button>
//               <h2>{selectedAnnouncement.title}</h2>
//               <p>{selectedAnnouncement.details}</p>
//               <p className="StudentAnnouncements-date">Posted on: {selectedAnnouncement.date}</p>
//               <button 
//                 className="StudentAnnouncements-backBtn"
//                 onClick={() => setSelectedAnnouncement(null)}
//               >
//                 Back
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StudentAnnouncements;



// import React, { useState, useEffect } from 'react';
// import { X } from 'lucide-react';
// import StudentNavBar from '../../components/StudentNavBar';
// import StudentSidebar from '../../components/StudentSideBar';
// import './StudentAnnouncements.css';

// // Sample data - this would be replaced by API call in production
// const sampleAnnouncements = [
//   {
//     id: 1,
//     title: "Academic Calendar Changes",
//     details: "Due to recent campus renovations, the spring semester will be extended by one week. Final exams will now take place from May 10-17, 2025.",
//     date: "2025-03-15",
//     importance: "high",
//     publisher: "School Authority"
//   },
//   {
//     id: 2,
//     title: "New Online Learning Platform",
//     details: "Starting April 1st, we'll be transitioning to a new Learning Management System. Training sessions will be available throughout March.",
//     date: "2025-03-10",
//     importance: "high",
//     publisher: "District Authority"
//   },
//   {
//     id: 3,
//     title: "Scholarship Application Deadline",
//     details: "Applications for the 2025-2026 Merit Scholarship Program are due by March 31st. Visit the Financial Aid office for assistance.",
//     date: "2025-03-08",
//     importance: "medium",
//     publisher: "State Authority"
//   },
//   {
//     id: 4,
//     title: "Campus Career Fair",
//     details: "Over 50 companies will be attending our Spring Career Fair on April 5th. Prepare your resume and professional attire for networking opportunities.",
//     date: "2025-03-05",
//     importance: "medium",
//     publisher: "School Authority"
//   },
//   {
//     id: 5,
//     title: "Library Extended Hours",
//     details: "To support midterm preparation, the library will remain open until 2 AM from March 20-30.",
//     date: "2025-03-02",
//     importance: "medium",
//     publisher: "Librarian"
//   },
//   {
//     id: 6,
//     title: "Student Government Elections",
//     details: "Nominations for Student Government positions are now open. Submit your candidacy by March 25th to participate in the April elections.",
//     date: "2025-02-28",
//     importance: "low",
//     publisher: "School Authority"
//   },
//   {
//     id: 7,
//     title: "Campus Sustainability Initiative",
//     details: "Join our new campus-wide recycling program. Collection bins are now available in all buildings. Volunteer opportunities available.",
//     date: "2025-02-25",
//     importance: "low",
//     publisher: "Block Authority"
//   },
//   {
//     id: 8,
//     title: "Health Center Vaccination Drive",
//     details: "Free flu and COVID-19 booster shots available at the Health Center from March 15-20. Appointment required.",
//     date: "2025-02-20",
//     importance: "high",
//     publisher: "State Authority"
//   },
//   {
//     id: 9,
//     title: "Spring Arts Festival",
//     details: "The annual Spring Arts Festival will take place April 8-12. Submit your artwork, poetry, or performance proposal by March 15th.",
//     date: "2025-02-15",
//     importance: "medium",
//     publisher: "Teacher"
//   },
//   {
//     id: 10,
//     title: "New Dining Options on Campus",
//     details: "We're pleased to announce three new dining options opening in the Student Union next month: Urban Café, Fresh Bowl, and Slice Pizzeria.",
//     date: "2025-02-10",
//     importance: "low",
//     publisher: "School Authority"
//   },
//   {
//     id: 11,
//     title: "Mandatory Science Fair Participation",
//     details: "All science students must participate in the upcoming Science Fair on April 15th. Project proposals are due by March 25th.",
//     date: "2025-03-12",
//     importance: "high",
//     publisher: "Teacher"
//   },
//   {
//     id: 12,
//     title: "District-wide Technology Upgrade",
//     details: "All campus computer labs will be closed for upgrades from March 22-24. Plan your assignments accordingly.",
//     date: "2025-03-01",
//     importance: "medium",
//     publisher: "District Authority"
//   },
//   {
//     id: 13,
//     title: "New State Education Policy",
//     details: "The state has approved a new education policy that will affect curriculum starting next semester. Information sessions will be held throughout March.",
//     date: "2025-02-22",
//     importance: "high",
//     publisher: "State Authority"
//   },
//   {
//     id: 14,
//     title: "Residential Building Maintenance",
//     details: "Building C will undergo maintenance from March 15-20. Affected residents have been notified via email with temporary accommodation details.",
//     date: "2025-03-03",
//     importance: "medium",
//     publisher: "Block Authority"
//   },
//   {
//     id: 15,
//     title: "Required Reading List Updated",
//     details: "The required reading list for Literature classes has been updated. Visit the library to check out the new titles before March 31st.",
//     date: "2025-02-18",
//     importance: "medium",
//     publisher: "Librarian"
//   }
// ];

// // Shuffle function for the announcements
// const shuffleArray = (array) => {
//   let shuffled = [...array];
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//   }
//   return shuffled;
// };

// const StudentAnnouncements = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [timeFilter, setTimeFilter] = useState('all');
//   const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
//   const [announcements, setAnnouncements] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const announcementsPerPage = 6;

//   // Simulating API fetch - replace with actual API call
//   useEffect(() => {
//     const fetchAnnouncements = async () => {
//       try {
//         // In a real app, replace this with your API call:
//         // const response = await fetch('your-api-endpoint');
//         // const data = await response.json();
        
//         // Simulating API delay
//         await new Promise(resolve => setTimeout(resolve, 500));
        
//         // Shuffle the announcements
//         const shuffledAnnouncements = shuffleArray(sampleAnnouncements);
//         setAnnouncements(shuffledAnnouncements);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to load announcements. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchAnnouncements();
//   }, []);

//   const getFilteredAnnouncements = () => {
//     const currentDate = new Date();
//     let filteredData = [...announcements];

//     if (timeFilter === 'week') {
//       const oneWeekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
//       filteredData = announcements.filter(ann => new Date(ann.date) >= oneWeekAgo);
//     } else if (timeFilter === 'month') {
//       const oneMonthAgo = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);
//       filteredData = announcements.filter(ann => new Date(ann.date) >= oneMonthAgo);
//     }

//     return filteredData;
//   };

//   const filteredAnnouncements = getFilteredAnnouncements();
//   const totalPages = Math.ceil(filteredAnnouncements.length / announcementsPerPage);

//   // Get current announcements
//   const indexOfLastAnnouncement = currentPage * announcementsPerPage;
//   const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
//   const currentAnnouncements = filteredAnnouncements.slice(
//     indexOfFirstAnnouncement,
//     indexOfLastAnnouncement
//   );

//   // Format date to a more readable format
//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   if (loading) {
//     return (
//       <div className="StudentAnnouncements">
//         <StudentSidebar />
//         <StudentNavBar />
//         <div className="StudentAnnouncements-container">
//           <div className="StudentAnnouncements-loading">Loading announcements...</div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="StudentAnnouncements">
//         <StudentSidebar />
//         <StudentNavBar />
//         <div className="StudentAnnouncements-container">
//           <div className="StudentAnnouncements-error">{error}</div>
//           <button 
//             className="StudentAnnouncements-retryBtn"
//             onClick={() => window.location.reload()}
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="StudentAnnouncements">
//       <StudentSidebar />
//       <StudentNavBar />
//       <div className="StudentAnnouncements-container">
//         <h1 className="StudentAnnouncements-title">Announcements</h1>
//         <div className="StudentAnnouncements-filterButtons">
//           <button 
//             className={`StudentAnnouncements-filterBtn ${timeFilter === 'week' ? 'StudentAnnouncements-active' : ''}`}
//             onClick={() => {
//               setTimeFilter('week');
//               setCurrentPage(1);
//             }}
//           >
//             1 Week
//           </button>
//           <button 
//             className={`StudentAnnouncements-filterBtn ${timeFilter === 'month' ? 'StudentAnnouncements-active' : ''}`}
//             onClick={() => {
//               setTimeFilter('month');
//               setCurrentPage(1);
//             }}
//           >
//             1 Month
//           </button>
//           <button 
//             className={`StudentAnnouncements-filterBtn ${timeFilter === 'all' ? 'StudentAnnouncements-active' : ''}`}
//             onClick={() => {
//               setTimeFilter('all');
//               setCurrentPage(1);
//             }}
//           >
//             All
//           </button>
//         </div>

//         {currentAnnouncements.length === 0 ? (
//           <div className="StudentAnnouncements-noResults">
//             No announcements found for the selected time period.
//           </div>
//         ) : (
//           <div className="StudentAnnouncements-grid">
//             {currentAnnouncements.map((announcement) => (
//               <div 
//                 key={announcement.id} 
//                 className="StudentAnnouncements-card"
//                 onClick={() => setSelectedAnnouncement(announcement)}
//               >
//                 <div className={`StudentAnnouncements-importanceIndicator StudentAnnouncements-${announcement.importance}`}></div>
//                 <div className="StudentAnnouncements-cardContent">
//                   <h3>{announcement.title}</h3>
//                   <p className="StudentAnnouncements-date">{formatDate(announcement.date)}</p>
//                   <p className="StudentAnnouncements-publisher">Published by: {announcement.publisher}</p>
//                   <button 
//                     className="StudentAnnouncements-detailBtn"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setSelectedAnnouncement(announcement);
//                     }}
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {totalPages > 1 && (
//           <div className="StudentAnnouncements-pagination">
//             {[...Array(totalPages)].map((_, index) => (
//               <button
//                 key={index + 1}
//                 className={`StudentAnnouncements-pageBtn ${currentPage === index + 1 ? 'StudentAnnouncements-active' : ''}`}
//                 onClick={() => setCurrentPage(index + 1)}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         )}

//         {selectedAnnouncement && (
//           <div className="StudentAnnouncements-modalOverlay" onClick={() => setSelectedAnnouncement(null)}>
//             <div className="StudentAnnouncements-modal" onClick={(e) => e.stopPropagation()}>
//               <button 
//                 className="StudentAnnouncements-closeBtn"
//                 onClick={() => setSelectedAnnouncement(null)}
//               >
//                 <X size={24} />
//               </button>
//               <div className={`StudentAnnouncements-modalImportance StudentAnnouncements-${selectedAnnouncement.importance}`}></div>
//               <h2>{selectedAnnouncement.title}</h2>
//               <p>{selectedAnnouncement.details}</p>
//               <div className="StudentAnnouncements-modalFooter">
//                 <p className="StudentAnnouncements-date">Posted on: {formatDate(selectedAnnouncement.date)}</p>
//                 <p className="StudentAnnouncements-publisher">Published by: {selectedAnnouncement.publisher}</p>
//               </div>
//               <button 
//                 className="StudentAnnouncements-backBtn"
//                 onClick={() => setSelectedAnnouncement(null)}
//               >
//                 Back
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StudentAnnouncements;




import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import StudentNavBar from '../../components/StudentNavBar';
import StudentSidebar from '../../components/StudentSideBar';
import './StudentAnnouncements.css';

// Sample data - this would be replaced by API call in production
const sampleAnnouncements = [
  {
    id: 1,
    title: "Academic Calendar Changes",
    details: "Due to recent campus renovations, the spring semester will be extended by one week. Final exams will now take place from May 10-17, 2025.",
    date: "2025-03-15",
    importance: "high",
    publisher: "School Authority"
  },
  {
    id: 2,
    title: "New Online Learning Platform",
    details: "Starting April 1st, we'll be transitioning to a new Learning Management System. Training sessions will be available throughout March.",
    date: "2025-03-10",
    importance: "high",
    publisher: "District Authority"
  },
  {
    id: 3,
    title: "Scholarship Application Deadline",
    details: "Applications for the 2025-2026 Merit Scholarship Program are due by March 31st. Visit the Financial Aid office for assistance.",
    date: "2025-03-08",
    importance: "medium",
    publisher: "State Authority"
  },
  {
    id: 4,
    title: "Campus Career Fair",
    details: "Over 50 companies will be attending our Spring Career Fair on April 5th. Prepare your resume and professional attire for networking opportunities.",
    date: "2025-03-05",
    importance: "medium",
    publisher: "School Authority"
  },
  {
    id: 5,
    title: "Library Extended Hours",
    details: "To support midterm preparation, the library will remain open until 2 AM from March 20-30.",
    date: "2025-03-02",
    importance: "medium",
    publisher: "Librarian"
  },
  {
    id: 6,
    title: "Student Government Elections",
    details: "Nominations for Student Government positions are now open. Submit your candidacy by March 25th to participate in the April elections.",
    date: "2025-02-28",
    importance: "low",
    publisher: "School Authority"
  },
  {
    id: 7,
    title: "Campus Sustainability Initiative",
    details: "Join our new campus-wide recycling program. Collection bins are now available in all buildings. Volunteer opportunities available.",
    date: "2025-02-25",
    importance: "low",
    publisher: "Block Authority"
  },
  {
    id: 8,
    title: "Health Center Vaccination Drive",
    details: "Free flu and COVID-19 booster shots available at the Health Center from March 15-20. Appointment required.",
    date: "2025-02-20",
    importance: "high",
    publisher: "State Authority"
  },
  {
    id: 9,
    title: "Spring Arts Festival",
    details: "The annual Spring Arts Festival will take place April 8-12. Submit your artwork, poetry, or performance proposal by March 15th.",
    date: "2025-02-15",
    importance: "medium",
    publisher: "Teacher"
  },
  {
    id: 10,
    title: "New Dining Options on Campus",
    details: "We're pleased to announce three new dining options opening in the Student Union next month: Urban Café, Fresh Bowl, and Slice Pizzeria.",
    date: "2025-02-10",
    importance: "low",
    publisher: "School Authority"
  },
  {
    id: 11,
    title: "Mandatory Science Fair Participation",
    details: "All science students must participate in the upcoming Science Fair on April 15th. Project proposals are due by March 25th.",
    date: "2025-03-12",
    importance: "high",
    publisher: "Teacher"
  },
  {
    id: 12,
    title: "District-wide Technology Upgrade",
    details: "All campus computer labs will be closed for upgrades from March 22-24. Plan your assignments accordingly.",
    date: "2025-03-01",
    importance: "medium",
    publisher: "District Authority"
  },
  {
    id: 13,
    title: "New State Education Policy",
    details: "The state has approved a new education policy that will affect curriculum starting next semester. Information sessions will be held throughout March.",
    date: "2025-02-22",
    importance: "high",
    publisher: "State Authority"
  },
  {
    id: 14,
    title: "Residential Building Maintenance",
    details: "Building C will undergo maintenance from March 15-20. Affected residents have been notified via email with temporary accommodation details.",
    date: "2025-03-03",
    importance: "medium",
    publisher: "Block Authority"
  },
  {
    id: 15,
    title: "Required Reading List Updated",
    details: "The required reading list for Literature classes has been updated. Visit the library to check out the new titles before March 31st.",
    date: "2025-02-18",
    importance: "medium",
    publisher: "Librarian"
  }
];

// Shuffle function for the announcements
const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const StudentAnnouncements = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [timeFilter, setTimeFilter] = useState('all');
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const announcementsPerPage = 6;

  // Effect to handle body class when modal is open
  useEffect(() => {
    if (selectedAnnouncement) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    
    // Cleanup function
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedAnnouncement]);

  // Simulating API fetch - replace with actual API call
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        // In a real app, replace this with your API call:
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();
        
        // Simulating API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Shuffle the announcements
        const shuffledAnnouncements = shuffleArray(sampleAnnouncements);
        setAnnouncements(shuffledAnnouncements);
        setLoading(false);
      } catch (err) {
        setError('Failed to load announcements. Please try again later.');
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

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

  // Format date to a more readable format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="StudentAnnouncements">
        <StudentSidebar />
        <StudentNavBar />
        <div className="StudentAnnouncements-container">
          <div className="StudentAnnouncements-loading">Loading announcements...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="StudentAnnouncements">
        <StudentSidebar />
        <StudentNavBar />
        <div className="StudentAnnouncements-container">
          <div className="StudentAnnouncements-error">{error}</div>
          <button 
            className="StudentAnnouncements-retryBtn"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="StudentAnnouncements">
      <StudentSidebar />
      <StudentNavBar />
      <div className="StudentAnnouncements-container">
        <h1 className="StudentAnnouncements-title">Announcements</h1>
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

        {currentAnnouncements.length === 0 ? (
          <div className="StudentAnnouncements-noResults">
            No announcements found for the selected time period.
          </div>
        ) : (
          <div className="StudentAnnouncements-grid">
            {currentAnnouncements.map((announcement) => (
              <div 
                key={announcement.id} 
                className="StudentAnnouncements-card"
                onClick={() => setSelectedAnnouncement(announcement)}
              >
                <div className={`StudentAnnouncements-importanceIndicator StudentAnnouncements-${announcement.importance}`}></div>
                <div className="StudentAnnouncements-cardContent">
                  <h3>{announcement.title}</h3>
                  <p className="StudentAnnouncements-date">{formatDate(announcement.date)}</p>
                  <p className="StudentAnnouncements-publisher">Published by: {announcement.publisher}</p>
                  <button 
                    className="StudentAnnouncements-detailBtn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedAnnouncement(announcement);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

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
          <div className="StudentAnnouncements-modalOverlay" onClick={() => setSelectedAnnouncement(null)}>
            <div className="StudentAnnouncements-modal" onClick={(e) => e.stopPropagation()}>
              <button 
                className="StudentAnnouncements-closeBtn"
                onClick={() => setSelectedAnnouncement(null)}
              >
                <X size={24} />
              </button>
              <div className={`StudentAnnouncements-modalImportance StudentAnnouncements-${selectedAnnouncement.importance}`}></div>
              <h2>{selectedAnnouncement.title}</h2>
              <p>{selectedAnnouncement.details}</p>
              <div className="StudentAnnouncements-modalFooter">
                <p className="StudentAnnouncements-date">Posted on: {formatDate(selectedAnnouncement.date)}</p>
                <p className="StudentAnnouncements-publisher">Published by: {selectedAnnouncement.publisher}</p>
              </div>
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