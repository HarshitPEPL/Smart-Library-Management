// import React from 'react';
// import StudentSidebar from '../../components/StudentSideBar';
// import StudentNavBar from '../../components/StudentNavBar';
// import './StudentCatalogue.css';

// const StudentCatalogue = () => {
//   return (
//     <div className="Student-catalogue-layout">
//       <StudentSidebar />
//       <StudentNavBar />
//         <div className="Student-catalogue-container">
          
//           {/* Add your catalogue content here */}
//         </div>
      
//     </div>
//   );
// };

// export default StudentCatalogue;


import React, { useState } from 'react';
import StudentSidebar from '../../components/StudentSideBar';
import StudentNavBar from '../../components/StudentNavBar';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import './StudentCatalogue.css';

const StudentCatalogue = () => {
  const initialBooks = [
    {
      id: 1,
      title: "4 Hour Work",
      author: "Harper Lee",
      year: "1960",
      image: "/4HourWork.png",
      categories: ["Fiction", "Classic"],
      availability: {
        inLibrary: true,
        availableCopies: 3,
        totalCopies: 5
      },
      isWishlisted: false
    },
    {
      id: 2,
      title: "Seven Habits",
      author: "George Orwell",
      year: "1949",
      image: "/7Habits.png",
      categories: ["Fiction", "Dystopian"],
      availability: {
        inLibrary: true,
        availableCopies: 2,
        totalCopies: 4
      },
      isWishlisted: true
    },
    {
      id: 3,
      title: "Atomic Habits",
      author: "Jane Austen",
      year: "1813",
      image: "/AtomicHabits.png",
      categories: ["Fiction", "Romance"],
      availability: {
        inLibrary: true,
        availableCopies: 0,
        totalCopies: 3
      },
      isWishlisted: false
    },
    {
      id: 4,
      title: "Blockchain Concepts",
      author: "F. Scott Fitzgerald",
      year: "1925",
      image: "/Blockchain.png",
      categories: ["Fiction", "Classic"],
      availability: {
        inLibrary: true,
        availableCopies: 4,
        totalCopies: 6
      },
      isWishlisted: true
    },
    {
      id: 5,
      title: "Cloud Computing",
      author: "J.D. Salinger",
      year: "1951",
      image: "/CloudComputing.png",
      categories: ["Fiction", "Coming-of-age"],
      availability: {
        inLibrary: true,
        availableCopies: 1,
        totalCopies: 4
      },
      isWishlisted: false
    },
    {
      id: 6,
      title: "Deep Work",
      author: "William Golding",
      year: "1954",
      image: "/DeepWork.png",
      categories: ["Fiction", "Allegory"],
      availability: {
        inLibrary: true,
        availableCopies: 2,
        totalCopies: 3
      },
      isWishlisted: false
    },
    {
      id: 7,
      title: "Good To Great",
      author: "J.R.R. Tolkien",
      year: "1937",
      image: "/GoodToGreat.png",
      categories: ["Fiction", "Fantasy"],
      availability: {
        inLibrary: true,
        availableCopies: 0,
        totalCopies: 5
      },
      isWishlisted: true
    },
    {
      id: 8,
      title: "Harry Potter",
      author: "Aldous Huxley",
      year: "1932",
      image: "/Harry.png",
      categories: ["Fiction", "Dystopian"],
      availability: {
        inLibrary: true,
        availableCopies: 3,
        totalCopies: 4
      },
      isWishlisted: false
    },
    {
      id: 9,
      title: "Don't Make Me Think",
      author: "Paulo Coelho",
      year: "1988",
      image: "/Don't make me think.png",
      categories: ["Fiction", "Philosophy"],
      availability: {
        inLibrary: true,
        availableCopies: 2,
        totalCopies: 5
      },
      isWishlisted: true
    },
    {
      id: 10,
      title: "Digital Marketing Expertise",
      author: "Gabriel García Márquez",
      year: "1967",
      image: "/DigitalMarketing.png",
      categories: ["Fiction", "Magical Realism"],
      availability: {
        inLibrary: true,
        availableCopies: 1,
        totalCopies: 3
      },
      isWishlisted: false
    },
    {
      id: 11,
      title: "Introduction to AI",
      author: "Oscar Wilde",
      year: "2010",
      image: "/AI.png",
      categories: ["Fiction", "Gothic"],
      availability: {
        inLibrary: true,
        availableCopies: 2,
        totalCopies: 4
      },
      isWishlisted: false
    },
    {
      id: 12,
      title: "A Brief History",
      author: "Charlotte Brontë",
      year: "1847",
      image: "/ABriefHistory.png",
      categories: ["Fiction", "Gothic", "Romance"],
      availability: {
        inLibrary: true,
        availableCopies: 3,
        totalCopies: 5
      },
      isWishlisted: true
    },
    {
      id: 13,
      title: "Data VIsualization",
      author: "Homer",
      year: "2020",
      image: "/DataViz.png",
      categories: ["Classic", "Epic Poetry"],
      availability: {
        inLibrary: true,
        availableCopies: 1,
        totalCopies: 3
      },
      isWishlisted: false
    },
    {
      id: 14,
      title: "Cyber Security",
      author: "Ray Bradbury",
      year: "1953",
      image: "/Cybersecurity.png",
      categories: ["Fiction", "Dystopian"],
      availability: {
        inLibrary: true,
        availableCopies: 4,
        totalCopies: 6
      },
      isWishlisted: false
    },
    {
      id: 15,
      title: "FlatLand",
      author: "Miguel de Cervantes",
      year: "1605",
      image: "/Flatland.png",
      categories: ["Fiction", "Satire"],
      availability: {
        inLibrary: true,
        availableCopies: 2,
        totalCopies: 4
      },
      isWishlisted: true
    },
    {
      id: 16,
      title: "Game Development",
      author: "Dante Alighieri",
      year: "1320",
      image: "/GameDev.png",
      categories: ["Poetry", "Classic"],
      availability: {
        inLibrary: true,
        availableCopies: 1,
        totalCopies: 3
      },
      isWishlisted: false
    },
    {
      id: 17,
      title: "Atomic Habits",
      author: "Fyodor Dostoevsky",
      year: "1866",
      image: "/AtomicHabits.png",
      categories: ["Fiction", "Psychological"],
      availability: {
        inLibrary: true,
        availableCopies: 3,
        totalCopies: 5
      },
      isWishlisted: true
    },
    {
      id: 18,
      title: "3D-Modeling Concepts",
      author: "Geoffrey Chaucer",
      year: "1400",
      image: "/3DModeling.png",
      categories: ["Poetry", "Classic"],
      availability: {
        inLibrary: true,
        availableCopies: 2,
        totalCopies: 4
      },
      isWishlisted: false
    },
    {
      id: 19,
      title: "Introduction to Blockchain",
      author: "Emily Brontë",
      year: "1847",
      image: "/Blockchain.png",
      categories: ["Fiction", "Gothic", "Romance"],
      availability: {
        inLibrary: true,
        availableCopies: 0,
        totalCopies: 3
      },
      isWishlisted: true
    },
    {
      id: 20,
      title: "Deep Work",
      author: "Alexandre Dumas",
      year: "1844",
      image: "/DeepWork.png",
      categories: ["Fiction", "Adventure"],
      availability: {
        inLibrary: true,
        availableCopies: 4,
        totalCopies: 6
      },
      isWishlisted: false
    }
  ];

  const [books, setBooks] = useState(initialBooks);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 9;

  const toggleWishlist = (bookId) => {
    setBooks(prevBooks =>
      prevBooks.map(book =>
        book.id === bookId
          ? { ...book, isWishlisted: !book.isWishlisted }
          : book
      )
    );
  };

  // Calculate pagination
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(books.length / booksPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="Student-catalogue">
      <StudentSidebar />
      <div className="Student-catalogue-main">
        <StudentNavBar />
        <div className="Student-catalogue-content">
          <div className="Student-catalogue-header">
            <div className="Student-catalogue-title-header">Title</div>
            <div className="Student-catalogue-category-header">Category</div>
            <div className="Student-catalogue-availability-header">Availability</div>
            <div className="Student-catalogue-actions-header"></div>
          </div>

          <div className="Student-catalogue-list">
            {currentBooks.map((book) => (
              <div key={book.id} className="Student-catalogue-item">
                <div className="Student-catalogue-title-section">
                  <img src={book.image} alt={book.title} className="Student-catalogue-image" />
                  <div className="Student-catalogue-info">
                    <h3>{book.title}</h3>
                    <p>{book.author}, {book.year}</p>
                  </div>
                </div>

                <div className="Student-catalogue-categories">
                  {book.categories.map((category, index) => (
                    <div key={index} className="Student-catalogue-category">{category}</div>
                  ))}
                </div>

                <div className="Student-catalogue-availability">
                  <div className={`Student-catalogue-status ${book.availability.availableCopies > 0 ? 'available' : 'unavailable'}`}>
                    {book.availability.availableCopies > 0 ? 'Available' : 'Unavailable'}
                  </div>
                  <div className="Student-catalogue-copies">
                    {book.availability.availableCopies} of {book.availability.totalCopies} copies available
                  </div>
                </div>

                <div className="Student-catalogue-actions">
                  <button 
                    className={`Student-catalogue-wishlist-button ${book.isWishlisted ? 'wishlisted' : ''}`}
                    onClick={() => toggleWishlist(book.id)}
                    aria-label={book.isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart 
                      fill={book.isWishlisted ? "#ff4747" : "none"} 
                      color={book.isWishlisted ? "#ff4747" : "#000"} 
                    />
                  </button>
                  <button 
                    className="Student-catalogue-borrow-button"
                    disabled={book.availability.availableCopies === 0}
                  >
                    Preview
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="Student-catalogue-pagination">
            <button   
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-button"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="pagination-info">
              Page {currentPage} of {totalPages}
            </span>
            <button 
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="pagination-button"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCatalogue;