// import React from 'react';
// import AdminSidebar from '../../../components/AdminSidebar';
// import AdminNavBar from '../../../components/AdminNavBar';
// import './AdminBookInventory.css';

// const AdminBookInventory = () => {
//   return (
//     <div className="admin-book-inventory-container">
//       <AdminSidebar />
//       <AdminNavBar />
//     </div>
//   );
// };

// // export default AdminBookInventory;






// import React, { useState } from 'react';
// import AdminSidebar from '../../../components/AdminSidebar';
// import AdminNavBar from '../../../components/AdminNavBar';
// import { ArrowDown, Download, Upload } from 'lucide-react';
// import './AdminBookInventory.css';

// const AdminBookInventory = () => {
//   const [activeTab, setActiveTab] = useState('Hard Copy');
//   const [showExportModal, setShowExportModal] = useState(false);
//   const [showImportModal, setShowImportModal] = useState(false);
  
//   // Sample data for the inventory table
//   const inventoryData = [
//     { id: 1, name: "Don't Make Me Think", serial: "PU6001", category: "Academic", subCategory: "Academic", author: "Steve Krug", copies: 12, status: "Available" },
//     { id: 2, name: "Don't Make Me Think", serial: "PU6001", category: "Academic", subCategory: "Academic", author: "Steve Krug", copies: 15, status: "Available" },
//     { id: 3, name: "Don't Make Me Think", serial: "PU6001", category: "Academic", subCategory: "Academic", author: "Steve Krug", copies: 0, status: "Issued" },
//     { id: 4, name: "Don't Make Me Think", serial: "PU6001", category: "Non-Academic", subCategory: "Non-Academic", author: "Steve Krug", copies: 0, status: "Issued" },
//     { id: 5, name: "Don't Make Me Think", serial: "PU6001", category: "Academic", subCategory: "Academic", author: "Steve Krug", copies: 0, status: "Issued" },
//     { id: 6, name: "Don't Make Me Think", serial: "PU6001", category: "Academic", subCategory: "Academic", author: "Steve Krug", copies: 15, status: "Available" },
//     { id: 7, name: "Don't Make Me Think", serial: "PU6001", category: "Non-Academic", subCategory: "Non-Academic", author: "Steve Krug", copies: 23, status: "Available" },
//   ];
  
//   const tabs = ['Hard Copy', 'E-Books', 'Audio Books', 'Visual Content'];
  
//   const handleExportExcel = () => {
//     setShowExportModal(true);
//   };
  
//   const handleImportExcel = () => {
//     setShowImportModal(true);
//   };
  
//   const handleCloseModal = () => {
//     setShowExportModal(false);
//     setShowImportModal(false);
//   };
  
//   const handleSortColumn = (column) => {
//     // Implement sorting logic here
//     console.log(`Sorting by ${column}`);
//   };

//   // Check if we should show the "Number of available copies" column
//   const showCopiesColumn = activeTab === 'Hard Copy';

//   return (
//     <div className="admin-book-inventory-container">
//       <AdminSidebar />
//         <AdminNavBar />
        
//         <div className="admin-book-inventory-main">
//           <div className="admin-book-inventory-header">
//             <h1 className="admin-book-inventory-title">Books Inventory</h1>
            
//             <div className="admin-book-inventory-tabs">
//               {tabs.map(tab => (
//                 <button 
//                   key={tab}
//                   className={`admin-book-inventory-tab ${activeTab === tab ? 'active' : ''}`}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
            
//             <div className="admin-book-inventory-actions">
//               <button 
//                 className="admin-book-inventory-export" 
//                 onClick={handleExportExcel}
//               >
//                 <Download size={16} />
//                 Export Excel
//               </button>
              
//               <button 
//                 className="admin-book-inventory-import" 
//                 onClick={handleImportExcel}
//               >
//                 <Upload size={16} />
//                 Import Excel
//               </button>
//             </div>
//           </div>
          
//           <div className="admin-book-inventory-table-container">
//             <table className="admin-book-inventory-table">
//               <thead>
//                 <tr>
//                   <th>Books Name</th>
//                   <th onClick={() => handleSortColumn('serial')}>
//                     Serial No. <ArrowDown size={16} />
//                   </th>
//                   <th onClick={() => handleSortColumn('category')}>
//                     Category <ArrowDown size={16} />
//                   </th>
//                   <th>Sub-Category</th>
//                   <th>Author</th>
//                   {showCopiesColumn && (
//                     <th>No. of Available Copies</th>
//                   )}
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {inventoryData.map(item => (
//                   <tr key={item.id}>
//                     <td>{item.name}</td>
//                     <td>{item.serial}</td>
//                     <td>{item.category}</td>
//                     <td>{item.subCategory}</td>
//                     <td>{item.author}</td>
//                     {showCopiesColumn && (
//                       <td>{item.copies}</td>
//                     )}
//                     <td className={`status ${item.status.toLowerCase()}`}>{item.status}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
      
      
//       {/* Export Modal */}
//       {showExportModal && (
//         <div className="admin-book-inventory-modal-overlay">
//           <div className="admin-book-inventory-modal">
//             <h2>Export Inventory to Excel</h2>
//             <p>Choose export options:</p>
            
//             <div className="admin-book-inventory-modal-options">
//               <label>
//                 <input type="checkbox" defaultChecked />
//                 Include all columns
//               </label>
              
//               <label>
//                 <input type="checkbox" defaultChecked />
//                 Include book status
//               </label>
              
//               <label>
//                 <input type="checkbox" defaultChecked />
//                 Include availability
//               </label>
//             </div>
            
//             <div className="admin-book-inventory-modal-actions">
//               <button 
//                 className="admin-book-inventory-modal-cancel" 
//                 onClick={handleCloseModal}
//               >
//                 Cancel
//               </button>
//               <button className="admin-book-inventory-modal-confirm">
//                 <Download size={16} />
//                 Export
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Import Modal */}
//       {showImportModal && (
//         <div className="admin-book-inventory-modal-overlay">
//           <div className="admin-book-inventory-modal">
//             <h2>Import Inventory from Excel</h2>
//             <p>Upload your Excel file (.xlsx or .xls)</p>
            
//             <div className="admin-book-inventory-file-upload">
//               <input type="file" id="excel-file" className="admin-book-inventory-file-input" />
//               <label htmlFor="excel-file" className="admin-book-inventory-file-label">
//                 <Upload size={20} />
//                 Choose File
//               </label>
//               <span className="admin-book-inventory-file-name">No file chosen</span>
//             </div>
            
//             <div className="admin-book-inventory-modal-options">
//               <label>
//                 <input type="checkbox" defaultChecked />
//                 Update existing entries
//               </label>
              
//               <label>
//                 <input type="checkbox" defaultChecked />
//                 Add new entries
//               </label>
//             </div>
            
//             <div className="admin-book-inventory-modal-actions">
//               <button 
//                 className="admin-book-inventory-modal-cancel" 
//                 onClick={handleCloseModal}
//               >
//                 Cancel
//               </button>
//               <button className="admin-book-inventory-modal-confirm">
//                 <Upload size={16} />
//                 Import
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminBookInventory;

import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminNavBar from '../../../components/AdminNavBar';
import { ArrowDown, Download, Upload, ChevronLeft, ChevronRight } from 'lucide-react';
import './AdminBookInventory.css';

const AdminBookInventory = () => {
  const [activeTab, setActiveTab] = useState('Hard Copy');
  const [showExportModal, setShowExportModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  
  // Sample data for the inventory table
  const inventoryData = [
    { id: 1, name: "Don't Make Me Think", serial: "PU6001", category: "Academic", subCategory: "Academic", author: "Steve Krug", copies: 12, status: "Available" },
    { id: 2, name: "Don't Make Me Think", serial: "PU6001", category: "Academic", subCategory: "Academic", author: "Steve Krug", copies: 15, status: "Available" },
    { id: 3, name: "Don't Make Me Think", serial: "PU6001", category: "Academic", subCategory: "Academic", author: "Steve Krug", copies: 0, status: "Issued" },
    { id: 4, name: "Don't Make Me Think", serial: "PU6001", category: "Non-Academic", subCategory: "Non-Academic", author: "Steve Krug", copies: 0, status: "Issued" },
    { id: 5, name: "Don't Make Me Think", serial: "PU6001", category: "Academic", subCategory: "Academic", author: "Steve Krug", copies: 0, status: "Issued" },
    { id: 6, name: "Don't Make Me Think", serial: "PU6001", category: "Academic", subCategory: "Academic", author: "Steve Krug", copies: 15, status: "Available" },
    { id: 7, name: "Don't Make Me Think", serial: "PU6001", category: "Non-Academic", subCategory: "Non-Academic", author: "Steve Krug", copies: 23, status: "Available" },
    // Add more sample data to test pagination
    { id: 8, name: "Design of Everyday Things", serial: "PU6002", category: "Academic", subCategory: "Design", author: "Don Norman", copies: 8, status: "Available" },
    { id: 9, name: "JavaScript: The Good Parts", serial: "PU6003", category: "Academic", subCategory: "Programming", author: "Douglas Crockford", copies: 5, status: "Available" },
    { id: 10, name: "Clean Code", serial: "PU6004", category: "Academic", subCategory: "Programming", author: "Robert C. Martin", copies: 0, status: "Issued" },
    { id: 11, name: "Refactoring", serial: "PU6005", category: "Academic", subCategory: "Programming", author: "Martin Fowler", copies: 7, status: "Available" },
    { id: 12, name: "Atomic Habits", serial: "PU6006", category: "Non-Academic", subCategory: "Self-Help", author: "James Clear", copies: 9, status: "Available" },
    { id: 13, name: "Thinking, Fast and Slow", serial: "PU6007", category: "Non-Academic", subCategory: "Psychology", author: "Daniel Kahneman", copies: 0, status: "Issued" },
    { id: 14, name: "Educated", serial: "PU6008", category: "Non-Academic", subCategory: "Memoir", author: "Tara Westover", copies: 11, status: "Available" },
    { id: 15, name: "Sapiens", serial: "PU6009", category: "Non-Academic", subCategory: "History", author: "Yuval Noah Harari", copies: 6, status: "Available" },
    { id: 16, name: "The Design of Web APIs", serial: "PU6010", category: "Academic", subCategory: "Programming", author: "Arnaud Lauret", copies: 4, status: "Available" },
    { id: 17, name: "Eloquent JavaScript", serial: "PU6011", category: "Academic", subCategory: "Programming", author: "Marijn Haverbeke", copies: 0, status: "Issued" },
    { id: 18, name: "The Pragmatic Programmer", serial: "PU6012", category: "Academic", subCategory: "Programming", author: "Andrew Hunt", copies: 8, status: "Available" },
  ];
  
  const tabs = ['Hard Copy', 'E-Books', 'Audio Books', 'Visual Content'];
  
  // Get current items for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = inventoryData.slice(indexOfFirstItem, indexOfLastItem);
  
  // Calculate total pages
  const totalPages = Math.ceil(inventoryData.length / itemsPerPage);
  
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  // Go to next or previous page
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
  
  const handleExportExcel = () => {
    setShowExportModal(true);
  };
  
  const handleImportExcel = () => {
    setShowImportModal(true);
  };
  
  const handleCloseModal = () => {
    setShowExportModal(false);
    setShowImportModal(false);
  };
  
  const handleSortColumn = (column) => {
    // Implement sorting logic here
    console.log(`Sorting by ${column}`);
  };

  // Check if we should show the "Number of available copies" column
  const showCopiesColumn = activeTab === 'Hard Copy';
  
  // Determine if we should display "Issued" or "Unavailable" based on the active tab
  const getStatusText = (status) => {
    if (status === "Issued" && activeTab !== 'Hard Copy') {
      return "Unavailable";
    }
    return status;
  };

  return (
    <div className="admin-book-inventory-container">
      <AdminSidebar />
        <AdminNavBar />
        
        <div className="admin-book-inventory-main">
          <div className="admin-book-inventory-header">
            <h1 className="admin-book-inventory-title">Books Inventory</h1>
            
            <div className="admin-book-inventory-tabs">
              {tabs.map(tab => (
                <button 
                  key={tab}
                  className={`admin-book-inventory-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="admin-book-inventory-actions">
              <button 
                className="admin-book-inventory-export" 
                onClick={handleExportExcel}
              >
                <Download size={16} />
                Export Excel
              </button>
              
              <button 
                className="admin-book-inventory-import" 
                onClick={handleImportExcel}
              >
                <Upload size={16} />
                Import Excel
              </button>
            </div>
          </div>
          
          <div className="admin-book-inventory-table-container">
            <table className="admin-book-inventory-table">
              <thead>
                <tr>
                  <th>Books Name</th>
                  <th onClick={() => handleSortColumn('serial')}>
                    Serial No. <ArrowDown size={16} />
                  </th>
                  <th onClick={() => handleSortColumn('category')}>
                    Category <ArrowDown size={16} />
                  </th>
                  <th>Sub-Category</th>
                  <th>Author</th>
                  {showCopiesColumn && (
                    <th>No. of Available Copies</th>
                  )}
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.serial}</td>
                    <td>{item.category}</td>
                    <td>{item.subCategory}</td>
                    <td>{item.author}</td>
                    {showCopiesColumn && (
                      <td>{item.copies}</td>
                    )}
                    <td className={`status ${getStatusText(item.status).toLowerCase()}`}>
                      {getStatusText(item.status)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className="admin-book-inventory-pagination">
              <div className="admin-book-inventory-pagination-info">
                Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, inventoryData.length)} of {inventoryData.length} entries
              </div>
              
              <div className="admin-book-inventory-pagination-controls">
                <button 
                  className="admin-book-inventory-pagination-button prev"
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft size={16} />
                </button>
                
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    className={`admin-book-inventory-pagination-button page-number ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
                
                <button 
                  className="admin-book-inventory-pagination-button next"
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      
      
      {/* Export Modal */}
      {showExportModal && (
        <div className="admin-book-inventory-modal-overlay">
          <div className="admin-book-inventory-modal">
            <h2>Export Inventory to Excel</h2>
            <p>Choose export options:</p>
            
            <div className="admin-book-inventory-modal-options">
              <label>
                <input type="checkbox" defaultChecked />
                Include all columns
              </label>
              
              <label>
                <input type="checkbox" defaultChecked />
                Include book status
              </label>
              
              <label>
                <input type="checkbox" defaultChecked />
                Include availability
              </label>
            </div>
            
            <div className="admin-book-inventory-modal-actions">
              <button 
                className="admin-book-inventory-modal-cancel" 
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button className="admin-book-inventory-modal-confirm">
                <Download size={16} />
                Export
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Import Modal */}
      {showImportModal && (
        <div className="admin-book-inventory-modal-overlay">
          <div className="admin-book-inventory-modal">
            <h2>Import Inventory from Excel</h2>
            <p>Upload your Excel file (.xlsx or .xls)</p>
            
            <div className="admin-book-inventory-file-upload">
              <input type="file" id="excel-file" className="admin-book-inventory-file-input" />
              <label htmlFor="excel-file" className="admin-book-inventory-file-label">
                <Upload size={20} />
                Choose File
              </label>
              <span className="admin-book-inventory-file-name">No file chosen</span>
            </div>
            
            <div className="admin-book-inventory-modal-options">
              <label>
                <input type="checkbox" defaultChecked />
                Update existing entries
              </label>
              
              <label>
                <input type="checkbox" defaultChecked />
                Add new entries
              </label>
            </div>
            
            <div className="admin-book-inventory-modal-actions">
              <button 
                className="admin-book-inventory-modal-cancel" 
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button className="admin-book-inventory-modal-confirm">
                <Upload size={16} />
                Import
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBookInventory;