// import React from "react";
// import AdminNavBar from "../../../components/AdminNavBar";
// import AdminSidebar from "../../../components/AdminSidebar";
// import "./AdminReports.css";

// const AdminReports = () => {
//   return (
//     <div className="admin-reports-container">
//       <AdminNavBar />
//       <AdminSidebar /> 
//     </div>
//   );
// };

// export default AdminReports;
import React, { useState } from "react";
import AdminNavBar from "../../../components/AdminNavBar";
import AdminSidebar from "../../../components/AdminSidebar";
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";
import "./AdminReports.css";

const AdminReports = () => {
  const [activeReport, setActiveReport] = useState("usage");
  const [dateRange, setDateRange] = useState("month");
  const [showExportModal, setShowExportModal] = useState(false);
  const [reportFormat, setReportFormat] = useState("pdf");

  // Sample data for demonstration
  const usageData = [
    { name: "Fiction", students: 245, teachers: 68 },
    { name: "Non-Fiction", students: 200, teachers: 120 },
    { name: "Reference", students: 150, teachers: 45 },
    { name: "Periodicals", students: 80, teachers: 35 },
    { name: "Textbooks", students: 320, teachers: 25 },
  ];

  const overdueData = [
    { name: "1-7 days", count: 45 },
    { name: "8-14 days", count: 32 },
    { name: "15-30 days", count: 18 },
    { name: "30+ days", count: 7 },
  ];

  const formatData = [
    { name: "Hardcopy", value: 65 },
    { name: "E-Book", value: 20 },
    { name: "Audiobook", value: 10 },
    { name: "Visual", value: 5 },
  ];

  const monthlyTrendsData = [
    { name: "Jan", borrowings: 120, returns: 105 },
    { name: "Feb", borrowings: 150, returns: 130 },
    { name: "Mar", borrowings: 180, returns: 160 },
    { name: "Apr", borrowings: 170, returns: 165 },
    { name: "May", borrowings: 190, returns: 175 },
    { name: "Jun", borrowings: 210, returns: 200 },
  ];

  const generateReport = () => {
    setShowExportModal(true);
  };

  const exportReport = () => {
    // This would connect to your backend for actual report generation
    alert(`Report exported in ${reportFormat.toUpperCase()} format!`);
    setShowExportModal(false);
  };

  const renderReportContent = () => {
    switch (activeReport) {
      case "usage":
        return (
          <div className="admin-reports-chart-container">
            <h3>Book Usage by Category</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={usageData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="students" name="Students" fill="#8884d8" />
                <Bar dataKey="teachers" name="Teachers" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
            <p className="admin-reports-insight">
              <strong>Key Insight:</strong> Fiction and Textbooks are the most popular categories among students, 
              while teachers prefer Non-Fiction resources.
            </p>
          </div>
        );
      case "overdue":
        return (
          <div className="admin-reports-chart-container">
            <h3>Overdue Books Analysis</h3>
            <div className="admin-reports-chart-row">
              <div className="admin-reports-chart-half">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={overdueData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="count"
                      nameKey="name"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="admin-reports-chart-half">
                <div className="admin-reports-stats">
                  <div className="admin-reports-stat-item">
                    <h4>Total Overdue</h4>
                    <p className="admin-reports-stat-value">102</p>
                  </div>
                  <div className="admin-reports-stat-item">
                    <h4>Pending Fines</h4>
                    <p className="admin-reports-stat-value">$480.25</p>
                  </div>
                  <div className="admin-reports-stat-item">
                    <h4>Recovery Rate</h4>
                    <p className="admin-reports-stat-value">92%</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="admin-reports-insight">
              <strong>Key Insight:</strong> Most overdue books are returned within the first week. Consider 
              sending reminders at day 5 to improve return rates.
            </p>
          </div>
        );
      case "format":
        return (
          <div className="admin-reports-chart-container">
            <h3>Material Format Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={formatData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="admin-reports-recommendations">
              <h4>Recommendations:</h4>
              <ul>
                <li>Consider increasing E-Book resources to meet digital demand</li>
                <li>Audiobook collection is underutilized - promote through featured section</li>
                <li>Visual material usage has increased 25% since last quarter</li>
              </ul>
            </div>
            <p className="admin-reports-insight">
              <strong>Key Insight:</strong> Despite digital trends, 65% of library resources are still consumed in hardcopy format.
            </p>
          </div>
        );
      case "trends":
        return (
          <div className="admin-reports-chart-container">
            <h3>Monthly Borrowing Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyTrendsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="borrowings" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="returns" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
            <div className="admin-reports-seasonal-analysis">
              <h4>Seasonal Analysis:</h4>
              <p>
                Borrowing activity typically increases at the beginning of academic terms (Jan/Feb and Aug/Sep).
                Plan acquisitions and staffing accordingly to accommodate these peak periods.
              </p>
            </div>
            <p className="admin-reports-insight">
              <strong>Key Insight:</strong> There is a consistent 10-15% gap between borrowings and returns, 
              suggesting a steady increase in circulation volumes.
            </p>
          </div>
        );
      default:
        return <div>Select a report type</div>;
    }
  };

  return (
    <div className="admin-reports-container">
      <AdminNavBar />
      <div className="admin-reports-content">
        <AdminSidebar />
        <div className="admin-reports-main">
          <div className="admin-reports-header">
            <h2>Library Analytics & Reports</h2>
            <div className="admin-reports-controls">
              <div className="admin-reports-date-selector">
                <label>Time Period:</label>
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="admin-reports-select"
                >
                  <option value="week">Last Week</option>
                  <option value="month">Last Month</option>
                  <option value="quarter">Last Quarter</option>
                  <option value="year">Last Year</option>
                  <option value="custom">Custom Range</option>
                </select>
              </div>
              <button
                className="admin-reports-generate-btn"
                onClick={generateReport}
              >
                Generate Report
              </button>
            </div>
          </div>
          
          <div className="admin-reports-tabs">
            <button
              className={`admin-reports-tab ${activeReport === "usage" ? "active" : ""}`}
              onClick={() => setActiveReport("usage")}
            >
              Usage by Category
            </button>
            <button
              className={`admin-reports-tab ${activeReport === "overdue" ? "active" : ""}`}
              onClick={() => setActiveReport("overdue")}
            >
              Overdue Analysis
            </button>
            <button
              className={`admin-reports-tab ${activeReport === "format" ? "active" : ""}`}
              onClick={() => setActiveReport("format")}
            >
              Format Distribution
            </button>
            <button
              className={`admin-reports-tab ${activeReport === "trends" ? "active" : ""}`}
              onClick={() => setActiveReport("trends")}
            >
              Monthly Trends
            </button>
          </div>
          
          <div className="admin-reports-body">
            {renderReportContent()}
          </div>
        </div>
      </div>

      {showExportModal && (
        <div className="admin-reports-modal-overlay">
          <div className="admin-reports-modal">
            <h3>Export Report</h3>
            <div className="admin-reports-modal-content">
              <div className="admin-reports-modal-field">
                <label>Report Title:</label>
                <input
                  type="text"
                  className="admin-reports-input"
                  placeholder="Library Usage Report"
                  defaultValue={`Library ${activeReport.charAt(0).toUpperCase() + activeReport.slice(1)} Report`}
                />
              </div>
              <div className="admin-reports-modal-field">
                <label>Format:</label>
                <select
                  value={reportFormat}
                  onChange={(e) => setReportFormat(e.target.value)}
                  className="admin-reports-select"
                >
                  <option value="pdf">PDF</option>
                  <option value="excel">Excel</option>
                  <option value="csv">CSV</option>
                </select>
              </div>
              <div className="admin-reports-modal-field">
                <label>Include:</label>
                <div className="admin-reports-checkbox-group">
                  <label>
                    <input type="checkbox" defaultChecked /> Charts
                  </label>
                  <label>
                    <input type="checkbox" defaultChecked /> Raw Data
                  </label>
                  <label>
                    <input type="checkbox" defaultChecked /> Insights
                  </label>
                </div>
              </div>
            </div>
            <div className="admin-reports-modal-actions">
              <button
                className="admin-reports-modal-cancel"
                onClick={() => setShowExportModal(false)}
              >
                Cancel
              </button>
              <button
                className="admin-reports-modal-export"
                onClick={exportReport}
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

export default AdminReports;