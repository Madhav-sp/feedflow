import React from "react";

const ViewFeedback = ({ data }) => {
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">View Feedback</h1>
      {/* Render feedback list using `data` */}
    </div>
  );
};

export default ViewFeedback;

