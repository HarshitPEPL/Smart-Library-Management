
import React, { useState, useEffect, useRef } from 'react';
import StateAdminNavbar from '../../../components/StateAdmin/StateAdminNavbar/StateAdminNavbar';
import StateAdminSidebar from '../../../components/StateAdmin/StateAdminSidebar/StateAdminSidebar';
import './StateTotalSchools.css';

const StateTotalSchools = () => {
  // School data
  const schoolsData = [
    { id: "0021", name: "Doon Public School", type: "Primary", address: "Dehradun, Uttarakhand", assets: 42, teachers: 15, students: 362, status: "Active" },
    { id: "0022", name: "Valley View School", type: "Primary", address: "Mussoorie, Uttarakhand", assets: 38, teachers: 12, students: 284, status: "Active" },
    { id: "0023", name: "Himalayan International School", type: "Primary", address: "Haridwar, Uttarakhand", assets: 45, teachers: 18, students: 410, status: "Active" },
    { id: "0024", name: "Uttarakhand Public School", type: "Secondary", address: "Nainital, Uttarakhand", assets: 56, teachers: 22, students: 524, status: "Active" },
    { id: "0025", name: "Garhwal Academy", type: "Secondary", address: "Tehri, Uttarakhand", assets: 40, teachers: 16, students: 374, status: "Inactive" },
    { id: "0026", name: "Uttaranchal Vidyapeeth", type: "Secondary", address: "Almora, Uttarakhand", assets: 38, teachers: 17, students: 328, status: "Inactive" },
    { id: "0027", name: "Kumaon International School", type: "Secondary", address: "Pithoragarh, Uttarakhand", assets: 52, teachers: 20, students: 424, status: "Inactive" },
    { id: "0028", name: "Rishikesh Academy", type: "Higher Secondary", address: "Rishikesh, Uttarakhand", assets: 65, teachers: 25, students: 612, status: "Active" },
    { id: "0029", name: "Char Dham Vidyalaya", type: "Higher Secondary", address: "Chamoli, Uttarakhand", assets: 48, teachers: 19, students: 385, status: "Active" },
    { id: "0030", name: "Gangotri Public School", type: "Higher Secondary", address: "Uttarkashi, Uttarakhand", assets: 55, teachers: 24, students: 435, status: "Active" },
    { id: "0031", name: "Yamunotri Academy", type: "Primary", address: "Rudraprayag, Uttarakhand", assets: 34, teachers: 14, students: 275, status: "Active" },
    { id: "0032", name: "Kedarnath Vidya Mandir", type: "Primary", address: "Pauri, Uttarakhand", assets: 39, teachers: 16, students: 312, status: "Inactive" },
    { id: "0033", name: "Badrinath International School", type: "Secondary", address: "Bageshwar, Uttarakhand", assets: 47, teachers: 20, students: 390, status: "Active" },
    { id: "0034", name: "Alaknanda Public School", type: "Secondary", address: "Champawat, Uttarakhand", assets: 43, teachers: 18, students: 345, status: "Active" },
    { id: "0035", name: "Dev Bhumi Academy", type: "Higher Secondary", address: "Udham Singh Nagar, Uttarakhand", assets: 58, teachers: 26, students: 530, status: "Active" },
    { id: "0036", name: "Mandakini International School", type: "Higher Secondary", address: "Dehradun, Uttarakhand", assets: 62, teachers: 28, students: 575, status: "Inactive" },
    { id: "0037", name: "Nanda Devi Public School", type: "Primary", address: "Nainital, Uttarakhand", assets: 36, teachers: 15, students: 290, status: "Active" },
    { id: "0038", name: "Pindari Academy", type: "Secondary", address: "Almora, Uttarakhand", assets: 44, teachers: 19, students: 370, status: "Active" },
    { id: "0039", name: "Bhagirathi Vidyapeeth", type: "Higher Secondary", address: "Haridwar, Uttarakhand", assets: 60, teachers: 25, students: 545, status: "Active" },
    { id: "0040", name: "Jim Corbett School", type: "Primary", address: "Ramnagar, Uttarakhand", assets: 35, teachers: 16, students: 305, status: "Inactive" }
  ];

  // State variables
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);
  const schoolsPerPage = 9;
  const [filteredSchools, setFilteredSchools] = useState(schoolsData);
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  // Filter schools based on active tab and search term
  useEffect(() => {
    let result = schoolsData;
    
    // Filter by school type
    if (activeTab !== 'All') {
      result = result.filter(school => school.type === activeTab);
    }
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(school => 
        school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(result);
    } else {
      setSearchResults([]);
    }
    
    setFilteredSchools(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [activeTab, searchTerm]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowDropdown(e.target.value.length > 0);
  };

  // Handle dropdown item click
  const handleDropdownItemClick = (schoolName) => {
    setSearchTerm(schoolName);
    setShowDropdown(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  // Get current schools for pagination
  const indexOfLastSchool = currentPage * schoolsPerPage;
  const indexOfFirstSchool = indexOfLastSchool - schoolsPerPage;
  const currentSchools = filteredSchools.slice(indexOfFirstSchool, indexOfLastSchool);
  const totalPages = Math.ceil(filteredSchools.length / schoolsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle export to Excel
  const handleExportExcel = () => {
    alert("Exporting to Excel...");
    // Implement actual export functionality here
  };

  return (
    <div className="State-Total-Schools-Container">
      <StateAdminNavbar />
      <div className="State-Total-Schools-Content">
        <StateAdminSidebar />
        <div className="State-Total-Schools-Main">
          <div className="State-Total-Schools-Header">
            <h1>Total Schools</h1>
            <div className="State-Total-Schools-Search" ref={searchRef}>
              <input 
                type="text" 
                placeholder="Search schools..." 
                value={searchTerm}
                onChange={handleSearchChange}
              />
              {showDropdown && searchResults.length > 0 && (
                <div className="State-Total-Schools-Dropdown">
                  {searchResults.slice(0, 5).map((school) => (
                    <div 
                      key={school.id} 
                      className="State-Total-Schools-Dropdown-Item"
                      onClick={() => handleDropdownItemClick(school.name)}
                    >
                      <span>{school.name}</span>
                      <span className="school-id">{school.id}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="State-Total-Schools-Tabs">
            <div className="State-Total-Schools-Filter-Buttons">
              <button 
                className={activeTab === 'All' ? 'active' : ''} 
                onClick={() => setActiveTab('All')}
              >
                All
              </button>
              <button 
                className={activeTab === 'Primary' ? 'active' : ''} 
                onClick={() => setActiveTab('Primary')}
              >
                Primary
              </button>
              <button 
                className={activeTab === 'Secondary' ? 'active' : ''} 
                onClick={() => setActiveTab('Secondary')}
              >
                Secondary
              </button>
              <button 
                className={activeTab === 'Higher Secondary' ? 'active' : ''} 
                onClick={() => setActiveTab('Higher Secondary')}
              >
                Higher Secondary
              </button>
            </div>
            <button className="State-Total-Schools-Export-Button" onClick={handleExportExcel}>
              Export Excel
            </button>
          </div>
          
          <div className="State-Total-Schools-Table">
            <table>
              <thead>
                <tr>
                  <th>School Code</th>
                  <th>School Name</th>
                  <th>Address</th>
                  <th>No. of Assets</th>
                  <th>No. of Teachers</th>
                  <th>No. of Students</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {currentSchools.map((school) => (
                  <tr key={school.id}>
                    <td>{school.id}</td>
                    <td>{school.name}</td>
                    <td>{school.address}</td>
                    <td>{school.assets}</td>
                    <td>{school.teachers}</td>
                    <td>{school.students}</td>
                    <td className={`status ${school.status.toLowerCase()}`}>{school.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="State-Total-Schools-Pagination">
            <button 
              disabled={currentPage === 1} 
              onClick={() => paginate(currentPage - 1)}
            >
              &laquo;
            </button>
            {[...Array(totalPages).keys()].map(number => (
              <button
                key={number + 1}
                className={currentPage === number + 1 ? 'active' : ''}
                onClick={() => paginate(number + 1)}
              >
                {number + 1}
              </button>
            ))}
            <button 
              disabled={currentPage === totalPages} 
              onClick={() => paginate(currentPage + 1)}
            >
              &raquo;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateTotalSchools;