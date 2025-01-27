import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import StudentLogin from "./pages/StudentLogin/StudentLogin";
import StudentForget from "./pages/StudentLogin/StudentForget";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<StudentLogin />} />
        <Route path="/forgot-password" element={<StudentForget />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;