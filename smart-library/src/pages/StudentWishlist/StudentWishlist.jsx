// import React from 'react';
// import StudentNavBar from '../../components/StudentNavBar';
// import StudentSidebar from '../../components/StudentSideBar';
// import './StudentWishlist.css';

// const StudentWishlist = () => {
//   return (
//     <div className="StudentWishlist">
//       <StudentSidebar />
//       <StudentNavBar />
//         <div className="StudentWishlist-content">

//           {/* Add your wishlist content here */}
//         </div>
      
//     </div>
//   );
// };

// export default StudentWishlist;


// import React, { useState } from 'react';
// import StudentNavBar from '../../components/StudentNavBar';
// import StudentSidebar from '../../components/StudentSideBar';
// import { Trash2 } from 'lucide-react';
// import './StudentWishlist.css';

// const StudentWishlist = () => {
//   const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
//   const [itemToDelete, setItemToDelete] = useState(null);

//   const [wishlistItems, setWishlistItems] = useState([
//     {
//       id: 1,
//       title: "Artificial Intelligence in Radiation Oncology",
//       author: "Dr. Lisa Chen",
//       year: "2023",
//       image: "/AI.png",
//     },
//     {
//       id: 2,
//       title: "Introduction to Web-Design",
//       author: "Sarah Johnson",
//       year: "2023",
//       image: "/WebDesign.png",
//     },
//     {
//       id: 3,
//       title: "Digital Marketing Fundamentals",
//       author: "Mike Zhang",
//       year: "2023",
//       image: "/DigitalMarketing.png",
//     },
//     {
//       id: 4,
//       title: "Data Visualization Techniques",
//       author: "Emma Anderson",
//       year: "2023",
//       image: "/DataViz.png",
//     },
//     {
//       id: 5,
//       title: "Mobile App Development Workshop",
//       author: "David Lee",
//       year: "2023",
//       image: "/MobileApp.png",
//     },
//     {
//       id: 6,
//       title: "Cloud Computing Essentials",
//       author: "Alex Rivera",
//       year: "2023",
//       image: "/CloudComputing.png",
//     },
//     {
//       id: 7,
//       title: "Cybersecurity Fundamentals",
//       author: "James Wilson",
//       year: "2023",
//       image: "/Cybersecurity.png",
//     }
//   ]);

//   const handleDelete = (item) => {
//     setItemToDelete(item);
//     setIsDeleteDialogOpen(true);
//   };

//   const confirmDelete = () => {
//     if (itemToDelete) {
//       setWishlistItems(prevItems => 
//         prevItems.filter(item => item.id !== itemToDelete.id)
//       );
//       setIsDeleteDialogOpen(false);
//       setItemToDelete(null);
//     }
//   };

//   return (
//     <div className="StudentWishlist">
//       <StudentSidebar />
//       <div className="StudentWishlist-main">
//         <StudentNavBar />
//         <div className="StudentWishlist-content">
//           <div className="StudentWishlist-grid">
//             {wishlistItems.map((item) => (
//               <div key={item.id} className="StudentWishlist-card">
//                 <img src={item.image} alt={item.title} className="StudentWishlist-image" />
//                 <div className="StudentWishlist-info">
//                   <h3>{item.title}</h3>
//                   <p>{item.author}, {item.year}</p>
//                   <div className="StudentWishlist-buttons">
//                     <button className="preview-button">Preview</button>
//                     <button 
//                       className="delete-button"
//                       onClick={() => handleDelete(item)}
//                     >
//                       <Trash2 size={20} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Custom Delete Confirmation Dialog */}
//       {isDeleteDialogOpen && (
//         <div className="delete-dialog-overlay">
//           <div className="delete-dialog">
//             <div className="delete-dialog-content">
//               <h2>Confirm Deletion</h2>
//               <p>Are you sure you want to remove "{itemToDelete?.title}" from your wishlist?</p>
//               <div className="delete-dialog-buttons">
//                 <button 
//                   className="dialog-button cancel"
//                   onClick={() => setIsDeleteDialogOpen(false)}
//                 >
//                   Back
//                 </button>
//                 <button 
//                   className="dialog-button confirm"
//                   onClick={confirmDelete}
//                 >
//                   Confirm
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentWishlist;


