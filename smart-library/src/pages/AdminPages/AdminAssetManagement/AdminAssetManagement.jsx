// import React from 'react';
// import AdminSidebar from '../../../components/AdminSidebar';
// import AdminNavBar from '../../../components/AdminNavBar';
// import './AdminAssetManagement.css';

// const AdminAssetManagement = () => {
//   return (
//     <div className="admin-page-container">
//       <AdminSidebar />
//       <AdminNavBar />
        
      
//     </div>
//   );
// };

// export default AdminAssetManagement;


// import React, { useState } from 'react';
// import AdminSidebar from '../../../components/AdminSidebar';
// import AdminNavBar from '../../../components/AdminNavBar';
// import { ArrowDown, Download, X, ChevronLeft, ChevronRight, Check } from 'lucide-react';
// import './AdminAssetManagement.css';

// const AdminAssetManagement = () => {
//   const [activeTab, setActiveTab] = useState('IT Assets');
//   const [selectedAsset, setSelectedAsset] = useState(null);
//   const [showTicketModal, setShowTicketModal] = useState(false);
//   const [ticketDescription, setTicketDescription] = useState('');
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [exportModalOpen, setExportModalOpen] = useState(false);
//   const itemsPerPage = 15;
  
//   // Sample data for the assets
//   const allAssetsData = [
//     // IT Assets
//     { id: 1, name: "Dell Latitude 7490", type: "Laptop Computer", description: "8/256 8th gen Thinkpad", serialNumber: "5G02LT22837PA", purchaseDate: "13/02/2025", status: "Active" },
//     { id: 2, name: "Dell Latitude 7490", type: "Laptop Computer", description: "8/256 8th gen Thinkpad", serialNumber: "KES 3,200.500", purchaseDate: "Nairobi", status: "Active" },
//     { id: 3, name: "Dell Latitude 7490", type: "Laptop Computer", description: "8/256 8th gen Thinkpad", serialNumber: "KES 32.500", purchaseDate: "N/A", status: "Inactive" },
//     { id: 4, name: "Dell Latitude 7490", type: "Laptop Computer", description: "8/256 8th gen Thinkpad", serialNumber: "KES 7,255.500", purchaseDate: "Kitusuru", status: "Inactive" },
//     { id: 5, name: "Dell Latitude 7490", type: "Laptop Computer", description: "8/256 8th gen Thinkpad", serialNumber: "KES 32.500", purchaseDate: "N/A", status: "Inactive" },
//     { id: 6, name: "Dell Latitude 7490", type: "Laptop Computer", description: "8/256 8th gen Thinkpad", serialNumber: "KES 7,255.500", purchaseDate: "Kitusuru", status: "Active" },
//     { id: 7, name: "Dell Latitude 7490", type: "Laptop Computer", description: "8/256 8th gen Thinkpad", serialNumber: "KES 320.500", purchaseDate: "Loresho", status: "Active" },
//     { id: 8, name: "HP EliteBook 840", type: "Laptop Computer", description: "16/512 10th gen Intel Core", serialNumber: "7G82HT28817PA", purchaseDate: "21/01/2025", status: "Active" },
//     { id: 9, name: "MacBook Pro 13", type: "Laptop Computer", description: "8/512 M1 Chip", serialNumber: "MAC78923HJK", purchaseDate: "15/02/2025", status: "Active" },
//     { id: 10, name: "Lenovo ThinkCentre", type: "Desktop Computer", description: "16/1TB Desktop Workstation", serialNumber: "LEN67890TRE", purchaseDate: "05/01/2025", status: "Active" },
//     { id: 11, name: "Dell OptiPlex 7080", type: "Desktop Computer", description: "32/2TB Desktop Tower", serialNumber: "DEL45678UIO", purchaseDate: "10/02/2025", status: "Inactive" },
//     { id: 12, name: "iPad Pro 12.9", type: "Tablet", description: "8/256 M1 Chip", serialNumber: "APP34567YUI", purchaseDate: "25/01/2025", status: "Active" },
//     { id: 13, name: "Surface Pro 8", type: "Tablet", description: "16/512 Intel i7", serialNumber: "MS78945TRE", purchaseDate: "02/02/2025", status: "Active" },
//     { id: 14, name: "Epson WorkForce Pro", type: "Printer", description: "Color Laser Printer", serialNumber: "EPS12345QWE", purchaseDate: "18/01/2025", status: "Active" },
//     { id: 15, name: "Canon ImageCLASS", type: "Printer", description: "B&W Laser Printer", serialNumber: "CAN23456RTY", purchaseDate: "11/02/2025", status: "Inactive" },
//     { id: 16, name: "Cisco Catalyst 2960", type: "Network Switch", description: "24-Port Gigabit Switch", serialNumber: "CIS34567UIO", purchaseDate: "19/02/2025", status: "Active" },
//     { id: 17, name: "NETGEAR Nighthawk", type: "Router", description: "Tri-Band WiFi 6 Router", serialNumber: "NET45678IOP", purchaseDate: "08/02/2025", status: "Active" },
    
//     // Accessories
//     { id: 18, name: "Logitech MX Master 3", type: "Mouse", description: "Wireless Ergonomic Mouse", serialNumber: "LOG12345ASD", purchaseDate: "05/02/2025", status: "Active" },
//     { id: 19, name: "Keychron K2", type: "Keyboard", description: "Wireless Mechanical Keyboard", serialNumber: "KEY23456FGH", purchaseDate: "12/02/2025", status: "Active" },
//     { id: 20, name: "Dell UltraSharp U2720Q", type: "Monitor", description: "27\" 4K USB-C Monitor", serialNumber: "DEL34567JKL", purchaseDate: "20/01/2025", status: "Active" },
//     { id: 21, name: "LG 34WN80C-B", type: "Monitor", description: "34\" UltraWide Curved Monitor", serialNumber: "LG45678ZXC", purchaseDate: "15/01/2025", status: "Inactive" },
//     { id: 22, name: "Bose QuietComfort 45", type: "Headphones", description: "Noise Cancelling Headphones", serialNumber: "BOS56789VBN", purchaseDate: "30/01/2025", status: "Active" },
//     { id: 23, name: "Samsung T7", type: "External SSD", description: "1TB Portable SSD", serialNumber: "SAM67890MNB", purchaseDate: "18/02/2025", status: "Active" },
    
//     // Machines
//     { id: 24, name: "Canon DR-C225", type: "Scanner", description: "Document Scanner", serialNumber: "CAN78901QWE", purchaseDate: "22/01/2025", status: "Active" },
//     { id: 25, name: "Fujitsu ScanSnap iX1600", type: "Scanner", description: "Wireless Document Scanner", serialNumber: "FUJ89012RTY", purchaseDate: "16/02/2025", status: "Active" },
//     { id: 26, name: "CZUR ET16 Plus", type: "Book Scanner", description: "Book & Document Scanner", serialNumber: "CZU90123UIO", purchaseDate: "05/02/2025", status: "Active" },
//     { id: 27, name: "Epson DS-50000", type: "Large Format Scanner", description: "Large Format Flatbed Scanner", serialNumber: "EPS01234IOP", purchaseDate: "25/01/2025", status: "Inactive" },
//     { id: 28, name: "Microfilm Scanner", type: "Microfilm Scanner", description: "Digital Microfilm Scanner", serialNumber: "MIC12345ASD", purchaseDate: "11/01/2025", status: "Active" },
    
//     // Furniture
//     { id: 29, name: "Study Carrel", type: "Study Desk", description: "Individual Study Station", serialNumber: "STU23456FGH", purchaseDate: "02/02/2025", status: "Active" },
//     { id: 30, name: "Reading Table", type: "Table", description: "6-Person Reading Table", serialNumber: "REA34567JKL", purchaseDate: "15/02/2025", status: "Active" },
//     { id: 31, name: "Library Shelving", type: "Shelving", description: "Double-sided Bookshelf", serialNumber: "LIB45678ZXC", purchaseDate: "20/01/2025", status: "Active" },
//     { id: 32, name: "Media Display Rack", type: "Display Rack", description: "DVD/CD Display Rack", serialNumber: "MED56789VBN", purchaseDate: "28/01/2025", status: "Inactive" },
//     { id: 33, name: "Circulation Desk", type: "Desk", description: "Library Front Desk", serialNumber: "CIR67890MNB", purchaseDate: "17/02/2025", status: "Active" },
//     { id: 34, name: "Ergonomic Chair", type: "Chair", description: "Staff Office Chair", serialNumber: "ERG78901QWE", purchaseDate: "10/01/2025", status: "Active" },
//     { id: 35, name: "Book Return Drop", type: "Book Return", description: "After-hours Book Return", serialNumber: "BOO89012RTY", purchaseDate: "05/02/2025", status: "Active" },
//   ];
  
//   // Filter assets based on active tab
//   const getFilteredAssets = () => {
//     switch(activeTab) {
//       case 'IT Assets':
//         return allAssetsData.filter(asset => 
//           ['Laptop Computer', 'Desktop Computer', 'Tablet', 'Printer', 'Network Switch', 'Router'].includes(asset.type));
//       case 'Accessories':
//         return allAssetsData.filter(asset => 
//           ['Mouse', 'Keyboard', 'Monitor', 'Headphones', 'External SSD'].includes(asset.type));
//       case 'Machines':
//         return allAssetsData.filter(asset => 
//           ['Scanner', 'Book Scanner', 'Large Format Scanner', 'Microfilm Scanner'].includes(asset.type));
//       case 'Furniture':
//         return allAssetsData.filter(asset => 
//           ['Study Desk', 'Table', 'Shelving', 'Display Rack', 'Desk', 'Chair', 'Book Return'].includes(asset.type));
//       default:
//         return allAssetsData;
//     }
//   };
  
//   const filteredAssets = getFilteredAssets();
  
//   // Get current items for pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredAssets.slice(indexOfFirstItem, indexOfLastItem);
  
//   // Calculate total pages
//   const totalPages = Math.ceil(filteredAssets.length / itemsPerPage);
  
//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
//   // Go to next or previous page
//   const goToNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };
  
//   const goToPreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };
  
//   const tabs = ['IT Assets', 'Accessories', 'Machines', 'Furniture'];
  
//   const handleSelectAsset = (asset) => {
//     if (selectedAsset && selectedAsset.id === asset.id) {
//       setSelectedAsset(null);
//     } else {
//       setSelectedAsset(asset);
//     }
//   };
  
//   const handleOpenTicketModal = () => {
//     if (selectedAsset) {
//       setShowTicketModal(true);
//       setTicketDescription('');
//     }
//   };
  
//   const handleCloseModal = () => {
//     setShowTicketModal(false);
//     setExportModalOpen(false);
//   };
  
//   const handleRaiseTicket = () => {
//     // Simulate ticket raising
//     setShowSuccessMessage(true);
//     setShowTicketModal(false);
    
//     // Hide success message after 3 seconds
//     setTimeout(() => {
//       setShowSuccessMessage(false);
//       setSelectedAsset(null);
//     }, 3000);
//   };
  
//   const handleExportExcel = () => {
//     setExportModalOpen(true);
//   };
  
//   const handleSortColumn = (column) => {
//     // Implement sorting logic here
//     console.log(`Sorting by ${column}`);
//   };

//   return (
//     <div className="admin-asset-management-container">
//       <AdminSidebar />
//       <AdminNavBar />
      
//       <div className="admin-asset-management-main">
//         <div className="admin-asset-management-header">
//           <h1 className="admin-asset-management-title">Assets Management</h1>
          
//           <div className="admin-asset-management-tabs">
//             {tabs.map(tab => (
//               <button 
//                 key={tab}
//                 className={`admin-asset-management-tab ${activeTab === tab ? 'active' : ''}`}
//                 onClick={() => {
//                   setActiveTab(tab);
//                   setCurrentPage(1);
//                   setSelectedAsset(null);
//                 }}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
          
//           <div className="admin-asset-management-actions">
//             <button 
//               className={`admin-asset-management-ticket ${!selectedAsset ? 'disabled' : ''}`}
//               onClick={handleOpenTicketModal}
//               disabled={!selectedAsset}
//             >
//               Ticket Raise
//             </button>
            
//             <button 
//               className="admin-asset-management-export" 
//               onClick={handleExportExcel}
//             >
//               <Download size={16} />
//               Export Excel
//             </button>
            
//             <button 
//               className="admin-asset-management-ticket-management"
//             >
//               Ticket Management
//             </button>
//           </div>
//         </div>
        
//         <div className="admin-asset-management-table-container">
//           <table className="admin-asset-management-table">
//             <thead>
//               <tr>
//                 <th className="checkbox-column"></th>
//                 <th>Asset Name</th>
//                 <th onClick={() => handleSortColumn('type')}>
//                   Asset type <ArrowDown size={16} />
//                 </th>
//                 <th>Short Description</th>
//                 <th onClick={() => handleSortColumn('serialNumber')}>
//                   Serial Number <ArrowDown size={16} />
//                 </th>
//                 <th>Purchase Date</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentItems.map(asset => (
//                 <tr key={asset.id} className={selectedAsset && selectedAsset.id === asset.id ? 'selected-row' : ''}>
//                   <td className="checkbox-column">
//                     <div 
//                       className={`custom-checkbox ${selectedAsset && selectedAsset.id === asset.id ? 'checked' : ''}`}
//                       onClick={() => handleSelectAsset(asset)}
//                     >
//                       {selectedAsset && selectedAsset.id === asset.id && <Check size={16} />}
//                     </div>
//                   </td>
//                   <td>{asset.name}</td>
//                   <td>{asset.type}</td>
//                   <td>{asset.description}</td>
//                   <td>{asset.serialNumber}</td>
//                   <td>{asset.purchaseDate}</td>
//                   <td className={`status ${asset.status.toLowerCase()}`}>
//                     {asset.status}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
          
//           <div className="admin-asset-management-pagination">
//             <div className="admin-asset-management-pagination-info">
//               Showing {filteredAssets.length > 0 ? indexOfFirstItem + 1 : 0} to {Math.min(indexOfLastItem, filteredAssets.length)} of {filteredAssets.length} entries
//             </div>
            
//             <div className="admin-asset-management-pagination-controls">
//               <button 
//                 className="admin-asset-management-pagination-button prev"
//                 onClick={goToPreviousPage}
//                 disabled={currentPage === 1}
//               >
//                 <ChevronLeft size={16} />
//               </button>
              
//               {[...Array(totalPages)].map((_, index) => (
//                 <button
//                   key={index}
//                   className={`admin-asset-management-pagination-button page-number ${currentPage === index + 1 ? 'active' : ''}`}
//                   onClick={() => paginate(index + 1)}
//                 >
//                   {index + 1}
//                 </button>
//               ))}
              
//               <button 
//                 className="admin-asset-management-pagination-button next"
//                 onClick={goToNextPage}
//                 disabled={currentPage === totalPages}
//               >
//                 <ChevronRight size={16} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Ticket Modal */}
//       {showTicketModal && selectedAsset && (
//         <div className="admin-asset-management-modal-overlay">
//           <div className="admin-asset-management-modal">
//             <div className="admin-asset-management-modal-header">
//               <h2>TICKET RAISE</h2>
//               <button 
//                 className="admin-asset-management-modal-close" 
//                 onClick={handleCloseModal}
//               >
//                 <X size={20} />
//               </button>
//             </div>
            
//             <div className="admin-asset-management-modal-content">
//               <div className="admin-asset-management-form-group">
//                 <label>Asset Name</label>
//                 <input 
//                   type="text" 
//                   value={selectedAsset.name} 
//                   disabled 
//                 />
//               </div>
              
//               <div className="admin-asset-management-form-group">
//                 <label>Description</label>
//                 <textarea 
//                   rows="4"
//                   value={ticketDescription}
//                   onChange={(e) => setTicketDescription(e.target.value)}
//                   placeholder="Enter ticket description..."
//                 ></textarea>
//               </div>
//             </div>
            
//             <div className="admin-asset-management-modal-actions">
//               <button 
//                 className="admin-asset-management-modal-raise"
//                 onClick={handleRaiseTicket}
//               >
//                 Ticket Raise
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Export Modal */}
//       {exportModalOpen && (
//         <div className="admin-asset-management-modal-overlay">
//           <div className="admin-asset-management-modal">
//             <div className="admin-asset-management-modal-header">
//               <h2>Export Assets to Excel</h2>
//               <button 
//                 className="admin-asset-management-modal-close" 
//                 onClick={handleCloseModal}
//               >
//                 <X size={20} />
//               </button>
//             </div>
            
//             <div className="admin-asset-management-modal-content">
//               <p>Choose export options:</p>
              
//               <div className="admin-asset-management-modal-options">
//                 <label>
//                   <input type="checkbox" defaultChecked />
//                   Include all columns
//                 </label>
                
//                 <label>
//                   <input type="checkbox" defaultChecked />
//                   Include asset status
//                 </label>
                
//                 <label>
//                   <input type="checkbox" defaultChecked />
//                   Include purchase date
//                 </label>
//               </div>
//             </div>
            
//             <div className="admin-asset-management-modal-actions">
//               <button 
//                 className="admin-asset-management-modal-cancel" 
//                 onClick={handleCloseModal}
//               >
//                 Cancel
//               </button>
//               <button className="admin-asset-management-modal-confirm">
//                 <Download size={16} />
//                 Export
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Success Message */}
//       {showSuccessMessage && (
//         <div className="admin-asset-management-success-toast">
//           <Check size={20} />
//           <span>Ticket Raised Successfully</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminAssetManagement;



import React, { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar';
import AdminNavBar from '../../../components/AdminNavBar';
import { ArrowDown, Download, X, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import './AdminAssetManagement.css';

const AdminAssetManagement = () => {
  const [activeTab, setActiveTab] = useState('IT Assets');
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [ticketDescription, setTicketDescription] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const itemsPerPage = 15;
  
  // Sample data for the assets with standardized dates
  const allAssetsData = [
    // IT Assets
    { id: 1, name: "Dell Latitude 7490", type: "Laptop Computer", description: "8/256 8th gen Thinkpad", serialNumber: "5G02LT22837PA", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 2, name: "Dell Latitude 7490", type: "Laptop Computer", description: "8/256 8th gen Thinkpad", serialNumber: "KES 3,200.500", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 3, name: "Dell Latitude 7490", type: "Laptop Computer", description: "8/256 8th gen Thinkpad", serialNumber: "KES 32.500", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Inactive" },
    { id: 4, name: "Dell Latitude 7490", type: "Laptop Computer", description: "8/256 8th gen Thinkpad", serialNumber: "KES 7,255.500", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Inactive" },
    { id: 5, name: "Dell Latitude 7490", type: "Laptop Computer", description: "8/256 8th gen Thinkpad", serialNumber: "KES 32.500", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Inactive" },
    { id: 6, name: "Dell Latitude 7490", type: "Laptop Computer", description: "8/256 8th gen Thinkpad", serialNumber: "KES 7,255.500", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 7, name: "Dell Latitude 7490", type: "Laptop Computer", description: "8/256 8th gen Thinkpad", serialNumber: "KES 320.500", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 8, name: "HP EliteBook 840", type: "Laptop Computer", description: "16/512 10th gen Intel Core", serialNumber: "7G82HT28817PA", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 9, name: "MacBook Pro 13", type: "Laptop Computer", description: "8/512 M1 Chip", serialNumber: "MAC78923HJK", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 10, name: "Lenovo ThinkCentre", type: "Desktop Computer", description: "16/1TB Desktop Workstation", serialNumber: "LEN67890TRE", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 11, name: "Dell OptiPlex 7080", type: "Desktop Computer", description: "32/2TB Desktop Tower", serialNumber: "DEL45678UIO", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Inactive" },
    { id: 12, name: "iPad Pro 12.9", type: "Tablet", description: "8/256 M1 Chip", serialNumber: "APP34567YUI", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 13, name: "Surface Pro 8", type: "Tablet", description: "16/512 Intel i7", serialNumber: "MS78945TRE", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 14, name: "Epson WorkForce Pro", type: "Printer", description: "Color Laser Printer", serialNumber: "EPS12345QWE", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 15, name: "Canon ImageCLASS", type: "Printer", description: "B&W Laser Printer", serialNumber: "CAN23456RTY", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Inactive" },
    { id: 16, name: "Cisco Catalyst 2960", type: "Network Switch", description: "24-Port Gigabit Switch", serialNumber: "CIS34567UIO", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 17, name: "NETGEAR Nighthawk", type: "Router", description: "Tri-Band WiFi 6 Router", serialNumber: "NET45678IOP", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    
    // Accessories
    { id: 18, name: "Logitech MX Master 3", type: "Mouse", description: "Wireless Ergonomic Mouse", serialNumber: "LOG12345ASD", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 19, name: "Keychron K2", type: "Keyboard", description: "Wireless Mechanical Keyboard", serialNumber: "KEY23456FGH", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 20, name: "Dell UltraSharp U2720Q", type: "Monitor", description: "27\" 4K USB-C Monitor", serialNumber: "DEL34567JKL", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 21, name: "LG 34WN80C-B", type: "Monitor", description: "34\" UltraWide Curved Monitor", serialNumber: "LG45678ZXC", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Inactive" },
    { id: 22, name: "Bose QuietComfort 45", type: "Headphones", description: "Noise Cancelling Headphones", serialNumber: "BOS56789VBN", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 23, name: "Samsung T7", type: "External SSD", description: "1TB Portable SSD", serialNumber: "SAM67890MNB", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    
    // Machines
    { id: 24, name: "Canon DR-C225", type: "Scanner", description: "Document Scanner", serialNumber: "CAN78901QWE", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 25, name: "Fujitsu ScanSnap iX1600", type: "Scanner", description: "Wireless Document Scanner", serialNumber: "FUJ89012RTY", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 26, name: "CZUR ET16 Plus", type: "Book Scanner", description: "Book & Document Scanner", serialNumber: "CZU90123UIO", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 27, name: "Epson DS-50000", type: "Large Format Scanner", description: "Large Format Flatbed Scanner", serialNumber: "EPS01234IOP", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Inactive" },
    { id: 28, name: "Microfilm Scanner", type: "Microfilm Scanner", description: "Digital Microfilm Scanner", serialNumber: "MIC12345ASD", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    
    // Furniture
    { id: 29, name: "Study Carrel", type: "Study Desk", description: "Individual Study Station", serialNumber: "STU23456FGH", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 30, name: "Reading Table", type: "Table", description: "6-Person Reading Table", serialNumber: "REA34567JKL", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 31, name: "Library Shelving", type: "Shelving", description: "Double-sided Bookshelf", serialNumber: "LIB45678ZXC", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 32, name: "Media Display Rack", type: "Display Rack", description: "DVD/CD Display Rack", serialNumber: "MED56789VBN", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Inactive" },
    { id: 33, name: "Circulation Desk", type: "Desk", description: "Library Front Desk", serialNumber: "CIR67890MNB", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 34, name: "Ergonomic Chair", type: "Chair", description: "Staff Office Chair", serialNumber: "ERG78901QWE", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
    { id: 35, name: "Book Return Drop", type: "Book Return", description: "After-hours Book Return", serialNumber: "BOO89012RTY", purchaseDate: "24/02/2025", warrantyExpiry: "24/02/2026", status: "Active" },
  ];
  
  // Filter assets based on active tab
  const getFilteredAssets = () => {
    switch(activeTab) {
      case 'IT Assets':
        return allAssetsData.filter(asset => 
          ['Laptop Computer', 'Desktop Computer', 'Tablet', 'Printer', 'Network Switch', 'Router'].includes(asset.type));
      case 'Accessories':
        return allAssetsData.filter(asset => 
          ['Mouse', 'Keyboard', 'Monitor', 'Headphones', 'External SSD'].includes(asset.type));
      case 'Machines':
        return allAssetsData.filter(asset => 
          ['Scanner', 'Book Scanner', 'Large Format Scanner', 'Microfilm Scanner'].includes(asset.type));
      case 'Furniture':
        return allAssetsData.filter(asset => 
          ['Study Desk', 'Table', 'Shelving', 'Display Rack', 'Desk', 'Chair', 'Book Return'].includes(asset.type));
      default:
        return allAssetsData;
    }
  };
  
  const filteredAssets = getFilteredAssets();
  
  // Get current items for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAssets.slice(indexOfFirstItem, indexOfLastItem);
  
  // Calculate total pages
  const totalPages = Math.ceil(filteredAssets.length / itemsPerPage);
  
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
  
  const tabs = ['IT Assets', 'Accessories', 'Machines', 'Furniture'];
  
  const handleSelectAsset = (asset) => {
    if (selectedAsset && selectedAsset.id === asset.id) {
      setSelectedAsset(null);
    } else {
      setSelectedAsset(asset);
    }
  };
  
  const handleOpenTicketModal = () => {
    if (selectedAsset) {
      setShowTicketModal(true);
      setTicketDescription('');
    }
  };
  
  const handleCloseModal = () => {
    setShowTicketModal(false);
    setExportModalOpen(false);
  };
  
  const handleRaiseTicket = () => {
    // Simulate ticket raising
    setShowSuccessMessage(true);
    setShowTicketModal(false);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
      setSelectedAsset(null);
    }, 3000);
  };
  
  const handleExportExcel = () => {
    setExportModalOpen(true);
  };
  
  const handleSortColumn = (column) => {
    // Implement sorting logic here
    console.log(`Sorting by ${column}`);
  };

  return (
    <div className="admin-asset-management-container">
      <AdminSidebar />
      <AdminNavBar />
      
      <div className="admin-asset-management-main">
        <div className="admin-asset-management-header">
          <h1 className="admin-asset-management-title">Assets Management</h1>
          
          <div className="admin-asset-management-tabs">
            {tabs.map(tab => (
              <button 
                key={tab}
                className={`admin-asset-management-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentPage(1);
                  setSelectedAsset(null);
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="admin-asset-management-actions">
            <button 
              className={`admin-asset-management-ticket ${!selectedAsset ? 'disabled' : ''}`}
              onClick={handleOpenTicketModal}
              disabled={!selectedAsset}
            >
              Ticket Raise
            </button>
            
            <button 
              className="admin-asset-management-export" 
              onClick={handleExportExcel}
            >
              <Download size={16} />
              Export Excel
            </button>
            
            <button 
  className="admin-asset-management-ticket-management"
  onClick={() => window.location.href = '/admin-ticket-management'}
>
  Ticket Management
</button>
          </div>
        </div>
        
        <div className="admin-asset-management-table-container">
          <table className="admin-asset-management-table">
            <thead>
              <tr>
                <th className="checkbox-column"></th>
                <th>Asset Name</th>
                <th onClick={() => handleSortColumn('type')}>
                  Asset type <ArrowDown size={0} />
                </th>
                <th>Short Description</th>
                <th onClick={() => handleSortColumn('serialNumber')}>
                  Serial Number <ArrowDown size={0} />
                </th>
                <th>Purchase Date</th>
                <th>Warranty Expiry</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map(asset => (
                <tr key={asset.id} className={selectedAsset && selectedAsset.id === asset.id ? 'selected-row' : ''}>
                  <td className="checkbox-column">
                    <div 
                      className={`custom-checkbox ${selectedAsset && selectedAsset.id === asset.id ? 'checked' : ''}`}
                      onClick={() => handleSelectAsset(asset)}
                    >
                      {selectedAsset && selectedAsset.id === asset.id && <Check size={16} />}
                    </div>
                  </td>
                  <td>{asset.name}</td>
                  <td>{asset.type}</td>
                  <td>{asset.description}</td>
                  <td>{asset.serialNumber}</td>
                  <td>{asset.purchaseDate}</td>
                  <td>{asset.warrantyExpiry}</td>
                  <td className={`status ${asset.status.toLowerCase()}`}>
                    {asset.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="admin-asset-management-pagination">
            <div className="admin-asset-management-pagination-info">
              Showing {filteredAssets.length > 0 ? indexOfFirstItem + 1 : 0} to {Math.min(indexOfLastItem, filteredAssets.length)} of {filteredAssets.length} entries
            </div>
            
            <div className="admin-asset-management-pagination-controls">
              <button 
                className="admin-asset-management-pagination-button prev"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={16} />
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`admin-asset-management-pagination-button page-number ${currentPage === index + 1 ? 'active' : ''}`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              
              <button 
                className="admin-asset-management-pagination-button next"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ticket Modal */}
      {showTicketModal && selectedAsset && (
        <div className="admin-asset-management-modal-overlay">
          <div className="admin-asset-management-modal">
            <div className="admin-asset-management-modal-header">
              <h2>TICKET RAISE</h2>
              <button 
                className="admin-asset-management-modal-close" 
                onClick={handleCloseModal}
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="admin-asset-management-modal-content">
              <div className="admin-asset-management-form-group">
                <label>Asset Name</label>
                <input 
                  type="text" 
                  value={selectedAsset.name} 
                  disabled 
                />
              </div>
              
              <div className="admin-asset-management-form-group">
                <label>Description</label>
                <textarea 
                  rows="4"
                  value={ticketDescription}
                  onChange={(e) => setTicketDescription(e.target.value)}
                  placeholder="Enter ticket description..."
                ></textarea>
              </div>
            </div>
            
            <div className="admin-asset-management-modal-actions">
              <button 
                className="admin-asset-management-modal-raise"
                onClick={handleRaiseTicket}
              >
                Ticket Raise
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Export Modal */}
      {exportModalOpen && (
        <div className="admin-asset-management-modal-overlay">
          <div className="admin-asset-management-modal">
            <div className="admin-asset-management-modal-header">
              <h2>Export Assets to Excel</h2>
              <button 
                className="admin-asset-management-modal-close" 
                onClick={handleCloseModal}
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="admin-asset-management-modal-content">
              <p>Choose export options:</p>
              
              <div className="admin-asset-management-modal-options">
                <label>
                  <input type="checkbox" defaultChecked />
                  Include all columns
                </label>
                
                <label>
                  <input type="checkbox" defaultChecked />
                  Include asset status
                </label>
                
                <label>
                  <input type="checkbox" defaultChecked />
                  Include purchase date
                </label>
                
                <label>
                  <input type="checkbox" defaultChecked />
                  Include warranty expiry
                </label>
              </div>
            </div>
            
            <div className="admin-asset-management-modal-actions">
              <button 
                className="admin-asset-management-modal-cancel" 
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button className="admin-asset-management-modal-confirm">
                <Download size={16} />
                Export
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="admin-asset-management-success-toast">
          <Check size={20} />
          <span>Ticket Raised Successfully</span>
        </div>
      )}
    </div>
  );
};

export default AdminAssetManagement;