
// import React, { useState, useEffect } from "react";
// import AdminNavBar from "../../../components/AdminNavBar";
// import AdminSidebar from "../../../components/AdminSidebar";
// import "./AdminAnnouncements.css";

// const AdminAnnouncements = () => {
//   const [announcements, setAnnouncements] = useState([]);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showDetailModal, setShowDetailModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [currentAnnouncement, setCurrentAnnouncement] = useState(null);
//   const [newAnnouncement, setNewAnnouncement] = useState({
//     title: "",
//     description: "",
//     publishedBy: "School Authority", // Default value
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const announcementsPerPage = 10;

//   // Current admin authority level - in a real app, this would come from auth context
//   const currentAdminAuthority = "School Authority";

//   useEffect(() => {
//     // Mock data - in a real app, you would fetch this from an API
//     const mockAnnouncements = [
//       {
//         id: 1,
//         title: "Quiz on Chapter 2 & 3 !",
//         description: "All students must complete the online quiz on chapters 2 and 3 of 'Library Management Systems' by the end of this week. The quiz is worth 15% of your final grade.",
//         date: "November 29, 2024",
//         time: "10:13 AM",
//         publishedBy: "School Authority"
//       },
//       {
//         id: 2,
//         title: "New Book Collection Available",
//         description: "We're excited to announce that our new collection of computer science books has arrived. The collection includes latest publications on AI, machine learning, and data science.",
//         date: "November 25, 2024",
//         time: "09:30 AM",
//         publishedBy: "District Authority"
//       },
//       {
//         id: 3,
//         title: "Extended Library Hours During Finals",
//         description: "The library will be open for extended hours (7 AM - 12 AM) during finals week (Dec 5-12). Additional study rooms will be available for reservation through our online system.",
//         date: "November 22, 2024",
//         time: "02:45 PM",
//         publishedBy: "School Authority"
//       },
//       {
//         id: 4,
//         title: "System Maintenance Notice",
//         description: "The library management system will be unavailable on Saturday, December 2nd from 2 AM to 5 AM due to scheduled maintenance. We apologize for any inconvenience.",
//         date: "November 18, 2024",
//         time: "11:20 AM",
//         publishedBy: "State Authority"
//       },
//       {
//         id: 5,
//         title: "Workshop: Effective Research Techniques",
//         description: "Join us for a workshop on effective research techniques and utilizing our library resources. The workshop will be held in Room 302 on December 3rd at 3 PM.",
//         date: "November 15, 2024",
//         time: "10:00 AM",
//         publishedBy: "Block Authority"
//       },
//       // Additional announcements (14 more)
//       {
//         id: 6,
//         title: "Library Staff Training Day",
//         description: "The library will be closing early at 3 PM on Friday, December 8th for annual staff training. Online resources will remain accessible during this time.",
//         date: "November 14, 2024",
//         time: "01:15 PM",
//         publishedBy: "School Authority"
//       },
//       {
//         id: 7,
//         title: "New Digital Resources Available",
//         description: "We've added 500+ new e-books to our digital collection. Topics include programming languages, web development, cybersecurity, and artificial intelligence.",
//         date: "November 12, 2024",
//         time: "11:30 AM",
//         publishedBy: "District Authority"
//       },
//       {
//         id: 8,
//         title: "Citation Management Workshop",
//         description: "Learn how to use Zotero, Mendeley, and EndNote for managing your research citations. Workshop will be held virtually on December 5th at 2 PM.",
//         date: "November 10, 2024",
//         time: "04:45 PM",
//         publishedBy: "Block Authority"
//       },
//       {
//         id: 9,
//         title: "Holiday Hours Announcement",
//         description: "The library will operate on reduced hours during the winter break (Dec 15-Jan 5). Please check the schedule on our website for specific daily hours.",
//         date: "November 8, 2024",
//         time: "09:20 AM",
//         publishedBy: "School Authority"
//       },
//       {
//         id: 10,
//         title: "Database Access Update",
//         description: "We've upgraded our academic journal database subscriptions. You now have access to 15 additional research databases including IEEE Xplore and ACM Digital Library.",
//         date: "November 5, 2024",
//         time: "03:10 PM",
//         publishedBy: "State Authority"
//       },
//       {
//         id: 11,
//         title: "Guest Lecture: Modern Library Technologies",
//         description: "Dr. Sarah Johnson from MIT will be giving a guest lecture on modern library technologies and digital transformation. Join us in the Main Auditorium on December 7th at 11 AM.",
//         date: "November 3, 2024",
//         time: "10:40 AM",
//         publishedBy: "School Authority"
//       },
//       {
//         id: 12,
//         title: "New Study Room Booking System",
//         description: "We're launching a new mobile-friendly study room booking system. Download our app to easily reserve study spaces up to two weeks in advance.",
//         date: "October 30, 2024",
//         time: "02:25 PM",
//         publishedBy: "District Authority"
//       },
//       {
//         id: 13,
//         title: "Call for Student Library Assistants",
//         description: "The library is hiring student assistants for the Spring 2025 semester. Flexible hours and valuable experience in information management. Apply online by December 10th.",
//         date: "October 28, 2024",
//         time: "11:50 AM",
//         publishedBy: "School Authority"
//       },
//       {
//         id: 14,
//         title: "New Library Mobile App Features",
//         description: "Our library mobile app has been updated with new features including barcode scanning, real-time availability updates, and push notifications for due dates.",
//         date: "October 25, 2024",
//         time: "09:15 AM",
//         publishedBy: "Block Authority"
//       },
//       {
//         id: 15,
//         title: "Research Paper Competition",
//         description: "Submit your best research paper for our annual competition. Winners receive cash prizes and publication in our academic journal. Deadline is January 15, 2025.",
//         date: "October 22, 2024",
//         time: "01:30 PM",
//         publishedBy: "State Authority"
//       },
//       {
//         id: 16,
//         title: "Book Donation Drive",
//         description: "The library is accepting book donations for our community outreach program. Drop off gently used books at the main desk through December 20th.",
//         date: "October 19, 2024",
//         time: "10:05 AM",
//         publishedBy: "School Authority"
//       },
//       {
//         id: 17,
//         title: "New Quiet Study Zone",
//         description: "We've redesigned the third floor as a dedicated quiet study zone with improved lighting, ergonomic furniture, and expanded electrical outlets.",
//         date: "October 16, 2024",
//         time: "03:45 PM",
//         publishedBy: "Block Authority"
//       },
//       {
//         id: 18,
//         title: "Academic Integrity Webinar",
//         description: "Join our librarians for a webinar on academic integrity, proper citation, and avoiding plagiarism. Virtual session on November 30th at 1 PM.",
//         date: "October 13, 2024",
//         time: "02:20 PM",
//         publishedBy: "School Authority"
//       },
//       {
//         id: 19,
//         title: "Library Survey - Win a Gift Card!",
//         description: "Help us improve our services by completing our annual library user survey. Five randomly selected participants will win $50 Amazon gift cards.",
//         date: "October 10, 2024",
//         time: "11:00 AM",
//         publishedBy: "District Authority"
//       }
//     ];
    
