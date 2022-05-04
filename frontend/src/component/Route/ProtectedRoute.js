import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ isAdmin = false, children }) => {
	console.log(isAdmin)
  const {isAuthenticated, user } = useSelector((state) => state.user);

  if (isAuthenticated !== true) {
    return <Navigate to="/login" />;
  }

  if (isAdmin === true && user.role !== "admin") {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
