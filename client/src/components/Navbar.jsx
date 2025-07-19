import React from "react";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user)
  const navigate = useNavigate();

  const handleUserClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center">
      {/* Left: Logo */}
      <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide">
        FeedFlow
      </h1>

      {/* Right: Navigation & User */}
      <div className="flex items-center gap-6">
        {/* Navigation Links */}
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 text-lg font-medium"
        >
          Home
        </Link>
        <Link
          to="/feedbacks"
          className="text-gray-700 hover:text-blue-600 text-lg font-medium"
        >
          Feedbacks
        </Link>
        <Link
          to="/user"
          className="text-gray-700 hover:text-blue-600 text-lg font-medium"
        >
          Dashboard
        </Link>

        {/* User Avatar or Icon */}
        <button onClick={handleUserClick} className="focus:outline-none">
          {user ? (
            <img
              src={user.profilePicture || "/default-avatar.png"}
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
            />
          ) : (
            <FaUserCircle className="text-3xl text-gray-500 hover:text-blue-600" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
