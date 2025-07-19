import React from "react";

const Overview = ({ data }) => {
  const {
    totalEmployees = 12,
    pendingRequests = 3,
    totalFeedback = 45,
    resolutionRate = 71,
    companyName = "TechCorp Inc.",
    email = "admin@company.com",
    industry = "Technology",
    recentActivities = [
      { text: "New feedback received from user", color: "blue-500" },
      { text: "Employee John resolved a ticket", color: "green-500" },
      { text: "New employee join request", color: "yellow-500" },
    ],
  } = data || {};

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-1">Business Dashboard</h1>
      <p className="text-gray-500 mb-6">Welcome back, Business Admin</p>

      {/* Top Stat Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Employees"
          value={totalEmployees}
          subtitle="Active employees"
          icon="👥"
        />
        <StatCard
          title="Pending Requests"
          value={pendingRequests}
          subtitle="Employee join requests"
          icon="📥"
        />
        <StatCard
          title="Total Feedback"
          value={totalFeedback}
          subtitle="All time feedback"
          icon="💬"
        />
        <StatCard
          title="Resolution Rate"
          value={`${resolutionRate}%`}
          subtitle="Feedback resolved"
          icon="📈"
        />
      </div>

      {/* Bottom Two Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold mb-3">Company Profile</h2>
          <p>
            <strong>Company Name:</strong> {companyName}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Industry:</strong> {industry}
          </p>
        </div>

        <div className="p-4 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold mb-3">Recent Activity</h2>
          <ul className="space-y-2">
            {recentActivities.map((activity, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span
                  className={`h-3 w-3 rounded-full bg-${activity.color}`}
                ></span>
                <span>{activity.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, subtitle, icon }) => (
  <div className="p-4 border rounded-lg shadow-sm bg-white">
    <div className="text-sm text-gray-500 mb-1 flex items-center">
      <span className="text-lg mr-2">{icon}</span> {title}
    </div>
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-gray-400 text-sm">{subtitle}</div>
  </div>
);

export default Overview;
