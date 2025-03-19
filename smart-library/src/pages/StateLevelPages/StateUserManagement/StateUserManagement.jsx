import React, { useState, useEffect } from 'react';
import StateAdminNavbar from '../../../components/StateAdmin/StateAdminNavbar/StateAdminNavbar';
import StateAdminSidebar from '../../../components/StateAdmin/StateAdminSidebar/StateAdminSidebar';
import './StateUserManagement.css';

const StateUserManagement = () => {
  // State for active category
  const [activeCategory, setActiveCategory] = useState('Teachers');
  
  // State for selected filters
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedBlock, setSelectedBlock] = useState('');
  const [selectedSchool, setSelectedSchool] = useState('');
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  
  // Sample data for filtered users
  const [filteredUsers, setFilteredUsers] = useState([]);
  
  // Sample data for dropdowns
  const districts = [
    'Dehradun', 'Haridwar', 'Chamoli', 'Rudraprayag', 'Tehri Garhwal', 'Uttarkashi', 'Pauri Garhwal', 'Almora', 'Nainital', 'Pithoragarh', 'U S Nagar (Udham Singh Nagar)', 'Bageshwar', 'Champawat',
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
    'U S Nagar (Udham Singh Nagar)': ['Kashipur', 'Jaspur', 'Rudrapur', 'Gadarpur', 'Khatima', 'Sitarganj', 'Bazpur', 'Kichha'],
    'Uttarkashi': ['Uttarkashi', 'Bhatwari', 'Dunda', 'Chinyalisaur', 'Naugaon', 'Purola', 'Mori']
  };
  
  const schools = {
    'Chakrata': ['Government Inter College Chakrata', 'Primary School Chakrata', 'Swami Vivekananda Vidyalaya Chakrata', 'Girls High School Chakrata'],
    'Kalsi': ['Government High School Kalsi', 'Primary School Kalsi', 'Saraswati Shishu Mandir Kalsi'],
    'Vikasnagar': ['Government Inter College Vikasnagar', 'Primary School Vikasnagar', 'St. Marys Convent School Vikasnagar', 'Kendriya Vidyalaya Vikasnagar'],
    'Bhagwanpur': ['Government Inter College Bhagwanpur', 'Primary School Bhagwanpur', 'Saraswati Vidya Mandir Bhagwanpur'],
    'Roorkee': ['Government Inter College Roorkee', 'Primary School Roorkee', 'Delhi Public School Roorkee', 'Kendriya Vidyalaya Roorkee', 'Cambridge School Roorkee'],
    'Haldwani': ['Government Inter College Haldwani', 'Primary School Haldwani', 'St. Josephs College Haldwani', 'Kendriya Vidyalaya Haldwani', 'Delhi Public School Haldwani'],
    'Ramnagar': ['Government Inter College Ramnagar', 'Primary School Ramnagar', 'St. Teresa School Ramnagar', 'Saraswati Vidya Mandir Ramnagar'],
    'Bhikiyasain': ['Government Inter College Bhikiyasain', 'Primary School Bhikiyasain', 'Jawahar Navodaya Vidyalaya Bhikiyasain'],
    'Joshimath': ['Government Inter College Joshimath', 'Primary School Joshimath', 'Kendriya Vidyalaya Joshimath', 'Saraswati Shishu Mandir Joshimath'],
    'Tehri': ['Government Inter College Tehri', 'Rajkiya Kanya Inter College Tehri', 'Primary School New Tehri', 'Kendriya Vidyalaya Tehri', 'Modern Public School Tehri'],
    'Kashipur': ['Government Inter College Kashipur', 'Model School Kashipur', 'Primary School Kashipur East', 'Delhi Public School Kashipur', 'St. Marys Convent School Kashipur'],
    'Pithoragarh': ['Government Inter College Pithoragarh', 'Government Girls Inter College Pithoragarh', 'Kendriya Vidyalaya Pithoragarh', 'Saraswati Vidya Mandir Pithoragarh', 'Army Public School Pithoragarh'],
    'Rudraprayag': ['Government Inter College Rudraprayag', 'Primary School Rudraprayag', 'Jawahar Navodaya Vidyalaya Rudraprayag', 'Saraswati Shishu Mandir Rudraprayag'],
    'Dehradun': ['Doon International School', 'Government Inter College Dehradun', 'Government Girls Inter College Dehradun', 'Welham Boys School', 'Welham Girls School', 'The Doon School', 'St. Josephs Academy Dehradun'],
    'Champawat': ['Government Inter College Champawat', 'Primary School Champawat', 'Saraswati Vidya Mandir Champawat', 'Jawahar Navodaya Vidyalaya Champawat'],
    'Bageshwar': ['Government Inter College Bageshwar', 'Government Girls Inter College Bageshwar', 'Primary School Bageshwar', 'Saraswati Shishu Mandir Bageshwar'],
    'Uttarkashi': ['Government Inter College Uttarkashi', 'Primary School Uttarkashi', 'Jawahar Navodaya Vidyalaya Uttarkashi', 'Saraswati Vidya Mandir Uttarkashi'],
    'Pauri': ['Government Inter College Pauri', 'Rajkiya Kanya Inter College Pauri', 'Primary School Pauri', 'Kendriya Vidyalaya Pauri', 'Modern Public School Pauri'],
    'Lansdowne': ['Government Inter College Lansdowne', 'Army Public School Lansdowne', 'Saint Marys Convent School Lansdowne'],
  };
  
  // Enhanced sample user data with district, block, and school information
  const userData = {
    'Teachers': [
  { id: 'T001', name: 'Rajesh Sharma', subject: 'English, Grammar', district: 'Dehradun', block: 'Chakrata', school: 'Government Inter College Chakrata', lastLogin: '2 Days Ago' },
  { id: 'T002', name: 'Pooja Verma', subject: 'Science, Biology', district: 'Dehradun', block: 'Kalsi', school: 'Government High School Kalsi', lastLogin: '1 Day Ago' },
  { id: 'T003', name: 'Ankit Singh', subject: 'Mathematics', district: 'Haridwar', block: 'Roorkee', school: 'Government Inter College Roorkee', lastLogin: '3 Days Ago' },
  { id: 'T004', name: 'Meena Gupta', subject: 'Hindi, Sanskrit', district: 'Nainital', block: 'Haldwani', school: 'Government Inter College Haldwani', lastLogin: 'Today' },
  { id: 'T005', name: 'Vikas Rawat', subject: 'Social Science', district: 'Tehri Garhwal', block: 'Tehri', school: 'Government Inter College Tehri', lastLogin: '1 Week Ago' },
  { id: 'T006', name: 'Sunita Bisht', subject: 'Physics, Chemistry', district: 'Almora', block: 'Bhikiyasain', school: 'Government Inter College Bhikiyasain', lastLogin: '4 Days Ago' },
  { id: 'T007', name: 'Rakesh Joshi', subject: 'Computer Science', district: 'Pithoragarh', block: 'Pithoragarh', school: 'Government Inter College Pithoragarh', lastLogin: 'Yesterday' },
  { id: 'T008', name: 'Neha Negi', subject: 'Arts, Crafts', district: 'Chamoli', block: 'Joshimath', school: 'Government Inter College Joshimath', lastLogin: '5 Days Ago' },
  { id: 'T009', name: 'Devendra Pal', subject: 'Physical Education', district: 'Rudraprayag', block: 'Rudraprayag', school: 'Government Inter College Rudraprayag', lastLogin: '1 Day Ago' },
  { id: 'T010', name: 'Alka Panwar', subject: 'Geography, Economics', district: 'Uttarkashi', block: 'Uttarkashi', school: 'Government Inter College Uttarkashi', lastLogin: '3 Days Ago' },
  { id: 'T011', name: 'Mohan Thapliyal', subject: 'English Literature', district: 'Pauri Garhwal', block: 'Pauri', school: 'Government Inter College Pauri', lastLogin: '2 Days Ago' },
  { id: 'T012', name: 'Suman Bhandari', subject: 'Chemistry', district: 'Bageshwar', block: 'Bageshwar', school: 'Government Inter College Bageshwar', lastLogin: 'Today' },
  { id: 'T013', name: 'Gopal Nath', subject: 'Music', district: 'Champawat', block: 'Champawat', school: 'Government Inter College Champawat', lastLogin: '1 Week Ago' },
  { id: 'T014', name: 'Kavita Dhami', subject: 'Biology', district: 'U S Nagar (Udham Singh Nagar)', block: 'Kashipur', school: 'Government Inter College Kashipur', lastLogin: '4 Days Ago' },
  { id: 'T015', name: 'Harish Rawat', subject: 'Mathematics, Physics', district: 'Dehradun', block: 'Vikasnagar', school: 'Government Inter College Vikasnagar', lastLogin: '3 Days Ago' },
  { id: 'T016', name: 'Poonam Joshi', subject: 'Hindi', district: 'Haridwar', block: 'Bhagwanpur', school: 'Government Inter College Bhagwanpur', lastLogin: 'Yesterday' },
  { id: 'T017', name: 'Lalit Mohan', subject: 'Social Studies', district: 'Nainital', block: 'Ramnagar', school: 'Government Inter College Ramnagar', lastLogin: '2 Days Ago' },
  { id: 'T018', name: 'Geeta Rana', subject: 'Science', district: 'Pauri Garhwal', block: 'Lansdowne', school: 'Government Inter College Lansdowne', lastLogin: '5 Days Ago' },
  { id: 'T019', name: 'Prakash Bhatt', subject: 'Sanskrit', district: 'Tehri Garhwal', block: 'Tehri', school: 'Rajkiya Kanya Inter College Tehri', lastLogin: '1 Day Ago' },
  { id: 'T020', name: 'Deepa Negi', subject: 'English, Computer', district: 'Dehradun', block: 'Dehradun', school: 'Government Inter College Dehradun', lastLogin: '3 Days Ago' }
],
    'Students': [
    { enrollmentNumber: 'S001', name: 'Rahul Kumar', class: '10', lastLogin: '1 Day Ago', status: 'Active' },
    { enrollmentNumber: 'S002', name: 'Priya Sharma', class: '12', lastLogin: '3 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S003', name: 'Amit Singh', class: '9', lastLogin: '2 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S004', name: 'Neha Gupta', class: '11', lastLogin: '5 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S005', name: 'Vikram Patel', class: '10', lastLogin: '1 Week Ago', status: 'Inactive' },
    { enrollmentNumber: 'S006', name: 'Sonia Verma', class: '12', lastLogin: 'Today', status: 'Active' },
    { enrollmentNumber: 'S007', name: 'Rajiv Malhotra', class: '11', lastLogin: '4 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S008', name: 'Anita Desai', class: '9', lastLogin: '6 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S009', name: 'Sunil Sharma', class: '10', lastLogin: '2 Weeks Ago', status: 'Inactive' },
    { enrollmentNumber: 'S010', name: 'Meena Kumari', class: '12', lastLogin: 'Yesterday', status: 'Active' },
    { enrollmentNumber: 'S011', name: 'Arun Joshi', class: '9', lastLogin: '3 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S012', name: 'Kavita Reddy', class: '11', lastLogin: '1 Day Ago', status: 'Active' },
    { enrollmentNumber: 'S013', name: 'Deepak Chauhan', class: '10', lastLogin: '8 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S014', name: 'Ritu Bhatia', class: '12', lastLogin: '2 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S015', name: 'Mohit Agarwal', class: '11', lastLogin: '5 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S016', name: 'Pooja Mehta', class: '9', lastLogin: '1 Month Ago', status: 'Inactive' },
    { enrollmentNumber: 'S017', name: 'Sanjay Kumar', class: '10', lastLogin: 'Today', status: 'Active' },
    { enrollmentNumber: 'S018', name: 'Anjali Singh', class: '12', lastLogin: '4 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S019', name: 'Vivek Sharma', class: '11', lastLogin: '1 Week Ago', status: 'Active' },
    { enrollmentNumber: 'S020', name: 'Nidhi Kapoor', class: '9', lastLogin: 'Yesterday', status: 'Active' },
    { enrollmentNumber: 'S021', name: 'Rajesh Khanna', class: '10', lastLogin: '3 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S022', name: 'Sunita Patel', class: '12', lastLogin: '6 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S023', name: 'Dinesh Gupta', class: '11', lastLogin: '2 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S024', name: 'Jyoti Verma', class: '9', lastLogin: '9 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S025', name: 'Rakesh Singh', class: '10', lastLogin: '5 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S026', name: 'Lakshmi Nair', class: '12', lastLogin: '2 Weeks Ago', status: 'Inactive' },
    { enrollmentNumber: 'S027', name: 'Girish Tiwari', class: '11', lastLogin: '1 Day Ago', status: 'Active' },
    { enrollmentNumber: 'S028', name: 'Ananya Das', class: '9', lastLogin: '4 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S029', name: 'Nitin Jain', class: '10', lastLogin: 'Today', status: 'Active' },
    { enrollmentNumber: 'S030', name: 'Divya Sharma', class: '12', lastLogin: '7 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S031', name: 'Ramesh Kumar', class: '11', lastLogin: '3 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S032', name: 'Sarita Yadav', class: '9', lastLogin: '2 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S033', name: 'Karan Malhotra', class: '10', lastLogin: '5 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S034', name: 'Seema Gupta', class: '12', lastLogin: 'Yesterday', status: 'Active' },
    { enrollmentNumber: 'S035', name: 'Ajay Chauhan', class: '11', lastLogin: '1 Week Ago', status: 'Active' },
    { enrollmentNumber: 'S036', name: 'Manju Singh', class: '9', lastLogin: '6 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S037', name: 'Vikash Verma', class: '10', lastLogin: '3 Weeks Ago', status: 'Inactive' },
    { enrollmentNumber: 'S038', name: 'Geeta Patel', class: '12', lastLogin: '4 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S039', name: 'Ashok Rai', class: '11', lastLogin: '2 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S040', name: 'Rekha Tiwari', class: '9', lastLogin: '8 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S041', name: 'Praveen Kumar', class: '10', lastLogin: '1 Day Ago', status: 'Active' },
    { enrollmentNumber: 'S042', name: 'Asha Sharma', class: '12', lastLogin: '5 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S043', name: 'Manoj Singh', class: '11', lastLogin: 'Today', status: 'Active' },
    { enrollmentNumber: 'S044', name: 'Savita Gupta', class: '9', lastLogin: '1 Month Ago', status: 'Inactive' },
    { enrollmentNumber: 'S045', name: 'Rajendra Verma', class: '10', lastLogin: '3 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S046', name: 'Usha Reddy', class: '12', lastLogin: '7 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S047', name: 'Sanjay Patel', class: '11', lastLogin: '4 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S048', name: 'Meenakshi Iyer', class: '9', lastLogin: '2 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S049', name: 'Prakash Jha', class: '10', lastLogin: '6 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S050', name: 'Lata Singh', class: '12', lastLogin: 'Yesterday', status: 'Active' },
    { enrollmentNumber: 'S051', name: 'Aditya Sharma', class: '11', lastLogin: '9 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S052', name: 'Radha Krishna', class: '9', lastLogin: '1 Day Ago', status: 'Active' },
    { enrollmentNumber: 'S053', name: 'Rohit Malhotra', class: '10', lastLogin: '5 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S054', name: 'Shikha Verma', class: '12', lastLogin: '2 Weeks Ago', status: 'Inactive' },
    { enrollmentNumber: 'S055', name: 'Vinod Kumar', class: '11', lastLogin: '3 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S056', name: 'Neetu Gupta', class: '9', lastLogin: 'Today', status: 'Active' },
    { enrollmentNumber: 'S057', name: 'Chetan Bhagat', class: '10', lastLogin: '4 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S058', name: 'Priyanka Singh', class: '12', lastLogin: '1 Week Ago', status: 'Active' },
    { enrollmentNumber: 'S059', name: 'Govind Sharma', class: '11', lastLogin: '2 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S060', name: 'Sangeeta Patel', class: '9', lastLogin: '6 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S061', name: 'Jayant Verma', class: '10', lastLogin: '1 Day Ago', status: 'Active' },
    { enrollmentNumber: 'S062', name: 'Kalpana Rao', class: '12', lastLogin: '5 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S063', name: 'Naveen Kumar', class: '11', lastLogin: 'Yesterday', status: 'Active' },
    { enrollmentNumber: 'S064', name: 'Shweta Gupta', class: '9', lastLogin: '8 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S065', name: 'Rajeev Singh', class: '10', lastLogin: '3 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S066', name: 'Suman Sharma', class: '12', lastLogin: '4 Weeks Ago', status: 'Inactive' },
    { enrollmentNumber: 'S067', name: 'Harish Rathore', class: '11', lastLogin: '4 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S068', name: 'Leela Joshi', class: '9', lastLogin: 'Today', status: 'Active' },
    { enrollmentNumber: 'S069', name: 'Deepak Khanna', class: '10', lastLogin: '2 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S070', name: 'Shruti Patel', class: '12', lastLogin: '7 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S071', name: 'Mohan Yadav', class: '11', lastLogin: '5 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S072', name: 'Poonam Agarwal', class: '9', lastLogin: '3 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S073', name: 'Vijay Kumar', class: '10', lastLogin: '1 Day Ago', status: 'Active' },
    { enrollmentNumber: 'S074', name: 'Archana Gupta', class: '12', lastLogin: '6 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S075', name: 'Pankaj Singh', class: '11', lastLogin: '9 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S076', name: 'Renu Sharma', class: '9', lastLogin: 'Yesterday', status: 'Active' },
    { enrollmentNumber: 'S077', name: 'Alok Verma', class: '10', lastLogin: '3 Weeks Ago', status: 'Inactive' },
    { enrollmentNumber: 'S078', name: 'Mamta Patel', class: '12', lastLogin: '2 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S079', name: 'Sudhir Gupta', class: '11', lastLogin: '4 Days Ago', status: 'Active' },
    { enrollmentNumber: 'S080', name: 'Rani Deshmukh', class: '9', lastLogin: '1 Week Ago', status: 'Active' },
    { enrollmentNumber: 'S081', name: 'Anil Kumar', class: '10', lastLogin: 'Today', status: 'Active' },
    { enrollmentNumber: 'S082', name: 'Sunita Sharma', class: '12', lastLogin: '5 Days Ago', status: 'Active' }
]
  };
  
  // Load initial data when component mounts
  useEffect(() => {
    setFilteredUsers(userData[activeCategory] || []);
  }, []);

  // Filter users when category or filters change
  useEffect(() => {
    let filtered = userData[activeCategory] || [];
    
    if (selectedDistrict) {
      filtered = filtered.filter(user => user.district === selectedDistrict);
    }
    
    if (selectedBlock) {
      filtered = filtered.filter(user => user.block === selectedBlock);
    }
    
    if (selectedSchool) {
      filtered = filtered.filter(user => user.school === selectedSchool);
    }
    
    setFilteredUsers(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedDistrict, selectedBlock, selectedSchool, activeCategory]);
  
  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSelectedDistrict('');
    setSelectedBlock('');
    setSelectedSchool('');
    setCurrentPage(1);
  };
  
  // Handle district change
  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setSelectedBlock('');
    setSelectedSchool('');
    setCurrentPage(1);
  };
  
  // Handle block change
  const handleBlockChange = (e) => {
    const block = e.target.value;
    setSelectedBlock(block);
    setSelectedSchool('');
    setCurrentPage(1);
  };
  
  // Handle school change
  const handleSchoolChange = (e) => {
    setSelectedSchool(e.target.value);
    setCurrentPage(1);
  };

  // Get current rows for pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredUsers.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <div className="State-User-Management-Container">
      <StateAdminNavbar />
      <div className="State-User-Management-Content">
        <StateAdminSidebar />
        <div className="State-User-Management-Main">
          <div className="State-User-Management-Header">
            <h1>Users Management</h1>
            <div className="State-User-Management-Categories">
              <button 
                className={`State-User-Management-Category-Button ${activeCategory === 'Teachers' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('Teachers')}
              >
                Teachers
              </button>
              <button 
                className={`State-User-Management-Category-Button ${activeCategory === 'Students' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('Students')}
              >
                Students
              </button>
            </div>
            <div className="State-User-Management-Filters">
              <div className="State-User-Management-Filter">
                <select 
                  value={selectedDistrict} 
                  onChange={handleDistrictChange}
                  className="State-User-Management-Select"
                >
                  <option value="">Select District</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
              </div>
              <div className="State-User-Management-Filter">
                <select 
                  value={selectedBlock} 
                  onChange={handleBlockChange}
                  className="State-User-Management-Select"
                  disabled={!selectedDistrict}
                >
                  <option value="">Select Block</option>
                  {selectedDistrict && blocks[selectedDistrict]?.map((block) => (
                    <option key={block} value={block}>{block}</option>
                  ))}
                </select>
              </div>
              <div className="State-User-Management-Filter">
                <select 
                  value={selectedSchool} 
                  onChange={handleSchoolChange}
                  className="State-User-Management-Select"
                  disabled={!selectedBlock}
                >
                  <option value="">Select School</option>
                  {selectedBlock && schools[selectedBlock]?.map((school) => (
                    <option key={school} value={school}>{school}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="State-User-Management-Table-Container">
            {activeCategory === 'Teachers' && (
              <table className="State-User-Management-Table">
                <thead>
                  <tr>
                    <th>Teacher Id</th>
                    <th>Teacher Name</th>
                    <th>Subject</th>
                    <th>School</th>
                    <th>Last Login</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRows.length > 0 ? (
                    currentRows.map((user) => (
                      <tr key={user.id} className="State-User-Management-Table-Row">
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.subject}</td>
                        <td>{user.school}</td>
<td>{user.lastLogin}</td>
</tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="State-User-Management-No-Data">No teachers found matching the selected filters.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
            
            {activeCategory === 'Students' && (
              <table className="State-User-Management-Table">
                <thead>
                  <tr>
                    <th>Enrollment Number</th>
                    <th>Student Name</th>
                    <th>Class</th>
                    <th>School</th>
                    <th>Last Login</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRows.length > 0 ? (
                    currentRows.map((student) => (
                      <tr key={student.enrollmentNumber} className="State-User-Management-Table-Row">
                        <td>{student.enrollmentNumber}</td>
                        <td>{student.name}</td>
                        <td>{student.class}</td>
                        <td>{student.school}</td>
                        <td>{student.lastLogin}</td>
                        <td>{student.status}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="State-User-Management-No-Data">No students found matching the selected filters.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
            
            {/* Pagination */}
            {filteredUsers.length > rowsPerPage && (
              <div className="State-User-Management-Pagination">
                <button 
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="State-User-Management-Pagination-Button"
                >
                  Previous
                </button>
                
                {Array.from({ length: Math.ceil(filteredUsers.length / rowsPerPage) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`State-User-Management-Pagination-Button ${currentPage === index + 1 ? 'active' : ''}`}
                  >
                    {index + 1}
                  </button>
                ))}
                
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === Math.ceil(filteredUsers.length / rowsPerPage)}
                  className="State-User-Management-Pagination-Button"
                >
                  Next
                </button>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateUserManagement;