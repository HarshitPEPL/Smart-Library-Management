// import React, { useState } from 'react';
// import StudentSidebar from '../../components/StudentSideBar';
// import StudentNavBar from '../../components/StudentNavBar';
// import { Heart } from 'lucide-react';
// import './StudentVC.css';

// const StudentVC = () => {
//   const initialContent = [
//     {
//       id: 1,
//       title: "Introduction to Web Design",
//       creator: "Sarah Johnson",
//       year: "2023",
//       image: "/WebDesign.png",
//       categories: ["Web Development", "UI/UX"],
//       formats: {
//         video: true,
//         interactive: false, /* INTERACTIVE is Ebook, and PRESENTATION is Audiobook*/
//         presentation: false
//       },
//       isWishlisted: true
//     },
//     {
//       id: 2,
//       title: "Digital Marketing Fundamentals",
//       creator: "Mike Zhang",
//       year: "2023",
//       image: "/DigitalMarketing.png",
//       categories: ["Marketing", "Social Media"],
//       formats: {
//         video: true,
//         interactive: false,
//         presentation: false
//       },
//       isWishlisted: false
//     },
//     {
//       id: 3,
//       title: "Data Visualization Techniques",
//       creator: "Emma Anderson",
//       year: "2023",
//       image: "/DataViz.png",
//       categories: ["Data Science", "Analytics"],
//       formats: {
//         video: true,
//         interactive: false,
//         presentation: false
//       },
//       isWishlisted: false
//     },
//     {
//       id: 4,
//       title: "Mobile App Development Workshop",
//       creator: "David Lee",
//       year: "2023",
//       image: "/MobileApp.png",
//       categories: ["Mobile Development", "iOS/Android"],
//       formats: {
//         video: true,
//         interactive: false,
//         presentation: false
//       },
//       isWishlisted: true
//     },
//     {
//       id: 5,
//       title: "Cloud Computing Essentials",
//       creator: "Alex Rivera",
//       year: "2023",
//       image: "/CloudComputing.png",
//       categories: ["Cloud", "DevOps"],
//       formats: {
//         video: true,
//         interactive: false,
//         presentation: false
//       },
//       isWishlisted: false
//     },
//     {
//       id: 6,
//       title: "Artificial Intelligence in Practice",
//       creator: "Dr. Lisa Chen",
//       year: "2023",
//       image: "/AI.png",
//       categories: ["AI", "Machine Learning"],
//       formats: {
//         video: true,
//         interactive: false,
//         presentation: false
//       },
//       isWishlisted: false
//     },
//     {
//       id: 7,
//       title: "Cybersecurity Fundamentals",
//       creator: "James Wilson",
//       year: "2023",
//       image: "/Cybersecurity.png",
//       categories: ["Security", "Network"],
//       formats: {
//         video: true,
//         interactive: false,
//         presentation: false
//       },
//       isWishlisted: true
//     },
//     {
//       id: 8,
//       title: "Blockchain Technology",
//       creator: "Patricia Brown",
//       year: "2023",
//       image: "/Blockchain.png",
//       categories: ["Blockchain", "Cryptocurrency"],
//       formats: {
//         video: true,
//         interactive: false,
//         presentation: false
//       },
//       isWishlisted: false
//     },
//     {
//       id: 9,
//       title: "Game Development Basics",
//       creator: "Ryan Martinez",
//       year: "2023",
//       image: "/GameDev.png",
//       categories: ["Game Development", "Unity"],
//       formats: {
//         video: true,
//         interactive: false,
//         presentation: false
//       },
//       isWishlisted: false
//     },
//     {
//       id: 10,
//       title: "3D Modeling and Animation",
//       creator: "Sophie Taylor",
//       year: "2023",
//       image: "/3DModeling.png",
//       categories: ["3D Graphics", "Animation"],
//       formats: {
//         video: true,
//         interactive: false,
//         presentation: false
//       },
//       isWishlisted: false
//     }
//   ];

//   const [content, setContent] = useState(initialContent);

//   const toggleWishlist = (contentId) => {
//     setContent(prevContent =>
//       prevContent.map(item =>
//         item.id === contentId
//           ? { ...item, isWishlisted: !item.isWishlisted }
//           : item
//       )
//     );
//   };

//   return (
//     <div className="Student-vc">
//       <StudentSidebar />
//       <div className="Student-vc-main">
//         <StudentNavBar />
//         <div className="Student-vc-content">
//           <div className="Student-vc-header">
//             <div className="Student-vc-title-header">Title</div>
//             <div className="Student-vc-category-header">Category</div>
//             <div className="Student-vc-format-header">Available Format</div>
//             <div className="Student-vc-actions-header"></div>
//           </div>

//           <div className="Student-vc-list">
//             {content.map((item) => (
//               <div key={item.id} className="Student-vc-item">
//                 <div className="Student-vc-title-section">
//                   <img src={item.image} alt={item.title} className="Student-vc-image" />
//                   <div className="Student-vc-info">
//                     <h3>{item.title}</h3>
//                     <p>{item.creator}, {item.year}</p>
//                   </div>
//                 </div>

//                 <div className="Student-vc-categories">
//                   {item.categories.map((category, index) => (
//                     <div key={index} className="Student-vc-category">{category}</div>
//                   ))}
//                 </div>

//                 <div className="Student-vc-formats">
//                   <div className={`Student-vc-format ${item.formats.video ? 'available' : 'unavailable'}`}>
//                     Video
//                   </div>
//                   <div className={`Student-vc-format ${item.formats.interactive ? 'available' : 'unavailable'}`}>
//                     E-Book
//                   </div>
//                   <div className={`Student-vc-format ${item.formats.presentation ? 'available' : 'unavailable'}`}>
//                     Audio-Book
//                   </div>
//                 </div>

//                 <div className="Student-vc-actions">
//                   <button 
//                     className={`Student-vc-wishlist-button ${item.isWishlisted ? 'wishlisted' : ''}`}
//                     onClick={() => toggleWishlist(item.id)}
//                     aria-label={item.isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
//                   >
//                     <Heart 
//                       fill={item.isWishlisted ? "#ff4747" : "none"} 
//                       color={item.isWishlisted ? "#ff4747" : "#000"} 
//                     />
//                   </button>
//                   <button className="Student-vc-preview-button">Preview</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentVC;



import React, { useState } from 'react';
import StudentSidebar from '../../components/StudentSideBar';
import StudentNavBar from '../../components/StudentNavBar';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import './StudentVC.css';

const ITEMS_PER_PAGE = 9;

