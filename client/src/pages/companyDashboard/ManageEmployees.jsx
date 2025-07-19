import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const ManageEmployees = ({ userOptions = [] }) => {
  const [fields, setFields] = useState([{ department: "", selectedUser: "" }]);

  const handleChange = (index, field, value) => {
    const updatedFields = [...fields];
    updatedFields[index][field] = value;
    setFields(updatedFields);
  };

  const handleAddField = () => {
    setFields([...fields, { department: "", selectedUser: "" }]);
  };

  const handleRemoveField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  const selectedUsers = fields.map((f) => f.selectedUser).filter(Boolean);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Employees</h1>
        <button
          onClick={handleAddField}
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
          title="Add Employee"
        >
          <FaPlus />
        </button>
      </div>

      {fields.map((entry, index) => {
        const availableUsers = userOptions.filter(
          (user) =>
            user.id === entry.selectedUser || !selectedUsers.includes(user.id)
        );

        return (
          <div
            key={index}
            className="flex gap-4 items-center mb-4 bg-gray-50 p-4 rounded-md shadow-sm"
          >
            <input
              type="text"
              placeholder="Enter Department"
              value={entry.department}
              onChange={(e) =>
                handleChange(index, "department", e.target.value)
              }
              className="p-2 border rounded w-1/3"
            />

            <select
              value={entry.selectedUser}
              onChange={(e) =>
                handleChange(index, "selectedUser", e.target.value)
              }
              className="p-2 border rounded w-1/3"
            >
              <option value="">Select User</option>
              {availableUsers.length > 0 ? (
                availableUsers.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))
              ) : (
                <option disabled>No users available</option>
              )}
            </select>

            <button
              onClick={() => handleRemoveField(index)}
              className="text-red-500 hover:text-red-700"
              title="Delete Field"
            >
              <FaTrash />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ManageEmployees;
