// import React from 'react';
// import AdminSidebar from "../../../components/AdminSidebar";
// import AdminNavBar from "../../../components/AdminNavBar";
// import './AdminDashboard.css';

// const AdminDashboard = () => {
//   return (
//     <div className="admin-dashboard-container">
//       <AdminSidebar />
//       <AdminNavBar />
//       <div className="admin-dashboard-content">
//         <h1>Welcome Admin </h1>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import AdminSidebar from "../../../components/AdminSidebar";
import AdminNavBar from "../../../components/AdminNavBar";
import './AdminDashboard.css';

const AdminDashboard = () => {
  // Data for Books across Formats pie chart
  const booksData = [
    { name: 'Hard copy', value: 290, color: '#4CAF50' },
    { name: 'E-books', value: 410, color: '#8BC34A' },
    { name: 'Audio books', value: 250, color: '#757575' },
    { name: 'Visual Content', value: 200, color: '#BDBDBD' }
  ];

  // Data for User Activity pie chart
  const userActivityData = [
    { name: 'Active User', value: 70, color: '#4CAF50' },
    { name: 'Inactive user', value: 30, color: '#BDBDBD' }
  ];

  // Data for Asset Condition pie chart
  const assetConditionData = [
    { name: 'Assigned Asset', value: 330, color: '#4CAF50' },
    { name: 'Unassigned Asset', value: 229, color: '#757575' },
    { name: 'For Repair', value: 20, color: '#E0E0E0' }
  ];

  // Data for Borrowing Trends bar chart
  const borrowingTrendsData = [
    { name: 'Jan', students: 420, teachers: 290 },
    { name: 'Feb', students: 520, teachers: 380 },
    { name: 'Mar', students: 620, teachers: 270 },
    { name: 'April', students: 450, teachers: 190 },
    { name: 'May', students: 520, teachers: 370 },
    { name: 'June', students: 680, teachers: 320 },
    { name: 'July', students: 220, teachers: 170 },
    { name: 'Aug', students: 780, teachers: 520 },
    { name: 'Sep', students: 490, teachers: 390 },
    { name: 'Oct', students: 410, teachers: 310 },
    { name: 'Nov', students: 720, teachers: 440 },
    { name: 'Dec', students: 620, teachers: 350 }
  ];

  return (
    <div className="admin-dashboard-container">
      <AdminSidebar />
      <AdminNavBar />
      <div className="admin-dashboard-content">
           <h1>Welcome Admin </h1>
        <div className="admindash-stats-overview">
          <div className="admindash-stat-card">
            <div className="admindash-stat-info">
              <div>
                <h3>Total Teachers</h3>
                <h2>17</h2>
              </div>
              <div className="admindash-stat-icon teacher-icon">
                <img src="/Basics/B1.png" alt="Teacher" />

              </div>
            </div>
          </div>
          
          <div className="admindash-stat-card">
            <div className="admindash-stat-info">
              <div>
                <h3>Total Students</h3>
                <h2>758</h2>
              </div>
              <div className="admindash-stat-icon student-icon">
                <img src="/Basics/B2.png" alt="Student" />

              </div>
            </div>
          </div>
        </div>

        <div className="admindash-charts-container">
          <div className="admindash-chart-card">
            <h3>Books across Formats</h3>
            <div className="admindash-pie-chart-container">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={booksData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {booksData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="admindash-chart-center-text">
                <h2>1,150</h2>
                <p>Over All</p>
              </div>
              <div className="admindash-chart-legend">
                {booksData.map((entry, index) => (
                  <div className="admindash-legend-item" key={`legend-${index}`}>
                    <div className="admindash-legend-color" style={{ backgroundColor: entry.color }}></div>
                    <span className="admindash-legend-label">{entry.name}</span>
                    <span className="admindash-legend-value">{entry.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="admindash-chart-card">
            <h3>User Activity</h3>
            <div className="admindash-pie-chart-container">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={userActivityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {userActivityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="admindash-chart-center-text">
                <h2>1,450</h2>
                <p>Students</p>
              </div>
              <div className="admindash-chart-legend">
                {userActivityData.map((entry, index) => (
                  <div className="admindash-legend-item" key={`legend-${index}`}>
                    <div className="admindash-legend-color" style={{ backgroundColor: entry.color }}></div>
                    <span className="admindash-legend-label">{entry.name}</span>
                    <span className="admindash-legend-value">{entry.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="admindash-chart-card">
            <h3>Asset Condition</h3>
            <div className="admindash-pie-chart-container">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={assetConditionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {assetConditionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="admindash-chart-center-text">
                <h2>330</h2>
                <p>In Stock</p>
              </div>
              <div className="admindash-chart-legend">
                {assetConditionData.map((entry, index) => (
                  <div className="admindash-legend-item" key={`legend-${index}`}>
                    <div className="admindash-legend-color" style={{ backgroundColor: entry.color }}></div>
                    <span className="admindash-legend-label">{entry.name}</span>
                    <span className="admindash-legend-value">{entry.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="admindash-charts-row">
          <div className="admindash-chart-card wide-chart">
            <h3>Borrowing Trends</h3>
            <div className="admindash-bar-chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={borrowingTrendsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="students" fill="#4CAF50" barSize={20} />
                  <Bar dataKey="teachers" fill="#DCEDC8" barSize={20} />
                </BarChart>
              </ResponsiveContainer>
              <div className="admindash-chart-legend horizontal">
                <div className="admindash-legend-item">
                  <div className="admindash-legend-color" style={{ backgroundColor: '#4CAF50' }}></div>
                  <span>Student</span>
                </div>
                <div className="admindash-legend-item">
                  <div className="admindash-legend-color" style={{ backgroundColor: '#DCEDC8' }}></div>
                  <span>Teachers</span>
                </div>
              </div>
            </div>
          </div>

            <div className="admindash-tickets-card">
            <h3 className="admindash-tickets-title">Tickets</h3>
            
            <div className="admindash-tickets-container">
                <div className="admindash-ticket-box">
                <div className="admindash-ticket-circle opened">
                    <span>02</span>
                </div>
                <p>Tickets Opened</p>
                </div>
                <div className="admindash-ticket-box">
                <div className="admindash-ticket-circle closed">
                    <span>05</span>
                </div>
                <p>Tickets Closed</p>
                </div>
            </div>

            <div className="admindash-tickets-legend">
                <div className="admindash-legend-item">
                <div className="admindash-legend-color opened"></div>
                <span>Tickets Opened</span>
                </div>
                <div className="admindash-legend-item">
                <div className="admindash-legend-color closed"></div>
                <span>Tickets Closed</span>
                </div>
            </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;