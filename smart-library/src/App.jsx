import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import StudentLogin from "./pages/StudentLogin/StudentLogin";
import StudentForget from "./pages/StudentLogin/StudentForget";
import StudentForgetRequested from "./pages/StudentLogin/StudentForgetRequested";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import StudentEbooks from "./pages/StudentEbooks/StudentEbooks";
import StudentAudiobooks from "./pages/StudentAudiobooks/StudentAudiobooks";
import StudentNotes from "./pages/StudentNotes/StudentNotes";
import StudentVC from "./pages/StudentVC/StudentVC";
import StudentAnnouncements from "./pages/StudentAnnouncements/StudentAnnouncements";
import StudentCatalogue from "./pages/StudentCatalogue/StudentCatalogue";
import StudentOurLegends from "./pages/StudentOurLegends/StudentOurLegends";
import StudentWishlist from "./pages/StudentWishlist/StudentWishlist";      
import StudentBookDescription from "./pages/StudentBookDescription/StudentBookDescription";
import LandingPage from "./pages/LandingPage";
import AdminLogin from "./pages/AdminPages/AdminLogin/AdminLogin";
import AdminForget from "./pages/AdminPages/AdminLogin/AdminForget";
import AdminForgetRequested from "./pages/AdminPages/AdminLogin/AdminForgetRequested";
import AdminDashboard from "./pages/AdminPages/AdminDashboard/AdminDashboard";
import AdminBookInventory from "./pages/AdminPages/AdminBookInventory/AdminBookInventory";
import AdminAssetManagement from "./pages/AdminPages/AdminAssetManagement/AdminAssetManagement";
import AdminUserManagement from "./pages/AdminPages/AdminUserManagement/AdminUserManagement";

function App() {
  return (
    <Router>
      <Routes>
        {/* Student Routes */}
        <Route path="/login" element={<StudentLogin />} />
        <Route path="/forgot-password" element={<StudentForget />} />
        <Route path="/reset-requested" element={<StudentForgetRequested />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-e-books" element={<StudentEbooks />} />
        <Route path="/student-audio-books" element={<StudentAudiobooks />} />
        <Route path="/student-visual-content" element={<StudentVC />} /> 
        <Route path="/student-notes" element={<StudentNotes />} /> 
        <Route path="/student-announcements" element={<StudentAnnouncements />} />
        <Route path="/student-catalogue" element={<StudentCatalogue />} />
        <Route path="/student-legends" element={<StudentOurLegends />} />
        <Route path="/student-wishlist" element={<StudentWishlist />} />
        <Route path="/student-book-description" element={<StudentBookDescription />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />

        {/* Landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Admin routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-forgot-password" element={<AdminForget />} />
        <Route path="/admin-reset-requested" element={<AdminForgetRequested />} />
        <Route path="/admin-books-inventory" element={<AdminBookInventory />} />
        <Route path="/admin-asset-management" element={<AdminAssetManagement />} />
        <Route path="/admin-user-management" element={<AdminUserManagement />} />
      </Routes>
    </Router>
  );
}

export default App;