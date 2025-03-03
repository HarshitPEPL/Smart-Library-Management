// import React from "react";
// import AdminNavBar from "../../../components/AdminNavBar";
// import AdminSidebar from "../../../components/AdminSidebar";
// import "./AdminBorrowReturn.css";

// const AdminBorrowReturn = () => {
//   return (
//     <div className="admin-borrow-return-content">
//       <AdminNavBar />
//       <AdminSidebar />
    
//     </div>
//   );
// };

// export default AdminBorrowReturn;
import React, { useState, useEffect } from "react";
import AdminNavBar from "../../../components/AdminNavBar";
import AdminSidebar from "../../../components/AdminSidebar";
import "./AdminBorrowReturn.css";

const AdminBorrowReturn = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    userType: "all", // all, student, teacher
    category: "all", // all, academic, non-academic
    status: "all", // all, returned, overdue
  });
  const [showImportModal, setShowImportModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15); // Changed from 10 to 15 items per page

  // Sample data with 20 different Indian names
  useEffect(() => {
    // In a real application, this would be an API call
    const mockTransactions = [
      { id: 1, borrowerName: "Rajesh Kumar", userType: "Student", category: "Academic", bookName: "The Alchemist", author: "Paulo Coelho", borrowDate: "13/02/2025", dueDate: "21/02/2025", status: "Returned" },
      { id: 2, borrowerName: "Priya Sharma", userType: "Student", category: "Academic", bookName: "To Kill a Mockingbird", author: "Harper Lee", borrowDate: "13/02/2025", dueDate: "21/02/2025", status: "Returned" },
      { id: 3, borrowerName: "Amit Patel", userType: "Student", category: "Academic", bookName: "Pride and Prejudice", author: "Jane Austen", borrowDate: "13/02/2025", dueDate: "24/02/2025", status: "3 Days Overdue" },
      { id: 4, borrowerName: "Deepa Gupta", userType: "Teacher", category: "Non-Academic", bookName: "The Great Gatsby", author: "F. Scott Fitzgerald", borrowDate: "13/02/2025", dueDate: "22/02/2025", status: "1 Days Overdue" },
      { id: 5, borrowerName: "Vikram Singh", userType: "Student", category: "Academic", bookName: "1984", author: "George Orwell", borrowDate: "13/02/2025", dueDate: "23/02/2025", status: "2 Days Overdue" },
      { id: 6, borrowerName: "Neha Verma", userType: "Teacher", category: "Academic", bookName: "The Lord of the Rings", author: "J.R.R. Tolkien", borrowDate: "13/02/2025", dueDate: "21/02/2025", status: "Returned" },
      { id: 7, borrowerName: "Sanjay Desai", userType: "Student", category: "Non-Academic", bookName: "Harry Potter", author: "J.K. Rowling", borrowDate: "13/02/2025", dueDate: "21/02/2025", status: "Returned" },
      { id: 8, borrowerName: "Ananya Reddy", userType: "Student", category: "Academic", bookName: "The Hobbit", author: "J.R.R. Tolkien", borrowDate: "14/02/2025", dueDate: "22/02/2025", status: "Returned" },
      { id: 9, borrowerName: "Rahul Malhotra", userType: "Teacher", category: "Academic", bookName: "War and Peace", author: "Leo Tolstoy", borrowDate: "14/02/2025", dueDate: "22/02/2025", status: "Returned" },
      { id: 10, borrowerName: "Kavita Iyer", userType: "Student", category: "Non-Academic", bookName: "The Odyssey", author: "Homer", borrowDate: "14/02/2025", dueDate: "25/02/2025", status: "2 Days Overdue" },
      { id: 11, borrowerName: "Arjun Nair", userType: "Student", category: "Academic", bookName: "Brave New World", author: "Aldous Huxley", borrowDate: "15/02/2025", dueDate: "23/02/2025", status: "Returned" },
      { id: 12, borrowerName: "Sunita Joshi", userType: "Teacher", category: "Academic", bookName: "Crime and Punishment", author: "Fyodor Dostoevsky", borrowDate: "15/02/2025", dueDate: "26/02/2025", status: "1 Days Overdue" },
      { id: 13, borrowerName: "Vivek Menon", userType: "Student", category: "Academic", bookName: "Moby Dick", author: "Herman Melville", borrowDate: "15/02/2025", dueDate: "27/02/2025", status: "Returned" },
      { id: 14, borrowerName: "Pooja Agarwal", userType: "Student", category: "Non-Academic", bookName: "The Catcher in the Rye", author: "J.D. Salinger", borrowDate: "16/02/2025", dueDate: "24/02/2025", status: "2 Days Overdue" },
      { id: 15, borrowerName: "Kiran Mehta", userType: "Teacher", category: "Academic", bookName: "One Hundred Years of Solitude", author: "Gabriel García Márquez", borrowDate: "16/02/2025", dueDate: "24/02/2025", status: "Returned" },
      { id: 16, borrowerName: "Meena Chakraborty", userType: "Student", category: "Academic", bookName: "Don Quixote", author: "Miguel de Cervantes", borrowDate: "16/02/2025", dueDate: "24/02/2025", status: "Returned" },
      { id: 17, borrowerName: "Ajay Bhatt", userType: "Student", category: "Non-Academic", bookName: "The Divine Comedy", author: "Dante Alighieri", borrowDate: "17/02/2025", dueDate: "25/02/2025", status: "Returned" },
      { id: 18, borrowerName: "Divya Rajan", userType: "Teacher", category: "Academic", bookName: "Anna Karenina", author: "Leo Tolstoy", borrowDate: "17/02/2025", dueDate: "25/02/2025", status: "Returned" },
      { id: 19, borrowerName: "Manoj Pillai", userType: "Student", category: "Academic", bookName: "Hamlet", author: "William Shakespeare", borrowDate: "17/02/2025", dueDate: "28/02/2025", status: "3 Days Overdue" },
      { id: 20, borrowerName: "Ritu Sengupta", userType: "Student", category: "Non-Academic", bookName: "The Iliad", author: "Homer", borrowDate: "18/02/2025", dueDate: "26/02/2025", status: "Returned" },
    ];
    
    setTransactions(mockTransactions);
    setFilteredTransactions(mockTransactions);
  }, []);

  // Filter transactions based on selected filters
  useEffect(() => {
    let result = transactions;
    
    // Apply user type filter
    if (filters.userType !== "all") {
      result = result.filter(item => item.userType.toLowerCase() === filters.userType.toLowerCase());
    }
    
    // Apply category filter
    if (filters.category !== "all") {
      result = result.filter(item => item.category.toLowerCase() === filters.category.toLowerCase());
    }
    
    // Apply status filter
    if (filters.status !== "all") {
      if (filters.status === "overdue") {
        result = result.filter(item => item.status.includes("Overdue"));
      } else {
        result = result.filter(item => item.status === filters.status);
      }
    }
    
    // Apply search term if any
    if (searchTerm) {
      result = result.filter(item => 
        item.borrowerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.bookName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredTransactions(result);
    setCurrentPage(1); // Reset to first page when filtering
  }, [filters, transactions, searchTerm]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleImportExcel = () => {
    // In a real app, you would process the file here
    console.log("Importing file:", selectedFile);
    setShowImportModal(false);
    setSelectedFile(null);
    // You would typically add a success message here
  };

  const handleExportExcel = (option) => {
    // In a real app, you would generate and download the Excel file
    console.log("Exporting as Excel:", option);
    setShowExportModal(false);
    // You would typically trigger the file download here
  };

  const getStatusClass = (status) => {
    if (status === "Returned") return "returned";
    return "overdue";
  };

  return (
    <div className="admin-borrow-return-content">
      <AdminNavBar />
      <AdminSidebar />
      
      <div className="admin-borrow-return-main">
        <div className="admin-borrow-return-header">
          <h1 className="admin-borrow-return-title">Borrow & Return</h1>
          
          <div className="admin-borrow-return-filter-container">
            <button 
              className="admin-borrow-return-filter-button"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              Filter <span className="filter-icon">▼</span>
            </button>
            
            {filterOpen && (
              <div className="admin-borrow-return-filter-dropdown">
                <div className="filter-group">
                  <h3>User</h3>
                  <div className="filter-options">
                    <label>
                      <input 
                        type="radio" 
                        name="userType" 
                        checked={filters.userType === "all"}
                        onChange={() => setFilters({...filters, userType: "all"})}
                      />
                      All
                    </label>
                    <label>
                      <input 
                        type="radio" 
                        name="userType" 
                        checked={filters.userType === "student"}
                        onChange={() => setFilters({...filters, userType: "student"})}
                      />
                      Student
                    </label>
                    <label>
                      <input 
                        type="radio" 
                        name="userType" 
                        checked={filters.userType === "teacher"}
                        onChange={() => setFilters({...filters, userType: "teacher"})}
                      />
                      Teacher
                    </label>
                  </div>
                </div>
                
                <div className="filter-group">
                  <h3>Category</h3>
                  <div className="filter-options">
                    <label>
                      <input 
                        type="radio" 
                        name="category" 
                        checked={filters.category === "all"}
                        onChange={() => setFilters({...filters, category: "all"})}
                      />
                      All
                    </label>
                    <label>
                      <input 
                        type="radio" 
                        name="category" 
                        checked={filters.category === "academic"}
                        onChange={() => setFilters({...filters, category: "academic"})}
                      />
                      Academic
                    </label>
                    <label>
                      <input 
                        type="radio" 
                        name="category" 
                        checked={filters.category === "non-academic"}
                        onChange={() => setFilters({...filters, category: "non-academic"})}
                      />
                      Non-Academic
                    </label>
                  </div>
                </div>
                
                <div className="filter-group">
                  <h3>Status</h3>
                  <div className="filter-options">
                    <label>
                      <input 
                        type="radio" 
                        name="status" 
                        checked={filters.status === "all"}
                        onChange={() => setFilters({...filters, status: "all"})}
                      />
                      All
                    </label>
                    <label>
                      <input 
                        type="radio" 
                        name="status" 
                        checked={filters.status === "Returned"}
                        onChange={() => setFilters({...filters, status: "Returned"})}
                      />
                      Returned
                    </label>
                    <label>
                      <input 
                        type="radio" 
                        name="status" 
                        checked={filters.status === "overdue"}
                        onChange={() => setFilters({...filters, status: "overdue"})}
                      />
                      Overdue
                    </label>
                  </div>
                </div>
                
                <div className="filter-actions">
                  <button 
                    className="filter-apply-btn"
                    onClick={() => setFilterOpen(false)}
                  >
                    Apply
                  </button>
                  <button 
                    className="filter-reset-btn"
                    onClick={() => {
                      setFilters({
                        userType: "all",
                        category: "all",
                        status: "all"
                      });
                      setFilterOpen(false);
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="admin-borrow-return-actions">
            <button 
              className="admin-borrow-return-export"
              onClick={() => setShowExportModal(true)}
            >
              Export Excel
            </button>
            <button 
              className="admin-borrow-return-import"
              onClick={() => setShowImportModal(true)}
            >
              Import Excel
            </button>
          </div>
        </div>
        
        <div className="admin-borrow-return-search">
          <input
            type="text"
            placeholder="Search by name, book, author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="admin-borrow-return-table-container">
          <table className="admin-borrow-return-table">
            <thead>
              <tr>
                <th>Borrower Name</th>
                <th>User</th>
                <th>Category</th>
                <th>Book Name</th>
                <th>Author</th>
                <th>Borrow Date</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map(item => (
                <tr key={item.id}>
                  <td>{item.borrowerName}</td>
                  <td>{item.userType}</td>
                  <td>{item.category}</td>
                  <td>{item.bookName}</td>
                  <td>{item.author}</td>
                  <td>{item.borrowDate}</td>
                  <td>{item.dueDate}</td>
                  <td className={`status ${getStatusClass(item.status)}`}>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredTransactions.length > itemsPerPage && (
          <div className="admin-borrow-return-pagination">
            <div className="admin-borrow-return-pagination-info">
              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredTransactions.length)} of {filteredTransactions.length} entries
            </div>
            <div className="admin-borrow-return-pagination-controls">
              <button 
                className="admin-borrow-return-pagination-button prev"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                &lt;
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <button
                  key={number}
                  className={`admin-borrow-return-pagination-button page-number ${currentPage === number ? 'active' : ''}`}
                  onClick={() => handlePageChange(number)}
                >
                  {number}
                </button>
              ))}
              
              <button 
                className="admin-borrow-return-pagination-button next"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                &gt;
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Import Modal */}
      {showImportModal && (
        <div className="admin-borrow-return-modal-overlay">
          <div className="admin-borrow-return-modal">
            <h2>Import Excel</h2>
            <p>Please select an Excel file to import.</p>
            
            <div className="admin-borrow-return-file-upload">
              <input
                type="file"
                id="excelFile"
                className="admin-borrow-return-file-input"
                accept=".xlsx, .xls"
                onChange={handleFileChange}
              />
              <label htmlFor="excelFile" className="admin-borrow-return-file-label">
                Choose File
              </label>
              <span className="admin-borrow-return-file-name">
                {selectedFile ? selectedFile.name : "No file chosen"}
              </span>
            </div>
            
            <div className="admin-borrow-return-modal-actions">
              <button 
                className="admin-borrow-return-modal-cancel"
                onClick={() => {
                  setShowImportModal(false);
                  setSelectedFile(null);
                }}
              >
                Cancel
              </button>
              <button 
                className="admin-borrow-return-modal-confirm"
                disabled={!selectedFile}
                onClick={handleImportExcel}
              >
                Import
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Export Modal */}
      {showExportModal && (
        <div className="admin-borrow-return-modal-overlay">
          <div className="admin-borrow-return-modal">
            <h2>Export Excel</h2>
            <p>Please select what you want to export:</p>
            
            <div className="admin-borrow-return-modal-options">
              <label>
                <input type="radio" name="exportOption" defaultChecked />
                All Records
              </label>
              <label>
                <input type="radio" name="exportOption" />
                Current Filtered Records
              </label>
              <label>
                <input type="radio" name="exportOption" />
                Overdue Records Only
              </label>
            </div>
            
            <div className="admin-borrow-return-modal-actions">
              <button 
                className="admin-borrow-return-modal-cancel"
                onClick={() => setShowExportModal(false)}
              >
                Cancel
              </button>
              <button 
                className="admin-borrow-return-modal-confirm"
                onClick={() => handleExportExcel("all")}
              >
                Export
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBorrowReturn;