// import React from 'react';
// import StateAdminNavbar from '../../../components/StateAdmin/StateAdminNavbar/StateAdminNavbar';
// import StateAdminSidebar from '../../../components/StateAdmin/StateAdminSidebar/StateAdminSidebar';
// import './StateAssetManagement.css';

// const StateAssetManagement = () => {
//   return (
//     <div className="State-Asset-Management-Container">
//       <StateAdminNavbar />
//       <StateAdminSidebar />
//     </div>
//   );
// };

// export default StateAssetManagement;

import React, { useState, useEffect } from 'react';
import StateAdminNavbar from '../../../components/StateAdmin/StateAdminNavbar/StateAdminNavbar';
import StateAdminSidebar from '../../../components/StateAdmin/StateAdminSidebar/StateAdminSidebar';
import './StateAssetManagement.css';

const StateAssetManagement = () => {
  // State for active category
  const [activeCategory, setActiveCategory] = useState('IT Assets');
  
  // State for selected filters
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedBlock, setSelectedBlock] = useState('');
  const [selectedSchool, setSelectedSchool] = useState('');
  
  // Sample data for assets
  const [assets, setAssets] = useState([]);
  const [filteredAssets, setFilteredAssets] = useState([]);
  
  // Sample data for dropdowns
  const districts = [
    'Dehradun', 'Haridwar', 'Nainital', 'Almora', 'Chamoli'
  ];
  
  const blocks = {
    'Almora': ['Bhikiyasain', 'Chaukhutiya', 'Dwarahat', 'Lamgara', 'Syalde', 'Tarikhet', 'Bhaisiyachana', 'Dhauladevi', 'Salt'],
    'Bageshwar': ['Bageshwar', 'Kapkot', 'Garur'],
    'Chamoli': ['Joshimath', 'Ghat', 'Tharali', 'Karnprayag', 'Gairsain', 'Pokhari', 'Dasoli', 'Dewal', 'Narayan Bagar'],
    'Champawat': ['Champawat', 'Lohaghat', 'Pati', 'Barakot'],
    'Dehradun': ['Chakrata', 'Kalsi', 'Vikasnagar', 'Sahaspur', 'Raipur', 'Doiwala', 'Tyuni'],
    'Haridwar': ['Bhagwanpur', 'Roorkee', 'Narsan', 'Bahadarabad', 'Laksar', 'Khanpur', 'Manglaur'],
    'Nainital': ['Haldwani', 'Ramnagar', 'Kaladhungi', 'Kotabagh', 'Dhari', 'Betalghat', 'Bhimtal', 'Ramgarh', 'Okhalkanda'],
    'Pauri Garhwal': ['Pauri', 'Kot', 'Kaljikhal', 'Lansdowne', 'Thalisain', 'Bironkhal', 'Dwarikhal', 'Dugadda', 'Rikhnikhal', 'Pabo', 'Pokhda', 'Ekeshwar', 'Nainidanda', 'Yamkeshwar', 'Jaihrikhal'],
    'Pithoragarh': ['Pithoragarh', 'Dharchula', 'Didihat', 'Berinag', 'Munakot', 'Gangolihat', 'Kanalichina', 'Munsiyari'],
    'Rudraprayag': ['Rudraprayag', 'Jakholi', 'Ukhimath'],
    'Tehri Garhwal': ['Tehri', 'Pratapnagar', 'Jakhnidhar', 'Devprayag', 'Narendra Nagar', 'Bhilangana', 'Thauldar', 'Chamba', 'Kirtinagar'],
    'Udham Singh Nagar': ['Kashipur', 'Jaspur', 'Rudrapur', 'Gadarpur', 'Khatima', 'Sitarganj', 'Bazpur', 'Kichha'],
    'Uttarkashi': ['Uttarkashi', 'Bhatwari', 'Dunda', 'Chinyalisaur', 'Naugaon', 'Purola', 'Mori']
  };
  
  const schools = {
    'Chakrata': ['Government Inter College Chakrata', 'Primary School Chakrata'],
    'Kalsi': ['Government High School Kalsi', 'Primary School Kalsi'],
    'Vikasnagar': ['Government Inter College Vikasnagar', 'Primary School Vikasnagar'],
    'Bhagwanpur': ['Government Inter College Bhagwanpur', 'Primary School Bhagwanpur'],
    'Roorkee': ['Government Inter College Roorkee', 'Primary School Roorkee'],
    'Haldwani': ['Government Inter College Haldwani', 'Primary School Haldwani'],
    'Ramnagar': ['Government Inter College Ramnagar', 'Primary School Ramnagar'],
    'Bhikiyasain': ['Government Inter College Bhikiyasain', 'Primary School Bhikiyasain'],
    'Joshimath': ['Government Inter College Joshimath', 'Primary School Joshimath'],
    'Tehri': ['Government Inter College Tehri', 'Rajkiya Kanya Inter College Tehri', 'Primary School New Tehri'],
    'Kashipur': ['Government Inter College Kashipur', 'Model School Kashipur', 'Primary School Kashipur East'],
    'Pithoragarh': ['Government Inter College Pithoragarh', 'Government Girls Inter College Pithoragarh'],
    'Rudraprayag': ['Government Inter College Rudraprayag', 'Primary School Rudraprayag'],
    'Dehradun': ['Doon International School', 'Government Inter College Dehradun', 'Government Girls Inter College Dehradun'],
    'Champawat': ['Government Inter College Champawat', 'Primary School Champawat'],
    'Bageshwar': ['Government Inter College Bageshwar', 'Government Girls Inter College Bageshwar'],
    'Uttarkashi': ['Government Inter College Uttarkashi', 'Primary School Uttarkashi'],
    'Pauri': ['Government Inter College Pauri', 'Rajkiya Kanya Inter College Pauri', 'Primary School Pauri'],
    'Lansdowne': ['Government Inter College Lansdowne', 'Army Public School Lansdowne']
};
  
  // Sample asset data by category
  const assetData = {
    'IT Assets': [
      { id: 1, name: 'Dell Latitude 7490', type: 'Laptop Computer', description: '8/256 8th gen Thinkpad', serial: '5G02LT22837PA', purchase: '13/02/2025', warranty: '13/02/2030', status: 'Active', district: 'Dehradun', block: 'Chakrata', school: 'Government Inter College Chakrata' },
      { id: 2, name: 'Dell Latitude 7490', type: 'Laptop Computer', description: '8/256 8th gen Thinkpad', serial: '5G02LT22837PA', purchase: '13/02/2025', warranty: '13/02/2030', status: 'Active', district: 'Dehradun', block: 'Chakrata', school: 'Government Inter College Chakrata' },
      { id: 3, name: 'Dell Latitude 7490', type: 'Laptop Computer', description: '8/256 8th gen Thinkpad', serial: '5G02LT22837PA', purchase: '13/02/2025', warranty: '13/02/2030', status: 'Inactive', district: 'Haridwar', block: 'Roorkee', school: 'Government Inter College Roorkee' },
      { id: 4, name: 'Dell Latitude 7490', type: 'Laptop Computer', description: '8/256 8th gen Thinkpad', serial: '5G02LT22837PA', purchase: '13/02/2025', warranty: '13/02/2030', status: 'Inactive', district: 'Nainital', block: 'Haldwani', school: 'Government Inter College Haldwani' },
      { id: 5, name: 'Dell Latitude 7490', type: 'Laptop Computer', description: '8/256 8th gen Thinkpad', serial: '5G02LT22837PA', purchase: '13/02/2025', warranty: '13/02/2030', status: 'Inactive', district: 'Nainital', block: 'Haldwani', school: 'Government Inter College Haldwani' },
      { id: 6, name: 'Dell Latitude 7490', type: 'Laptop Computer', description: '8/256 8th gen Thinkpad', serial: '5G02LT22837PA', purchase: '13/02/2025', warranty: '13/02/2030', status: 'Active', district: 'Almora', block: 'Bhikiyasain', school: 'Government Inter College Bhikiyasain' },
      { id: 7, name: 'Dell Latitude 7490', type: 'Laptop Computer', description: '8/256 8th gen Thinkpad', serial: '5G02LT22837PA', purchase: '13/02/2025', warranty: '13/02/2030', status: 'Active', district: 'Chamoli', block: 'Joshimath', school: 'Government Inter College Joshimath' },
      { id: 8, name: 'HP ProBook 450 G9', type: 'Laptop Computer', description: '16/512 11th Gen Intel i5', serial: 'HP450G9T74U', purchase: '20/01/2025', warranty: '20/01/2028', status: 'Active', district: 'Pauri Garhwal', block: 'Pauri', school: 'Government Inter College Pauri' },
      { id: 9, name: 'Lenovo ThinkPad E15', type: 'Laptop Computer', description: '8/256 AMD Ryzen 5', serial: 'LTP1587RYZ', purchase: '05/02/2025', warranty: '05/02/2028', status: 'Active', district: 'Tehri Garhwal', block: 'Tehri', school: 'Government Inter College Tehri' },
      { id: 10, name: 'Acer Chromebook 314', type: 'Laptop Computer', description: '4/64 Chrome OS', serial: 'AC314CHR72', purchase: '10/01/2025', warranty: '10/01/2027', status: 'Active', district: 'Pithoragarh', block: 'Pithoragarh', school: 'Government Inter College Pithoragarh' },
      { id: 11, name: 'Asus VivoBook 15', type: 'Laptop Computer', description: '8/512 11th Gen Intel i3', serial: 'ASVB15K927', purchase: '15/02/2025', warranty: '15/02/2028', status: 'Active', district: 'Rudraprayag', block: 'Rudraprayag', school: 'Government Inter College Rudraprayag' },
      { id: 12, name: 'Microsoft Surface Laptop Go', type: 'Laptop Computer', description: '8/128 10th Gen Intel i5', serial: 'MSSLG79235', purchase: '25/01/2025', warranty: '25/01/2028', status: 'Inactive', district: 'Bageshwar', block: 'Bageshwar', school: 'Government Inter College Bageshwar' },
      { id: 13, name: 'Dell OptiPlex 3080', type: 'Desktop Computer', description: '16/512 Intel i5 Desktop', serial: 'DO3080KL872', purchase: '01/02/2025', warranty: '01/02/2028', status: 'Active', district: 'Uttarkashi', block: 'Uttarkashi', school: 'Government Inter College Uttarkashi' },
      { id: 14, name: 'Apple iMac 24"', type: 'Desktop Computer', description: '8/256 M1 All-in-One', serial: 'AIMC24M1T57', purchase: '05/03/2025', warranty: '05/03/2028', status: 'Active', district: 'Dehradun', block: 'Dehradun', school: 'Doon International School' },
      { id: 15, name: 'HP EliteDesk 800 G6', type: 'Desktop Computer', description: '16/512 Intel i7 Desktop', serial: 'HPED800G679', purchase: '10/02/2025', warranty: '10/02/2028', status: 'Active', district: 'Champawat', block: 'Champawat', school: 'Government Inter College Champawat' },
      { id: 16, name: 'iPad Air 5th Gen', type: 'Tablet', description: '8/64 iPadOS', serial: 'IPA5G78236', purchase: '17/01/2025', warranty: '17/01/2027', status: 'Active', district: 'Udham Singh Nagar', block: 'Kashipur', school: 'Government Inter College Kashipur' },
      { id: 17, name: 'Samsung Galaxy Tab S7', type: 'Tablet', description: '6/128 Android Tablet', serial: 'SGTS7KJ912', purchase: '22/02/2025', warranty: '22/02/2027', status: 'Inactive', district: 'Pauri Garhwal', block: 'Lansdowne', school: 'Government Inter College Lansdowne' }
    ],
    'Accessories': [
  { id: 1, name: 'Logitech M185', type: 'Wireless Mouse', description: 'Compact wireless mouse', serial: 'LM185720A', purchase: '15/01/2025', warranty: '15/01/2027', status: 'Active', district: 'Dehradun', block: 'Chakrata', school: 'Government Inter College Chakrata' },
  { id: 2, name: 'JBL Headphones', type: 'Audio Accessory', description: 'Wired headphones', serial: 'JBL7820X', purchase: '10/01/2025', warranty: '10/01/2026', status: 'Active', district: 'Haridwar', block: 'Roorkee', school: 'Government Inter College Roorkee' },
  { id: 3, name: 'Logitech K380', type: 'Bluetooth Keyboard', description: 'Multi-device compact keyboard', serial: 'LK380B921', purchase: '22/01/2025', warranty: '22/01/2027', status: 'Active', district: 'Tehri Garhwal', block: 'Tehri', school: 'Government Inter College Tehri' },
  { id: 4, name: 'HP Webcam HD 2300', type: 'Video Accessory', description: 'HD webcam for virtual classes', serial: 'HPWC2300P8', purchase: '12/02/2025', warranty: '12/02/2027', status: 'Active', district: 'Pithoragarh', block: 'Pithoragarh', school: 'Government Inter College Pithoragarh' },
  { id: 5, name: 'Dell WD19S', type: 'Docking Station', description: 'USB-C dock for laptops', serial: 'DWD19S872', purchase: '05/02/2025', warranty: '05/02/2028', status: 'Active', district: 'Pauri Garhwal', block: 'Pauri', school: 'Government Inter College Pauri' },
  { id: 6, name: 'SanDisk 128GB', type: 'USB Drive', description: 'High-speed USB 3.0 flash drive', serial: 'SD128U3K72', purchase: '10/01/2025', warranty: '10/01/2027', status: 'Active', district: 'Bageshwar', block: 'Bageshwar', school: 'Government Inter College Bageshwar' },
  { id: 7, name: 'Seagate 2TB', type: 'External HDD', description: 'Backup drive for lab computers', serial: 'SG2TB79L0', purchase: '18/02/2025', warranty: '18/02/2028', status: 'Active', district: 'Udham Singh Nagar', block: 'Kashipur', school: 'Government Inter College Kashipur' },
  { id: 8, name: 'APC Surge Protector', type: 'Power Accessory', description: '6-outlet with USB ports', serial: 'APC6USB21', purchase: '25/01/2025', warranty: '25/01/2028', status: 'Active', district: 'Champawat', block: 'Champawat', school: 'Government Inter College Champawat' },
  { id: 9, name: 'Jabra Speak 510', type: 'Conference Speaker', description: 'Portable speakerphone', serial: 'JS510P981', purchase: '15/02/2025', warranty: '15/02/2027', status: 'Inactive', district: 'Uttarkashi', block: 'Uttarkashi', school: 'Government Inter College Uttarkashi' },
  { id: 10, name: 'Microsoft Surface Pen', type: 'Stylus', description: 'Digital pen for tablets', serial: 'MSP672K90', purchase: '30/01/2025', warranty: '30/01/2027', status: 'Active', district: 'Almora', block: 'Dwarahat', school: 'Government Inter College Dwarahat' },
  { id: 11, name: 'Anker PowerCore', type: 'Power Bank', description: '20000mAh portable charger', serial: 'APB20K793', purchase: '03/03/2025', warranty: '03/03/2027', status: 'Active', district: 'Chamoli', block: 'Ghat', school: 'Primary School Ghat' },
  { id: 12, name: 'Belkin USB Hub', type: 'Connectivity Hub', description: '7-port USB 3.0 hub', serial: 'BUH7P452', purchase: '21/01/2025', warranty: '21/01/2027', status: 'Active', district: 'Rudraprayag', block: 'Rudraprayag', school: 'Government Inter College Rudraprayag' },
  { id: 13, name: 'Sony MDR-ZX110', type: 'Headphones', description: 'Wired on-ear headphones', serial: 'SMDR110Z82', purchase: '28/02/2025', warranty: '28/02/2027', status: 'Active', district: 'Nainital', block: 'Ramnagar', school: 'Government Inter College Ramnagar' },
  { id: 14, name: 'Logitech C920', type: 'Webcam', description: 'HD Pro webcam for video classes', serial: 'LC920HD81', purchase: '09/02/2025', warranty: '09/02/2027', status: 'Inactive', district: 'Dehradun', block: 'Vikasnagar', school: 'Government Inter College Vikasnagar' },
  { id: 15, name: 'ASUS RT-AX55', type: 'Wi-Fi Router', description: 'Dual-band gigabit router', serial: 'ART55GB47', purchase: '16/01/2025', warranty: '16/01/2028', status: 'Active', district: 'Haridwar', block: 'Laksar', school: 'Primary School Laksar' },
  { id: 16, name: 'Targus Laptop Bag', type: 'Carrying Case', description: '15.6" laptop messenger bag', serial: 'TLB156M59', purchase: '07/03/2025', warranty: '07/03/2027', status: 'Active', district: 'Pauri Garhwal', block: 'Lansdowne', school: 'Army Public School Lansdowne' },
  { id: 17, name: 'Blue Yeti Nano', type: 'Microphone', description: 'USB condenser mic for recordings', serial: 'BYN673K19', purchase: '14/02/2025', warranty: '14/02/2027', status: 'Active', district: 'Tehri Garhwal', block: 'Pratapnagar', school: 'Government Inter College Pratapnagar' }
],

'Machines': [
  { id: 1, name: 'Canon MF445dw', type: 'Laser Printer', description: 'All-in-one laser printer', serial: 'CMF445721', purchase: '05/02/2025', warranty: '05/02/2028', status: 'Active', district: 'Dehradun', block: 'Chakrata', school: 'Government Inter College Chakrata' },
  { id: 2, name: 'Epson Projector EB-X06', type: 'Projector', description: 'XGA projector for classroom', serial: 'EPSEB6720', purchase: '20/01/2025', warranty: '20/01/2028', status: 'Active', district: 'Nainital', block: 'Haldwani', school: 'Government Inter College Haldwani' },
  { id: 3, name: 'HP LaserJet Pro M404dn', type: 'Monochrome Printer', description: 'High-speed document printer', serial: 'HPLJ404M82', purchase: '12/02/2025', warranty: '12/02/2028', status: 'Active', district: 'Pauri Garhwal', block: 'Pauri', school: 'Government Inter College Pauri' },
  { id: 4, name: 'BenQ MX560', type: 'Projector', description: 'XGA classroom projector', serial: 'BQMX560P91', purchase: '18/01/2025', warranty: '18/01/2028', status: 'Active', district: 'Tehri Garhwal', block: 'Tehri', school: 'Government Inter College Tehri' },
  { id: 5, name: 'Brother DCP-L2541DW', type: 'Multi-function Printer', description: 'Print/scan/copy with ADF', serial: 'BDCPL254S3', purchase: '21/02/2025', warranty: '21/02/2028', status: 'Active', district: 'Pithoragarh', block: 'Pithoragarh', school: 'Government Inter College Pithoragarh' },
  { id: 6, name: 'Epson Document Scanner DS-530', type: 'Scanner', description: 'High-speed sheet-fed scanner', serial: 'EDS530H72', purchase: '10/01/2025', warranty: '10/01/2028', status: 'Active', district: 'Bageshwar', block: 'Bageshwar', school: 'Government Inter College Bageshwar' },
  { id: 7, name: 'ViewSonic PA503S', type: 'Projector', description: 'SVGA projector for classrooms', serial: 'VSPA503S42', purchase: '25/02/2025', warranty: '25/02/2028', status: 'Active', district: 'Rudraprayag', block: 'Rudraprayag', school: 'Government Inter College Rudraprayag' },
  { id: 8, name: 'HP Color LaserJet Pro MFP M479fdw', type: 'Color MFP', description: 'Color print/scan/copy/fax', serial: 'HPCLJM479F7', purchase: '03/03/2025', warranty: '03/03/2028', status: 'Active', district: 'Uttarkashi', block: 'Uttarkashi', school: 'Government Inter College Uttarkashi' },
  { id: 9, name: 'Sony Bravia 65"', type: 'Smart TV', description: 'Android TV for digital classroom', serial: 'SB65A7291', purchase: '15/01/2025', warranty: '15/01/2028', status: 'Active', district: 'Dehradun', block: 'Dehradun', school: 'Doon International School' },
  { id: 10, name: 'SMART Board 6065', type: 'Interactive Display', description: '65" touch display for teaching', serial: 'SB6065T83', purchase: '08/02/2025', warranty: '08/02/2028', status: 'Active', district: 'Chamoli', block: 'Joshimath', school: 'Government Inter College Joshimath' },
  { id: 11, name: 'Kyocera Ecosys M2040dn', type: 'Multi-function Printer', description: 'Economical B&W MFP', serial: 'KEM2040D52', purchase: '29/01/2025', warranty: '29/01/2028', status: 'Inactive', district: 'Champawat', block: 'Champawat', school: 'Government Inter College Champawat' },
  { id: 12, name: 'Epson EcoTank L3210', type: 'Ink Tank Printer', description: 'Low-cost color printing', serial: 'EET3210L62', purchase: '17/02/2025', warranty: '17/02/2028', status: 'Active', district: 'Udham Singh Nagar', block: 'Kashipur', school: 'Government Inter College Kashipur' },
  { id: 13, name: 'LG 86" Interactive Display', type: 'Interactive Display', description: 'Large format touch display', serial: 'LG86ID729', purchase: '22/01/2025', warranty: '22/01/2028', status: 'Active', district: 'Haridwar', block: 'Roorkee', school: 'Government Inter College Roorkee' },
  { id: 14, name: 'Optoma EH412', type: 'Projector', description: 'Full HD 1080p projector', serial: 'OEH412F83', purchase: '19/02/2025', warranty: '19/02/2028', status: 'Active', district: 'Almora', block: 'Bhikiyasain', school: 'Government Inter College Bhikiyasain' },
  { id: 15, name: 'Zebra ZD420', type: 'Label Printer', description: 'Thermal transfer label printer', serial: 'ZZD420T51', purchase: '11/01/2025', warranty: '11/01/2028', status: 'Active', district: 'Nainital', block: 'Ramnagar', school: 'Government Inter College Ramnagar' },
  { id: 16, name: 'Canon DR-C225 II', type: 'Document Scanner', description: 'Compact desktop scanner', serial: 'CDRC225II4', purchase: '04/03/2025', warranty: '04/03/2028', status: 'Active', district: 'Pauri Garhwal', block: 'Lansdowne', school: 'Government Inter College Lansdowne' },
  { id: 17, name: 'Ricoh MP 2014AD', type: 'Multi-function Printer', description: 'A3 copy/print/scan device', serial: 'RMP2014AD3', purchase: '27/02/2025', warranty: '27/02/2028', status: 'Inactive', district: 'Tehri Garhwal', block: 'Devprayag', school: 'Primary School Devprayag' }
],
    'Furniture': [
      { id: 1, name: 'Computer Desk', type: 'Wooden Desk', description: 'Computer workstation for students', serial: 'WD8270A', purchase: '25/01/2025', warranty: '25/01/2030', status: 'Active', district: 'Dehradun', block: 'Chakrata', school: 'Government Inter College Chakrata' },
      { id: 2, name: 'Office Chair', type: 'Ergonomic Chair', description: 'Teacher computer chair', serial: 'EC9872B', purchase: '25/01/2025', warranty: '25/01/2028', status: 'Active', district: 'Almora', block: 'Bhikiyasain', school: 'Government Inter College Bhikiyasain' }
    ]
  };
  
  // Load assets when category changes
  useEffect(() => {
    setAssets(assetData[activeCategory] || []);
    setFilteredAssets(assetData[activeCategory] || []);
    // Reset filters when category changes
    setSelectedDistrict('');
    setSelectedBlock('');
    setSelectedSchool('');
  }, [activeCategory]);
  
  // Filter assets when filters change
  useEffect(() => {
    let filtered = assetData[activeCategory] || [];
    
    if (selectedDistrict) {
      filtered = filtered.filter(asset => asset.district === selectedDistrict);
    }
    
    if (selectedBlock) {
      filtered = filtered.filter(asset => asset.block === selectedBlock);
    }
    
    if (selectedSchool) {
      filtered = filtered.filter(asset => asset.school === selectedSchool);
    }
    
    setFilteredAssets(filtered);
  }, [selectedDistrict, selectedBlock, selectedSchool, activeCategory]);
  
  // Handle district change
  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setSelectedBlock('');
    setSelectedSchool('');
  };
  
  // Handle block change
  const handleBlockChange = (e) => {
    const block = e.target.value;
    setSelectedBlock(block);
    setSelectedSchool('');
  };
  
  // Handle school change
  const handleSchoolChange = (e) => {
    setSelectedSchool(e.target.value);
  };
  
  return (
    <div className="State-Asset-Management-Container">
      <StateAdminNavbar />
      <div className="State-Asset-Management-Content">
        <StateAdminSidebar />
        <div className="State-Asset-Management-Main">
          <div className="State-Asset-Management-Header">
            <h1>Assets Management</h1>
            <div className="State-Asset-Management-Categories">
              <button 
                className={`State-Asset-Management-Category-Button ${activeCategory === 'IT Assets' ? 'active' : ''}`}
                onClick={() => setActiveCategory('IT Assets')}
              >
                IT Assets
              </button>
              <button 
                className={`State-Asset-Management-Category-Button ${activeCategory === 'Accessories' ? 'active' : ''}`}
                onClick={() => setActiveCategory('Accessories')}
              >
                Accessories
              </button>
              <button 
                className={`State-Asset-Management-Category-Button ${activeCategory === 'Machines' ? 'active' : ''}`}
                onClick={() => setActiveCategory('Machines')}
              >
                Machines
              </button>
              <button 
                className={`State-Asset-Management-Category-Button ${activeCategory === 'Furniture' ? 'active' : ''}`}
                onClick={() => setActiveCategory('Furniture')}
              >
                Furniture
              </button>
            </div>
            <div className="State-Asset-Management-Filters">
              <div className="State-Asset-Management-Filter">
                <select 
                  value={selectedDistrict} 
                  onChange={handleDistrictChange}
                  className="State-Asset-Management-Select"
                >
                  <option value="">District</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
              </div>
              <div className="State-Asset-Management-Filter">
                <select 
                  value={selectedBlock} 
                  onChange={handleBlockChange}
                  className="State-Asset-Management-Select"
                  disabled={!selectedDistrict}
                >
                  <option value="">Block</option>
                  {selectedDistrict && blocks[selectedDistrict]?.map((block) => (
                    <option key={block} value={block}>{block}</option>
                  ))}
                </select>
              </div>
              <div className="State-Asset-Management-Filter">
                <select 
                  value={selectedSchool} 
                  onChange={handleSchoolChange}
                  className="State-Asset-Management-Select"
                  disabled={!selectedBlock}
                >
                  <option value="">Select the School</option>
                  {selectedBlock && schools[selectedBlock]?.map((school) => (
                    <option key={school} value={school}>{school}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="State-Asset-Management-Table-Container">
            <table className="State-Asset-Management-Table">
              <thead>
                <tr>
                  <th>Asset Name</th>
                  <th>Asset type</th>
                  <th>Short Description</th>
                  <th>Serial Number</th>
                  <th>Purchase Date</th>
                  <th>Warranty Expiry</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredAssets.map((asset) => (
                  <tr key={asset.id} className={`State-Asset-Management-Table-Row ${asset.status === 'Active' ? 'active-row' : 'inactive-row'}`}>
                    <td>{asset.name}</td>
                    <td>{asset.type}</td>
                    <td>{asset.description}</td>
                    <td>{asset.serial}</td>
                    <td>{asset.purchase}</td>
                    <td>{asset.warranty}</td>
                    <td className={`status-${asset.status.toLowerCase()}`}>{asset.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateAssetManagement;