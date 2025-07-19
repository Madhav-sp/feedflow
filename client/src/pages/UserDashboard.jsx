import React, { useState } from "react";

const UserDashboard = () => {
  const [company, setCompany] = useState("");
  const [concern, setConcern] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ company, concern, feedback });
    // Add actual API submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-lg shadow-md w-full max-w-2xl p-6">
        <div className="flex items-center space-x-2 mb-6">
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z"
            />
          </svg>
          <h2 className="text-2xl font-semibold text-gray-800">
            Submit Feedback
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
         

          {/* Concern Type */}
          <div>
            <label className="block font-medium text-sm text-gray-700 mb-1">
              Concern Type
            </label>
            <select
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="">Select concern type</option>
              <option value="Salary Issue">Salary Issue</option>
              <option value="Harassment">Harassment</option>
              <option value="Workload">Workload</option>
            </select>
          </div>

          {/* Feedback Textarea */}
          <div>
            <label className="block font-medium text-sm text-gray-700 mb-1">
              Your Feedback
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="4"
              placeholder="Please describe your feedback in detail..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Submit Feedback
          </button>
        </form>

        
      </div>
    </div>
  );
};

export default UserDashboard;