import React, { useState } from 'react';
import StudentNavBar from '../../components/StudentNavBar';
import StudentSidebar from '../../components/StudentSideBar';
import { Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import './StudentWishlist.css';

const StudentWishlist = () => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      title: "Artificial Intelligence in Radiation Oncology",
      author: "Dr. Lisa Chen",
      year: "2023",
      image: "/AI.png",
    },
    {
      id: 2,
      title: "Introduction to Web-Design",
      author: "Sarah Johnson",
      year: "2023",
      image: "/WebDesign.png",
    },
    {
      id: 3,
      title: "Digital Marketing Fundamentals",
      author: "Mike Zhang",
      year: "2023",
      image: "/DigitalMarketing.png",
    },
    {
      id: 4,
      title: "Data Visualization Techniques",
      author: "Emma Anderson",
      year: "2023",
      image: "/DataViz.png",
    },
    {
      id: 5,
      title: "Mobile App Development Workshop",
      author: "David Lee",
      year: "2023",
      image: "/MobileApp.png",
    },
    {
      id: 6,
      title: "Cloud Computing Essentials",
      author: "Alex Rivera",
      year: "2023",
      image: "/CloudComputing.png",
    },
    {
      id: 7,
      title: "Cybersecurity Fundamentals",
      author: "James Wilson",
      year: "2023",
      image: "/Cybersecurity.png",
    }
    // You can add more items to test pagination
  ]);

  const handleDelete = (item) => {
    setItemToDelete(item);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      setWishlistItems(prevItems => 
        prevItems.filter(item => item.id !== itemToDelete.id)
      );
      setIsDeleteDialogOpen(false);
      setItemToDelete(null);
    }
  };

  // Calculate pagination values
  const totalPages = Math.ceil(wishlistItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = wishlistItems.slice(indexOfFirstItem, indexOfLastItem);

  // Page navigation functions
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="Student-Wishlist">
      <StudentSidebar />
      <div className="Student-Wishlist-main">
        <StudentNavBar />
        <div className="Student-Wishlist-content">
          <h1 className="Student-Wishlist-heading">Wishlist</h1>
          <div className="Student-Wishlist-grid">
            {currentItems.map((item) => (
              <div key={item.id} className="Student-Wishlist-card">
                <img src={item.image} alt={item.title} className="Student-Wishlist-image" />
                <div className="Student-Wishlist-info">
                  <h3>{item.title}</h3>
                  <p>{item.author}, {item.year}</p>
                  <div className="Student-Wishlist-buttons">
                    <button className="preview-button">Preview</button>
                    <button 
                      className="delete-button"
                      onClick={() => handleDelete(item)}
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {wishlistItems.length > 0 && (
            <div className="Student-Wishlist-pagination">
              <button 
                className="pagination-button" 
                onClick={goToPreviousPage} 
                disabled={currentPage === 1}
              >
                <ChevronLeft size={20} />
              </button>
              <span className="pagination-info">
                Page {currentPage} of {totalPages}
              </span>
              <button 
                className="pagination-button" 
                onClick={goToNextPage} 
                disabled={currentPage === totalPages}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Custom Delete Confirmation Dialog */}
      {isDeleteDialogOpen && (
        <div className="delete-dialog-overlay">
          <div className="delete-dialog">
            <div className="delete-dialog-content">
              <h2>Confirm Deletion</h2>
              <p>Are you sure you want to remove "{itemToDelete?.title}" from your wishlist?</p>
              <div className="delete-dialog-buttons">
                <button 
                  className="dialog-button cancel"
                  onClick={() => setIsDeleteDialogOpen(false)}
                >
                  Back
                </button>
                <button 
                  className="dialog-button confirm"
                  onClick={confirmDelete}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentWishlist;