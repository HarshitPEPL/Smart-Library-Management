// import React, { useState } from 'react';
// import StudentSidebar from '../../components/StudentSideBar';
// import StudentNavBar from '../../components/StudentNavBar';
// import { Heart } from 'lucide-react';
// import './StudentEbooks.css';

// const StudentEbooks = () => {
//   const initialBooks = [
//     {
//       id: 1,
//       title: "Atomic Habits",
//       author: "James Clear",
//       year: "2018",
//       image: "/AtomicHabits.png",
//       categories: ["Self-help Book"],
//       formats: {
//         hardCopy: false,
//         eBook: true,
//         audioBook: false
//       },
//       isWishlisted: true
//     },
//     {
//       id: 2,
//       title: "Psychology of Money",
//       author: "Morgan Housel",
//       year: "2020",
//       image: "/Psychology.png",
//       categories: ["Non-Fiction"],
//       formats: {
//         hardCopy: false,
//         eBook: true,
//         audioBook: false
//       },
//       isWishlisted: false
//     },
//     {
//       id: 3,
//       title: "Think and Grow Rich",
//       author: "Napoleon Hill and Rosa Lee Beeland",
//       year: "1937",
//       image: "/Think.png",
//       categories: ["Non Fiction"], /* if you want to add new sub category, just add comma and new category name */
//         formats: {
//         hardCopy: false,
//         eBook: true,
//         audioBook: false
//       },
//       isWishlisted: false
//     },
//     {
//       id: 4,
//       title: "The 48 Laws of Power",
//       author: "Robert Greene",
//       year: "2007",
//       image: "/Power.png",
//       categories: ["Self-help"],
//       formats: {
//         hardCopy: false,
//         eBook: true,
//         audioBook: false
//       },
//       isWishlisted: true
//     },
//     {
//       id: 5,
//       title: "Mindset",
//       author: "Dweck, C. S.",
//       year: "2006",
//       image: "/Mindset.png",
//       categories: ["Motivational"],
//       formats: {
//         hardCopy: false,
//         eBook: true,
//         audioBook: false
//       },
//       isWishlisted: false
//     },
//     {
//       id: 6,
//       title: "Sapiens",
//       author: "Yuval Noah Harari",
//       year: "2014",
//       image: "/Sapiens.png",
//       categories: ["History","Philosophy"],
//       formats: {
//         hardCopy: false,
//         eBook: true,
//         audioBook: false
//       },
//       isWishlisted: false
//     },
//     {
//       id: 7,
//       title: "Zero to One",
//       author: "Peter Thiel",
//       year: "2014",
//       image: "/ZeroToOne.png",
//       categories: ["Business Book"],
//       formats: {
//         hardCopy: false,
//         eBook: true,
//         audioBook: false
//       },
//       isWishlisted: true
//     },
//     {
//       id: 8,
//       title: "The Power of Now",
//       author: "Eckhart Tolle",
//       year: "1997",
//       image: "/PowerOfNow.png",
//       categories: ["Spirituality"],
//       formats: {
//         hardCopy: false,
//         eBook: true,
//         audioBook: false
//       },
//       isWishlisted: false
//     },
//     {
//       id: 9,
//       title: "The 4-Hour Workweek",
//       author: "Timothy Ferriss",
//       year: "2007",
//       image: "/4HourWork.png",
//       categories: ["Non-Fiction"],
//       formats: {
//         hardCopy: false,
//         eBook: true,
//         audioBook: false
//       },
//       isWishlisted: false
//     },
//     {
//       id: 10,
//       title: "Outliers",
//       author: "Malcolm Gladwell",
//       year: "2008",
//       image: "/Outliers.png",
//       categories: ["Non-Fiction"],
//       formats: {
//         hardCopy: false,
//         eBook: true,
//         audioBook: false
//       },
//       isWishlisted: false
//     }
//   ];

