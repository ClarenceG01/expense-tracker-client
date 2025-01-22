import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { checkAuth } from "../utils/checkAuth";

const isAuthenticated = await checkAuth();

console.log(isAuthenticated);
const PrivateRoutes = () => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
