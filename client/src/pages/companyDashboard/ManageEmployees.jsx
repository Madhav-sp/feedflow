import React from "react";

const ManageEmployees = ({ data }) => {
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Employees</h1>
      {/* Render employee table or cards using `data` */}
    </div>
  );
};

export default ManageEmployees;
