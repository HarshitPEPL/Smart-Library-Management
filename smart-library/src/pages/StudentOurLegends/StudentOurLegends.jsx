// import React from 'react';
// import StudentNavBar from '../../components/StudentNavBar';
// import StudentSidebar from '../../components/StudentSideBar';
// import './StudentOurLegends.css';

// const StudentOurLegends = () => {
//   return (
//     <div className="StudentOurLegends-container">
//       <StudentSidebar />
//       <StudentNavBar />
//         <div className="StudentOurLegends-main">
//           {/* Add your legends content here */}
//         </div>
//     </div>
//   );
// };

// export default StudentOurLegends;


import React, { useState } from 'react';
import StudentSidebar from '../../components/StudentSideBar';
import StudentNavBar from '../../components/StudentNavBar';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import './StudentOurLegends.css';

const StudentOurLegends = () => {
  const initialLegends = [
    {
      id: 1,
      title: "Albert Einstein",
      field: "Physics",
      year: "1879-1955",
      image: "/Einstein.png",
      categories: ["Theoretical Physics"],
      isWishlisted: true
    },
    {
      id: 2,
      title: "Marie Curie",
      field: "Chemistry & Physics",
      year: "1867-1934",
      image: "/Curie.png",
      categories: ["Radioactivity"],
      isWishlisted: false
    },
    {
      id: 3,
      title: "Isaac Newton",
      field: "Physics & Mathematics",
      year: "1643-1727",
      image: "/Newton.png",
      categories: ["Classical Mechanics"],
      isWishlisted: false
    },
    {
      id: 4,
      title: "Charles Darwin",
      field: "Biology",
      year: "1809-1882",
      image: "/Darwin.png",
      categories: ["Evolution"],
      isWishlisted: true
    },
    {
      id: 5,
      title: "Nikola Tesla",
      field: "Electrical Engineering",
      year: "1856-1943",
      image: "/Tesla.png",
      categories: ["Electricity"],
      isWishlisted: false
    },
    {
      id: 6,
      title: "Leonardo da Vinci",
      field: "Polymath",
      year: "1452-1519",
      image: "/DaVinci.png",
      categories: ["Art", "Science"],
      isWishlisted: false
    },
    {
      id: 7,
      title: "Galileo Galilei",
      field: "Astronomy",
      year: "1564-1642",
      image: "/Galileo.png",
      categories: ["Astronomy"],
      isWishlisted: true
    },
    {
      id: 8,
      title: "Ada Lovelace",
      field: "Mathematics",
      year: "1815-1852",
      image: "/Lovelace.png",
      categories: ["Computing"],
      isWishlisted: false
    },
    {
      id: 9,
      title: "Stephen Hawking",
      field: "Theoretical Physics",
      year: "1942-2018",
      image: "/Hawking.png",
      categories: ["Cosmology"],
      isWishlisted: false
    },
    {
      id: 10,
      title: "Rosalind Franklin",
      field: "Chemistry",
      year: "1920-1958",
      image: "/Franklin.png",
      categories: ["Molecular Biology"],
      isWishlisted: false
    }
  ];

  const [legends, setLegends] = useState(initialLegends);
  const [currentPage, setCurrentPage] = useState(1);
  const legendsPerPage = 9;

  const toggleWishlist = (legendId) => {
    setLegends(prevLegends =>
      prevLegends.map(legend =>
        legend.id === legendId
          ? { ...legend, isWishlisted: !legend.isWishlisted }
          : legend
      )
    );
  };

  // Calculate pagination
  const indexOfLastLegend = currentPage * legendsPerPage;
  const indexOfFirstLegend = indexOfLastLegend - legendsPerPage;
  const currentLegends = legends.slice(indexOfFirstLegend, indexOfLastLegend);
  const totalPages = Math.ceil(legends.length / legendsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="StudentOurLegend">
      <StudentSidebar />
      <div className="StudentOurLegend-main">
        <StudentNavBar />
        <div className="StudentOurLegend-content">
          <div className="StudentOurLegend-header">
            <div className="StudentOurLegend-title-header">Legends</div>
            <div className="StudentOurLegend-category-header">Category</div>
            <div className="StudentOurLegend-actions-header"></div>
          </div>

          <div className="StudentOurLegend-list">
            {currentLegends.map((legend) => (
              <div key={legend.id} className="StudentOurLegend-item">
                <div className="StudentOurLegend-title-section">
                  <img src={legend.image} alt={legend.title} className="StudentOurLegend-image" />
                  <div className="StudentOurLegend-info">
                    <h3>{legend.title}</h3>
                    <p>{legend.field}, {legend.year}</p>
                  </div>
                </div>

                <div className="StudentOurLegend-categories">
                  {legend.categories.map((category, index) => (
                    <div key={index} className="StudentOurLegend-category">{category}</div>
                  ))}
                </div>

                <div className="StudentOurLegend-actions">
                  <button 
                    className={`StudentOurLegend-wishlist-button ${legend.isWishlisted ? 'wishlisted' : ''}`}
                    onClick={() => toggleWishlist(legend.id)}
                    aria-label={legend.isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart 
                      fill={legend.isWishlisted ? "#ff4747" : "none"} 
                      color={legend.isWishlisted ? "#ff4747" : "#000"} 
                    />
                  </button>
                  <button className="StudentOurLegend-preview-button">
                    Preview
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="StudentOurLegend-pagination">
            <button 
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="StudentOurLegend-pagination-button"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="StudentOurLegend-pagination-info">
              Page {currentPage} of {totalPages}
            </span>
            <button 
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="StudentOurLegend-pagination-button"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentOurLegends;