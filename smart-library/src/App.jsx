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

function App() {
  return (
    <Router>
      <Routes>
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
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-login" element={<StudentLogin />} />
      </Routes>
    </Router>
  );
}

export default App;