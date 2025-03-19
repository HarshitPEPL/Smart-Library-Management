// import React from 'react';
// import StateAdminNavbar from '../../../components/StateAdmin/StateAdminNavbar/StateAdminNavbar';
// import StateAdminSidebar from '../../../components/StateAdmin/StateAdminSidebar/StateAdminSidebar';
// import './StateTotalDistricts.css';

// const StateTotalDistricts = () => {
//   return (
//     <div className="State-Total-Districts-Container">
//       <StateAdminNavbar />
//       <StateAdminSidebar />
//     </div>
//   );
// };

// export default StateTotalDistricts;


import React from 'react';
import StateAdminNavbar from '../../../components/StateAdmin/StateAdminNavbar/StateAdminNavbar';
import StateAdminSidebar from '../../../components/StateAdmin/StateAdminSidebar/StateAdminSidebar';
import './StateTotalDistricts.css';

const StateTotalDistricts = () => {
  // This would come from API in the future
  const districtsData = [
    { name: "Dehradun", totalBlocks: 6, totalSchools: 30 },
    { name: "Haridwar", totalBlocks: 6, totalSchools: 25 },
    { name: "Chamoli", totalBlocks: 6, totalSchools: 21 },
    { name: "Rudraprayag", totalBlocks: 6, totalSchools: 26 },
    { name: "Pauri Garhwal", totalBlocks: 6, totalSchools: 31 },
    { name: "Tehri Garhwal", totalBlocks: 6, totalSchools: 21 },
    { name: "Uttarkashi", totalBlocks: 6, totalSchools: 17 },
    { name: "Almora", totalBlocks: 6, totalSchools: 23 },
    { name: "Nainital", totalBlocks: 6, totalSchools: 16 },
    { name: "Pithoragarh", totalBlocks: 6, totalSchools: 13 },
    { name: "Udham Singh Nagar", totalBlocks: 6, totalSchools: 19 },
    { name: "Bageshwar", totalBlocks: 6, totalSchools: 12 },
    { name: "Champawat", totalBlocks: 6, totalSchools: 19 },
  ];

  const handleDistrictClick = (districtName) => {
    // This will be used for navigation or action when a district card is clicked
    console.log(`District ${districtName} clicked`);
    // You can add navigation logic here
  };

  return (
    <div className="State-Total-Districts-Container">
      <StateAdminNavbar />
      <div className="State-Total-Districts-Main-Content">
        <StateAdminSidebar />
        <div className="State-Total-Districts-Content">
          <h1 className="State-Total-Districts-Title">Total Districts</h1>

          <div className="State-Total-Districts-Grid">
            {districtsData.map((district, index) => (
              <div 
                key={index} 
                className="State-Total-Districts-Card"
                onClick={() => handleDistrictClick(district.name)}
              >
                <div className="State-Total-Districts-Header">
                  <div className="State-Total-Districts-Location-Icon">
                   <img src="/Basics/Location Icons/DistrictLocater.png" alt="Location" />
                  </div>
                  <h3 className="State-Total-Districts-Name">{district.name}</h3>
                </div>
                
                <div className="State-Total-Districts-Stats">
                  <div className="State-Total-Districts-Stat-Column">
                    <p className="State-Total-Districts-Stat-Label">Total Block</p>
                    <div className="State-Total-Districts-Stat-Value">{district.totalBlocks}</div>
                  </div>
                  <div className="State-Total-Districts-Stat-Column">
                    <p className="State-Total-Districts-Stat-Label">Total Schools</p>
                    <div className="State-Total-Districts-Stat-Value">{district.totalSchools}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateTotalDistricts;