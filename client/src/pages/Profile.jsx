import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.currentUser);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-gray-600">
        Please log in to view your profile.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
        {/* Profile Image */}
        <img
          src={user.photoURL || "/default-avatar.png"}
          alt="Profile"
          className="w-36 h-36 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />

        {/* User Info */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {user.displayName || "Anonymous User"}
          </h2>
          <p className="text-gray-600 text-lg mb-1">
            <span className="font-medium text-blue-500">Email:</span>{" "}
            {user.email}
          </p>
          {user.Uid && (
            <p className="text-gray-600 text-sm mb-1">
              <span className="font-medium text-blue-500">UID:</span> {user.Uid}
            </p>
          )}
          {user.createdAt && (
            <p className="text-gray-500 text-sm">
              <span className="font-medium text-blue-400">Joined:</span>{" "}
              {new Date(user.createdAt).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