//   const [books, setBooks] = useState(initialBooks);

//   const toggleWishlist = (bookId) => {
//     setBooks(prevBooks =>
//       prevBooks.map(book =>
//         book.id === bookId
//           ? { ...book, isWishlisted: !book.isWishlisted }
//           : book
//       )
//     );
//   };

//   return (
//     <div className="Student-ebook">
//       <StudentSidebar />
//       <div className="Student-ebook-main">
//         <StudentNavBar />
//         <div className="Student-ebook-content">
//           <div className="Student-ebook-header">
//             <div className="Student-ebook-title-header">Title</div>
//             <div className="Student-ebook-category-header">Category</div>
//             <div className="Student-ebook-format-header">Available Format</div>
//             <div className="Student-ebook-actions-header"></div>
//           </div>

//           <div className="Student-ebook-list">
//             {books.map((book) => (
//               <div key={book.id} className="Student-ebook-item">
//                 <div className="Student-ebook-title-section">
//                   <img src={book.image} alt={book.title} className="Student-ebook-image" />
//                   <div className="Student-ebook-info">
//                     <h3>{book.title}</h3>
//                     <p>{book.author}, {book.year}</p>
//                   </div>
//                 </div>

//                 <div className="Student-ebook-categories">
//                   {book.categories.map((category, index) => (
//                     <div key={index} className="Student-ebook-category">{category}</div>
//                   ))}
//                 </div>

//                 <div className="Student-ebook-formats">
//                   <div className={`Student-ebook-format ${book.formats.hardCopy ? 'available' : 'unavailable'}`}>
//                     Hard Copy
//                   </div>
//                   <div className={`Student-ebook-format ${book.formats.eBook ? 'available' : 'unavailable'}`}>
//                     E - Book
//                   </div>
//                   <div className={`Student-ebook-format ${book.formats.audioBook ? 'available' : 'unavailable'}`}>
//                     Audio book
//                   </div>
//                 </div>

//                 <div className="Student-ebook-actions">
//                   <button 
//                     className={`Student-ebook-wishlist-button ${book.isWishlisted ? 'wishlisted' : ''}`}
//                     onClick={() => toggleWishlist(book.id)}
//                     aria-label={book.isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
//                   >
//                     <Heart 
//                       fill={book.isWishlisted ? "#ff4747" : "none"} 
//                       color={book.isWishlisted ? "#ff4747" : "#000"} 
//                     />
//                   </button>
//                   <button className="Student-ebook-preview-button">Preview</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentEbooks;



import React, { useState } from 'react';
import StudentSidebar from '../../components/StudentSideBar';
import StudentNavBar from '../../components/StudentNavBar';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import './StudentEbooks.css';

