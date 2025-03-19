// import React from 'react';
// import StateAdminNavbar from '../../../components/StateAdmin/StateAdminNavbar/StateAdminNavbar';
// import StateAdminSidebar from '../../../components/StateAdmin/StateAdminSidebar/StateAdminSidebar';
// import './StateBorrowReturn.css';

// const StateBorrowReturn = () => {
//   return (
//     <div className="State-Borrow-Return-Container">
//       <StateAdminNavbar />
//       <StateAdminSidebar />
//     </div>
//   );
// };

// export default StateBorrowReturn;



import React, { useState, useEffect } from 'react';
import StateAdminNavbar from '../../../components/StateAdmin/StateAdminNavbar/StateAdminNavbar';
import StateAdminSidebar from '../../../components/StateAdmin/StateAdminSidebar/StateAdminSidebar';
import './StateBorrowReturn.css';

const StateBorrowReturn = () => {
  // Districts and blocks of Uttarakhand
  const districts = [
    'All Districts',
    'Almora',
    'Bageshwar',
    'Chamoli',
    'Champawat',
    'Dehradun',
    'Haridwar',
    'Nainital',
    'Pauri Garhwal',
    'Pithoragarh',
    'Rudraprayag',
    'Tehri Garhwal',
    'Udham Singh Nagar',
    'Uttarkashi'
  ];

  const blocks = {
    'All Districts': ['All Blocks'],
    'Almora': ['Bhikiasen', 'Chaukhutiya', 'Dwarahat', 'Hawalbagh', 'Lamgara', 'Salt', 'Syalde', 'Tarikhet'],
    'Bageshwar': ['Bageshwar', 'Kapkot', 'Garur'],
    'Chamoli': ['Dasoli', 'Ghat', 'Joshimath', 'Karnaprayag', 'Pokhari', 'Tharali'],
    'Champawat': ['Barakot', 'Champawat', 'Pati', 'Lohaghat'],
    'Dehradun': ['Chakrata', 'Doiwala', 'Kalsi', 'Raipur', 'Sahaspur', 'Vikasnagar'],
    'Haridwar': ['Bhagwanpur', 'Laksar', 'Khanpur', 'Narsan', 'Roorkee', 'Bahadarabad'],
    'Nainital': ['Betalghat', 'Dhari', 'Haldwani', 'Kotabagh', 'Okhalkanda', 'Ramnagar', 'Ramgarh', 'Nainital'],
    'Pauri Garhwal': ['Dugadda', 'Ekeshwar', 'Khirsu', 'Kot', 'Nainidanda', 'Pauri', 'Pabo', 'Thalisain', 'Yamkeshwar'],
    'Pithoragarh': ['Berinag', 'Didihat', 'Dharchula', 'Gangolihaat', 'Kanalicheena', 'Munsiari', 'Pithoragarh'],
    'Rudraprayag': ['Jakholi', 'Rudraprayag', 'Ukhimath'],
    'Tehri Garhwal': ['Bhilangana', 'Chamba', 'Devprayag', 'Jakhnidhar', 'Kirtinagar', 'Pratapnagar', 'Thauldhar', 'Tehri'],
    'Udham Singh Nagar': ['Bazpur', 'Gadarpur', 'Jaspur', 'Kashipur', 'Khatima', 'Rudrapur', 'Sitarganj'],
    'Uttarkashi': ['Bhatwari', 'Chinyalisaur', 'Dunda', 'Mori', 'Naugaon', 'Purola', 'Rajgarhi']
  };

  // Sample schools data
  const schoolsData = [
    // Existing data
    { id: 1, name: 'Govt. Girls Inter College', location: 'Chakrata, Dehradun', totalBooks: 950, booksBorrowed: 94, borrowingFrequency: 94, status: 'Active' },
    { id: 2, name: 'Govt. Inter College', location: 'Chakrata, Dehradun', totalBooks: 850, booksBorrowed: 58, borrowingFrequency: 58, status: 'Active' },
    { id: 3, name: 'G.I.C. Patalgaon', location: 'Chakrata, Dehradun', totalBooks: 880, booksBorrowed: 88, borrowingFrequency: 88, status: 'Inactive' },
    { id: 4, name: 'G.I.C. Gururabanj', location: 'Chakrata, Dehradun', totalBooks: 900, booksBorrowed: 76, borrowingFrequency: 76, status: 'Active' },
    { id: 5, name: 'GOVT Girls Inter College', location: 'Chakrata, Dehradun', totalBooks: 890, booksBorrowed: 82, borrowingFrequency: 82, status: 'Inactive' },
    { id: 6, name: 'G.I.C Uttarkashi', location: 'Bhatwari, Uttarkashi', totalBooks: 920, booksBorrowed: 91, borrowingFrequency: 91, status: 'Active' },
    { id: 7, name: 'GGIC Ramnagar', location: 'Ramnagar, Nainital', totalBooks: 910, booksBorrowed: 67, borrowingFrequency: 67, status: 'Active' },
    { id: 8, name: 'Govt. Inter College Devprayag', location: 'Devprayag, Tehri Garhwal', totalBooks: 750, booksBorrowed: 55, borrowingFrequency: 55, status: 'Active' },
    { id: 9, name: 'G.I.C. Munsiari', location: 'Munsiari, Pithoragarh', totalBooks: 830, booksBorrowed: 79, borrowingFrequency: 79, status: 'Inactive' },
    { id: 10, name: 'Govt. Girls Inter College Pauri', location: 'Pauri, Pauri Garhwal', totalBooks: 980, booksBorrowed: 103, borrowingFrequency: 103, status: 'Active' },
    { id: 11, name: 'G.I.C. Roorkee', location: 'Roorkee, Haridwar', totalBooks: 1050, booksBorrowed: 97, borrowingFrequency: 97, status: 'Active' },
    { id: 12, name: 'GGIC Dehradun', location: 'Dehradun City, Dehradun', totalBooks: 1200, booksBorrowed: 115, borrowingFrequency: 115, status: 'Active' },
    { id: 13, name: 'G.I.C. Nainital', location: 'Nainital City, Nainital', totalBooks: 940, booksBorrowed: 86, borrowingFrequency: 86, status: 'Inactive' },
    { id: 14, name: 'Govt. Inter College Rudraprayag', location: 'Rudraprayag, Rudraprayag', totalBooks: 870, booksBorrowed: 73, borrowingFrequency: 73, status: 'Active' },
    { id: 15, name: 'GGIC Almora', location: 'Almora City, Almora', totalBooks: 925, booksBorrowed: 89, borrowingFrequency: 89, status: 'Active' },
    
    // Additional schools covering all districts and important blocks
    
    // Dehradun District (additional blocks)
    { id: 16, name: 'G.I.C. Vikasnagar', location: 'Vikasnagar, Dehradun', totalBooks: 960, booksBorrowed: 91, borrowingFrequency: 91, status: 'Active' },
    { id: 17, name: 'GGIC Rishikesh', location: 'Rishikesh, Dehradun', totalBooks: 1100, booksBorrowed: 105, borrowingFrequency: 105, status: 'Active' },
    { id: 18, name: 'G.I.C. Doiwala', location: 'Doiwala, Dehradun', totalBooks: 890, booksBorrowed: 82, borrowingFrequency: 82, status: 'Active' },
    { id: 19, name: 'Govt. Girls Inter College Sahaspur', location: 'Sahaspur, Dehradun', totalBooks: 870, booksBorrowed: 79, borrowingFrequency: 79, status: 'Active' },
    { id: 20, name: 'G.I.C. Raipur', location: 'Raipur, Dehradun', totalBooks: 930, booksBorrowed: 87, borrowingFrequency: 87, status: 'Active' },
    
    // Haridwar District (additional blocks)
    { id: 21, name: 'GGIC Haridwar', location: 'Haridwar City, Haridwar', totalBooks: 1050, booksBorrowed: 98, borrowingFrequency: 98, status: 'Active' },
    { id: 22, name: 'G.I.C. Laksar', location: 'Laksar, Haridwar', totalBooks: 880, booksBorrowed: 76, borrowingFrequency: 76, status: 'Active' },
    { id: 23, name: 'Govt. Inter College Bhagwanpur', location: 'Bhagwanpur, Haridwar', totalBooks: 820, booksBorrowed: 77, borrowingFrequency: 77, status: 'Active' },
    { id: 24, name: 'G.I.C. Narsan', location: 'Narsan, Haridwar', totalBooks: 790, booksBorrowed: 69, borrowingFrequency: 69, status: 'Inactive' },
    { id: 25, name: 'GGIC Bahadarabad', location: 'Bahadarabad, Haridwar', totalBooks: 910, booksBorrowed: 85, borrowingFrequency: 85, status: 'Active' },
    
    // Tehri Garhwal District (additional blocks)
    { id: 26, name: 'G.I.C. New Tehri', location: 'New Tehri, Tehri Garhwal', totalBooks: 940, booksBorrowed: 89, borrowingFrequency: 89, status: 'Active' },
    { id: 27, name: 'GGIC Ghansali', location: 'Ghansali, Tehri Garhwal', totalBooks: 860, booksBorrowed: 78, borrowingFrequency: 78, status: 'Active' },
    { id: 28, name: 'Govt. Inter College Pratapnagar', location: 'Pratapnagar, Tehri Garhwal', totalBooks: 830, booksBorrowed: 72, borrowingFrequency: 72, status: 'Active' },
    { id: 29, name: 'G.I.C. Jakhnidhar', location: 'Jakhnidhar, Tehri Garhwal', totalBooks: 800, booksBorrowed: 70, borrowingFrequency: 70, status: 'Inactive' },
    { id: 30, name: 'GGIC Chamba', location: 'Chamba, Tehri Garhwal', totalBooks: 870, booksBorrowed: 79, borrowingFrequency: 79, status: 'Active' },
    
    // Pauri Garhwal District (additional blocks)
    { id: 31, name: 'G.I.C. Kotdwar', location: 'Kotdwar, Pauri Garhwal', totalBooks: 930, booksBorrowed: 86, borrowingFrequency: 86, status: 'Active' },
    { id: 32, name: 'GGIC Srinagar', location: 'Srinagar, Pauri Garhwal', totalBooks: 950, booksBorrowed: 91, borrowingFrequency: 91, status: 'Active' },
    { id: 33, name: 'Govt. Inter College Lansdowne', location: 'Lansdowne, Pauri Garhwal', totalBooks: 880, booksBorrowed: 83, borrowingFrequency: 83, status: 'Active' },
    { id: 34, name: 'G.I.C. Dhumakot', location: 'Dhumakot, Pauri Garhwal', totalBooks: 820, booksBorrowed: 72, borrowingFrequency: 72, status: 'Active' },
    { id: 35, name: 'GGIC Thalisain', location: 'Thalisain, Pauri Garhwal', totalBooks: 790, booksBorrowed: 69, borrowingFrequency: 69, status: 'Inactive' },
    
    // Nainital District (additional blocks)
    { id: 36, name: 'G.I.C. Haldwani', location: 'Haldwani, Nainital', totalBooks: 1100, booksBorrowed: 105, borrowingFrequency: 105, status: 'Active' },
    { id: 37, name: 'GGIC Bhimtal', location: 'Bhimtal, Nainital', totalBooks: 920, booksBorrowed: 87, borrowingFrequency: 87, status: 'Active' },
    { id: 38, name: 'Govt. Inter College Kaladhungi', location: 'Kaladhungi, Nainital', totalBooks: 850, booksBorrowed: 78, borrowingFrequency: 78, status: 'Active' },
    { id: 39, name: 'G.I.C. Betalghat', location: 'Betalghat, Nainital', totalBooks: 810, booksBorrowed: 74, borrowingFrequency: 74, status: 'Active' },
    { id: 40, name: 'GGIC Dhari', location: 'Dhari, Nainital', totalBooks: 790, booksBorrowed: 68, borrowingFrequency: 68, status: 'Inactive' },
    
    // Udham Singh Nagar District
    { id: 41, name: 'G.I.C. Rudrapur', location: 'Rudrapur, Udham Singh Nagar', totalBooks: 1050, booksBorrowed: 97, borrowingFrequency: 97, status: 'Active' },
    { id: 42, name: 'GGIC Kashipur', location: 'Kashipur, Udham Singh Nagar', totalBooks: 980, booksBorrowed: 93, borrowingFrequency: 93, status: 'Active' },
    { id: 43, name: 'Govt. Inter College Khatima', location: 'Khatima, Udham Singh Nagar', totalBooks: 900, booksBorrowed: 84, borrowingFrequency: 84, status: 'Active' },
    { id: 44, name: 'G.I.C. Jaspur', location: 'Jaspur, Udham Singh Nagar', totalBooks: 870, booksBorrowed: 79, borrowingFrequency: 79, status: 'Active' },
    { id: 45, name: 'GGIC Sitarganj', location: 'Sitarganj, Udham Singh Nagar', totalBooks: 920, booksBorrowed: 85, borrowingFrequency: 85, status: 'Active' },
    { id: 46, name: 'G.I.C. Gadarpur', location: 'Gadarpur, Udham Singh Nagar', totalBooks: 860, booksBorrowed: 76, borrowingFrequency: 76, status: 'Active' },
    { id: 47, name: 'GGIC Bajpur', location: 'Bajpur, Udham Singh Nagar', totalBooks: 910, booksBorrowed: 83, borrowingFrequency: 83, status: 'Active' },
    
    // Almora District (additional blocks)
    { id: 48, name: 'G.I.C. Ranikhet', location: 'Ranikhet, Almora', totalBooks: 890, booksBorrowed: 82, borrowingFrequency: 82, status: 'Active' },
    { id: 49, name: 'GGIC Dwarahat', location: 'Dwarahat, Almora', totalBooks: 850, booksBorrowed: 77, borrowingFrequency: 77, status: 'Active' },
    { id: 50, name: 'Govt. Inter College Lamgara', location: 'Lamgara, Almora', totalBooks: 810, booksBorrowed: 73, borrowingFrequency: 73, status: 'Active' },
    { id: 51, name: 'G.I.C. Bhikiyasain', location: 'Bhikiyasain, Almora', totalBooks: 790, booksBorrowed: 70, borrowingFrequency: 70, status: 'Inactive' },
    { id: 52, name: 'GGIC Chaukhutiya', location: 'Chaukhutiya, Almora', totalBooks: 830, booksBorrowed: 75, borrowingFrequency: 75, status: 'Active' },
    
    // Pithoragarh District (additional blocks)
    { id: 53, name: 'G.I.C. Pithoragarh', location: 'Pithoragarh City, Pithoragarh', totalBooks: 920, booksBorrowed: 88, borrowingFrequency: 88, status: 'Active' },
    { id: 54, name: 'GGIC Didihat', location: 'Didihat, Pithoragarh', totalBooks: 870, booksBorrowed: 82, borrowingFrequency: 82, status: 'Active' },
    { id: 55, name: 'Govt. Inter College Dharchula', location: 'Dharchula, Pithoragarh', totalBooks: 830, booksBorrowed: 77, borrowingFrequency: 77, status: 'Active' },
    { id: 56, name: 'G.I.C. Gangolihat', location: 'Gangolihat, Pithoragarh', totalBooks: 800, booksBorrowed: 71, borrowingFrequency: 71, status: 'Active' },
    { id: 57, name: 'GGIC Berinag', location: 'Berinag, Pithoragarh', totalBooks: 840, booksBorrowed: 75, borrowingFrequency: 75, status: 'Inactive' },
    { id: 58, name: 'G.I.C. Bageshwar', location: 'Bageshwar City, Bageshwar', totalBooks: 880, booksBorrowed: 83, borrowingFrequency: 83, status: 'Active' },
    { id: 59, name: 'GGIC Bageshwar', location: 'Bageshwar City, Bageshwar', totalBooks: 850, booksBorrowed: 78, borrowingFrequency: 78, status: 'Active' },
    { id: 60, name: 'Govt. Inter College Kapkot', location: 'Kapkot, Bageshwar', totalBooks: 810, booksBorrowed: 74, borrowingFrequency: 74, status: 'Active' },
    { id: 61, name: 'G.I.C. Garur', location: 'Garur, Bageshwar', totalBooks: 790, booksBorrowed: 69, borrowingFrequency: 69, status: 'Inactive' },
    { id: 62, name: 'GGIC Kanda', location: 'Kanda, Bageshwar', totalBooks: 820, booksBorrowed: 73, borrowingFrequency: 73, status: 'Active' },
    
    // Champawat District
    { id: 63, name: 'G.I.C. Champawat', location: 'Champawat City, Champawat', totalBooks: 870, booksBorrowed: 81, borrowingFrequency: 81, status: 'Active' },
    { id: 64, name: 'GGIC Champawat', location: 'Champawat City, Champawat', totalBooks: 840, booksBorrowed: 76, borrowingFrequency: 76, status: 'Active' },
    { id: 65, name: 'Govt. Inter College Lohaghat', location: 'Lohaghat, Champawat', totalBooks: 820, booksBorrowed: 75, borrowingFrequency: 75, status: 'Active' },
    { id: 66, name: 'G.I.C. Pati', location: 'Pati, Champawat', totalBooks: 780, booksBorrowed: 68, borrowingFrequency: 68, status: 'Inactive' },
    { id: 67, name: 'GGIC Barakot', location: 'Barakot, Champawat', totalBooks: 800, booksBorrowed: 71, borrowingFrequency: 71, status: 'Active' },
    
    // Chamoli District
    { id: 68, name: 'G.I.C. Gopeshwar', location: 'Gopeshwar, Chamoli', totalBooks: 910, booksBorrowed: 87, borrowingFrequency: 87, status: 'Active' },
    { id: 69, name: 'GGIC Chamoli', location: 'Chamoli, Chamoli', totalBooks: 880, booksBorrowed: 83, borrowingFrequency: 83, status: 'Active' },
    { id: 70, name: 'Govt. Inter College Joshimath', location: 'Joshimath, Chamoli', totalBooks: 920, booksBorrowed: 89, borrowingFrequency: 89, status: 'Active' },
    { id: 71, name: 'G.I.C. Karnaprayag', location: 'Karnaprayag, Chamoli', totalBooks: 860, booksBorrowed: 79, borrowingFrequency: 79, status: 'Active' },
    { id: 72, name: 'GGIC Tharali', location: 'Tharali, Chamoli', totalBooks: 830, booksBorrowed: 76, borrowingFrequency: 76, status: 'Active' },
    { id: 73, name: 'G.I.C. Pokhri', location: 'Pokhri, Chamoli', totalBooks: 800, booksBorrowed: 72, borrowingFrequency: 72, status: 'Inactive' },
    { id: 74, name: 'Govt. Inter College Ghat', location: 'Ghat, Chamoli', totalBooks: 780, booksBorrowed: 68, borrowingFrequency: 68, status: 'Active' },
    
    // Uttarkashi District (additional blocks)
    { id: 75, name: 'G.I.C. Uttarkashi', location: 'Uttarkashi City, Uttarkashi', totalBooks: 900, booksBorrowed: 85, borrowingFrequency: 85, status: 'Active' },
    { id: 76, name: 'GGIC Uttarkashi', location: 'Uttarkashi City, Uttarkashi', totalBooks: 880, booksBorrowed: 81, borrowingFrequency: 81, status: 'Active' },
    { id: 77, name: 'Govt. Inter College Purola', location: 'Purola, Uttarkashi', totalBooks: 840, booksBorrowed: 76, borrowingFrequency: 76, status: 'Active' },
    { id: 78, name: 'G.I.C. Chinyalisaur', location: 'Chinyalisaur, Uttarkashi', totalBooks: 820, booksBorrowed: 74, borrowingFrequency: 74, status: 'Active' },
    { id: 79, name: 'GGIC Dunda', location: 'Dunda, Uttarkashi', totalBooks: 790, booksBorrowed: 69, borrowingFrequency: 69, status: 'Inactive' },
    { id: 80, name: 'G.I.C. Naugaon', location: 'Naugaon, Uttarkashi', totalBooks: 810, booksBorrowed: 73, borrowingFrequency: 73, status: 'Active' },
    
    // Rudraprayag District (additional blocks)
    { id: 81, name: 'GGIC Rudraprayag', location: 'Rudraprayag, Rudraprayag', totalBooks: 850, booksBorrowed: 77, borrowingFrequency: 77, status: 'Active' },
    { id: 82, name: 'G.I.C. Ukhimath', location: 'Ukhimath, Rudraprayag', totalBooks: 820, booksBorrowed: 73, borrowingFrequency: 73, status: 'Active' },
    { id: 83, name: 'Govt. Inter College Augustmuni', location: 'Augustmuni, Rudraprayag', totalBooks: 800, booksBorrowed: 71, borrowingFrequency: 71, status: 'Active' },
    { id: 84, name: 'G.I.C. Jakholi', location: 'Jakholi, Rudraprayag', totalBooks: 780, booksBorrowed: 67, borrowingFrequency: 67, status: 'Inactive' },
    { id: 85, name: 'GGIC Tilwara', location: 'Tilwara, Rudraprayag', totalBooks: 790, booksBorrowed: 69, borrowingFrequency: 69, status: 'Active' }
];

  // State for filters and pagination
  const [selectedDistrict, setSelectedDistrict] = useState('All Districts');
  const [selectedBlock, setSelectedBlock] = useState('All Blocks');
  const [selectedSchool, setSelectedSchool] = useState('All Schools');
  const [availableSchools, setAvailableSchools] = useState(['All Schools']);
  const [availableBlocks, setAvailableBlocks] = useState(['All Blocks']);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredSchools, setFilteredSchools] = useState(schoolsData);
  const itemsPerPage = 9;

  // Update blocks when district changes
  useEffect(() => {
    if (selectedDistrict in blocks) {
      setAvailableBlocks(['All Blocks', ...blocks[selectedDistrict]]);
      setSelectedBlock('All Blocks');
    } else {
      setAvailableBlocks(['All Blocks']);
    }
  }, [selectedDistrict]);

  // Update schools when block changes
  useEffect(() => {
    // In a real application, you would fetch schools based on the selected block
    // For this example, we'll just use the sample data and filter by location
    const schoolNames = ['All Schools', ...schoolsData
      .filter(school => selectedBlock === 'All Blocks' || school.location.includes(selectedBlock))
      .map(school => school.name)];
    
    setAvailableSchools([...new Set(schoolNames)]);
    setSelectedSchool('All Schools');
  }, [selectedBlock]);

  // Filter schools based on selections
  useEffect(() => {
    let filtered = [...schoolsData];
    
    if (selectedDistrict !== 'All Districts') {
      filtered = filtered.filter(school => 
        school.location.includes(selectedDistrict)
      );
    }
    
    if (selectedBlock !== 'All Blocks') {
      filtered = filtered.filter(school => 
        school.location.includes(selectedBlock)
      );
    }
    
    if (selectedSchool !== 'All Schools') {
      filtered = filtered.filter(school => 
        school.name === selectedSchool
      );
    }
    
    setFilteredSchools(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedDistrict, selectedBlock, selectedSchool]);

  // Get current schools for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSchools = filteredSchools.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredSchools.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="State-Borrow-Return-Container">
      <StateAdminNavbar />
      <div className="State-Borrow-Return-Content">
        <StateAdminSidebar />
        <div className="State-Borrow-Return-Main">
          <h1 className="State-Borrow-Return-Title">Borrow & Return</h1>
          
          <div className="State-Borrow-Return-Filters">
            <div className="State-Borrow-Return-Filter-Container">
              <label>District</label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="State-Borrow-Return-Filter-Select"
              >
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="State-Borrow-Return-Filter-Container">
              <label>Block</label>
              <select
                value={selectedBlock}
                onChange={(e) => setSelectedBlock(e.target.value)}
                className="State-Borrow-Return-Filter-Select"
              >
                {availableBlocks.map((block) => (
                  <option key={block} value={block}>
                    {block}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="State-Borrow-Return-Filter-Container">
              <label>School</label>
              <select
                value={selectedSchool}
                onChange={(e) => setSelectedSchool(e.target.value)}
                className="State-Borrow-Return-Filter-Select"
              >
                {availableSchools.map((school) => (
                  <option key={school} value={school}>
                    {school}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="State-Borrow-Return-Table-Container">
            <table className="State-Borrow-Return-Table">
              <thead>
                <tr>
                  <th>School Name</th>
                  <th>Location</th>
                  <th>No. of Books</th>
                  <th>No. of Books Borrowed</th>
                  <th>Borrowing Frequency</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {currentSchools.map((school) => (
                  <tr key={school.id}>
                    <td>{school.name}</td>
                    <td>{school.location}</td>
                    <td>{school.totalBooks}</td>
                    <td>{school.booksBorrowed}</td>
                    <td>{school.borrowingFrequency}</td>
                    <td className={`State-Borrow-Return-Status ${school.status.toLowerCase()}`}>{school.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {totalPages > 1 && (
            <div className="State-Borrow-Return-Pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="State-Borrow-Return-Pagination-Button"
              >
                &laquo;
              </button>
              
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`State-Borrow-Return-Pagination-Button ${currentPage === i + 1 ? 'State-Borrow-Return-Active' : ''}`}
                >
                  {i + 1}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="State-Borrow-Return-Pagination-Button"
              >
                &raquo;
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StateBorrowReturn;