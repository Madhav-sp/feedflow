import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const CompanyDashboard = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentUser && currentUser.data._id) {
      axios
        .get(`/api/feedback/business/${currentUser.data._id}`, {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data.data);
          setFeedbacks(response.data.data);
          setLoading(false);
        })
        .catch((err) => {
          setError("Error fetching feedbacks");
          setLoading(false);
        });
    }
  }, [currentUser]);

  if (loading) {
    return <div>Loading feedbacks...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Company Dashboard</h1>
      <h2>Feedbacks for {currentUser?.data?.name}</h2>

      {feedbacks.length === 0 ? (
        <p>No feedbacks available.</p>
      ) : (
        <div>
          <ul>
            {feedbacks.map((feedback) => (
              <li key={feedback._id}>
                <p>
                  <strong>{feedback.givenBy?.name}</strong>
                </p>
                <p>{feedback.content}</p>
                {feedback.image && <img src={feedback.image} alt="feedback" />}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CompanyDashboard;
