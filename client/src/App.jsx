import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages/components

import UserDashboard from "./pages/Feedback";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CompanyDashboard from "./pages/CompanyDashboard";
import AssignedFeedback from "./pages/AssignedFeedback";
import ViewFeedback from "./pages/companyDashboard/ViewFeedback";
import ManageEmployees from "./pages/companyDashboard/ManageEmployees";
import Overview from "./pages/companyDashboard/Overview";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Feedback from "./pages/Feedback";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/user" element={<UserDashboard />} />
        <Route path="/employee" element={<EmployeeDashboard />} />
        <Route path="/company" element={<CompanyDashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="manage-employees" element={<ManageEmployees />} />
          <Route path="view-feedback" element={<ViewFeedback />} />
        </Route>
        <Route path="/ama" element={<ManageEmployees />} />
        <Route path="/assigned-feedback" element={<AssignedFeedback />} />
        <Route path="/feedbacks" element={<Feedback />} />
      </Routes>
    </Router>
  );
};

export default App;
