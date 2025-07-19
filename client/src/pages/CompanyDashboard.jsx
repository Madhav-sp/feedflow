import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";

const CompanyDashboard = () => {
  const [overviewData, setOverviewData] = useState(null);
  const [employeesData, setEmployeesData] = useState(null);
  const [feedbackData, setFeedbackData] = useState(null);

  useEffect(() => {
    fetchOverview();
    fetchEmployees();
    fetchFeedback();
  }, []);

  const fetchOverview = async () => {
    const res = await axios.get("/api/dashboard/overview");
    setOverviewData(res.data);
  };

  const fetchEmployees = async () => {
    const res = await axios.get("/api/dashboard/employees");
    setEmployeesData(res.data);
  };

  const fetchFeedback = async () => {
    const res = await axios.get("/api/dashboard/feedback");
    setFeedbackData(res.data);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-8">Business Panel</h2>
        <nav className="flex flex-col gap-3">
          <NavLink
            to="overview"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 bg-blue-100 rounded text-blue-600 font-medium"
                : "px-4 py-2 hover:bg-gray-100 rounded"
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="employees"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 bg-blue-100 rounded text-blue-600 font-medium"
                : "px-4 py-2 hover:bg-gray-100 rounded"
            }
          >
            Manage Employees
          </NavLink>
          <NavLink
            to="feedback"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 bg-blue-100 rounded text-blue-600 font-medium"
                : "px-4 py-2 hover:bg-gray-100 rounded"
            }
          >
            View Feedback
          </NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <Outlet
          context={{
            overviewData,
            employeesData,
            feedbackData,
          }}
        />
      </main>
=======
import { useSelector } from "react-redux";
import axios from "axios";

const CompanyDashboard = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentUser && currentUser.data._id) {
      axios
        .get(`/api/feedback/business/${currentUser.data._id}`, {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data.data);
          setFeedbacks(response.data.data);
          setLoading(false);
        })
        .catch((err) => {
          setError("Error fetching feedbacks");
          setLoading(false);
        });
    }
  }, [currentUser]);

  if (loading) {
    return <div>Loading feedbacks...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Company Dashboard</h1>
      <h2>Feedbacks for {currentUser?.data?.name}</h2>

      {feedbacks.length === 0 ? (
        <p>No feedbacks available.</p>
      ) : (
        <div>
          <ul>
            {feedbacks.map((feedback) => (
              <li key={feedback._id}>
                <p>
                  <strong>{feedback.givenBy?.name}</strong>
                </p>
                <p>{feedback.content}</p>
                {feedback.image && <img src={feedback.image} alt="feedback" />}
              </li>
            ))}
          </ul>
        </div>
      )}
>>>>>>> 44b8c659b979ab9767a57af9b40b6726ba46c43f
    </div>
  );
};

export default CompanyDashboard;