//     setAnnouncements(mockAnnouncements);
//   }, []);

//   const handleAddAnnouncement = () => {
//     // Validation
//     if (!newAnnouncement.title || !newAnnouncement.description) {
//       alert("Please fill in all fields");
//       return;
//     }

//     // Create new announcement with current date and time
//     const date = new Date();
//     const formattedDate = date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//     const formattedTime = date.toLocaleTimeString('en-US', {
//       hour: '2-digit',
//       minute: '2-digit'
//     });

//     const announcement = {
//       id: announcements.length + 1,
//       title: newAnnouncement.title,
//       description: newAnnouncement.description,
//       date: formattedDate,
//       time: formattedTime,
//       publishedBy: currentAdminAuthority // Use the current admin's authority level
//     };

//     // Add to announcements array
//     setAnnouncements([announcement, ...announcements]);
    
//     // Close modal
//     setShowAddModal(false);
    
//     // Reset form
//     setNewAnnouncement({ 
//       title: "", 
//       description: "", 
//       publishedBy: currentAdminAuthority 
//     });
    
//     // Show success message
//     setSuccessMessage("Announcement published successfully!");
//     setShowSuccessMessage(true);
    
//     // Hide success message after 3 seconds
//     setTimeout(() => {
//       setShowSuccessMessage(false);
//     }, 3000);
//   };

//   const handleEditAnnouncement = (e) => {
//     e.stopPropagation(); // Prevent opening detail modal
    
//     // Validation
//     if (!newAnnouncement.title || !newAnnouncement.description) {
//       alert("Please fill in all fields");
//       return;
//     }

//     // Update the announcement
//     const updatedAnnouncements = announcements.map(announcement => {
//       if (announcement.id === currentAnnouncement.id) {
//         return {
//           ...announcement,
//           title: newAnnouncement.title,
//           description: newAnnouncement.description
//         };
//       }
//       return announcement;
//     });

//     setAnnouncements(updatedAnnouncements);
    
//     // Close modal
//     setShowEditModal(false);
    
//     // Show success message
//     setSuccessMessage("Announcement updated successfully!");
//     setShowSuccessMessage(true);
    
//     // Hide success message after 3 seconds
//     setTimeout(() => {
//       setShowSuccessMessage(false);
//     }, 3000);
//   };

//   const handleDeleteAnnouncement = () => {
//     // Filter out the announcement to be deleted
//     const updatedAnnouncements = announcements.filter(
//       announcement => announcement.id !== currentAnnouncement.id
//     );
    
//     setAnnouncements(updatedAnnouncements);
    
//     // Close modals
//     setShowDeleteModal(false);
//     setShowDetailModal(false);
    
//     // Show success message
//     setSuccessMessage("Announcement deleted successfully!");
//     setShowSuccessMessage(true);
    
//     // Hide success message after 3 seconds
//     setTimeout(() => {
//       setShowSuccessMessage(false);
//     }, 3000);
//   };

//   const handleShowDetail = (announcement) => {
//     setCurrentAnnouncement(announcement);
//     setShowDetailModal(true);
//   };

//   const handleShowEdit = (e, announcement) => {
//     e.stopPropagation(); // Prevent opening detail modal
//     setCurrentAnnouncement(announcement);
//     setNewAnnouncement({
//       title: announcement.title,
//       description: announcement.description,
//       publishedBy: announcement.publishedBy
//     });
//     setShowEditModal(true);
//   };

