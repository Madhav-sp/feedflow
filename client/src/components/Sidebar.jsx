import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r shadow-sm">
      <div className="p-6 text-xl font-semibold text-gray-800">
        Employee Panel
      </div>
      <nav className="mt-4 space-y-2">
        <NavLink
          to="/employee"
          className={({ isActive }) =>
            `block w-full px-6 py-2 text-left rounded-r-full ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`
          }
        >
          My Dashboard
        </NavLink>
        <NavLink
          to="/assigned-feedback"
          className={({ isActive }) =>
            `block w-full px-6 py-2 text-left rounded-r-full ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`
          }
        >
          Assigned Feedback
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
