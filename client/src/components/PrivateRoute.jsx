import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({
  children,
  adminOnly = false,
  allowedRoles = ["user","employee","business"], 
}) => {
  const currentUser = useSelector((state) => state.user.currentUser);

  if (!currentUser) return <Navigate to="/" />;

  const { isAdmin, role } = currentUser.data;

  if (adminOnly && !isAdmin) return <Navigate to="/" />;

  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
