import { Navigate } from "react-router-dom";
import { isAuthenticated, getRole } from "../utils/auth";

const AdminRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (getRole() !== "admin") {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default AdminRoute;