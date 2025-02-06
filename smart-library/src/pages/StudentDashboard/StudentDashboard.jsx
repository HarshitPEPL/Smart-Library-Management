
// import React from 'react';
// import './StudentDashboard.css';
// import StudentNavBar from '../../components/StudentNavBar';
// import StudentSideBar from '../../components/StudentSideBar';


// const StudentDashboard = () => {
//   const books = [
//     { id: 1, image: "/HolyBible.png", alt: "Holy Bible" },
//     { id: 2, image: "/Harry.png", alt: "Harry Potter" },
//     { id: 3, image: "/UX.png", alt: "Lean UX" },
//     { id: 4, image: "/Don't make me think.png", alt: "Don't Make Me Think" },
//     { id: 5, image: "/The design of veryday things.png", alt: "The Design of Everyday Things" },
//   ];

//   return (
//       <div className="StudentDashboard">
//         <StudentNavBar />
//         <StudentSideBar />
//         <div className="StudentDashboard-main">
//           <div className="StudentDashboard-container">
//             {/* Announcements Card */}
//             <div className="StudentDashboard-announcements-card">
//               <h2 className="StudentDashboard-announcements-title">Announcements</h2>
//               <div className="StudentDashboard-quote-container">
//                 <p className="StudentDashboard-quote">
//                   "There is more treasure in books than in all the pirate's loot on Treasure Island."
//                 </p>
//                 <p className="StudentDashboard-author">-Walt Disney</p>
//               </div>
//               <div className="StudentDashboard-dots">
//                 {[...Array(4)].map((_, index) => (
//                   <span key={index} className="StudentDashboard-dot"></span>
//                 ))}
//               </div>
//             </div>
    
//             {/* New Arrivals Card */}
//             <div className="StudentDashboard-newArrivals-card">
//               <div className="StudentDashboard-books-grid">
//                 {books.map((book) => (
//                   <div key={book.id} className="StudentDashboard-book">
//                     <img src={book.image} alt={book.alt} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
          
//           {/* Add the Good Morning text */}
//           <div className="StudentDashboard-greeting">
//             Good Morning
//           </div>
//         </div>
//       </div>
//     );
// };

// export default StudentDashboard;


import React from 'react';
import './StudentDashboard.css';
import StudentNavBar from '../../components/StudentNavBar';
import StudentSideBar from '../../components/StudentSideBar';

const StudentDashboard = () => {
  const books = [
    { id: 1, image: "/HolyBible.png", alt: "Holy Bible" },
    { id: 2, image: "/Harry.png", alt: "Harry Potter" },
    { id: 3, image: "/UX.png", alt: "Lean UX" },
    { id: 4, image: "/Don't make me think.png", alt: "Don't Make Me Think" },
    { id: 5, image: "/The design of veryday things.png", alt: "The Design of Everyday Things" },
  ];

  const recommendedBooks = [
    { 
      id: 1, 
      image: "/RichDadPoorDad.png", 
      title: "Rich Dad Poor Dad", 
      author: "Robert T. Kiyosaki"
    },
    { 
      id: 2, 
      image: "/AtomicHabits.png", 
      title: "Atomic Habits", 
      author: "James Clear"
    },
    { 
      id: 3, 
      image: "/Psychology.png", 
      title: "Psychology of Money", 
      author: "Morgan Housel"
    },
    { 
      id: 4, 
      image: "/Think.png", 
      title: "Think and Grow Rich", 
      author: "Napoleon Hill"
    },
    { 
      id: 5, 
      image: "/Power.png", 
      title: "48 Laws of Power", 
      author: "Robert Greene"
    },
    { 
      id: 6, 
      image: "/Mindset.png", 
      title: "Mindset", 
      author: "Carol S. Dweck"
    },
    { 
      id: 7, 
      image: "/7Habits.png", 
      title: "7 Habits of Highly Effective People", 
      author: "Stephen Covey"
    },
    { 
      id: 8, 
      image: "/DeepWork.png", 
      title: "Deep Work", 
      author: "Cal Newport"
    }
  ];

  const recentReads = [
    { 
      id: 1, 
      image: "/Thinking.png", 
      title: "Thinking Fast and Slow", 
      author: "Daniel Kahneman"
    },
    { 
      id: 2, 
      image: "/Sapiens.png", 
      title: "Sapiens", 
      author: "Yuval Noah Harari"
    },
    { 
      id: 3, 
      image: "/Start.png", 
      title: "Start With Why", 
      author: "Simon Sinek"
    },
    { 
      id: 4, 
      image: "/GoodToGreat.png", 
      title: "Good to Great", 
      author: "Jim Collins"
    },
    { 
      id: 5, 
      image: "/Outliers.png", 
      title: "Outliers", 
      author: "Malcolm Gladwell"
    },
    { 
      id: 6, 
      image: "/ZeroToOne.png", 
      title: "Zero to One", 
      author: "Peter Thiel"
    },
    { 
      id: 7, 
      image: "/PowerOfNow.png", 
      title: "The Power of Now", 
      author: "Eckhart Tolle"
    },
    { 
      id: 8, 
      image: "/4HourWork.png", 
      title: "The 4-Hour Work Week", 
      author: "Timothy Ferriss"
    }
];

const academicbooks = [
  { 
    id: 1, 
    image: "/Thinking.png", 
    title: "A Brief History of Time", 
    author: "Stephen Hawking"
  },
  { 
    id: 2, 
    image: "/Sapiens.png", 
    title: "The Selfish Gene", 
    author: "Richard Dawkins"
  },
  { 
    id: 3, 
    image: "/Start.png", 
    title: "Introduction to the Theory of Computation", 
    author: "Michael Sipser"
  },
  { 
    id: 4, 
    image: "/GoodToGreat.png", 
    title: "The Wealth of Nations", 
    author: "Adam Smith"
  },
  { 
    id: 5, 
    image: "/Outliers.png", 
    title: "The Elegant Universe", 
    author: "Brian Greene"
  },
  { 
    id: 6, 
    image: "/ZeroToOne.png", 
    title: "Flatland: A Romance of Many Dimensions", 
    author: "Edwin A. Abbott"
  },
  { 
    id: 7, 
    image: "/PowerOfNow.png", 
    title: "The Gita for Children", 
    author: "Roopa Pai"
  },
  { 
    id: 8, 
    image: "/4HourWork.png", 
    title: "The Wonder That Was India", 
    author: "A.L. Basham"
  }
];

const nonacademicbooks = [
  { 
    id: 1, 
    image: "/Thinking.png", 
    title: "A Brief History of Time", 
    author: "Stephen Hawking"
  },
  { 
    id: 2, 
    image: "/Sapiens.png", 
    title: "The Selfish Gene", 
    author: "Richard Dawkins"
  },
  { 
    id: 3, 
    image: "/Start.png", 
    title: "Introduction to the Theory of Computation", 
    author: "Michael Sipser"
  },
  { 
    id: 4, 
    image: "/GoodToGreat.png", 
    title: "The Wealth of Nations", 
    author: "Adam Smith"
  },
  { 
    id: 5, 
    image: "/Outliers.png", 
    title: "The Elegant Universe", 
    author: "Brian Greene"
  },
  { 
    id: 6, 
    image: "/ZeroToOne.png", 
    title: "Flatland: A Romance of Many Dimensions", 
    author: "Edwin A. Abbott"
  },
  { 
    id: 7, 
    image: "/PowerOfNow.png", 
    title: "The Gita for Children", 
    author: "Roopa Pai"
  },
  { 
    id: 8, 
    image: "/4HourWork.png", 
    title: "The Wonder That Was India", 
    author: "A.L. Basham"
  }
];




  return (
    <div className="StudentDashboard">
      <StudentNavBar />
      <StudentSideBar />
      
      <div className="StudentDashboard-main">
        <div className="StudentDashboard-container">
          {/* Announcements Card */}
          <div className="StudentDashboard-announcements-card">
            <h2 className="StudentDashboard-announcements-title">Announcements</h2>
            <div className="StudentDashboard-quote-container">
              <p className="StudentDashboard-quote">
                "There is more treasure in books than in all the pirate's loot on Treasure Island."
              </p>
              <p className="StudentDashboard-author">-Walt Disney</p>
            </div>
            <div className="StudentDashboard-dots">
              {[...Array(4)].map((_, index) => (
                <span key={index} className="StudentDashboard-dot"></span>
              ))}
            </div>
          </div>

          {/* New Arrivals Card */}
          <div className="StudentDashboard-newArrivals-card">
            <div className="StudentDashboard-books-grid">
              {books.map((book) => (
                <div key={book.id} className="StudentDashboard-book">
                  <img src={book.image} alt={book.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Good Morning text */}
        <div className="StudentDashboard-greeting">
          Good Morning
        </div>

        {/* Recommended Books Section */}
        <div className="StudentDashboard-recommended">
          <h2 className="StudentDashboard-recommended-title">Recommended Books</h2>
          <div className="StudentDashboard-recommended-grid">
            {recommendedBooks.map((book) => (
              <div key={book.id} className="StudentDashboard-recommended-book">
                <div className="StudentDashboard-recommended-book-image">
                  <img src={book.image} alt={book.title} />
                </div>
                <h3 className="StudentDashboard-recommended-book-title">{book.title}</h3>
                <p className="StudentDashboard-recommended-book-author">{book.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reads section */}

        <div className="StudentDashboard-recent">
          <h2 className="StudentDashboard-recent-title">Recent Reads</h2>
         <div className="StudentDashboard-recent-grid">
          {recentReads.map((book) => (
            <div key={book.id} className="StudentDashboard-recent-book">
              <div className="StudentDashboard-recent-book-image">
                <img src={book.image} alt={book.title} />
              </div>
              <h3 className="StudentDashboard-recent-book-title">{book.title}</h3>
              <p className="StudentDashboard-recent-book-author">{book.author}</p>
            </div>
          ))}
         </div>
        </div>

         {/* Acadamic Book Section */}

         <div className="StudentDashboard-academicbook">
          <h2 className="StudentDashboard-academicbook-title">Academic Books</h2>
         <div className="StudentDashboard-academicbook-grid">
          {academicbooks.map((book) => (
            <div key={book.id} className="StudentDashboard-academic-book">
              <div className="StudentDashboard-academic-book-image">
                <img src={book.image} alt={book.title} />
              </div>
              <h3 className="StudentDashboard-academic-book-title">{book.title}</h3>
              <p className="StudentDashboard-academic-book-author">{book.author}</p>
            </div>
          ))}
         </div>
        </div>

            {/* Non-Academic Book Section*/}
        <div className="StudentDashboard-nonacademicbook">
          <h2 className="StudentDashboard-nonacademicbook-title">Non-Academic Books</h2>
         <div className="StudentDashboard-nonacademicbook-grid">
          {academicbooks.map((book) => (
            <div key={book.id} className="StudentDashboard-nonacademic-book">
              <div className="StudentDashboard-nonacademic-book-image">
                <img src={book.image} alt={book.title} />
              </div>
              <h3 className="StudentDashboard-nonacademic-book-title">{book.title}</h3>
              <p className="StudentDashboard-nonacademic-book-author">{book.author}</p>
            </div>
          ))}
         </div>
        </div>  




      </div>
    </div>
  );
};

export default StudentDashboard;