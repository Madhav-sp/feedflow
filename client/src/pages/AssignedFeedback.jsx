import React from "react";
import Sidebar from "../components/Sidebar";

const AssignedFeedback = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-2">Assigned Feedback</h1>
        <p className="text-gray-600 mb-6">
          Feedback assigned to Tech Head (2 items)
        </p>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-500 italic">
            Later feedback data will appear here...
          </p>
        </div>
      </main>
    </div>
  );
};

export default AssignedFeedback;
