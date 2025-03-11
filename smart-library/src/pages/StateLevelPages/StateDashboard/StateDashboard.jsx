import React from 'react';
import { useNavigate } from 'react-router-dom';
import StateAdminNavbar from '../../../components/StateAdmin/StateAdminNavbar/StateAdminNavbar';
import StateAdminSidebar from '../../../components/StateAdmin/StateAdminSidebar/StateAdminSidebar';
import './StateDashboard.css';
import { FaMapMarkerAlt, FaSchool, FaUserTie, FaUserGraduate } from 'react-icons/fa';
import { HiDotsVertical } from 'react-icons/hi';

const StateDashboard = () => {
  const navigate = useNavigate();

  const navigateToDistricts = () => {
    // Navigate to state-total-districts
    navigate('/state-total-districts');
  };

  const navigateToSchools = () => {
    // Add your navigation logic here
    console.log("Navigating to Schools page");
  };

  return (
    <div className="State-Admin-Dashboard-Container">
      <StateAdminNavbar />
      <div className="State-Dashboard-Content">
        <StateAdminSidebar />
        <main className="State-Dashboard-Main">
          <div className="State-Dashboard-Welcome">
            <h2>Welcome Admin!</h2>
          </div>
          
          <div className="State-Dashboard-Stats">
            <div className="State-Dashboard-Stat-Card" onClick={navigateToDistricts}>
              <div className="State-Dashboard-Stat-Info">
                <div className="State-Dashboard-Stat-Label">Total Districts</div>
                <div className="State-Dashboard-Stat-Value">13</div>
              </div>
              <div className="State-Dashboard-Stat-Icon district-icon">
                <FaMapMarkerAlt />
              </div>
            </div>
            
            <div className="State-Dashboard-Stat-Card" onClick={navigateToSchools}>
              <div className="State-Dashboard-Stat-Info">
                <div className="State-Dashboard-Stat-Label">Total Schools</div>
                <div className="State-Dashboard-Stat-Value">216</div>
              </div>
              <div className="State-Dashboard-Stat-Icon school-icon">
                <FaSchool />
              </div>
            </div>
            
            <div className="State-Dashboard-Stat-Card">
              <div className="State-Dashboard-Stat-Info">
                <div className="State-Dashboard-Stat-Label">Total Teachers</div>
                <div className="State-Dashboard-Stat-Value">1080</div>
              </div>
              <div className="State-Dashboard-Stat-Icon teacher-icon">
                <FaUserTie />
              </div>
            </div>
            
            <div className="State-Dashboard-Stat-Card">
              <div className="State-Dashboard-Stat-Info">
                <div className="State-Dashboard-Stat-Label">Total Students</div>
                <div className="State-Dashboard-Stat-Value">69120</div>
              </div>
              <div className="State-Dashboard-Stat-Icon student-icon">
                <FaUserGraduate />
              </div>
            </div>
          </div>
          
          <div className="State-Dashboard-Charts">
            <div className="State-Dashboard-Chart-Card">
              <div className="State-Dashboard-Chart-Header">
                <h3>Books across Formats</h3>
              </div>
              <div className="State-Dashboard-Chart-Content">
                <div className="State-Dashboard-Donut-Chart">
                  <div className="State-Dashboard-Donut-Inner">
                    <div className="State-Dashboard-Donut-Value">1,150</div>
                    <div className="State-Dashboard-Donut-Label">Over All</div>
                  </div>
                </div>
                <div className="State-Dashboard-Chart-Legend">
                  <div className="State-Dashboard-Legend-Item">
                    <div className="State-Dashboard-Legend-Color hardcopy"></div>
                    <div className="State-Dashboard-Legend-Text">Hard copy</div>
                    <div className="State-Dashboard-Legend-Value">290</div>
                  </div>
                  <div className="State-Dashboard-Legend-Item">
                    <div className="State-Dashboard-Legend-Color ebook"></div>
                    <div className="State-Dashboard-Legend-Text">E-books</div>
                    <div className="State-Dashboard-Legend-Value">410</div>
                  </div>
                  <div className="State-Dashboard-Legend-Item">
                    <div className="State-Dashboard-Legend-Color audiobook"></div>
                    <div className="State-Dashboard-Legend-Text">Audio books</div>
                    <div className="State-Dashboard-Legend-Value">250</div>
                  </div>
                  <div className="State-Dashboard-Legend-Item">
                    <div className="State-Dashboard-Legend-Color visual"></div>
                    <div className="State-Dashboard-Legend-Text">Visual Content</div>
                    <div className="State-Dashboard-Legend-Value">200</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="State-Dashboard-Chart-Card">
              <div className="State-Dashboard-Chart-Header">
                <h3>User Activity / week</h3>
              </div>
              <div className="State-Dashboard-Chart-Content">
                <div className="State-Dashboard-Donut-Chart">
                  <div className="State-Dashboard-Donut-Inner">
                    <div className="State-Dashboard-Donut-Value">1,450</div>
                    <div className="State-Dashboard-Donut-Label">Students</div>
                  </div>
                </div>
                <div className="State-Dashboard-Chart-Legend">
                  <div className="State-Dashboard-Legend-Item">
                    <div className="State-Dashboard-Legend-Color active-user"></div>
                    <div className="State-Dashboard-Legend-Text">Active User</div>
                    <div className="State-Dashboard-Legend-Value">70%</div>
                  </div>
                  <div className="State-Dashboard-Legend-Item">
                    <div className="State-Dashboard-Legend-Color inactive-user"></div>
                    <div className="State-Dashboard-Legend-Text">Inactive user</div>
                    <div className="State-Dashboard-Legend-Value">30%</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="State-Dashboard-Chart-Card">
              <div className="State-Dashboard-Chart-Header">
                <h3>Asset Active / Inactive</h3>
              </div>
              <div className="State-Dashboard-Chart-Content">
                <div className="State-Dashboard-Donut-Chart">
                  <div className="State-Dashboard-Donut-Inner">
                    <div className="State-Dashboard-Donut-Value">330</div>
                    <div className="State-Dashboard-Donut-Label">IN Stock</div>
                  </div>
                </div>
                <div className="State-Dashboard-Chart-Legend">
                  <div className="State-Dashboard-Legend-Item">
                    <div className="State-Dashboard-Legend-Color assigned-asset"></div>
                    <div className="State-Dashboard-Legend-Text">Assigned Asset</div>
                    <div className="State-Dashboard-Legend-Value">330</div>
                  </div>
                  <div className="State-Dashboard-Legend-Item">
                    <div className="State-Dashboard-Legend-Color unassigned-asset"></div>
                    <div className="State-Dashboard-Legend-Text">Unassigned Asset</div>
                    <div className="State-Dashboard-Legend-Value">229</div>
                  </div>
                  <div className="State-Dashboard-Legend-Item">
                    <div className="State-Dashboard-Legend-Color repair-asset"></div>
                    <div className="State-Dashboard-Legend-Text">For Repair</div>
                    <div className="State-Dashboard-Legend-Value">2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="State-Dashboard-Bottom-Charts">
            <div className="State-Dashboard-Chart-Card large">
              <div className="State-Dashboard-Chart-Header">
                <h3>Borrowing Trends</h3>
                <div className="State-Dashboard-Chart-Options">
                  <div className="State-Dashboard-Chart-Legend-Small">
                    <div className="State-Dashboard-Legend-Item-Small">
                      <div className="State-Dashboard-Legend-Color student"></div>
                      <div className="State-Dashboard-Legend-Text-Small">Student</div>
                    </div>
                    <div className="State-Dashboard-Legend-Item-Small">
                      <div className="State-Dashboard-Legend-Color teacher"></div>
                      <div className="State-Dashboard-Legend-Text-Small">Teachers</div>
                    </div>
                  </div>
                  <HiDotsVertical className="State-Dashboard-Options-Icon" />
                </div>
              </div>
              <div className="State-Dashboard-Bar-Chart">
                {/* Placeholder for the bar chart */}
                <div className="State-Dashboard-Bar-Chart-Container">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="State-Dashboard-Bar-Group">
                      <div 
                        className="State-Dashboard-Bar student-bar" 
                        style={{ height: `${Math.random() * 250 + 200}px` }}
                      ></div>
                      <div 
                        className="State-Dashboard-Bar teacher-bar" 
                        style={{ height: `${Math.random() * 150 + 100}px` }}
                      ></div>
                      <div className="State-Dashboard-Bar-Label">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="State-Dashboard-Chart-Card tickets">
              <div className="State-Dashboard-Chart-Header">
                <h3>Tickets</h3>
              </div>
              <div className="State-Dashboard-Tickets-Container">
                <div className="State-Dashboard-Ticket-Cards">
                  <div className="State-Dashboard-Ticket-Card">
                    <div className="State-Dashboard-Ticket-Label">Tickets Opened</div>
                    <div className="State-Dashboard-Ticket-Value opened">02</div>
                  </div>
                  <div className="State-Dashboard-Ticket-Card">
                    <div className="State-Dashboard-Ticket-Label">Tickets Closed</div>
                    <div className="State-Dashboard-Ticket-Value closed">05</div>
                  </div>
                </div>
                <div className="State-Dashboard-Ticket-Legend">
                  <div className="State-Dashboard-Ticket-Legend-Item">
                    <div className="State-Dashboard-Ticket-Legend-Color opened"></div>
                    <div className="State-Dashboard-Ticket-Legend-Text">Tickets Opened</div>
                  </div>
                  <div className="State-Dashboard-Ticket-Legend-Item">
                    <div className="State-Dashboard-Ticket-Legend-Color closed"></div>
                    <div className="State-Dashboard-Ticket-Legend-Text">Tickets Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StateDashboard;