import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages/components

import UserDashboard from "./pages/Feedback";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CompanyDashboard from "./pages/CompanyDashboard";


const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/employee" element={<EmployeeDashboard />} />
        <Route path="/business" element={<CompanyDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