const StudentEbooks = () => {
  const initialBooks = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      year: "2018",
      image: "/AtomicHabits.png",
      categories: ["Self-help Book"],
      formats: {
        hardCopy: false,
        eBook: true,
        audioBook: false
      },
      isWishlisted: true
    },
    {
      id: 2,
      title: "Psychology of Money",
      author: "Morgan Housel",
      year: "2020",
      image: "/Psychology.png",
      categories: ["Non-Fiction"],
      formats: {
        hardCopy: false,
        eBook: true,
        audioBook: false
      },
      isWishlisted: false
    },
    {
      id: 3,
      title: "Think and Grow Rich",
      author: "Napoleon Hill and Rosa Lee Beeland",
      year: "1937",
      image: "/Think.png",
      categories: ["Non Fiction"], /* if you want to add new sub category, just add comma and new category name */
        formats: {
        hardCopy: false,
        eBook: true,
        audioBook: false
      },
      isWishlisted: false
    },
    {
      id: 4,
      title: "The 48 Laws of Power",
      author: "Robert Greene",
      year: "2007",
      image: "/Power.png",
      categories: ["Self-help"],
      formats: {
        hardCopy: false,
        eBook: true,
        audioBook: false
      },
      isWishlisted: true
    },
    {
      id: 5,
      title: "Mindset",
      author: "Dweck, C. S.",
      year: "2006",
      image: "/Mindset.png",
      categories: ["Motivational"],
      formats: {
        hardCopy: false,
        eBook: true,
        audioBook: false
      },
      isWishlisted: false
    },
    {
      id: 6,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      year: "2014",
      image: "/Sapiens.png",
      categories: ["History","Philosophy"],
      formats: {
        hardCopy: false,
        eBook: true,
        audioBook: false
      },
      isWishlisted: false
    },
    {
      id: 7,
      title: "Zero to One",
      author: "Peter Thiel",
      year: "2014",
      image: "/ZeroToOne.png",
      categories: ["Business Book"],
      formats: {
        hardCopy: false,
        eBook: true,
        audioBook: false
      },
      isWishlisted: true
    },
    {
      id: 8,
      title: "The Power of Now",
      author: "Eckhart Tolle",
      year: "1997",
      image: "/PowerOfNow.png",
      categories: ["Spirituality"],
      formats: {
        hardCopy: false,
        eBook: true,
        audioBook: false
      },
      isWishlisted: false
    },
    {
      id: 9,
      title: "The 4-Hour Workweek",
      author: "Timothy Ferriss",
      year: "2007",
      image: "/4HourWork.png",
      categories: ["Non-Fiction"],
      formats: {
        hardCopy: false,
        eBook: true,
        audioBook: false
      },
      isWishlisted: false
    },
    {
      id: 10,
      title: "Outliers",
      author: "Malcolm Gladwell",
      year: "2008",
      image: "/Outliers.png",
      categories: ["Non-Fiction"],
      formats: {
        hardCopy: false,
        eBook: true,
        audioBook: false
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
    <div className="Student-ebook">
      <StudentSidebar />
      <div className="Student-ebook-main">
        <StudentNavBar />
        <div className="Student-ebook-content">
          <div className="Student-ebook-header">
            <div className="Student-ebook-title-header">Title</div>
            <div className="Student-ebook-category-header">Category</div>
            <div className="Student-ebook-format-header">Available Format</div>
            <div className="Student-ebook-actions-header"></div>
          </div>

          <div className="Student-ebook-list">
            {currentBooks.map((book) => (
              <div key={book.id} className="Student-ebook-item">
                <div className="Student-ebook-title-section">
                  <img src={book.image} alt={book.title} className="Student-ebook-image" />
                  <div className="Student-ebook-info">
                    <h3>{book.title}</h3>
                    <p>{book.author}, {book.year}</p>
                  </div>
                </div>

                <div className="Student-ebook-categories">
                  {book.categories.map((category, index) => (
                    <div key={index} className="Student-ebook-category">{category}</div>
                  ))}
                </div>

                <div className="Student-ebook-formats">
                  <div className={`Student-ebook-format ${book.formats.hardCopy ? 'available' : 'unavailable'}`}>
                    Hard Copy
                  </div>
                  <div className={`Student-ebook-format ${book.formats.eBook ? 'available' : 'unavailable'}`}>
                    E - Book
                  </div>
                  <div className={`Student-ebook-format ${book.formats.audioBook ? 'available' : 'unavailable'}`}>
                    Audio book
                  </div>
                </div>

                <div className="Student-ebook-actions">
                  <button 
                    className={`Student-ebook-wishlist-button ${book.isWishlisted ? 'wishlisted' : ''}`}
                    onClick={() => toggleWishlist(book.id)}
                    aria-label={book.isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart 
                      fill={book.isWishlisted ? "#ff4747" : "none"} 
                      color={book.isWishlisted ? "#ff4747" : "#000"} 
                    />
                  </button>
                  <button className="Student-ebook-preview-button">Preview</button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="Student-ebook-pagination">
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

export default StudentEbooks;