//   const handleShowDelete = (e, announcement) => {
//     e.stopPropagation(); // Prevent opening detail modal
//     setCurrentAnnouncement(announcement);
//     setShowDeleteModal(true);
//   };

//   // Check if the announcement is from the current admin
//   const isOwnAnnouncement = (announcement) => {
//     return announcement.publishedBy === currentAdminAuthority;
//   };

//   // Pagination calculation
//   const indexOfLastAnnouncement = currentPage * announcementsPerPage;
//   const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
//   const currentAnnouncements = announcements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement);
//   const totalPages = Math.ceil(announcements.length / announcementsPerPage);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   const nextPage = () => setCurrentPage(prev => prev < totalPages ? prev + 1 : prev);
//   const prevPage = () => setCurrentPage(prev => prev > 1 ? prev - 1 : prev);

//   return (
//     <div className="admin-announcement-wrapper">
//       <AdminNavBar />
//       <AdminSidebar />
      
//       <div className="admin-announcement-content">
//         <div className="admin-announcement-header">
//           <h1>Announcement</h1>
//           <button className="admin-announcement-add-btn" onClick={() => setShowAddModal(true)}>
//             <span className="btn-icon">+</span> Add New Announcement
//           </button>
//         </div>
        
//         <div className="admin-announcement-table-container">
//           <table className="admin-announcement-table">
//             <thead>
//               <tr>
//                 <th className="date-column">Date</th>
//                 <th className="announcements-column">Announcements</th>
//                 <th className="actions-column"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentAnnouncements.map((announcement) => (
//                 <tr 
//                   key={announcement.id} 
//                   className="admin-announcement-row"
//                   onClick={() => handleShowDetail(announcement)}
//                 >
//                   <td className="admin-announcement-date-cell">
//                     <div className="admin-announcement-date-info">
//                       <div className="admin-announcement-date">{announcement.date}</div>
//                       <div className="admin-announcement-time">{announcement.time}</div>
//                     </div>
//                   </td>
//                   <td className="admin-announcement-cell">
//                     <div className="admin-announcement-info">
//                       <div className="admin-announcement-title">{announcement.title}</div>
//                       <div className="admin-announcement-authority">
//                         Published by: {announcement.publishedBy}
//                       </div>
//                     </div>
//                   </td>
//                   <td className="admin-announcement-actions-cell">
//                     {isOwnAnnouncement(announcement) && (
//                       <div className="admin-announcement-actions">
//                         <button 
//                           className="admin-announcement-edit-btn"
//                           onClick={(e) => handleShowEdit(e, announcement)}
//                         >
//                           <span className="edit-icon">✎</span>
//                         </button>
//                         <button 
//                           className="admin-announcement-delete-btn"
//                           onClick={(e) => handleShowDelete(e, announcement)}
//                         >
//                           <span className="delete-icon">🗑</span>
//                         </button>
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
          
//           {/* Pagination Controls */}
//           <div className="admin-announcement-pagination">
//             <button 
//               onClick={prevPage} 
//               disabled={currentPage === 1}
//               className="admin-announcement-pagination-btn"
//             >
//               &laquo;
//             </button>
            
//             <div className="admin-announcement-pagination-numbers">
//               {[...Array(totalPages)].map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => paginate(index + 1)}
//                   className={`admin-announcement-pagination-number ${
//                     currentPage === index + 1 ? 'active' : ''
//                   }`}
//                 >
//                   {index + 1}
//                 </button>
//               ))}
//             </div>
            
//             <button 
//               onClick={nextPage} 
//               disabled={currentPage === totalPages}
//               className="admin-announcement-pagination-btn"
//             >
//               &raquo;
//             </button>
//           </div>
          
//           <div className="admin-announcement-pagination-info">
//             Showing {indexOfFirstAnnouncement + 1} to {
//               indexOfLastAnnouncement > announcements.length 
//                 ? announcements.length 
//                 : indexOfLastAnnouncement
//             } of {announcements.length} announcements
//           </div>
//         </div>
//       </div>
      
