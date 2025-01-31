
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import StudentLogin from "./pages/StudentLogin/StudentLogin";
import StudentForget from "./pages/StudentLogin/StudentForget";
import StudentForgetRequested from "./pages/StudentLogin/StudentForgetRequested";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<StudentLogin />} />
        <Route path="/forgot-password" element={<StudentForget />} />
        <Route path="/reset-requested" element={<StudentForgetRequested />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;