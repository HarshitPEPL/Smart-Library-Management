
// import React from 'react';
// import LibrarianAdminNavbar from '../../../components/LibrarianAdmin/LibrarianAdminNavabar/LibrarianAdminNavbar';
// import LibrarianAdminSidebar from '../../../components/LibrarianAdmin/LibrarianAdminSidebar/LibrarianAdminSidebar';
// import './LibrarianDashboard.css';

// const LibrarianDashboard = () => {
//   return (
//     <div className="Librarian-Dashboard-Container">
//       <LibrarianAdminNavbar />
//       <LibrarianAdminSidebar />
//     </div>
//   );
// };

// export default LibrarianDashboard;


import React from 'react';
import LibrarianAdminNavbar from '../../../components/LibrarianAdmin/LibrarianAdminNavabar/LibrarianAdminNavbar';
import LibrarianAdminSidebar from '../../../components/LibrarianAdmin/LibrarianAdminSidebar/LibrarianAdminSidebar';
import { FaEllipsisV } from 'react-icons/fa';
import './LibrarianDashboard.css';

const LibrarianDashboard = () => {
  // Mock data - replace with API calls later
  const dashboardData = {
    totalBooks: 850,
    totalIssued: 185,
    totalOverdue: 15,
    formats: {
      hardCopy: 290,
      eBooks: 410,
      audioBooks: 250,
      visualContent: 200
    },
    assets: {
      total: 330,
      forRepair: 9
    },
    tickets: {
      opened: 2,
      closed: 5
    },
    borrowingTrends: [
      { month: 'Jan', students: 420, teachers: 280 },
      { month: 'Feb', students: 520, teachers: 390 },
      { month: 'Mar', students: 610, teachers: 270 },
      { month: 'Apr', students: 450, teachers: 200 },
      { month: 'May', students: 520, teachers: 380 },
      { month: 'Jun', students: 680, teachers: 330 },
      { month: 'Jul', students: 220, teachers: 150 },
      { month: 'Aug', students: 750, teachers: 520 },
      { month: 'Sep', students: 490, teachers: 400 },
      { month: 'Oct', students: 410, teachers: 290 },
      { month: 'Nov', students: 710, teachers: 450 },
      { month: 'Dec', students: 620, teachers: 330 }
    ]
  };

  return (
    <div className="librarian-dashboard-container">
      <LibrarianAdminNavbar />
      <div className="librarian-dashboard-layout">
        <LibrarianAdminSidebar />
        <div className="librarian-dashboard-main">
          <h1 className="librarian-dashboard-welcome">Welcome Librarian!</h1>
          
          {/* Key Metrics Section */}
          <div className="librarian-dashboard-metrics-row">
            <div className="librarian-dashboard-metric-card">
              <div className="librarian-dashboard-metric-info">
                <div className="librarian-dashboard-metric-label">Total Books</div>
                <div className="librarian-dashboard-metric-value">{dashboardData.totalBooks}</div>
              </div>
              <div className="librarian-dashboard-metric-icon librarian-dashboard-books">
                <img src="/assets/books-stack.png" alt="Books" />
              </div>
            </div>
            
            <div className="librarian-dashboard-metric-card">
              <div className="librarian-dashboard-metric-info">
                <div className="librarian-dashboard-metric-label">Total Issued</div>
                <div className="librarian-dashboard-metric-value">{dashboardData.totalIssued}</div>
              </div>
              <div className="librarian-dashboard-metric-icon librarian-dashboard-issued">
                <img src="/assets/issued-book.png" alt="Issued" />
              </div>
            </div>
            
            <div className="librarian-dashboard-metric-card">
              <div className="librarian-dashboard-metric-info">
                <div className="librarian-dashboard-metric-label">Total Overdue</div>
                <div className="librarian-dashboard-metric-value">{dashboardData.totalOverdue}</div>
              </div>
              <div className="librarian-dashboard-metric-icon librarian-dashboard-overdue">
                <img src="/assets/overdue.png" alt="Overdue" />
              </div>
            </div>
          </div>
          
          {/* Charts Section */}
          <div className="librarian-dashboard-charts-row">
            {/* Format Distribution Chart */}
            <div className="librarian-dashboard-chart-card">
              <h2 className="librarian-dashboard-chart-title">Books across Formats</h2>
              <div className="librarian-dashboard-chart-content">
                <div className="librarian-dashboard-format-chart">
                  <div className="librarian-dashboard-donut-chart">
                    <div className="librarian-dashboard-chart-center">
                      <div className="librarian-dashboard-chart-number">1,150</div>
                      <div className="librarian-dashboard-chart-label">Over All</div>
                    </div>
                  </div>
                </div>
                <div className="librarian-dashboard-format-legend">
                  <div className="librarian-dashboard-legend-item">
                    <div className="librarian-dashboard-legend-color librarian-dashboard-hard-copy"></div>
                    <div className="librarian-dashboard-legend-text">Hard copy</div>
                    <div className="librarian-dashboard-legend-value">{dashboardData.formats.hardCopy}</div>
                  </div>
                  <div className="librarian-dashboard-legend-item">
                    <div className="librarian-dashboard-legend-color librarian-dashboard-ebooks"></div>
                    <div className="librarian-dashboard-legend-text">E-books</div>
                    <div className="librarian-dashboard-legend-value">{dashboardData.formats.eBooks}</div>
                  </div>
                  <div className="librarian-dashboard-legend-item">
                    <div className="librarian-dashboard-legend-color librarian-dashboard-audio-books"></div>
                    <div className="librarian-dashboard-legend-text">Audio books</div>
                    <div className="librarian-dashboard-legend-value">{dashboardData.formats.audioBooks}</div>
                  </div>
                  <div className="librarian-dashboard-legend-item">
                    <div className="librarian-dashboard-legend-color librarian-dashboard-visual-content"></div>
                    <div className="librarian-dashboard-legend-text">Visual Content</div>
                    <div className="librarian-dashboard-legend-value">{dashboardData.formats.visualContent}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Asset Condition Chart */}
            <div className="librarian-dashboard-chart-card">
              <h2 className="librarian-dashboard-chart-title">Asset Condition</h2>
              <div className="librarian-dashboard-chart-content">
                <div className="librarian-dashboard-asset-chart">
                  <div className="librarian-dashboard-donut-chart librarian-dashboard-condition-chart">
                    <div className="librarian-dashboard-chart-center">
                      <div className="librarian-dashboard-chart-number">330</div>
                      <div className="librarian-dashboard-chart-label">In Stock</div>
                    </div>
                  </div>
                </div>
                <div className="librarian-dashboard-asset-legend">
                  <div className="librarian-dashboard-legend-item">
                    <div className="librarian-dashboard-legend-color librarian-dashboard-total-assets"></div>
                    <div className="librarian-dashboard-legend-text">Total Assets</div>
                    <div className="librarian-dashboard-legend-value">{dashboardData.assets.total}</div>
                  </div>
                  <div className="librarian-dashboard-legend-item">
                    <div className="librarian-dashboard-legend-color librarian-dashboard-for-repair"></div>
                    <div className="librarian-dashboard-legend-text">For Repair</div>
                    <div className="librarian-dashboard-legend-value">{dashboardData.assets.forRepair}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Borrowing Trends and Tickets Section */}
          <div className="librarian-dashboard-bottom-row">
            {/* Borrowing Trends Chart */}
            <div className="librarian-dashboard-trends-card">
              <div className="librarian-dashboard-trends-header">
                <h2 className="librarian-dashboard-chart-title">Borrowing Trends</h2>
                <div className="librarian-dashboard-trends-legend">
                  <div className="librarian-dashboard-legend-item">
                    <div className="librarian-dashboard-legend-dot librarian-dashboard-student"></div>
                    <div className="librarian-dashboard-legend-text">Student</div>
                  </div>
                  <div className="librarian-dashboard-legend-item">
                    <div className="librarian-dashboard-legend-dot librarian-dashboard-teacher"></div>
                    <div className="librarian-dashboard-legend-text">Teachers</div>
                  </div>
                </div>
                <div className="librarian-dashboard-trends-options">
                  <FaEllipsisV />
                </div>
              </div>
              <div className="librarian-dashboard-trends-chart">
                <div className="librarian-dashboard-bar-chart-container">
                  {dashboardData.borrowingTrends.map((item, index) => (
                    <div key={index} className="librarian-dashboard-bar-group">
                      <div className="librarian-dashboard-bar librarian-dashboard-student-bar" style={{ height: `${item.students / 8}px` }}></div>
                      <div className="librarian-dashboard-bar librarian-dashboard-teacher-bar" style={{ height: `${item.teachers / 8}px` }}></div>
                      <div className="librarian-dashboard-bar-label">{item.month}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Tickets Section */}
            <div className="librarian-dashboard-tickets-card">
              <h2 className="librarian-dashboard-chart-title">Tickets</h2>
              <div className="librarian-dashboard-tickets-content">
                <div className="librarian-dashboard-tickets-row">
                  <div className="librarian-dashboard-ticket-item">
                    <div className="librarian-dashboard-ticket-label">Tickets Opened</div>
                    <div className="librarian-dashboard-ticket-circle librarian-dashboard-opened">
                      <div className="librarian-dashboard-ticket-number">{dashboardData.tickets.opened.toString().padStart(2, '0')}</div>
                    </div>
                  </div>
                  <div className="librarian-dashboard-ticket-item">
                    <div className="librarian-dashboard-ticket-label">Tickets Closed</div>
                    <div className="librarian-dashboard-ticket-circle librarian-dashboard-closed">
                      <div className="librarian-dashboard-ticket-number">{dashboardData.tickets.closed.toString().padStart(2, '0')}</div>
                    </div>
                  </div>
                </div>
                <div className="librarian-dashboard-tickets-legend">
                  <div className="librarian-dashboard-legend-item">
                    <div className="librarian-dashboard-legend-dot librarian-dashboard-opened"></div>
                    <div className="librarian-dashboard-legend-text">Tickets Opened</div>
                  </div>
                  <div className="librarian-dashboard-legend-item">
                    <div className="librarian-dashboard-legend-dot librarian-dashboard-closed"></div>
                    <div className="librarian-dashboard-legend-text">Tickets Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibrarianDashboard;