import React from "react";
import Sidebar from "../components/Sidebar";

const EmployeeDashboard = () => {
  const user = {
    name: "John Employee",
    email: "employee@company.com",
    department: "Tech",
    role: "Tech Head",
    assigned: 8,
    resolvedToday: 3,
    pending: 5,
    avgResponse: 2.5,
    recentActivity: [
      {
        status: "Resolved",
        text: "Resolved feedback about delivery delay",
        color: "green",
      },
      { status: "New", text: "New feedback assigned to you", color: "blue" },
      {
        status: "In Progress",
        text: "Feedback marked as in-progress",
        color: "yellow",
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-1">Employee Dashboard</h1>
        <p className="text-gray-600 mb-4">Welcome back, {user.name}</p>
        <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-gray-800 rounded-full mb-6">
          {user.role} - {user.department} Department
        </span>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard title="Assigned Feedback" value={user.assigned} />
          <StatCard title="Resolved Today" value={user.resolvedToday} />
          <StatCard title="Pending" value={user.pending} />
          <StatCard
            title="Avg Response Time"
            value={`${user.avgResponse} hours`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              Your Role & Department
            </h2>
            <InfoRow label="Name" value={user.name} />
            <InfoRow label="Email" value={user.email} />
            <InfoRow label="Department" value={user.department} />
            <InfoRow label="Role" value={user.role} />
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-3">
              {user.recentActivity.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <span
                    className={`w-3 h-3 mt-1 rounded-full bg-${item.color}-500`}
                  ></span>
                  <p className="text-gray-700">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

const StatCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
    <p className="text-2xl font-bold text-gray-800">{value}</p>
  </div>
);

const InfoRow = ({ label, value }) => (
  <div className="mb-3">
    <p className="text-sm font-medium text-gray-500">{label}</p>
    <p className="text-gray-800">{value}</p>
  </div>
);

export default EmployeeDashboard;