//       {/* Add New Announcement Modal */}
//       {showAddModal && (
//         <div className="admin-announcement-modal-overlay">
//           <div className="admin-announcement-modal-container">
//             <div className="admin-announcement-modal-header">
//               <h2>Add New Announcement</h2>
//               <div className="admin-announcement-modal-close" onClick={() => setShowAddModal(false)}>×</div>
//             </div>
//             <div className="admin-announcement-modal-body">
//               <div className="admin-announcement-form-group">
//                 <label>Announcement Title</label>
//                 <input 
//                   type="text"
//                   value={newAnnouncement.title}
//                   onChange={(e) => setNewAnnouncement({...newAnnouncement, title: e.target.value})}
//                   placeholder="Enter announcement title"
//                   className="admin-announcement-input"
//                 />
//               </div>
//               <div className="admin-announcement-form-group">
//                 <label>Description</label>
//                 <textarea 
//                   value={newAnnouncement.description}
//                   onChange={(e) => setNewAnnouncement({...newAnnouncement, description: e.target.value})}
//                   placeholder="Enter announcement description"
//                   rows="4"
//                   className="admin-announcement-textarea"
//                 />
//               </div>
//               <div className="admin-announcement-form-group">
//                 <label>Published by</label>
//                 <div className="admin-announcement-authority-label">{currentAdminAuthority}</div>
//               </div>
//             </div>
//             <div className="admin-announcement-modal-footer">
//               <button className="admin-announcement-discard-btn" onClick={() => setShowAddModal(false)}>
//                 <span className="btn-text">Discard</span>
//               </button>
//               <button className="admin-announcement-confirm-btn" onClick={handleAddAnnouncement}>
//                 <span className="btn-text">Publish</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Edit Announcement Modal */}
//       {showEditModal && currentAnnouncement && (
//         <div className="admin-announcement-modal-overlay">
//           <div className="admin-announcement-modal-container">
//             <div className="admin-announcement-modal-header">
//               <h2>Edit Announcement</h2>
//               <div className="admin-announcement-modal-close" onClick={() => setShowEditModal(false)}>×</div>
//             </div>
//             <div className="admin-announcement-modal-body">
//               <div className="admin-announcement-form-group">
//                 <label>Announcement Title</label>
//                 <input 
//                   type="text"
//                   value={newAnnouncement.title}
//                   onChange={(e) => setNewAnnouncement({...newAnnouncement, title: e.target.value})}
//                   placeholder="Enter announcement title"
//                   className="admin-announcement-input"
//                 />
//               </div>
//               <div className="admin-announcement-form-group">
//                 <label>Description</label>
//                 <textarea 
//                   value={newAnnouncement.description}
//                   onChange={(e) => setNewAnnouncement({...newAnnouncement, description: e.target.value})}
//                   placeholder="Enter announcement description"
//                   rows="4"
//                   className="admin-announcement-textarea"
//                 />
//               </div>
//               <div className="admin-announcement-form-group">
//                 <label>Published by</label>
//                 <div className="admin-announcement-authority-label">{currentAnnouncement.publishedBy}</div>
//               </div>
//             </div>
//             <div className="admin-announcement-modal-footer">
//               <button className="admin-announcement-discard-btn" onClick={() => setShowEditModal(false)}>
//                 <span className="btn-text">Cancel</span>
//               </button>
//               <button className="admin-announcement-confirm-btn" onClick={handleEditAnnouncement}>
//                 <span className="btn-text">Update</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Detail Modal */}
//       {showDetailModal && currentAnnouncement && (
//         <div className="admin-announcement-modal-overlay">
//           <div className="admin-announcement-modal-container">
//             <div className="admin-announcement-modal-header">
//               <h2>Announcement Details</h2>
//               <div className="admin-announcement-modal-close" onClick={() => setShowDetailModal(false)}>×</div>
//             </div>
//             <div className="admin-announcement-modal-body">
//               <div className="admin-announcement-detail-item">
//                 <h3>Title</h3>
//                 <p>{currentAnnouncement.title}</p>
//               </div>
//               <div className="admin-announcement-detail-item">
//                 <h3>Description</h3>
//                 <p>{currentAnnouncement.description}</p>
//               </div>
//               <div className="admin-announcement-detail-item">
//                 <h3>Date & Time</h3>
//                 <p>{currentAnnouncement.date} at {currentAnnouncement.time}</p>
//               </div>
//               <div className="admin-announcement-detail-item">
//                 <h3>Published by</h3>
//                 <p>{currentAnnouncement.publishedBy}</p>
//               </div>
//             </div>
//             <div className="admin-announcement-modal-footer">
//               {isOwnAnnouncement(currentAnnouncement) && (
//                 <>
//                   <button 
//                     className="admin-announcement-edit-modal-btn" 
//                     onClick={(e) => {
//                       setShowDetailModal(false);
//                       handleShowEdit(e, currentAnnouncement);
//                     }}
//                   >
//                     <span className="btn-text">Edit</span>
//                   </button>
//                   <button 
//                     className="admin-announcement-delete-modal-btn" 
//                     onClick={(e) => {
//                       setShowDetailModal(false);
//                       handleShowDelete(e, currentAnnouncement);
//                     }}
//                   >
//                     <span className="btn-text">Delete</span>
//                   </button>
//                 </>
//               )}
//               <button className="admin-announcement-close-btn" onClick={() => setShowDetailModal(false)}>
//                 <span className="btn-text">Close</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Delete Confirmation Modal */}
//       {showDeleteModal && currentAnnouncement && (
//         <div className="admin-announcement-modal-overlay">
//           <div className="admin-announcement-modal-container delete-modal">
//             <div className="admin-announcement-modal-header">
//               <h2>Confirm Deletion</h2>
//               <div className="admin-announcement-modal-close" onClick={() => setShowDeleteModal(false)}>×</div>
//             </div>
//             <div className="admin-announcement-modal-body">
//               <div className="delete-warning">
//                 <div className="delete-warning-icon">⚠️</div>
//                 <div className="delete-warning-text">
//                   Are you sure you want to delete this announcement?
//                 </div>
//               </div>
//               <div className="delete-announcement-summary">
//                 <div className="delete-title">"{currentAnnouncement.title}"</div> 
//                 <div className="delete-date">Published on {currentAnnouncement.date}</div>
//               </div>
//               <div className="delete-warning-message">
//                 This action cannot be undone.
//               </div>
//             </div>
//             <div className="admin-announcement-modal-footer">
//               <button className="admin-announcement-cancel-btn" onClick={() => setShowDeleteModal(false)}>
//                 <span className="btn-text">Cancel</span>
//               </button>
//               <button className="admin-announcement-delete-confirm-btn" onClick={handleDeleteAnnouncement}>
//                 <span className="btn-text">Delete</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Success Message */}
//       {showSuccessMessage && (
//         <div className="admin-announcement-success-message">
//           <div className="success-icon">✓</div>
//           <div className="success-text">{successMessage}</div>
//         </div>
//       )}
      
//     </div>
//   );
// };

// export default AdminAnnouncements;




import React, { useState, useEffect } from "react";
import AdminNavBar from "../../../components/AdminNavBar";
import AdminSidebar from "../../../components/AdminSidebar";
import "./AdminAnnouncements.css";

const AdminAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [currentAnnouncement, setCurrentAnnouncement] = useState(null);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    description: "",
    publishedBy: "School Authority", // Default value
  });
  const [currentPage, setCurrentPage] = useState(1);
  const announcementsPerPage = 10;

  // Current admin authority level - in a real app, this would come from auth context
  const currentAdminAuthority = "School Authority";

  useEffect(() => {
    // Mock data - in a real app, you would fetch this from an API
    const mockAnnouncements = [
      {
        id: 1,
        title: "Quiz on Chapter 2 & 3 !",
        description: "All students must complete the online quiz on chapters 2 and 3 of 'Library Management Systems' by the end of this week. The quiz is worth 15% of your final grade.",
        date: "November 29, 2024",
        time: "10:13 AM",
        publishedBy: "School Authority"
      },
      {
        id: 2,
        title: "New Book Collection Available",
        description: "We're excited to announce that our new collection of computer science books has arrived. The collection includes latest publications on AI, machine learning, and data science.",
        date: "November 25, 2024",
        time: "09:30 AM",
        publishedBy: "District Authority"
      },
      {
        id: 3,
        title: "Extended Library Hours During Finals",
        description: "The library will be open for extended hours (7 AM - 12 AM) during finals week (Dec 5-12). Additional study rooms will be available for reservation through our online system.",
        date: "November 22, 2024",
        time: "02:45 PM",
        publishedBy: "School Authority"
      },
      {
        id: 4,
        title: "System Maintenance Notice",
        description: "The library management system will be unavailable on Saturday, December 2nd from 2 AM to 5 AM due to scheduled maintenance. We apologize for any inconvenience.",
        date: "November 18, 2024",
        time: "11:20 AM",
        publishedBy: "State Authority"
      },
      {
        id: 5,
        title: "Workshop: Effective Research Techniques",
        description: "Join us for a workshop on effective research techniques and utilizing our library resources. The workshop will be held in Room 302 on December 3rd at 3 PM.",
        date: "November 15, 2024",
        time: "10:00 AM",
        publishedBy: "Block Authority"
      },
      // Additional announcements (14 more)
      {
        id: 6,
        title: "Library Staff Training Day",
        description: "The library will be closing early at 3 PM on Friday, December 8th for annual staff training. Online resources will remain accessible during this time.",
        date: "November 14, 2024",
        time: "01:15 PM",
        publishedBy: "School Authority"
      },
      {
        id: 7,
        title: "New Digital Resources Available",
        description: "We've added 500+ new e-books to our digital collection. Topics include programming languages, web development, cybersecurity, and artificial intelligence.",
        date: "November 12, 2024",
        time: "11:30 AM",
        publishedBy: "District Authority"
      },
      {
        id: 8,
        title: "Citation Management Workshop",
        description: "Learn how to use Zotero, Mendeley, and EndNote for managing your research citations. Workshop will be held virtually on December 5th at 2 PM.",
        date: "November 10, 2024",
        time: "04:45 PM",
        publishedBy: "Block Authority"
      },
      {
        id: 9,
        title: "Holiday Hours Announcement",
        description: "The library will operate on reduced hours during the winter break (Dec 15-Jan 5). Please check the schedule on our website for specific daily hours.",
        date: "November 8, 2024",
        time: "09:20 AM",
        publishedBy: "School Authority"
      },
      {
        id: 10,
        title: "Database Access Update",
        description: "We've upgraded our academic journal database subscriptions. You now have access to 15 additional research databases including IEEE Xplore and ACM Digital Library.",
        date: "November 5, 2024",
        time: "03:10 PM",
        publishedBy: "State Authority"
      },
      {
        id: 11,
        title: "Guest Lecture: Modern Library Technologies",
        description: "Dr. Sarah Johnson from MIT will be giving a guest lecture on modern library technologies and digital transformation. Join us in the Main Auditorium on December 7th at 11 AM.",
        date: "November 3, 2024",
        time: "10:40 AM",
        publishedBy: "School Authority"
      },
      {
        id: 12,
        title: "New Study Room Booking System",
        description: "We're launching a new mobile-friendly study room booking system. Download our app to easily reserve study spaces up to two weeks in advance.",
        date: "October 30, 2024",
        time: "02:25 PM",
        publishedBy: "District Authority"
      },
      {
        id: 13,
        title: "Call for Student Library Assistants",
        description: "The library is hiring student assistants for the Spring 2025 semester. Flexible hours and valuable experience in information management. Apply online by December 10th.",
        date: "October 28, 2024",
        time: "11:50 AM",
        publishedBy: "School Authority"
      },
      {
        id: 14,
        title: "New Library Mobile App Features",
        description: "Our library mobile app has been updated with new features including barcode scanning, real-time availability updates, and push notifications for due dates.",
        date: "October 25, 2024",
        time: "09:15 AM",
        publishedBy: "Block Authority"
      },
      {
        id: 15,
        title: "Research Paper Competition",
        description: "Submit your best research paper for our annual competition. Winners receive cash prizes and publication in our academic journal. Deadline is January 15, 2025.",
        date: "October 22, 2024",
        time: "01:30 PM",
        publishedBy: "State Authority"
      },
      {
        id: 16,
        title: "Book Donation Drive",
        description: "The library is accepting book donations for our community outreach program. Drop off gently used books at the main desk through December 20th.",
        date: "October 19, 2024",
        time: "10:05 AM",
        publishedBy: "School Authority"
      },
      {
        id: 17,
        title: "New Quiet Study Zone",
        description: "We've redesigned the third floor as a dedicated quiet study zone with improved lighting, ergonomic furniture, and expanded electrical outlets.",
        date: "October 16, 2024",
        time: "03:45 PM",
        publishedBy: "Block Authority"
      },
      {
        id: 18,
        title: "Academic Integrity Webinar",
        description: "Join our librarians for a webinar on academic integrity, proper citation, and avoiding plagiarism. Virtual session on November 30th at 1 PM.",
        date: "October 13, 2024",
        time: "02:20 PM",
        publishedBy: "School Authority"
      },
      {
        id: 19,
        title: "Library Survey - Win a Gift Card!",
        description: "Help us improve our services by completing our annual library user survey. Five randomly selected participants will win $50 Amazon gift cards.",
        date: "October 10, 2024",
        time: "11:00 AM",
        publishedBy: "District Authority"
      }
    ];
    
    setAnnouncements(mockAnnouncements);
  }, []);

  const handleAddAnnouncement = () => {
    // Validation
    if (!newAnnouncement.title || !newAnnouncement.description) {
      alert("Please fill in all fields");
      return;
    }

    // Create new announcement with current date and time
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });

    const announcement = {
      id: announcements.length + 1,
      title: newAnnouncement.title,
      description: newAnnouncement.description,
      date: formattedDate,
      time: formattedTime,
      publishedBy: currentAdminAuthority // Use the current admin's authority level
    };

    // Add to announcements array
    setAnnouncements([announcement, ...announcements]);
    
    // Close modal
    setShowAddModal(false);
    
    // Reset form
    setNewAnnouncement({ 
      title: "", 
      description: "", 
      publishedBy: currentAdminAuthority 
    });
    
    // Show success message
    setSuccessMessage("Announcement published successfully!");
    setShowSuccessMessage(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const handleEditAnnouncement = (e) => {
    e.stopPropagation(); // Prevent opening detail modal
    
    // Validation
    if (!newAnnouncement.title || !newAnnouncement.description) {
      alert("Please fill in all fields");
      return;
    }

    // Update the announcement
    const updatedAnnouncements = announcements.map(announcement => {
      if (announcement.id === currentAnnouncement.id) {
        return {
          ...announcement,
          title: newAnnouncement.title,
          description: newAnnouncement.description
        };
      }
      return announcement;
    });

    setAnnouncements(updatedAnnouncements);
    
    // Close modal
    setShowEditModal(false);
    
    // Show success message
    setSuccessMessage("Announcement updated successfully!");
    setShowSuccessMessage(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const handleDeleteAnnouncement = () => {
    // Filter out the announcement to be deleted
    const updatedAnnouncements = announcements.filter(
      announcement => announcement.id !== currentAnnouncement.id
    );
    
    setAnnouncements(updatedAnnouncements);
    
    // Close modals
    setShowDeleteModal(false);
    setShowDetailModal(false);
    
    // Show success message
    setSuccessMessage("Announcement deleted successfully!");
    setShowSuccessMessage(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const handleShowDetail = (announcement) => {
    setCurrentAnnouncement(announcement);
    setShowDetailModal(true);
  };

  const handleShowEdit = (e, announcement) => {
    e.stopPropagation(); // Prevent opening detail modal
    setCurrentAnnouncement(announcement);
    setNewAnnouncement({
      title: announcement.title,
      description: announcement.description,
      publishedBy: announcement.publishedBy
    });
    setShowEditModal(true);
  };

  const handleShowDelete = (e, announcement) => {
    e.stopPropagation(); // Prevent opening detail modal
    setCurrentAnnouncement(announcement);
    setShowDeleteModal(true);
  };

  // Check if the announcement is from the current admin
  const isOwnAnnouncement = (announcement) => {
    return announcement.publishedBy === currentAdminAuthority;
  };

  // Pagination calculation
  const indexOfLastAnnouncement = currentPage * announcementsPerPage;
  const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
  const currentAnnouncements = announcements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement);
  const totalPages = Math.ceil(announcements.length / announcementsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => prev < totalPages ? prev + 1 : prev);
  const prevPage = () => setCurrentPage(prev => prev > 1 ? prev - 1 : prev);

  return (
    <div className="Admin-Announcements-wrapper">
      <AdminNavBar />
      <AdminSidebar />
      
      <div className="Admin-Announcements-content">
        <div className="Admin-Announcements-header">
          <h1>Announcement</h1>
          <button className="Admin-Announcements-add-btn" onClick={() => setShowAddModal(true)}>
            <span className="Admin-Announcements-btn-icon">+</span> Add New Announcement
          </button>
        </div>
        
        <div className="Admin-Announcements-table-container">
          <table className="Admin-Announcements-table">
            <thead>
              <tr>
                <th className="Admin-Announcements-date-column">Date</th>
                <th className="Admin-Announcements-announcements-column">Announcements</th>
                <th className="Admin-Announcements-actions-column"></th>
              </tr>
            </thead>
            <tbody>
              {currentAnnouncements.map((announcement) => (
                <tr 
                  key={announcement.id} 
                  className="Admin-Announcements-row"
                  onClick={() => handleShowDetail(announcement)}
                >
                  <td className="Admin-Announcements-date-cell">
                    <div className="Admin-Announcements-date-info">
                      <div className="Admin-Announcements-date">{announcement.date}</div>
                      <div className="Admin-Announcements-time">{announcement.time}</div>
                    </div>
                  </td>
                  <td className="Admin-Announcements-cell">
                    <div className="Admin-Announcements-info">
                      <div className="Admin-Announcements-title">{announcement.title}</div>
                      <div className="Admin-Announcements-authority">
                        Published by: {announcement.publishedBy}
                      </div>
                    </div>
                  </td>
                  <td className="Admin-Announcements-actions-cell">
                    {isOwnAnnouncement(announcement) && (
                      <div className="Admin-Announcements-actions">
                        <button 
                          className="Admin-Announcements-edit-btn"
                          onClick={(e) => handleShowEdit(e, announcement)}
                        >
                          <span className="Admin-Announcements-edit-icon">✎</span>
                        </button>
                        <button 
                          className="Admin-Announcements-delete-btn"
                          onClick={(e) => handleShowDelete(e, announcement)}
                        >
                          <span className="Admin-Announcements-delete-icon">🗑</span>
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Pagination Controls */}
          <div className="Admin-Announcements-pagination">
            <button 
              onClick={prevPage} 
              disabled={currentPage === 1}
              className="Admin-Announcements-pagination-btn"
            >
              &laquo;
            </button>
            
            <div className="Admin-Announcements-pagination-numbers">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`Admin-Announcements-pagination-number ${
                    currentPage === index + 1 ? 'active' : ''
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            <button 
              onClick={nextPage} 
              disabled={currentPage === totalPages}
              className="Admin-Announcements-pagination-btn"
            >
              &raquo;
            </button>
          </div>
          
          <div className="Admin-Announcements-pagination-info">
            Showing {indexOfFirstAnnouncement + 1} to {
              indexOfLastAnnouncement > announcements.length 
                ? announcements.length 
                : indexOfLastAnnouncement
            } of {announcements.length} announcements
          </div>
        </div>
      </div>
      
      {/* Add New Announcement Modal */}
      {showAddModal && (
        <div className="Admin-Announcements-modal-overlay">
          <div className="Admin-Announcements-modal-container">
            <div className="Admin-Announcements-modal-header">
              <h2>Add New Announcement</h2>
              <div className="Admin-Announcements-modal-close" onClick={() => setShowAddModal(false)}>×</div>
            </div>
            <div className="Admin-Announcements-modal-body">
              <div className="Admin-Announcements-form-group">
                <label>Announcement Title</label>
                <input 
                  type="text"
                  value={newAnnouncement.title}
                  onChange={(e) => setNewAnnouncement({...newAnnouncement, title: e.target.value})}
                  placeholder="Enter announcement title"
                  className="Admin-Announcements-input"
                />
              </div>
              <div className="Admin-Announcements-form-group">
                <label>Description</label>
                <textarea 
                  value={newAnnouncement.description}
                  onChange={(e) => setNewAnnouncement({...newAnnouncement, description: e.target.value})}
                  placeholder="Enter announcement description"
                  rows="4"
                  className="Admin-Announcements-textarea"
                />
              </div>
              <div className="Admin-Announcements-form-group">
                <label>Published by</label>
                <div className="Admin-Announcements-authority-label">{currentAdminAuthority}</div>
              </div>
            </div>
            <div className="Admin-Announcements-modal-footer">
              <button className="Admin-Announcements-discard-btn" onClick={() => setShowAddModal(false)}>
                <span className="Admin-Announcements-btn-text">Discard</span>
              </button>
              <button className="Admin-Announcements-confirm-btn" onClick={handleAddAnnouncement}>
                <span className="Admin-Announcements-btn-text">Publish</span>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Edit Announcement Modal */}
      {showEditModal && currentAnnouncement && (
        <div className="Admin-Announcements-modal-overlay">
          <div className="Admin-Announcements-modal-container">
            <div className="Admin-Announcements-modal-header">
              <h2>Edit Announcement</h2>
              <div className="Admin-Announcements-modal-close" onClick={() => setShowEditModal(false)}>×</div>
            </div>
            <div className="Admin-Announcements-modal-body">
              <div className="Admin-Announcements-form-group">
                <label>Announcement Title</label>
                <input 
                  type="text"
                  value={newAnnouncement.title}
                  onChange={(e) => setNewAnnouncement({...newAnnouncement, title: e.target.value})}
                  placeholder="Enter announcement title"
                  className="Admin-Announcements-input"
                />
              </div>
              <div className="Admin-Announcements-form-group">
                <label>Description</label>
                <textarea 
                  value={newAnnouncement.description}
                  onChange={(e) => setNewAnnouncement({...newAnnouncement, description: e.target.value})}
                  placeholder="Enter announcement description"
                  rows="4"
                  className="Admin-Announcements-textarea"
                />
              </div>
              <div className="Admin-Announcements-form-group">
                <label>Published by</label>
                <div className="Admin-Announcements-authority-label">{currentAnnouncement.publishedBy}</div>
              </div>
            </div>
            <div className="Admin-Announcements-modal-footer">
              <button className="Admin-Announcements-discard-btn" onClick={() => setShowEditModal(false)}>
                <span className="Admin-Announcements-btn-text">Cancel</span>
              </button>
              <button className="Admin-Announcements-confirm-btn" onClick={handleEditAnnouncement}>
                <span className="Admin-Announcements-btn-text">Update</span>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Detail Modal */}
      {showDetailModal && currentAnnouncement && (
        <div className="Admin-Announcements-modal-overlay">
          <div className="Admin-Announcements-modal-container">
            <div className="Admin-Announcements-modal-header">
              <h2>Announcement Details</h2>
              <div className="Admin-Announcements-modal-close" onClick={() => setShowDetailModal(false)}>×</div>
            </div>
            <div className="Admin-Announcements-modal-body">
              <div className="Admin-Announcements-detail-item">
                <h3>Title</h3>
                <p>{currentAnnouncement.title}</p>
              </div>
              <div className="Admin-Announcements-detail-item">
                <h3>Description</h3>
                <p>{currentAnnouncement.description}</p>
              </div>
              <div className="Admin-Announcements-detail-item">
                <h3>Date & Time</h3>
                <p>{currentAnnouncement.date} at {currentAnnouncement.time}</p>
              </div>
              <div className="Admin-Announcements-detail-item">
                <h3>Published by</h3>
                <p>{currentAnnouncement.publishedBy}</p>
              </div>
            </div>
            <div className="Admin-Announcements-modal-footer">
              {isOwnAnnouncement(currentAnnouncement) && (
                <>
                  <button 
                    className="Admin-Announcements-edit-modal-btn" 
                    onClick={(e) => {
                      setShowDetailModal(false);
                      handleShowEdit(e, currentAnnouncement);
                    }}
                  >
                    <span className="Admin-Announcements-btn-text">Edit</span>
                  </button>
                  <button 
                    className="Admin-Announcements-delete-modal-btn" 
                    onClick={(e) => {
                      setShowDetailModal(false);
                      handleShowDelete(e, currentAnnouncement);
                    }}
                  >
                    <span className="Admin-Announcements-btn-text">Delete</span>
                  </button>
                </>
              )}
              <button className="Admin-Announcements-close-btn" onClick={() => setShowDetailModal(false)}>
                <span className="Admin-Announcements-btn-text">Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Delete Confirmation Modal */}
      {showDeleteModal && currentAnnouncement && (
        <div className="Admin-Announcements-modal-overlay">
          <div className="Admin-Announcements-modal-container Admin-Announcements-delete-modal">
            <div className="Admin-Announcements-modal-header">
              <h2>Confirm Deletion</h2>
              <div className="Admin-Announcements-modal-close" onClick={() => setShowDeleteModal(false)}>×</div>
            </div>
            <div className="Admin-Announcements-modal-body">
              <div className="Admin-Announcements-delete-warning">
                <div className="Admin-Announcements-delete-warning-icon">⚠️</div>
                <div className="Admin-Announcements-delete-warning-text">
                  Are you sure you want to delete this announcement?
                </div>
              </div>
              <div className="Admin-Announcements-delete-announcement-summary">
                <div className="Admin-Announcements-delete-title">"{currentAnnouncement.title}"</div> 
                <div className="Admin-Announcements-delete-date">Published on {currentAnnouncement.date}</div>
              </div>
              <div className="Admin-Announcements-delete-warning-message">
                This action cannot be undone.
              </div>
            </div>
            <div className="Admin-Announcements-modal-footer">
              <button className="Admin-Announcements-cancel-btn" onClick={() => setShowDeleteModal(false)}>
                <span className="Admin-Announcements-btn-text">Cancel</span>
              </button>
              <button className="Admin-Announcements-delete-confirm-btn" onClick={handleDeleteAnnouncement}>
                <span className="Admin-Announcements-btn-text">Delete</span>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="Admin-Announcements-success-message">
          <div className="Admin-Announcements-success-icon">✓</div>
          <div className="Admin-Announcements-success-text">{successMessage}</div>
        </div>
      )}
      
    </div>
  );
};

export default AdminAnnouncements;