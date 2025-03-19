


import React, { useState, useEffect } from 'react';
import StateAdminNavbar from '../../../components/StateAdmin/StateAdminNavbar/StateAdminNavbar';
import StateAdminSidebar from '../../../components/StateAdmin/StateAdminSidebar/StateAdminSidebar';
import './StateAdminAnnouncements.css';

const StateAdminAnnouncements = () => {
  // Sample announcements data - will be replaced with API data
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      date: "March 15, 2025",
      time: "09:30 AM",
      title: "System Maintenance Notice",
      description: "The library management system will undergo maintenance on March 20, 2025, from 10:00 PM to 2:00 AM. Some features may be unavailable during this time.",
      publishedBy: "District Level Authority"
    },
    {
      id: 2,
      date: "March 10, 2025",
      time: "11:45 AM",
      title: "New Book Cataloging Guidelines",
      description: "Updated guidelines for cataloging new books have been released. Please review the new standards before processing any new acquisitions.",
      publishedBy: "Block Level Authority"
    },
    {
      id: 3,
      date: "March 5, 2025",
      time: "02:15 PM",
      title: "Library Staff Training Session",
      description: "A training session on the new RFID system will be held on March 12, 2025. All library staff are required to attend one of the three available sessions.",
      publishedBy: "District Level Authority"
    },
    {
      id: 4,
      date: "February 28, 2025",
      time: "10:00 AM",
      title: "Annual Inventory Deadline",
      description: "The annual inventory process must be completed by April 15, 2025. Please ensure all sections are properly accounted for and reported.",
      publishedBy: "School Level Authority"
    },
    {
      id: 5,
      date: "February 20, 2025",
      time: "03:30 PM",
      title: "Budget Allocation Update",
      description: "The quarterly budget allocation for new acquisitions has been increased by 15%. Updated budget reports are available in the finance section.",
      publishedBy: "State Admin Authority"
    },
    {
      id: 6,
      date: "February 15, 2025",
      time: "01:00 PM",
      title: "New Mobile App Features",
      description: "The library mobile app has been updated with new features including book reservations and digital ID cards. Please inform patrons about these new capabilities.",
      publishedBy: "School Level Authority"
    },
    {
      id: 7,
      date: "February 10, 2025",
      time: "11:20 AM",
      title: "Inter-Library Loan Policy Changes",
      description: "New inter-library loan policies will take effect on March 1, 2025. Maximum loan periods and late fees have been adjusted to improve resource availability.",
      publishedBy: "State Admin Authority"
    },
    {
      id: 8,
      date: "February 5, 2025",
      time: "09:45 AM",
      title: "Upcoming System Upgrade",
      description: "A major system upgrade is scheduled for April 5, 2025. The upgrade will improve search functionality and add new reporting features.",
      publishedBy: "Block Level Authority"
    },
    {
      id: 9,
      date: "January 30, 2025",
      time: "04:15 PM",
      title: "Holiday Schedule Announcement",
      description: "The library system will operate on a modified schedule during the upcoming spring holidays. Please check the calendar for specific dates and times.",
      publishedBy: "District Level Authority"
    },
    {
      id: 10,
      date: "January 25, 2025",
      time: "10:30 AM",
      title: "New Digital Resources Available",
      description: "Five new digital resource subscriptions have been added to our collection. Training materials are available in the staff resources section.",
      publishedBy: "Block Level Authority"
    },
    {
      id: 11,
      date: "January 20, 2025",
      time: "02:45 PM",
      title: "Overdue Book Collection Drive",
      description: "A special overdue book collection initiative will run from February 1-15, 2025. Patrons can return overdue materials without penalty during this period.",
      publishedBy: "State Admin Authority"
    },
    {
      id: 12,
      date: "January 15, 2025",
      time: "11:00 AM",
      title: "Library Space Reorganization",
      description: "The main library will undergo space reorganization starting February 10, 2025. The project will improve accessibility and create more collaborative spaces.",
      publishedBy: "School Level Authority"
    },
    {
      id: 13,
      date: "January 10, 2025",
      time: "09:15 AM",
      title: "New Staff Portal Features",
      description: "The staff portal has been updated with new features including shift swapping and leave management. Training sessions will be held next week.",
      publishedBy: "State Admin Authority"
    },
    {
      id: 14,
      date: "January 5, 2025",
      time: "03:00 PM",
      title: "Annual Report Submission Deadline",
      description: "All department heads must submit their annual reports by January 31, 2025. The reporting template is available in the management section.",
      publishedBy: "Block Level Authority"
    }
  ]);

  // UI state management
  const [currentPage, setCurrentPage] = useState(1);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [newAnnouncement, setNewAnnouncement] = useState({ 
    title: '', 
    description: '',
  });
  const [editAnnouncement, setEditAnnouncement] = useState({
    title: '',
    description: ''
  });

  // Current user authority level - in a real app, this would come from authentication
  const currentUserAuthority = "State Admin Authority";

  // Pagination configuration
  const announcementsPerPage = 9;
  const totalPages = Math.ceil(announcements.length / announcementsPerPage);
  const indexOfLastAnnouncement = currentPage * announcementsPerPage;
  const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
  const currentAnnouncements = announcements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement);

  // Pagination handlers
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  // Check if current user has edit/delete permissions for an announcement
  const hasPermission = (announcement) => {
    return announcement.publishedBy === currentUserAuthority;
  };

  // Detail modal handler
  const openDetailModal = (announcement) => {
    setSelectedAnnouncement(announcement);
    setShowDetailModal(true);
  };

  // Edit modal handlers
  const openEditModal = (e, announcement) => {
    e.stopPropagation(); // Prevent row click from triggering
    setSelectedAnnouncement(announcement);
    setEditAnnouncement({
      title: announcement.title,
      description: announcement.description
    });
    setShowEditModal(true);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditAnnouncement({
      ...editAnnouncement,
      [name]: value
    });
  };

  const handleUpdateAnnouncement = () => {
    // Update the announcement
    const updatedAnnouncements = announcements.map(item => {
      if (item.id === selectedAnnouncement.id) {
        return {
          ...item,
          title: editAnnouncement.title,
          description: editAnnouncement.description
        };
      }
      return item;
    });
    
    setAnnouncements(updatedAnnouncements);
    setShowEditModal(false);
    setSuccessMessage("Announcement Updated Successfully");
    setShowSuccessModal(true);
  };

  // Delete modal handlers
  const openDeleteModal = (e, announcement) => {
    e.stopPropagation(); // Prevent row click from triggering
    setSelectedAnnouncement(announcement);
    setShowDeleteModal(true);
  };

  const handleDeleteAnnouncement = () => {
    // Remove the announcement
    const updatedAnnouncements = announcements.filter(item => item.id !== selectedAnnouncement.id);
    setAnnouncements(updatedAnnouncements);
    setShowDeleteModal(false);
    setSuccessMessage("Announcement Deleted Successfully");
    setShowSuccessModal(true);
  };

  // Add new announcement handlers
  const handleAddAnnouncement = () => {
    setShowAddModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAnnouncement({
      ...newAnnouncement,
      [name]: value
    });
  };

  const handleSubmitAnnouncement = () => {
    // Create a new announcement with current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    const formattedTime = currentDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
    
    const newAnnouncementItem = {
      id: announcements.length + 1,
      date: formattedDate,
      time: formattedTime,
      title: newAnnouncement.title,
      description: newAnnouncement.description,
      publishedBy: currentUserAuthority
    };
    
    // Add the new announcement to the top of the list
    setAnnouncements([newAnnouncementItem, ...announcements]);
    setNewAnnouncement({ title: '', description: '' });
    
    // Also, we'll save it to localStorage to simulate persistence
    // This would be replaced with actual API calls in production
    const publishedAnnouncements = JSON.parse(localStorage.getItem('publishedAnnouncements') || '[]');
    publishedAnnouncements.unshift(newAnnouncementItem);
    localStorage.setItem('publishedAnnouncements', JSON.stringify(publishedAnnouncements));
    
    setShowAddModal(false);
    setSuccessMessage("Announcement Live Successfully");
    setShowSuccessModal(true);
    
    // Reset to the first page to show the new announcement
    setCurrentPage(1);
  };

  // Close success modal after 3 seconds
  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => {
        setShowSuccessModal(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessModal]);

  return (
    <div className="State-Announcements-Container">
      <StateAdminNavbar />
      <div className="State-Announcements-Content">
        <StateAdminSidebar />
        <div className="State-Announcements-Main">
          <div className="State-Announcements-Header">
            <h1>Announcements</h1>
            <div className="State-Announcements-ButtonGroup">
              <button 
                className="State-Announcements-AddButton" 
                onClick={handleAddAnnouncement}
              >
                + Add New State Announcement
              </button>
            </div>
          </div>
          
          <div className="State-Announcements-Table">
            <div className="State-Announcements-TableHeader">
              <div className="State-Announcements-DateHeader">Date</div>
              <div className="State-Announcements-AnnouncementHeader">Announcements</div>
              <div className="State-Announcements-ActionHeader">Actions</div>
            </div>
            
            {currentAnnouncements.map((announcement) => (
              <div 
                key={announcement.id} 
                className="State-Announcements-TableRow"
                onClick={() => openDetailModal(announcement)}
              >
                <div className="State-Announcements-DateCell">
                  <div className="State-Announcements-Date">{announcement.date}</div>
                  <div className="State-Announcements-Time">{announcement.time}</div>
                </div>
                <div className="State-Announcements-AnnouncementCell">
                  <div className="State-Announcements-Title">{announcement.title}</div>
                  <div className="State-Announcements-Publisher">{announcement.publishedBy}</div>
                </div>
                <div className="State-Announcements-ActionCell">
                  {hasPermission(announcement) && (
                    <div className="State-Announcements-ActionButtons">
                      <button 
                        className="State-Announcements-EditButton"
                        onClick={(e) => openEditModal(e, announcement)}
                        title="Edit"
                      >
                        ✎
                      </button>
                      <button 
                        className="State-Announcements-DeleteButton"
                        onClick={(e) => openDeleteModal(e, announcement)}
                        title="Delete"
                      >
                        ✖
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="State-Announcements-Pagination">
            <button 
              onClick={prevPage} 
              disabled={currentPage === 1}
              className="State-Announcements-PaginationButton"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`State-Announcements-PaginationNumber ${currentPage === i + 1 ? 'active' : ''}`}
              >
                {i + 1}
              </button>
            ))}
            <button 
              onClick={nextPage} 
              disabled={currentPage === totalPages}
              className="State-Announcements-PaginationButton"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      
      {/* Detail Modal */}
      {showDetailModal && selectedAnnouncement && (
        <div className="State-Announcements-ModalOverlay">
          <div className="State-Announcements-DetailModal">
            <h2>{selectedAnnouncement.title}</h2>
            <p>{selectedAnnouncement.description}</p>
            <div className="State-Announcements-PublishedBy">
              <span className="State-Announcements-PublishedByLabel">Published by:</span>
              <span className="State-Announcements-PublishedByValue">{selectedAnnouncement.publishedBy}</span>
            </div>
            <button 
              className="State-Announcements-BackButton" 
              onClick={() => setShowDetailModal(false)}
            >
              Back
            </button>
          </div>
        </div>
      )}
      
      {/* Add New Announcement Modal */}
      {showAddModal && (
        <div className="State-Announcements-ModalOverlay">
          <div className="State-Announcements-AddModal">
            <h2>Add New Announcement</h2>
            <div className="State-Announcements-FormGroup">
              <label htmlFor="title">Title</label>
              <input 
                type="text" 
                id="title" 
                name="title" 
                value={newAnnouncement.title} 
                onChange={handleInputChange} 
                placeholder="Enter announcement title"
              />
            </div>
            <div className="State-Announcements-FormGroup">
              <label htmlFor="description">Description</label>
              <textarea 
                id="description" 
                name="description" 
                value={newAnnouncement.description} 
                onChange={handleInputChange} 
                placeholder="Enter announcement description"
              />
            </div>
            <div className="State-Announcements-ButtonGroup">
              <button 
                className="State-Announcements-CancelButton" 
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
              <button 
                className="State-Announcements-SubmitButton" 
                onClick={handleSubmitAnnouncement}
                disabled={!newAnnouncement.title || !newAnnouncement.description}
              >
                Make Live
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Edit Announcement Modal */}
      {showEditModal && selectedAnnouncement && (
        <div className="State-Announcements-ModalOverlay">
          <div className="State-Announcements-AddModal">
            <h2>Edit Announcement</h2>
            <div className="State-Announcements-FormGroup">
              <label htmlFor="edit-title">Title</label>
              <input 
                type="text" 
                id="edit-title" 
                name="title" 
                value={editAnnouncement.title} 
                onChange={handleEditInputChange} 
                placeholder="Enter announcement title"
              />
            </div>
            <div className="State-Announcements-FormGroup">
              <label htmlFor="edit-description">Description</label>
              <textarea 
                id="edit-description" 
                name="description" 
                value={editAnnouncement.description} 
                onChange={handleEditInputChange} 
                placeholder="Enter announcement description"
              />
            </div>
            <div className="State-Announcements-ButtonGroup">
              <button 
                className="State-Announcements-CancelButton" 
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
              <button 
                className="State-Announcements-SubmitButton" 
                onClick={handleUpdateAnnouncement}
                disabled={!editAnnouncement.title || !editAnnouncement.description}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedAnnouncement && (
        <div className="State-Announcements-ModalOverlay">
          <div className="State-Announcements-DeleteModal">
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete this announcement?</p>
            <p className="State-Announcements-DeleteTitle">"{selectedAnnouncement.title}"</p>
            <div className="State-Announcements-ButtonGroup">
              <button 
                className="State-Announcements-CancelButton" 
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button 
                className="State-Announcements-DeleteConfirmButton" 
                onClick={handleDeleteAnnouncement}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="State-Announcements-SuccessModal">
          <div className="State-Announcements-SuccessContent">
            <div className="State-Announcements-SuccessIcon">✓</div>
            <p>{successMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StateAdminAnnouncements;