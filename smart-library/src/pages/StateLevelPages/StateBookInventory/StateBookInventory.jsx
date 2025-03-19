// import React from 'react';
// import StateAdminNavbar from '../../../components/StateAdmin/StateAdminNavbar/StateAdminNavbar';
// import StateAdminSidebar from '../../../components/StateAdmin/StateAdminSidebar/StateAdminSidebar';
// import './StateBookInventory.css';

// const StateBookInventory = () => {
//   return (
//     <div className="State-Book-Inventory-Container">
//       <StateAdminNavbar />
//       <StateAdminSidebar />
//     </div>
//   );
// };

// export default StateBookInventory;
import React, { useState, useEffect } from 'react';
import StateAdminNavbar from '../../../components/StateAdmin/StateAdminNavbar/StateAdminNavbar';
import StateAdminSidebar from '../../../components/StateAdmin/StateAdminSidebar/StateAdminSidebar';
import './StateBookInventory.css';

const StateBookInventory = () => {
  // State for filter visibility
  const [showFilter, setShowFilter] = useState(false);
  
  // State for filter values
  const [filters, setFilters] = useState({
    district: 'all',
    block: 'all',
    school: 'all',
    category: 'all',
    status: 'all'
  });
  
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');
  
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Districts and blocks of Uttarakhand
  const districts = [
    'Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun', 
    'Haridwar', 'Nainital', 'Pauri Garhwal', 'Pithoragarh', 
    'Rudraprayag', 'Tehri Garhwal', 'Udham Singh Nagar', 'Uttarkashi'
  ];

  const blocksByDistrict = {
    'Almora': ['Bhikiyasain', 'Chaukhutiya', 'Dwarahat', 'Lamgara', 'Salt', 'Syalde', 'Tarikhet'],
    'Bageshwar': ['Bageshwar', 'Garur', 'Kapkot'],
    'Chamoli': ['Dasoli', 'Ghat', 'Joshimath', 'Karnaprayag', 'Tharali'],
    'Champawat': ['Barakot', 'Champawat', 'Lohaghat', 'Pati'],
    'Dehradun': ['Chakrata', 'Doiwala', 'Kalsi', 'Raipur', 'Sahaspur', 'Vikasnagar'],
    'Haridwar': ['Bhagwanpur', 'Khanpur', 'Laksar', 'Narsan', 'Roorkee'],
    'Nainital': ['Betalghat', 'Dhari', 'Haldwani', 'Kotabagh', 'Ramgarh', 'Ramnagar'],
    'Pauri Garhwal': ['Dugadda', 'Ekeshwar', 'Jaiharikhal', 'Kaljikhal', 'Kotdwara', 'Pauri', 'Rikhnikhal'],
    'Pithoragarh': ['Berinag', 'Dharchula', 'Didihat', 'Gangolihaat', 'Kanalichina', 'Munsyari', 'Pithoragarh'],
    'Rudraprayag': ['Jakholi', 'Rudraprayag', 'Ukhimath'],
    'Tehri Garhwal': ['Bhilangana', 'Chamba', 'Devprayag', 'Jakhnidhar', 'Kirtinagar', 'Narendra Nagar', 'Pratapnagar', 'Thauldhar'],
    'Udham Singh Nagar': ['Bajpur', 'Gadarpur', 'Jaspur', 'Kashipur', 'Khatima', 'Rudrapur', 'Sitarganj'],
    'Uttarkashi': ['Bhatwari', 'Chinyalisaur', 'Dunda', 'Mori', 'Naugaon', 'Purola']
  };

  // Schools in Uttarakhand
  const schoolsByBlock = {
    // Dehradun blocks
    'Chakrata': ['Government Inter College Chakrata', 'Chakrata Public School'],
    'Doiwala': ['Government Girls Inter College Doiwala', 'Doiwala Public School'],
    'Kalsi': ['Government Inter College Kalsi', 'Kalsi Model School'],
    'Raipur': ['Government Inter College Raipur', 'Doon International School'],
    'Sahaspur': ['Government Inter College Sahaspur', 'Sahaspur Academy'],
    'Vikasnagar': ['Government Inter College Vikasnagar', 'Vikasnagar Model School'],
    
    // Haridwar blocks
    'Bhagwanpur': ['Government Inter College Bhagwanpur', 'Bhagwanpur Public School'],
    'Khanpur': ['Government Girls Inter College Khanpur', 'Khanpur Academy'],
    'Laksar': ['Government Inter College Laksar', 'Laksar Public School'],
    'Narsan': ['Government Inter College Narsan', 'Narsan Model School'],
    'Roorkee': ['Government Inter College Roorkee', 'Roorkee Public School'],
    
    // Nainital blocks
    'Betalghat': ['Government Inter College Betalghat', 'Betalghat Public School'],
    'Dhari': ['Government Inter College Dhari', 'Dhari Academy'],
    'Haldwani': ['Government Inter College Haldwani', ' Kendriya School Haldwani'],
    'Kotabagh': ['Government Inter College Kotabagh', 'Kotabagh Public School'],
    'Ramgarh': ['Government Inter College Ramgarh', 'Ramgarh Academy'],
    'Ramnagar': ['Government Inter College Ramnagar', 'Ramnagar Public School']
  };

  // Dynamic book data based on schools
  const generateBookData = () => {
    const books = [
      // Academic Books
      { name: "Mathematics NCERT Class 10", category: "Academic", author: "NCERT", totalCopies: 50, availableCopy: 12, status: "Available" },
      { name: "Science NCERT Class 9", category: "Academic", author: "NCERT", totalCopies: 45, availableCopy: 8, status: "Available" },
      { name: "Hindi Vyakaran Class 8", category: "Academic", author: "NCERT", totalCopies: 40, availableCopy: 0, status: "Issued" },
      { name: "Social Studies Class 7", category: "Academic", author: "NCERT", totalCopies: 35, availableCopy: 15, status: "Available" },
      { name: "English Grammar Class 6", category: "Academic", author: "Oxford Publications", totalCopies: 30, availableCopy: 5, status: "Available" },
      { name: "Sanskrit Pathmala Class 9", category: "Academic", author: "NCERT", totalCopies: 25, availableCopy: 0, status: "Issued" },
      { name: "Computer Science Fundamentals", category: "Academic", author: "Sumita Arora", totalCopies: 30, availableCopy: 10, status: "Available" },
      { name: "Physics For Class 12", category: "Academic", author: "H.C. Verma", totalCopies: 40, availableCopy: 20, status: "Available" },
      { name: "Chemistry Class 11", category: "Academic", author: "P. Bahadur", totalCopies: 35, availableCopy: 0, status: "Issued" },
      { name: "Biology for NEET", category: "Academic", author: "Trueman", totalCopies: 30, availableCopy: 15, status: "Available" },
      { name: "Indian History Ancient to Modern", category: "Academic", author: "Spectrum", totalCopies: 25, availableCopy: 8, status: "Available" },
      { name: "Geography of India", category: "Academic", author: "Majid Husain", totalCopies: 30, availableCopy: 12, status: "Available" },
      { name: "Elementary Mathematics", category: "Academic", author: "R.S. Aggarwal", totalCopies: 40, availableCopy: 0, status: "Issued" },
      { name: "Indian Polity", category: "Academic", author: "M. Laxmikanth", totalCopies: 20, availableCopy: 5, status: "Available" },
      { name: "Environmental Studies Class 5", category: "Academic", author: "NCERT", totalCopies: 45, availableCopy: 25, status: "Available" },
      
      // Non-Academic Books
      { name: "Panchatantra Stories", category: "Non-Academic", author: "Vishnu Sharma", totalCopies: 30, availableCopy: 10, status: "Available" },
      { name: "Moral Stories for Children", category: "Non-Academic", author: "Ruskin Bond", totalCopies: 25, availableCopy: 5, status: "Available" },
      { name: "Encyclopedia of General Knowledge", category: "Non-Academic", author: "Manohar Pandey", totalCopies: 15, availableCopy: 0, status: "Issued" },
      { name: "Himalayan Adventures", category: "Non-Academic", author: "Ruskin Bond", totalCopies: 20, availableCopy: 10, status: "Available" },
      { name: "Science Experiments for Kids", category: "Non-Academic", author: "Arvind Gupta", totalCopies: 25, availableCopy: 15, status: "Available" },
      { name: "Indian Folk Tales", category: "Non-Academic", author: "Manoj Das", totalCopies: 30, availableCopy: 0, status: "Issued" },
      { name: "World Atlas for Children", category: "Non-Academic", author: "National Geographic", totalCopies: 20, availableCopy: 10, status: "Available" },
      { name: "Great Indian Scientists", category: "Non-Academic", author: "APJ Abdul Kalam", totalCopies: 25, availableCopy: 5, status: "Available" },
      { name: "Mahabharata for Children", category: "Non-Academic", author: "C. Rajagopalachari", totalCopies: 15, availableCopy: 0, status: "Issued" },
      { name: "Chess for Beginners", category: "Non-Academic", author: "R.B. Ramesh", totalCopies: 20, availableCopy: 10, status: "Available" },
      { name: "Yoga for School Children", category: "Non-Academic", author: "Swami Satyananda", totalCopies: 25, availableCopy: 15, status: "Available" },
      { name: "Tales from Akbar-Birbal", category: "Non-Academic", author: "Amita Sarin", totalCopies: 30, availableCopy: 20, status: "Available" },
      { name: "Incredible India", category: "Non-Academic", author: "Manohar Puri", totalCopies: 20, availableCopy: 0, status: "Issued" },
      { name: "Famous Indian Personalities", category: "Non-Academic", author: "Rajiv Sharma", totalCopies: 25, availableCopy: 15, status: "Available" },
      { name: "Adventure Sports in Uttarakhand", category: "Non-Academic", author: "Mountain Association", totalCopies: 15, availableCopy: 5, status: "Available" }
    ];

    // Create book data for each school with a unique ID and school assignment
    let allBooks = [];
    let id = 1;
    
    // Get all blocks from all districts
    const allBlocks = Object.values(blocksByDistrict).flat();
    
    // Get all schools
    const allSchools = [];
    allBlocks.forEach(block => {
      if (schoolsByBlock[block]) {
        schoolsByBlock[block].forEach(school => {
          allSchools.push(school);
        });
      }
    });

    // Create a master set of books
    const masterBooks = books.map((book, index) => ({
      ...book,
      id: index + 1
    }));

    // Assign books to schools
    allSchools.forEach(school => {
      // Each school gets a random subset of 15-25 books from the master set
      const numBooks = Math.floor(Math.random() * 11) + 15; // 15 to 25 books
      const schoolBooks = [];
      
      // Create a shuffled copy of the master books
      const shuffledBooks = [...masterBooks].sort(() => 0.5 - Math.random());
      
      // Select a subset of books for this school
      for (let i = 0; i < numBooks && i < shuffledBooks.length; i++) {
        const book = {...shuffledBooks[i]};
        book.id = id++;
        book.school = school;
        
        // Find which block and district this school belongs to
        let bookBlock = '';
        let bookDistrict = '';
        
        for (const district in blocksByDistrict) {
          for (const block of blocksByDistrict[district]) {
            if (schoolsByBlock[block] && schoolsByBlock[block].includes(school)) {
              bookBlock = block;
              bookDistrict = district;
              break;
            }
          }
          if (bookBlock) break;
        }
        
        book.block = bookBlock;
        book.district = bookDistrict;
        
        // Slightly vary the number of copies for each school
        book.totalCopies = Math.floor(book.totalCopies * (0.7 + Math.random() * 0.6));
        book.availableCopy = Math.floor(Math.random() * (book.totalCopies + 1));
        book.status = book.availableCopy > 0 ? "Available" : "Issued";
        
        schoolBooks.push(book);
      }
      
      allBooks = [...allBooks, ...schoolBooks];
    });

    return allBooks;
  };

  // Book data state
  const [books, setBooks] = useState([]);

  // Initialize books once on component mount
  useEffect(() => {
    setBooks(generateBookData());
  }, []);
  
  // Get unique districts
  const getUniqueDistricts = () => {
    return districts.sort();
  };
  
  // Get blocks for selected district
  const getBlocksForDistrict = (district) => {
    if (district === 'all') {
      return [].concat(...Object.values(blocksByDistrict)).sort();
    }
    return blocksByDistrict[district] || [];
  };
  
  // Get schools for selected block
  const getSchoolsForBlock = (block) => {
    if (block === 'all') {
      return [].concat(...Object.values(schoolsByBlock)).sort();
    }
    return schoolsByBlock[block] || [];
  };
  
  // Filter books
  const getFilteredBooks = () => {
    let filteredBooks = [...books];
    
    // Apply district filter
    if (filters.district !== 'all') {
      filteredBooks = filteredBooks.filter(book => book.district === filters.district);
    }
    
    // Apply block filter
    if (filters.block !== 'all') {
      filteredBooks = filteredBooks.filter(book => book.block === filters.block);
    }
    
    // Apply school filter
    if (filters.school !== 'all') {
      filteredBooks = filteredBooks.filter(book => book.school === filters.school);
    }
    
    // Apply category filter
    if (filters.category !== 'all') {
      filteredBooks = filteredBooks.filter(book => book.category === filters.category);
    }
    
    // Apply status filter
    if (filters.status !== 'all') {
      filteredBooks = filteredBooks.filter(book => book.status === filters.status);
    }
    
    // Apply search
    if (searchTerm.trim() !== '') {
      const search = searchTerm.toLowerCase().trim();
      filteredBooks = filteredBooks.filter(book => 
        book.name.toLowerCase().includes(search) || 
        book.author.toLowerCase().includes(search) ||
        (book.school && book.school.toLowerCase().includes(search))
      );
    }
    
    return filteredBooks;
  };
  
  // Handle district change
  const handleDistrictChange = (district) => {
    setFilters({
      ...filters,
      district: district,
      block: 'all',
      school: 'all'
    });
  };
  
  // Handle block change
  const handleBlockChange = (block) => {
    setFilters({
      ...filters,
      block: block,
      school: 'all'
    });
  };
  
  // Get current books for pagination
  const getCurrentBooks = () => {
    const filteredBooks = getFilteredBooks();
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredBooks.slice(indexOfFirstItem, indexOfLastItem);
  };
  
  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  // Handle next page
  const nextPage = () => {
    const totalPages = Math.ceil(getFilteredBooks().length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  // Handle previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, searchTerm]);
  
  return (
    <div className="State-Book-Inventory-Container">
      <StateAdminNavbar />
      <div className="State-Book-Inventory-Content">
        <StateAdminSidebar />
        <div className="State-Book-Inventory-Main">
          <div className="State-Book-Inventory-Header">
            <h1 className="State-Book-Inventory-Title">Books Inventory</h1>
            
            <div className="State-Book-Inventory-Tabs">
              <h3 className="State-Book-Inventory-Tab active">Hard Copy</h3>
              
              <button 
                className="State-Book-Inventory-Filter-Button"
                onClick={() => setShowFilter(!showFilter)}
              >
                Filter
              </button>
              
              <div className="State-Book-Inventory-Search">
                <input
                  type="text"
                  placeholder="Search books, authors, schools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="State-Book-Inventory-Search-Input"
                />
              </div>
            </div>
            
            {showFilter && (
              <div className="State-Book-Inventory-Filter-Panel">
                <div className="State-Book-Inventory-Filter-Group">
                  <label>District:</label>
                  <select 
                    value={filters.district}
                    onChange={(e) => handleDistrictChange(e.target.value)}
                  >
                    <option value="all">All Districts</option>
                    {getUniqueDistricts().map(district => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                </div>
                
                <div className="State-Book-Inventory-Filter-Group">
                  <label>Block:</label>
                  <select 
                    value={filters.block}
                    onChange={(e) => handleBlockChange(e.target.value)}
                  >
                    <option value="all">All Blocks</option>
                    {getBlocksForDistrict(filters.district).map(block => (
                      <option key={block} value={block}>{block}</option>
                    ))}
                  </select>
                </div>
                
                <div className="State-Book-Inventory-Filter-Group">
                  <label>School:</label>
                  <select 
                    value={filters.school}
                    onChange={(e) => setFilters({...filters, school: e.target.value})}
                  >
                    <option value="all">All Schools</option>
                    {getSchoolsForBlock(filters.block).map(school => (
                      <option key={school} value={school}>{school}</option>
                    ))}
                  </select>
                </div>
                
                <div className="State-Book-Inventory-Filter-Group">
                  <label>Category:</label>
                  <select 
                    value={filters.category}
                    onChange={(e) => setFilters({...filters, category: e.target.value})}
                  >
                    <option value="all">All Categories</option>
                    <option value="Academic">Academic</option>
                    <option value="Non-Academic">Non-Academic</option>
                  </select>
                </div>
                
                <div className="State-Book-Inventory-Filter-Group">
                  <label>Status:</label>
                  <select 
                    value={filters.status}
                    onChange={(e) => setFilters({...filters, status: e.target.value})}
                  >
                    <option value="all">All Status</option>
                    <option value="Available">Available</option>
                    <option value="Issued">Issued</option>
                  </select>
                </div>
                
                <button 
                  className="State-Book-Inventory-Filter-Clear"
                  onClick={() => setFilters({district: 'all', block: 'all', school: 'all', category: 'all', status: 'all'})}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
          
          <div className="State-Book-Inventory-Table-Container">
            <table className="State-Book-Inventory-Table">
              <thead>
                <tr>
                  <th>Books Name</th>
                  <th>School</th>
                  <th>Block</th>
                  <th>District</th>
                  <th>Category</th>
                  <th>Author</th>
                  <th>Number of total copies</th>
                  <th>Number of available copy</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {getCurrentBooks().map((book) => (
                  <tr key={book.id}>
                    <td>{book.name}</td>
                    <td>{book.school}</td>
                    <td>{book.block}</td>
                    <td>{book.district}</td>
                    <td>{book.category}</td>
                    <td>{book.author}</td>
                    <td>{book.totalCopies}</td>
                    <td>{book.availableCopy}</td>
                    <td className={`book-status ${book.status}`}>
                      {book.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
         
<div className="State-Book-Inventory-Pagination">
  <button 
    onClick={prevPage} 
    className="State-Book-Inventory-Page-Arrow"
    disabled={currentPage === 1}
  >
    &larr;
  </button>
  
  {/* Calculate visible page range */}
  {(() => {
    const totalPages = Math.ceil(getFilteredBooks().length / itemsPerPage);
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(startPage + 4, totalPages);
    
    // Adjust start page if we're near the end
    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }
    
    const pages = [];
    
    // Add first page button if not in range
    if (startPage > 1) {
      pages.push(
        <button
          key="1"
          onClick={() => paginate(1)}
          className={`State-Book-Inventory-Page-Button ${currentPage === 1 ? 'active' : ''}`}
        >
          1
        </button>
      );
      
      // Add ellipsis if there's a gap
      if (startPage > 2) {
        pages.push(<span key="ellipsis1" className="State-Book-Inventory-Page-Ellipsis">...</span>);
      }
    }
    
    // Add page buttons for the calculated range
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`State-Book-Inventory-Page-Button ${currentPage === i ? 'active' : ''}`}
        >
          {i}
        </button>
      );
    }
    
    // Add last page button if not in range
    if (endPage < totalPages) {
      // Add ellipsis if there's a gap
      if (endPage < totalPages - 1) {
        pages.push(<span key="ellipsis2" className="State-Book-Inventory-Page-Ellipsis">...</span>);
      }
      
      pages.push(
        <button
          key={totalPages}
          onClick={() => paginate(totalPages)}
          className={`State-Book-Inventory-Page-Button ${currentPage === totalPages ? 'active' : ''}`}
        >
          {totalPages}
        </button>
      );
    }
    
    return pages;
  })()}
  
  <button 
    onClick={nextPage} 
    className="State-Book-Inventory-Page-Arrow"
    disabled={currentPage === Math.ceil(getFilteredBooks().length / itemsPerPage)}
  >
    &rarr;
  </button>
</div>
        </div>
      </div>
    </div>
  );
};

export default StateBookInventory;