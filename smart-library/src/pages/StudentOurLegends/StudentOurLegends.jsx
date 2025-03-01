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
      title: "Govind Ballabh Pant",
      field: "Govind Ballabh Pant, born in Almora, Uttarakhand",
      image: "/GovindBallabhPant.png",
      categories: ["Writer"],
      isWishlisted: true
    },
    {
      id: 2,
      title: "Chandra Singh Garhwali",
      field: "Hailing from the Garhwal region, Chandra Singh Garhwali",
      image: "/ChandraSinghGarhwali.png",
      categories: ["Indian Soldier"],
      isWishlisted: false
    },
    {
      id: 3,
      title: "Bachendri Pal",
      field: "First Indian woman to conquer Mount Everest.",
      image: "/BachendriPal.png",
      categories: ["Achievements"],
      isWishlisted: false
    },
    {
      id: 4,
      title: "Kashi Singh Airy",
      field: "Kashi Singh Airy, a freedom fighter from Pauri Garhwal",
      image: "/KashiSinghAiry.png",
      categories: ["Political Leader"],
      isWishlisted: true
    },
    {
      id: 5,
      title: "Maithani Shyam Lal Bahuguna",
      field: "Maithani Shyam Lal Bahuguna’s commitment to the cause earned",
      image: "/MaithaniShyamLalBahuguna.png",
      categories: ["Freedom Fighter"],
      isWishlisted: false
    },
    {
      id: 6,
      title: "Koti Rana",
      field: "Significant role in the struggle for independence in the Kumaon region..",
      image: "/KotiRana.png",
      categories: ["Freedom Movement Organization"],
      isWishlisted: false
    },
    {
      id: 7,
      title: "Shridhar Pant",
      field: "Shridhar Pant, a freedom fighter from Almora...",
      image: "/ShridharPant.png",
      categories: ["Freedom Fighter"],
      isWishlisted: true
    },
    {
      id: 8,
      title: "Sunder lal Bahuguna",
      field: "Sunderlal Bahuguna was an Indian environmentalist and Chipko movement leader",
      image: "/SunderlalBahuguna.png",
      categories: ["Social Movements"],
      isWishlisted: false
    },
    {
      id: 9,
      title: "Kashi Singh Airy",
      field: "Kashi Singh Airy, a freedom fighter from Pauri Garhwal",
      image: "/KashiSinghAiry.png",
      categories: ["Political Leader"],
      isWishlisted: false
    },
    {
      id: 10,
      title: "Govind Ballabh Pant",
      field: "Govind Ballabh Pant, born in Almora, Uttarakhand",
      image: "/GovindBallabhPant.png",
      categories: ["Writer"],
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