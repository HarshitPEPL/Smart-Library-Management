// import React, { useState } from 'react';
// import StudentSidebar from '../../components/StudentSideBar';
// import StudentNavBar from '../../components/StudentNavBar';
// import { Heart } from 'lucide-react';
// import './StudentAudiobooks.css';

// const StudentAudiobooks = () => {
//   const initialBooks = [
//     {
//       id: 1,
//       title: "Rich Dad Poor Dad",
//       author: "Robert T. Kiyosaki",
//       year: "1997",
//       image: "/RichDadPoorDad.png",
//       categories: ["Personal Finance"],
//       formats: {
//         hardCopy: false,
//         eBook: false,
//         audioBook: true
//       },

//       isWishlisted: true
//     },
//     {
//       id: 2,
//       title: "The 7 Habits of Highly Effective People",
//       author: "Stephen R. Covey",
//       year: "1989",
//       image: "/7Habits.png",
//       categories: ["Self-Development"],
//       formats: {
//         hardCopy: false,
//         eBook: false,
//         audioBook: true
//       },
//       isWishlisted: false
//     },
//     {
//       id: 3,
//       title: "The 4-Hour Workweek",
//       author: "Timothy Ferriss",
//       year: "2007",
//       image: "/4HourWork.png",
//       categories: ["Non-Fiction"],
//       formats: {
//         hardCopy: false,
//         eBook: false,
//         audioBook: true
//       },
//       isWishlisted: false
//     },
//     {
//       id: 4,
//       title: "Deep Work",
//       author: "Cal Newport",
//       year: "2016",
//       image: "/DeepWork.png",
//       categories: ["Productivity"],
//       formats: {
//         hardCopy: false,
//         eBook: false,
//         audioBook: true
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
//         eBook: false,
//         audioBook: true
//       },
//       isWishlisted: false
//     },
//     {
//       id: 6,
//       title: "Good to Great",
//       author: "Jim Collins",
//       year: "2001",
//       image: "/GoodToGreat.png",
//       categories: ["Business", "Leadership"],
//       formats: {
//         hardCopy: false,
//         eBook: false,
//         audioBook: true
//       },
//       isWishlisted: false
//     },
//     {
//       id: 7,
//       title: "Atomic Habits",
//       author: "James Clear",
//       year: "2018",
//       image: "/AtomicHabits.png",
//       categories: ["Self-help Book"],
//       formats: {
//         hardCopy: false,
//         eBook: false,
//         audioBook: true
//       },
//       isWishlisted: true
//     },
//     {
//       id: 8,
//       title: "Psychology of Money",
//       author: "Morgan Housel",
//       year: "2020",
//       image: "/Psychology.png",
//       categories: ["Non-Fiction"],
//       formats: {
//         hardCopy: false,
//         eBook: false,
//         audioBook: true
//       },
//       isWishlisted: false
//     },
//     {
//       id: 9,
//       title: "The Power of Now",
//       author: "Eckhart Tolle",
//       year: "1997",
//       image: "/PowerOfNow.png",
//       categories: ["SowerOfNow"],
//       formats: {
//         hardCopy: false,
//         eBook: false,
//         audioBook: true
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
//         eBook: false,
//         audioBook: true
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
//     <div className="Student-audiobook">
//       <StudentSidebar />
//       <div className="Student-audiobook-main">
//         <StudentNavBar />
//         <div className="Student-audiobook-content">
//           <div className="Student-audiobook-header">
//             <div className="Student-audiobook-title-header">Title</div>
//             <div className="Student-audiobook-category-header">Category</div>
//             <div className="Student-audiobook-format-header">Available Format</div>
//             <div className="Student-audiobook-actions-header"></div>
//           </div>

//           <div className="Student-audiobook-list">
//             {books.map((book) => (
//               <div key={book.id} className="Student-audiobook-item">
//                 <div className="Student-audiobook-title-section">
//                   <img src={book.image} alt={book.title} className="Student-audiobook-image" />
//                   <div className="Student-audiobook-info">
//                     <h3>{book.title}</h3>
//                     <p>{book.author}, {book.year}</p>
//                   </div>
//                 </div>

//                 <div className="Student-audiobook-categories">
//                   {book.categories.map((category, index) => (
//                     <div key={index} className="Student-audiobook-category">{category}</div>
//                   ))}
//                 </div>

//                 <div className="Student-audiobook-formats">
//                   <div className={`Student-audiobook-format ${book.formats.hardCopy ? 'available' : 'unavailable'}`}>
//                     Hard Copy
//                   </div>
//                   <div className={`Student-audiobook-format ${book.formats.eBook ? 'available' : 'unavailable'}`}>
//                     E - Book
//                   </div>
//                   <div className={`Student-audiobook-format ${book.formats.audioBook ? 'available' : 'unavailable'}`}>
//                     Audio book
//                   </div>
//                 </div>

//                 <div className="Student-audiobook-actions">
//                   <button 
//                     className={`Student-audiobook-wishlist-button ${book.isWishlisted ? 'wishlisted' : ''}`}
//                     onClick={() => toggleWishlist(book.id)}
//                     aria-label={book.isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
//                   >
//                     <Heart 
//                       fill={book.isWishlisted ? "#ff4747" : "none"} 
//                       color={book.isWishlisted ? "#ff4747" : "#000"} 
//                     />
//                   </button>
//                   <button 
//                     className="Student-audiobook-preview-button"
//                     title={book.previewContent}
//                   >
//                     Preview
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentAudiobooks;


import React, { useState } from 'react';
import StudentSidebar from '../../components/StudentSideBar';
import StudentNavBar from '../../components/StudentNavBar';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import './StudentAudiobooks.css';

const StudentAudiobooks = () => {
  const initialBooks = [
    {
      id: 1,
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      year: "1997",
      image: "/RichDadPoorDad.png",
      categories: ["Personal Finance"],
      formats: {
        hardCopy: false,
        eBook: false,
        audioBook: true
      },

      isWishlisted: true
    },
    {
      id: 2,
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen R. Covey",
      year: "1989",
      image: "/7Habits.png",
      categories: ["Self-Development"],
      formats: {
        hardCopy: false,
        eBook: false,
        audioBook: true
      },
      isWishlisted: false
    },
    {
      id: 3,
      title: "The 4-Hour Workweek",
      author: "Timothy Ferriss",
      year: "2007",
      image: "/4HourWork.png",
      categories: ["Non-Fiction"],
      formats: {
        hardCopy: false,
        eBook: false,
        audioBook: true
      },
      isWishlisted: false
    },
    {
      id: 4,
      title: "Deep Work",
      author: "Cal Newport",
      year: "2016",
      image: "/DeepWork.png",
      categories: ["Productivity"],
      formats: {
        hardCopy: false,
        eBook: false,
        audioBook: true
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
        eBook: false,
        audioBook: true
      },
      isWishlisted: false
    },
    {
      id: 6,
      title: "Good to Great",
      author: "Jim Collins",
      year: "2001",
      image: "/GoodToGreat.png",
      categories: ["Business", "Leadership"],
      formats: {
        hardCopy: false,
        eBook: false,
        audioBook: true
      },
      isWishlisted: false
    },
    {
      id: 7,
      title: "Atomic Habits",
      author: "James Clear",
      year: "2018",
      image: "/AtomicHabits.png",
      categories: ["Self-help Book"],
      formats: {
        hardCopy: false,
        eBook: false,
        audioBook: true
      },
      isWishlisted: true
    },
    {
      id: 8,
      title: "Psychology of Money",
      author: "Morgan Housel",
      year: "2020",
      image: "/Psychology.png",
      categories: ["Non-Fiction"],
      formats: {
        hardCopy: false,
        eBook: false,
        audioBook: true
      },
      isWishlisted: false
    },
    {
      id: 9,
      title: "The Power of Now",
      author: "Eckhart Tolle",
      year: "1997",
      image: "/PowerOfNow.png",
      categories: ["SowerOfNow"],
      formats: {
        hardCopy: false,
        eBook: false,
        audioBook: true
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
        eBook: false,
        audioBook: true
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
    <div className="Student-audiobook">
      <StudentSidebar />
      <div className="Student-audiobook-main">
        <StudentNavBar />
        <div className="Student-audiobook-content">
          <div className="Student-audiobook-header">
            <div className="Student-audiobook-title-header">Title</div>
            <div className="Student-audiobook-category-header">Category</div>
            <div className="Student-audiobook-format-header">Available Format</div>
            <div className="Student-audiobook-actions-header"></div>
          </div>

          <div className="Student-audiobook-list">
            {currentBooks.map((book) => (
              <div key={book.id} className="Student-audiobook-item">
                <div className="Student-audiobook-title-section">
                  <img src={book.image} alt={book.title} className="Student-audiobook-image" />
                  <div className="Student-audiobook-info">
                    <h3>{book.title}</h3>
                    <p>{book.author}, {book.year}</p>
                  </div>
                </div>

                <div className="Student-audiobook-categories">
                  {book.categories.map((category, index) => (
                    <div key={index} className="Student-audiobook-category">{category}</div>
                  ))}
                </div>

                <div className="Student-audiobook-formats">
                  {Object.entries(book.formats).map(([format, isAvailable]) => (
                    <div key={format} className={`Student-audiobook-format ${isAvailable ? 'available' : 'unavailable'}`}>
                      {format.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  ))}
                </div>

                <div className="Student-audiobook-actions">
                  <button 
                    className={`Student-audiobook-wishlist-button ${book.isWishlisted ? 'wishlisted' : ''}`}
                    onClick={() => toggleWishlist(book.id)}
                    aria-label={book.isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart 
                      fill={book.isWishlisted ? "#ff4747" : "none"} 
                      color={book.isWishlisted ? "#ff4747" : "#000"} 
                    />
                  </button>
                  <button className="Student-audiobook-preview-button">
                    Preview
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="Student-audiobook-pagination">
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

export default StudentAudiobooks;