const StudentVC = () => {
  const initialContent = [
    {
      id: 1,
      title: "Introduction to Web Design",
      creator: "Sarah Johnson",
      year: "2023",
      image: "/WebDesign.png",
      categories: ["Web Development", "UI/UX"],
      formats: {
        video: true,
        interactive: false, /* INTERACTIVE is Ebook, and PRESENTATION is Audiobook*/
        presentation: false
      },
      isWishlisted: true
    },
    {
      id: 2,
      title: "Digital Marketing Fundamentals",
      creator: "Mike Zhang",
      year: "2023",
      image: "/DigitalMarketing.png",
      categories: ["Marketing", "Social Media"],
      formats: {
        video: true,
        interactive: false,
        presentation: false
      },
      isWishlisted: false
    },
    {
      id: 3,
      title: "Data Visualization Techniques",
      creator: "Emma Anderson",
      year: "2023",
      image: "/DataViz.png",
      categories: ["Data Science", "Analytics"],
      formats: {
        video: true,
        interactive: false,
        presentation: false
      },
      isWishlisted: false
    },
    {
      id: 4,
      title: "Mobile App Development Workshop",
      creator: "David Lee",
      year: "2023",
      image: "/MobileApp.png",
      categories: ["Mobile Development", "iOS/Android"],
      formats: {
        video: true,
        interactive: false,
        presentation: false
      },
      isWishlisted: true
    },
    {
      id: 5,
      title: "Cloud Computing Essentials",
      creator: "Alex Rivera",
      year: "2023",
      image: "/CloudComputing.png",
      categories: ["Cloud", "DevOps"],
      formats: {
        video: true,
        interactive: false,
        presentation: false
      },
      isWishlisted: false
    },
    {
      id: 6,
      title: "Artificial Intelligence in Practice",
      creator: "Dr. Lisa Chen",
      year: "2023",
      image: "/AI.png",
      categories: ["AI", "Machine Learning"],
      formats: {
        video: true,
        interactive: false,
        presentation: false
      },
      isWishlisted: false
    },
    {
      id: 7,
      title: "Cybersecurity Fundamentals",
      creator: "James Wilson",
      year: "2023",
      image: "/Cybersecurity.png",
      categories: ["Security", "Network"],
      formats: {
        video: true,
        interactive: false,
        presentation: false
      },
      isWishlisted: true
    },
    {
      id: 8,
      title: "Blockchain Technology",
      creator: "Patricia Brown",
      year: "2023",
      image: "/Blockchain.png",
      categories: ["Blockchain", "Cryptocurrency"],
      formats: {
        video: true,
        interactive: false,
        presentation: false
      },
      isWishlisted: false
    },
    {
      id: 9,
      title: "Game Development Basics",
      creator: "Ryan Martinez",
      year: "2023",
      image: "/GameDev.png",
      categories: ["Game Development", "Unity"],
      formats: {
        video: true,
        interactive: false,
        presentation: false
      },
      isWishlisted: false
    },
    {
      id: 10,
      title: "3D Modeling and Animation",
      creator: "Sophie Taylor",
      year: "2023",
      image: "/3DModeling.png",
      categories: ["3D Graphics", "Animation"],
      formats: {
        video: true,
        interactive: false,
        presentation: false
      },
      isWishlisted: false
    }
  ];

  const [content, setContent] = useState(initialContent);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(content.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = content.slice(startIndex, endIndex);

  const toggleWishlist = (contentId) => {
    setContent(prevContent =>
      prevContent.map(item =>
        item.id === contentId
          ? { ...item, isWishlisted: !item.isWishlisted }
          : item
      )
    );
  };

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className="Student-vc">
      <StudentSidebar />
      <div className="Student-vc-main">
        <StudentNavBar />
        <div className="Student-vc-content">
          <div className="Student-vc-header">
            <div className="Student-vc-title-header">Title</div>
            <div className="Student-vc-category-header">Category</div>
            <div className="Student-vc-format-header">Available Format</div>
            <div className="Student-vc-actions-header">Actions</div>
          </div>

          <div className="Student-vc-list">
            {currentItems.map((item) => (
              <div key={item.id} className="Student-vc-item">
                <div className="Student-vc-title-section">
                  <img src={item.image} alt={item.title} className="Student-vc-image" />
                  <div className="Student-vc-info">
                    <h3>{item.title}</h3>
                    <p>{item.creator}, {item.year}</p>
                  </div>
                </div>

                <div className="Student-vc-categories">
                  {item.categories.map((category, index) => (
                    <div key={index} className="Student-vc-category">{category}</div>
                  ))}
                </div>

                <div className="Student-vc-formats">
                  <div className={`Student-vc-format ${item.formats.video ? 'available' : 'unavailable'}`}>
                    Video
                  </div>
                  <div className={`Student-vc-format ${item.formats.interactive ? 'available' : 'unavailable'}`}>
                    E-Book
                  </div>
                  <div className={`Student-vc-format ${item.formats.presentation ? 'available' : 'unavailable'}`}>
                    Audio-Book
                  </div>
                </div>

                <div className="Student-vc-actions">
                  <button 
                    className={`Student-vc-wishlist-button ${item.isWishlisted ? 'wishlisted' : ''}`}
                    onClick={() => toggleWishlist(item.id)}
                  >
                    <Heart 
                      fill={item.isWishlisted ? "#ff4747" : "none"} 
                      color={item.isWishlisted ? "#ff4747" : "#000"} 
                    />
                  </button>
                  <button className="Student-vc-preview-button">Preview</button>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination-controls">
              <button 
                onClick={goToPrevPage} 
                disabled={currentPage === 1}
                className="pagination-button"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="pagination-info">
                Page {currentPage} of {totalPages}
              </span>
              <button 
                onClick={goToNextPage} 
                disabled={currentPage === totalPages}
                className="pagination-button"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentVC;