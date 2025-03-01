// import React, { useState } from 'react';
// import AdminSidebar from '../../../components/AdminSidebar';
// import AdminNavBar from '../../../components/AdminNavBar';
// import './AdminUserManagement.css';

// const AdminUserManagement = () => {
//   // State for user management functionality
//   const [users, setUsers] = useState([]);
//   // You can add more state variables as needed for your user management features

//   return (
//     <div className="admin-user-management-layout">
//       <AdminSidebar />
//       <AdminNavBar />
//     </div>
//   );
// };

// export default AdminUserManagement;


import React, { useState, useEffect } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminNavBar from '../../../components/AdminNavBar';
import './AdminUserManagement.css';

const AdminUserManagement = () => {
  // State management
  const [activeTab, setActiveTab] = useState('Teachers');
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [newUserData, setNewUserData] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  
  // Mock data for teachers
  const [teachers, setTeachers] = useState([
    { id: '0021', name: 'Vipin Bari', subject: 'English', class: '11th', lastLogin: '2 Days Ago' },
    { id: '0022', name: 'Vipin Bari', subject: 'Math', class: '11th', lastLogin: '2 Days Ago' },
    { id: '0023', name: 'Vipin Bari', subject: 'Physics', class: '10th', lastLogin: '2 Days Ago' },
    { id: '0034', name: 'Vipin Bari', subject: 'Hindi', class: '10th', lastLogin: '2 Days Ago' },
    { id: '0035', name: 'Vipin Bari', subject: 'Science', class: '9th', lastLogin: '2 Days Ago' },
    { id: '0036', name: 'Vipin Bari', subject: 'English', class: '9th', lastLogin: '2 Days Ago' },
    { id: '0037', name: 'Vipin Bari', subject: 'Math', class: '10th', lastLogin: '2 Days Ago' },
    { id: '0038', name: 'Vipin Bari', subject: 'Physics', class: '10th', lastLogin: '2 Days Ago' },
    { id: '0039', name: 'Vipin Bari', subject: 'Hindi', class: '8th', lastLogin: '2 Days Ago' },
    { id: '0040', name: 'Ravi Kumar', subject: 'Chemistry', class: '12th', lastLogin: '3 Days Ago' },
    { id: '0041', name: 'Priya Sharma', subject: 'Biology', class: '12th', lastLogin: '1 Day Ago' },
    { id: '0042', name: 'Amit Singh', subject: 'Computer Science', class: '11th', lastLogin: '5 Days Ago' },
    { id: '0043', name: 'Neha Patel', subject: 'Social Studies', class: '9th', lastLogin: '4 Days Ago' },
    { id: '0044', name: 'Rahul Verma', subject: 'Physical Education', class: '10th', lastLogin: '2 Days Ago' },
    { id: '0045', name: 'Sunita Gupta', subject: 'Art', class: '8th', lastLogin: '3 Days Ago' },
    { id: '0046', name: 'Vikram Malhotra', subject: 'Economics', class: '12th', lastLogin: '1 Day Ago' },
    { id: '0047', name: 'Ananya Desai', subject: 'Geography', class: '9th', lastLogin: '6 Days Ago' },
  ]);

  // Mock data for students
  const [students, setStudents] = useState([
    { id: 'S001', name: 'Arjun Mehta', class: '10th', section: 'A', lastLogin: '1 Day Ago', booksBorrowed: 2, status: 'active' },
    { id: 'S002', name: 'Kavya Reddy', class: '9th', section: 'B', lastLogin: '3 Days Ago', booksBorrowed: 1, status: 'active' },
    { id: 'S003', name: 'Rohan Joshi', class: '11th', section: 'A', lastLogin: '2 Days Ago', booksBorrowed: 3, status: 'active' },
    { id: 'S004', name: 'Anika Singh', class: '12th', section: 'C', lastLogin: '8 Days Ago', booksBorrowed: 0, status: 'inactive' },
    { id: 'S005', name: 'Dhruv Patel', class: '10th', section: 'B', lastLogin: '4 Days Ago', booksBorrowed: 2, status: 'active' },
    { id: 'S006', name: 'Ishaan Kumar', class: '9th', section: 'A', lastLogin: '5 Days Ago', booksBorrowed: 1, status: 'active' },
    { id: 'S007', name: 'Meera Sharma', class: '11th', section: 'B', lastLogin: '10 Days Ago', booksBorrowed: 0, status: 'inactive' },
    { id: 'S008', name: 'Riya Chakraborty', class: '10th', section: 'C', lastLogin: '3 Days Ago', booksBorrowed: 4, status: 'active' },
    { id: 'S009', name: 'Vivaan Malhotra', class: '8th', section: 'A', lastLogin: '6 Days Ago', booksBorrowed: 2, status: 'active' },
    { id: 'S010', name: 'Zara Kapoor', class: '12th', section: 'B', lastLogin: '2 Days Ago', booksBorrowed: 1, status: 'active' },
    { id: 'S011', name: 'Aditya Gupta', class: '9th', section: 'C', lastLogin: '9 Days Ago', booksBorrowed: 0, status: 'inactive' },
    { id: 'S012', name: 'Sanya Verma', class: '11th', section: 'A', lastLogin: '4 Days Ago', booksBorrowed: 3, status: 'active' },
    { id: 'S013', name: 'Kabir Bhatia', class: '10th', section: 'B', lastLogin: '1 Day Ago', booksBorrowed: 2, status: 'active' },
    { id: 'S014', name: 'Myra Saxena', class: '8th', section: 'A', lastLogin: '7 Days Ago', booksBorrowed: 1, status: 'inactive' },
    { id: 'S015', name: 'Vihaan Choudhury', class: '12th', section: 'C', lastLogin: '5 Days Ago', booksBorrowed: 3, status: 'active' },
    { id: 'S016', name: 'Anaya Desai', class: '9th', section: 'B', lastLogin: '3 Days Ago', booksBorrowed: 2, status: 'active' },
    { id: 'S017', name: 'Reyansh Iyer', class: '11th', section: 'A', lastLogin: '8 Days Ago', booksBorrowed: 0, status: 'inactive' },
    { id: 'S018', name: 'Pari Nair', class: '10th', section: 'C', lastLogin: '2 Days Ago', booksBorrowed: 1, status: 'active' },
    { id: 'S019', name: 'Aarav Menon', class: '8th', section: 'B', lastLogin: '6 Days Ago', booksBorrowed: 2, status: 'active' },
    { id: 'S020', name: 'Isha Khanna', class: '12th', section: 'A', lastLogin: '4 Days Ago', booksBorrowed: 3, status: 'active' },
  ]);

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  // Pagination logic
  const itemsPerPage = 15;
  const getCurrentData = () => {
    const data = activeTab === 'Teachers' ? teachers : students;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return data.slice(indexOfFirstItem, indexOfLastItem);
  };

  // Total pages calculation
  const totalPages = Math.ceil(
    (activeTab === 'Teachers' ? teachers.length : students.length) / itemsPerPage
  );

  // Add new user handler
  const handleAddUser = () => {
    setNewUserData({});
    setShowAddModal(true);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserData({ ...newUserData, [name]: value });
  };

  // Submit new user
  const handleSubmitUser = () => {
    if (activeTab === 'Teachers') {
      const newTeacher = {
        id: newUserData.teacherId || `00${teachers.length + 1}`,
        name: newUserData.name || 'New Teacher',
        subject: newUserData.subject || 'Subject',
        class: newUserData.class || '10th',
        lastLogin: 'Never'
      };
      setTeachers([...teachers, newTeacher]);
    } else {
      const newStudent = {
        id: newUserData.studentId || `S0${students.length + 1}`,
        name: newUserData.name || 'New Student',
        class: newUserData.class || '10th',
        section: newUserData.section || 'A',
        lastLogin: 'Never',
        booksBorrowed: 0,
        status: 'active'
      };
      setStudents([...students, newStudent]);
    }
    
    setShowAddModal(false);
    showSuccessMessage(`${activeTab === 'Teachers' ? 'Teacher' : 'Student'} added successfully!`);
  };

  // Export Excel handler
  const handleExportExcel = () => {
    setShowExportModal(true);
  };

  // Confirm export
  const handleConfirmExport = () => {
    setShowExportModal(false);
    showSuccessMessage(`${activeTab} data exported to Excel successfully!`);
  };

  // Show success message with timeout
  const showSuccessMessage = (message) => {
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="admin-user-management-container">
      <AdminSidebar />
      <AdminNavBar />
      
      <div className="admin-user-management-main">
        <div className="admin-user-management-header">
          <h2 className="admin-user-management-title">User Management</h2>
          
          <div className="admin-user-management-tabs">
            <button 
              className={`admin-user-management-tab ${activeTab === 'Teachers' ? 'active' : ''}`}
              onClick={() => handleTabChange('Teachers')}>
              Teachers
            </button>
            <button 
              className={`admin-user-management-tab ${activeTab === 'Students' ? 'active' : ''}`}
              onClick={() => handleTabChange('Students')}>
              Students
            </button>
          </div>
          
          <div className="admin-user-management-actions">
            <button className="admin-user-management-export" onClick={handleExportExcel}>
              <span>Export Excel</span>
            </button>
            <button className="admin-user-management-ticket" onClick={handleAddUser}>
              <span>+ Add User</span>
            </button>
          </div>
        </div>
        
        <div className="admin-user-management-table-container">
          {activeTab === 'Teachers' ? (
            <table className="admin-user-management-table">
              <thead>
                <tr>
                  <th>Teacher ID</th>
                  <th>Teacher Name</th>
                  <th>Subject</th>
                  <th>Class</th>
                  <th>Last Login</th>
                </tr>
              </thead>
              <tbody>
                {getCurrentData().map((teacher) => (
                  <tr key={teacher.id}>
                    <td>{teacher.id}</td>
                    <td>{teacher.name}</td>
                    <td>{teacher.subject}</td>
                    <td>{teacher.class}</td>
                    <td>{teacher.lastLogin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="admin-user-management-table">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Student Name</th>
                  <th>Class</th>
                  <th>Section</th>
                  <th>Last Login</th>
                  <th>Books Borrowed</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {getCurrentData().map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.class}</td>
                    <td>{student.section}</td>
                    <td>{student.lastLogin}</td>
                    <td>{student.booksBorrowed}</td>
                    <td>
                      <span className={`status ${student.status}`}>
                        {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          
          {/* Pagination component */}
          <div className="admin-user-management-pagination">
            <div className="admin-user-management-pagination-info">
              Showing {getCurrentData().length} of {activeTab === 'Teachers' ? teachers.length : students.length} entries
            </div>
            <div className="admin-user-management-pagination-controls">
              <button 
                className="admin-user-management-pagination-button" 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}>
                &lt;
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`admin-user-management-pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                  onClick={() => setCurrentPage(index + 1)}>
                  {index + 1}
                </button>
              ))}
              
              <button 
                className="admin-user-management-pagination-button" 
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}>
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add User Modal */}
      {showAddModal && (
        <div className="admin-user-management-modal-overlay">
          <div className="admin-user-management-modal">
            <div className="admin-user-management-modal-header">
              <h2>Add {activeTab === 'Teachers' ? 'Teacher' : 'Student'} Details</h2>
              <button 
                className="admin-user-management-modal-close"
                onClick={() => setShowAddModal(false)}>
                &times;
              </button>
            </div>
            <div className="admin-user-management-modal-content">
              {activeTab === 'Teachers' ? (
                <>
                  <div className="admin-user-management-form-group">
                    <label>Teacher Name*</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={newUserData.name || ''} 
                      onChange={handleInputChange} 
                      required
                    />
                  </div>
                  <div className="admin-user-management-form-group">
                    <label>Teacher ID*</label>
                    <input 
                      type="text" 
                      name="teacherId" 
                      value={newUserData.teacherId || ''} 
                      onChange={handleInputChange} 
                      required
                    />
                  </div>
                  <div className="admin-user-management-form-group">
                    <label>Class Teacher of</label>
                    <input 
                      type="text" 
                      name="class" 
                      value={newUserData.class || ''} 
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="admin-user-management-form-group">
                    <label>Core Subject</label>
                    <input 
                      type="text" 
                      name="subject" 
                      value={newUserData.subject || ''} 
                      onChange={handleInputChange}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="admin-user-management-form-group">
                    <label>Student Name*</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={newUserData.name || ''} 
                      onChange={handleInputChange} 
                      required
                    />
                  </div>
                  <div className="admin-user-management-form-group">
                    <label>Student ID*</label>
                    <input 
                      type="text" 
                      name="studentId" 
                      value={newUserData.studentId || ''} 
                      onChange={handleInputChange} 
                      required
                    />
                  </div>
                  <div className="admin-user-management-form-group">
                    <label>Class</label>
                    <input 
                      type="text" 
                      name="class" 
                      value={newUserData.class || ''} 
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="admin-user-management-form-group">
                    <label>Section</label>
                    <input 
                      type="text" 
                      name="section" 
                      value={newUserData.section || ''} 
                      onChange={handleInputChange}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="admin-user-management-modal-actions">
              <button 
                className="admin-user-management-modal-cancel" 
                onClick={() => setShowAddModal(false)}>
                Cancel
              </button>
              <button 
                className="admin-user-management-modal-confirm" 
                onClick={handleSubmitUser}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Export Excel Modal */}
      {showExportModal && (
        <div className="admin-user-management-modal-overlay">
          <div className="admin-user-management-modal">
            <div className="admin-user-management-modal-header">
              <h2>Export {activeTab} Data</h2>
              <button 
                className="admin-user-management-modal-close"
                onClick={() => setShowExportModal(false)}>
                &times;
              </button>
            </div>
            <div className="admin-user-management-modal-content">
              <p>You are about to export {activeTab.toLowerCase()} data to Excel format.</p>
              <div className="admin-user-management-form-group">
                <label>File Name</label>
                <input 
                  type="text" 
                  defaultValue={`${activeTab}_Data_${new Date().toLocaleDateString().replace(/\//g, '-')}`}
                />
              </div>
              <div className="admin-user-management-form-group">
                <label>Export Options</label>
                <div className="admin-user-management-modal-options">
                  <label>
                    <input type="checkbox" defaultChecked /> Include all columns
                  </label>
                  <label>
                    <input type="checkbox" defaultChecked /> Apply formatting
                  </label>
                </div>
              </div>
            </div>
            <div className="admin-user-management-modal-actions">
              <button 
                className="admin-user-management-modal-cancel" 
                onClick={() => setShowExportModal(false)}>
                Cancel
              </button>
              <button 
                className="admin-user-management-modal-confirm" 
                onClick={handleConfirmExport}>
                Export
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Success Toast Message */}
      {successMessage && (
        <div className="admin-user-management-success-toast">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default AdminUserManagement;