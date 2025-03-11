

import React, { useState, useEffect } from "react";
import AdminNavBar from "../../../components/AdminNavBar";
import AdminSidebar from "../../../components/AdminSidebar";
import "./AdminAnnouncements.css";

const AdminAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState(null);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    description: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const announcementsPerPage = 10;

  useEffect(() => {
    // Mock data - in a real app, you would fetch this from an API
    const mockAnnouncements = [
      {
        id: 1,
        title: "Quiz on Chapter 2 & 3 !",
        description: "All students must complete the online quiz on chapters 2 and 3 of 'Library Management Systems' by the end of this week. The quiz is worth 15% of your final grade.",
        date: "November 29, 2024",
        time: "10:13 AM",
        course: "Ultimate Photoshop Training: From Beginner"
      },
      {
        id: 2,
        title: "New Book Collection Available",
        description: "We're excited to announce that our new collection of computer science books has arrived. The collection includes latest publications on AI, machine learning, and data science.",
        date: "November 25, 2024",
        time: "09:30 AM",
        course: "Library Resources Update"
      },
      {
        id: 3,
        title: "Extended Library Hours During Finals",
        description: "The library will be open for extended hours (7 AM - 12 AM) during finals week (Dec 5-12). Additional study rooms will be available for reservation through our online system.",
        date: "November 22, 2024",
        time: "02:45 PM",
        course: "Library Services"
      },
      {
        id: 4,
        title: "System Maintenance Notice",
        description: "The library management system will be unavailable on Saturday, December 2nd from 2 AM to 5 AM due to scheduled maintenance. We apologize for any inconvenience.",
        date: "November 18, 2024",
        time: "11:20 AM",
        course: "IT Services Announcement"
      },
      {
        id: 5,
        title: "Workshop: Effective Research Techniques",
        description: "Join us for a workshop on effective research techniques and utilizing our library resources. The workshop will be held in Room 302 on December 3rd at 3 PM.",
        date: "November 15, 2024",
        time: "10:00 AM",
        course: "Library Workshop Series"
      },
      // Additional announcements (14 more)
      {
        id: 6,
        title: "Library Staff Training Day",
        description: "The library will be closing early at 3 PM on Friday, December 8th for annual staff training. Online resources will remain accessible during this time.",
        date: "November 14, 2024",
        time: "01:15 PM",
        course: "Library Operations"
      },
      {
        id: 7,
        title: "New Digital Resources Available",
        description: "We've added 500+ new e-books to our digital collection. Topics include programming languages, web development, cybersecurity, and artificial intelligence.",
        date: "November 12, 2024",
        time: "11:30 AM",
        course: "Digital Library Resources"
      },
      {
        id: 8,
        title: "Citation Management Workshop",
        description: "Learn how to use Zotero, Mendeley, and EndNote for managing your research citations. Workshop will be held virtually on December 5th at 2 PM.",
        date: "November 10, 2024",
        time: "04:45 PM",
        course: "Research Skills Workshop"
      },
      {
        id: 9,
        title: "Holiday Hours Announcement",
        description: "The library will operate on reduced hours during the winter break (Dec 15-Jan 5). Please check the schedule on our website for specific daily hours.",
        date: "November 8, 2024",
        time: "09:20 AM",
        course: "Library Services"
      },
      {
        id: 10,
        title: "Database Access Update",
        description: "We've upgraded our academic journal database subscriptions. You now have access to 15 additional research databases including IEEE Xplore and ACM Digital Library.",
        date: "November 5, 2024",
        time: "03:10 PM",
        course: "Research Resources Update"
      },
      {
        id: 11,
        title: "Guest Lecture: Modern Library Technologies",
        description: "Dr. Sarah Johnson from MIT will be giving a guest lecture on modern library technologies and digital transformation. Join us in the Main Auditorium on December 7th at 11 AM.",
        date: "November 3, 2024",
        time: "10:40 AM",
        course: "Guest Lecture Series"
      },
      {
        id: 12,
        title: "New Study Room Booking System",
        description: "We're launching a new mobile-friendly study room booking system. Download our app to easily reserve study spaces up to two weeks in advance.",
        date: "October 30, 2024",
        time: "02:25 PM",
        course: "Library Technology Update"
      },
      {
        id: 13,
        title: "Call for Student Library Assistants",
        description: "The library is hiring student assistants for the Spring 2025 semester. Flexible hours and valuable experience in information management. Apply online by December 10th.",
        date: "October 28, 2024",
        time: "11:50 AM",
        course: "Employment Opportunity"
      },
      {
        id: 14,
        title: "New Library Mobile App Features",
        description: "Our library mobile app has been updated with new features including barcode scanning, real-time availability updates, and push notifications for due dates.",
        date: "October 25, 2024",
        time: "09:15 AM",
        course: "Digital Services Update"
      },
      {
        id: 15,
        title: "Research Paper Competition",
        description: "Submit your best research paper for our annual competition. Winners receive cash prizes and publication in our academic journal. Deadline is January 15, 2025.",
        date: "October 22, 2024",
        time: "01:30 PM",
        course: "Academic Competition"
      },
      {
        id: 16,
        title: "Book Donation Drive",
        description: "The library is accepting book donations for our community outreach program. Drop off gently used books at the main desk through December 20th.",
        date: "October 19, 2024",
        time: "10:05 AM",
        course: "Community Engagement"
      },
      {
        id: 17,
        title: "New Quiet Study Zone",
        description: "We've redesigned the third floor as a dedicated quiet study zone with improved lighting, ergonomic furniture, and expanded electrical outlets.",
        date: "October 16, 2024",
        time: "03:45 PM",
        course: "Library Facilities Update"
      },
      {
        id: 18,
        title: "Academic Integrity Webinar",
        description: "Join our librarians for a webinar on academic integrity, proper citation, and avoiding plagiarism. Virtual session on November 30th at 1 PM.",
        date: "October 13, 2024",
        time: "02:20 PM",
        course: "Academic Support"
      },
      {
        id: 19,
        title: "Library Survey - Win a Gift Card!",
        description: "Help us improve our services by completing our annual library user survey. Five randomly selected participants will win $50 Amazon gift cards.",
        date: "October 10, 2024",
        time: "11:00 AM",
        course: "Library Feedback Initiative"
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
      course: "Library Announcement"
    };

    // Add to announcements array
    setAnnouncements([announcement, ...announcements]);
    
    // Close modal
    setShowAddModal(false);
    
    // Reset form
    setNewAnnouncement({ title: "", description: "" });
    
    // Show success message
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
    <div className="admin-announcement-wrapper">
      <AdminNavBar />
      <AdminSidebar />
      
      <div className="admin-announcement-content">
        <div className="admin-announcement-header">
          <h1>Announcement</h1>
          <button className="admin-announcement-add-btn" onClick={() => setShowAddModal(true)}>
            <span className="btn-icon">+</span> Add New Announcement
          </button>
        </div>
        
        <div className="admin-announcement-table-container">
          <table className="admin-announcement-table">
            <thead>
              <tr>
                <th className="date-column">Date</th>
                <th className="announcements-column">Announcements</th>
                <th className="actions-column"></th>
              </tr>
            </thead>
            <tbody>
              {currentAnnouncements.map((announcement) => (
                <tr key={announcement.id} className="admin-announcement-row">
                  <td className="admin-announcement-date-cell">
                    <div className="admin-announcement-date-info">
                      <div className="admin-announcement-date">{announcement.date}</div>
                      <div className="admin-announcement-time">{announcement.time}</div>
                    </div>
                  </td>
                  <td className="admin-announcement-cell">
                    <div className="admin-announcement-info">
                      <div className="admin-announcement-title">{announcement.title}</div>
                      <div className="admin-announcement-course">Course: {announcement.course}</div>
                    </div>
                  </td>
                  <td className="admin-announcement-actions-cell">
                    <button 
                      className="admin-announcement-detail-btn"
                      onClick={() => handleShowDetail(announcement)}
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Pagination Controls */}
          <div className="admin-announcement-pagination">
            <button 
              onClick={prevPage} 
              disabled={currentPage === 1}
              className="admin-announcement-pagination-btn"
            >
              &laquo;
            </button>
            
            <div className="admin-announcement-pagination-numbers">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`admin-announcement-pagination-number ${
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
              className="admin-announcement-pagination-btn"
            >
              &raquo;
            </button>
          </div>
          
          <div className="admin-announcement-pagination-info">
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
        <div className="admin-announcement-modal-overlay">
          <div className="admin-announcement-modal-container">
            <div className="admin-announcement-modal-header">
              <h2>Announcements</h2>
              <div className="admin-announcement-modal-close" onClick={() => setShowAddModal(false)}>×</div>
            </div>
            <div className="admin-announcement-modal-body">
              <div className="admin-announcement-form-group">
                <label>Announcement Title</label>
                <input 
                  type="text"
                  value={newAnnouncement.title}
                  onChange={(e) => setNewAnnouncement({...newAnnouncement, title: e.target.value})}
                  placeholder="Enter announcement title"
                  className="admin-announcement-input"
                />
              </div>
              <div className="admin-announcement-form-group">
                <label>Description</label>
                <textarea 
                  value={newAnnouncement.description}
                  onChange={(e) => setNewAnnouncement({...newAnnouncement, description: e.target.value})}
                  placeholder="Enter announcement description"
                  rows="4"
                  className="admin-announcement-textarea"
                />
              </div>
            </div>
            <div className="admin-announcement-modal-footer">
              <button className="admin-announcement-discard-btn" onClick={() => setShowAddModal(false)}>
                <span className="btn-text">Discard</span>
              </button>
              <button className="admin-announcement-confirm-btn" onClick={handleAddAnnouncement}>
                <span className="btn-text">Confirm</span>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Detail Modal */}
      {showDetailModal && currentAnnouncement && (
        <div className="admin-announcement-modal-overlay">
          <div className="admin-announcement-modal-container">
            <div className="admin-announcement-modal-header">
              <h2>Announcement Details</h2>
              <div className="admin-announcement-modal-close" onClick={() => setShowDetailModal(false)}>×</div>
            </div>
            <div className="admin-announcement-modal-body">
              <div className="admin-announcement-detail-item">
                <h3>Title</h3>
                <p>{currentAnnouncement.title}</p>
              </div>
              <div className="admin-announcement-detail-item">
                <h3>Description</h3>
                <p>{currentAnnouncement.description}</p>
              </div>
              <div className="admin-announcement-detail-item">
                <h3>Date & Time</h3>
                <p>{currentAnnouncement.date} at {currentAnnouncement.time}</p>
              </div>
              <div className="admin-announcement-detail-item">
                <h3>Course</h3>
                <p>{currentAnnouncement.course}</p>
              </div>
            </div>
            <div className="admin-announcement-modal-footer">
              <button className="admin-announcement-close-btn" onClick={() => setShowDetailModal(false)}>
                <span className="btn-text">Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="admin-announcement-success-message">
          <div className="success-icon">✓</div>
          <div className="success-text">Announcement live successfully!</div>
        </div>
      )}
      
    </div>
  );
};

export default AdminAnnouncements;