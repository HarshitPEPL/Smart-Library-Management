// import React from 'react';
// import StudentSidebar from '../../components/StudentSideBar';
// import StudentNavBar from '../../components/StudentNavBar';
// import './StudentRecommendedBooks.css';

// const StudentRecommendedBooks= () => {
//   return (
//     <div className="Student-Recommended-Books-Container">
//       <StudentSidebar />
//       <StudentNavBar />
//     </div>
//   );
// };

// export default StudentRecommendedBooks;


import React, { useState, useEffect } from 'react';
import StudentSidebar from '../../components/StudentSideBar';
import StudentNavBar from '../../components/StudentNavBar';
import './StudentRecommendedBooks.css';

const StudentRecommendedBooks = () => {
  // Sample academic books data (would be replaced by API call in future)
  const allBooks = [
    // 1st Grade Books
    { id: 1, grade: 1, title: "First Math Adventures", author: "Emma Johnson", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    { id: 2, grade: 1, title: "Reading Buddies", author: "Michael Chen", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    { id: 3, grade: 1, title: "Science for Little Explorers", author: "Sarah Williams", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    { id: 4, grade: 1, title: "My First Grammar", author: "David Thompson", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    { id: 5, grade: 1, title: "Fun with Letters", author: "Lisa Garcia", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    
    // 2nd Grade Books
    { id: 6, grade: 2, title: "Math Wizards", author: "Robert Miller", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    { id: 7, grade: 2, title: "Adventure Reading", author: "Jennifer Lee", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    { id: 8, grade: 2, title: "Nature Explorers", author: "Thomas Brown", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    { id: 9, grade: 2, title: "English Basics", author: "Patricia Wilson", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    
    // 3rd Grade Books
    { id: 10, grade: 3, title: "Math Challenges", author: "Kevin Anderson", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    { id: 11, grade: 3, title: "World of Words", author: "Nancy Taylor", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    { id: 12, grade: 3, title: "Science Discoveries", author: "Mark Davis", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    
    // 4th Grade Books
    { id: 13, grade: 4, title: "Math Masters", author: "Susan Martin", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    { id: 14, grade: 4, title: "Language Arts Explorer", author: "James Wilson", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    
    // 5th Grade Books
    { id: 15, grade: 5, title: "Pre-Algebra Basics", author: "Michelle Lewis", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    { id: 16, grade: 5, title: "Literature Journeys", author: "Richard Clark", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    
    // 6th Grade Books
    { id: 17, grade: 6, title: "Algebra Fundamentals", author: "Elizabeth Walker", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    { id: 18, grade: 6, title: "World History Beginnings", author: "Daniel Harris", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    
    // 7th Grade Books
    { id: 19, grade: 7, title: "Pre-Algebra Complete", author: "Christopher Allen", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    { id: 20, grade: 7, title: "Earth Science Wonders", author: "Amanda Young", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    
    // 8th Grade Books
    { id: 21, grade: 8, title: "Algebra I", author: "Katherine Mitchell", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    { id: 22, grade: 8, title: "American Literature", author: "Brian Nelson", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    
    // 9th Grade Books
    { id: 23, grade: 9, title: "Geometry Fundamentals", author: "Julie Parker", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    { id: 24, grade: 9, title: "World Literature", author: "Charles Wright", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    
    // 10th Grade Books
    { id: 25, grade: 10, title: "Algebra II", author: "Angela Rodriguez", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    { id: 26, grade: 10, title: "Chemistry Basics", author: "Paul Scott", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    
    // 11th Grade Books
    { id: 27, grade: 11, title: "Pre-Calculus", author: "Steven Green", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    { id: 28, grade: 11, title: "Physics Principles", author: "Rebecca Hall", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    
    // 12th Grade Books
    { id: 29, grade: 12, title: "Calculus", author: "Gregory Morris", coverImg: "/api/placeholder/150/200", previewUrl: "#" },
    { id: 30, grade: 12, title: "Advanced Literature", author: "Olivia Baker", coverImg: "/api/placeholder/150/200", previewUrl: "#" }
  ];

  // State for filtering and pagination
  const [currentGrade, setCurrentGrade] = useState(0); // 0 means all grades
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(20);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  // Filter books by grade and search term
  const filteredBooks = allBooks.filter(book => 
    (currentGrade === 0 || book.grade === currentGrade) &&
    (book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Get current books for pagination
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle grade filter change
  const handleGradeChange = (grade) => {
    setCurrentGrade(grade);
    setCurrentPage(1); // Reset to first page when changing filters
  };

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Handle book selection for preview
  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  // Close preview modal
  const closePreview = () => {
    setSelectedBook(null);
  };

  return (
    <div className="Student-Recommended-Books-Container">
      <StudentSidebar />
      <div className="main-content">
        <StudentNavBar />
        
        <div className="books-content">
          <div className="books-header">
            <h1>Recommended Academic Books</h1>
            <div className="filters">
              <div className="search-bar">
                <input 
                  type="text" 
                  placeholder="Search books or authors..." 
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              <div className="grade-filter">
                <select onChange={(e) => handleGradeChange(parseInt(e.target.value))}>
                  <option value="0">All Grades</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i+1} value={i+1}>Grade {i+1}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="books-grid">
            {currentBooks.length > 0 ? (
              currentBooks.map((book) => (
                <div 
                  key={book.id} 
                  className="book-card"
                  onClick={() => handleBookSelect(book)}
                >
                  <div className="book-cover">
                    <img src={book.coverImg} alt={book.title} />
                  </div>
                  <div className="book-info">
                    <h3>{book.title}</h3>
                    <p className="author">by {book.author}</p>
                    <p className="grade">Grade {book.grade}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-books-message">
                <p>No books found matching your criteria.</p>
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button 
                onClick={() => paginate(currentPage - 1)} 
                disabled={currentPage === 1}
                className="page-button"
              >
                &laquo;
              </button>
              
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                // Show first page, last page, current page and 1 page before and after current page
                if (
                  pageNumber === 1 || 
                  pageNumber === totalPages || 
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => paginate(pageNumber)}
                      className={`page-button ${currentPage === pageNumber ? 'active' : ''}`}
                    >
                      {pageNumber}
                    </button>
                  );
                } else if (
                  (pageNumber === currentPage - 2 && currentPage > 3) || 
                  (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
                ) {
                  return <span key={pageNumber} className="page-ellipsis">...</span>;
                }
                return null;
              })}
              
              <button 
                onClick={() => paginate(currentPage + 1)} 
                disabled={currentPage === totalPages}
                className="page-button"
              >
                &raquo;
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Book Preview Modal */}
      {selectedBook && (
        <div className="book-preview-modal">
          <div className="modal-content">
            <span className="close-button" onClick={closePreview}>&times;</span>
            <div className="preview-container">
              <div className="preview-image">
                <img src={selectedBook.coverImg} alt={selectedBook.title} />
              </div>
              <div className="preview-details">
                <h2>{selectedBook.title}</h2>
                <p className="author">by {selectedBook.author}</p>
                <p className="grade">Recommended for Grade {selectedBook.grade}</p>
                <p className="description">
                  This is a placeholder for the book description. In a real application, 
                  this would be fetched from your database or API.
                </p>
                <div className="preview-actions">
                  <button className="preview-button">Read Sample</button>
                  <button className="add-to-list-button">Add to My List</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentRecommendedBooks;