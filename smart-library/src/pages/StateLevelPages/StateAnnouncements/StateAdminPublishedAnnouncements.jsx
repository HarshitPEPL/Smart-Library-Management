import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StateAdminNavbar from '../../../components/StateAdmin/StateAdminNavbar/StateAdminNavbar';
import StateAdminSidebar from '../../../components/StateAdmin/StateAdminSidebar/StateAdminSidebar';
import './StateAdminPublishedAnnouncements.css';

const StateAdminPublishedAnnouncements = () => {
  const navigate = useNavigate();
  const [publishedAnnouncements, setPublishedAnnouncements] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  // Fetch published announcements
  useEffect(() => {
    // In a real application, this would be an API call
    // For now, we'll use localStorage to simulate persistence
    const storedAnnouncements = JSON.parse(localStorage.getItem('publishedAnnouncements') || '[]');
    
    // If there are no announcements in localStorage, use sample data
    if (storedAnnouncements.length === 0) {
      const samplePublishedAnnouncements = [
        {
          id: 1,
          date: "March 17, 2025",
          time: "09:00 AM",
          title: "New Library Hours",
          description: "Starting April 1, 2025, all libraries will be open from 8:00 AM to 9:00 PM Monday through Friday, and 10:00 AM to 6:00 PM on weekends."
        },
        {
          id: 2,
          date: "March 15, 2025",
          time: "10:30 AM",
          title: "System Maintenance Scheduled",
          description: "The library management system will undergo scheduled maintenance on March 22, 2025, from 11:00 PM to 3:00 AM. During this time, the online catalog and account services will be unavailable."
        },
        {
          id: 3,
          date: "March 12, 2025",
          time: "02:15 PM",
          title: "New Digital Resources Available",
          description: "We have added several new digital resources to our collection, including e-books, audiobooks, and research databases. These resources are available through our online portal."
        },
        {
          id: 4,
          date: "March 8, 2025",
          time: "11:45 AM",
          title: "Summer Reading Program Registration",
          description: "Registration for the annual Summer Reading Program will open on April 1, 2025. This year's theme is 'Exploring New Worlds Through Books'."
        },
        {
          id: 5,
          date: "March 5, 2025",
          time: "09:30 AM",
          title: "Library Card Policy Update",
          description: "Starting May 1, 2025, library cards will need to be renewed every two years instead of every three years. This change is to ensure our patron information remains current."
        }
      ];
      setPublishedAnnouncements(samplePublishedAnnouncements);
      localStorage.setItem('publishedAnnouncements', JSON.stringify(samplePublishedAnnouncements));
    } else {
      setPublishedAnnouncements(storedAnnouncements);
    }
  }, []);

  // Pagination configuration
  const announcementsPerPage = 9;
  const totalPages = Math.ceil(publishedAnnouncements.length / announcementsPerPage);
  const indexOfLastAnnouncement = currentPage * announcementsPerPage;
  const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
  const currentAnnouncements = publishedAnnouncements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement);

  // Pagination handlers
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  // Detail modal handler
  const openDetailModal = (announcement) => {
    setSelectedAnnouncement(announcement);
    setShowDetailModal(true);
  };

  // Navigate back to announcements management
  const navigateToAnnouncementsManagement = () => {
    navigate('/state-admin-announcements');
  };

  return (
    <div className="State-Published-Container">
      <StateAdminNavbar />
      <div className="State-Published-Content">
        <StateAdminSidebar />
        <div className="State-Published-Main">
          <div className="State-Published-Header">
            <h1>Published Announcements</h1>
            <button 
              className="State-Published-BackButton" 
              onClick={navigateToAnnouncementsManagement}
            >
              Back to Announcements Management
            </button>
          </div>
          
          <div className="State-Published-Table">
            <div className="State-Published-TableHeader">
              <div className="State-Published-DateHeader">Date</div>
              <div className="State-Published-AnnouncementHeader">Announcements</div>
              <div className="State-Published-ActionHeader"></div>
            </div>
            
            {currentAnnouncements.length > 0 ? (
              currentAnnouncements.map((announcement) => (
                <div key={announcement.id} className="State-Published-TableRow">
                  <div className="State-Published-DateCell">
                    <div className="State-Published-Date">{announcement.date}</div>
                    <div className="State-Published-Time">{announcement.time}</div>
                  </div>
                  <div className="State-Published-AnnouncementCell">
                    <div className="State-Published-Title">{announcement.title}</div>
                  </div>
                  <div className="State-Published-ActionCell">
                    <button 
                      className="State-Published-DetailButton" 
                      onClick={() => openDetailModal(announcement)}
                    >
                      Detail
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="State-Published-NoData">
                No published announcements found.
              </div>
            )}
          </div>
          
          {publishedAnnouncements.length > announcementsPerPage && (
            <div className="State-Published-Pagination">
              <button 
                onClick={prevPage} 
                disabled={currentPage === 1}
                className="State-Published-PaginationButton"
              >
                &lt; Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`State-Published-PaginationNumber ${currentPage === i + 1 ? 'active' : ''}`}
                >
                  {i + 1}
                </button>
              ))}
              <button 
                onClick={nextPage} 
                disabled={currentPage === totalPages}
                className="State-Published-PaginationButton"
              >
                Next &gt;
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Detail Modal */}
      {showDetailModal && selectedAnnouncement && (
        <div className="State-Published-ModalOverlay">
          <div className="State-Published-DetailModal">
            <h2>{selectedAnnouncement.title}</h2>
            <div className="State-Published-DetailDate">
              Published on: {selectedAnnouncement.date} at {selectedAnnouncement.time}
            </div>
            <p className="State-Published-DetailDescription">{selectedAnnouncement.description}</p>
            <button 
              className="State-Published-CloseButton" 
              onClick={() => setShowDetailModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StateAdminPublishedAnnouncements;