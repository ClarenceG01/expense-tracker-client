// import React from "react";
// import { Outlet, Navigate } from "react-router-dom";
// import { checkAuth } from "../utils/checkAuth";

// const isAuthenticated = await checkAuth();

// console.log(isAuthenticated);
// const PrivateRoutes = () => {
//   return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
// };

// export default PrivateRoutes;

import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { checkAuth } from "../utils/checkAuth";

const PrivateRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const authStatus = await checkAuth();
        console.log("Auth status:", authStatus);
        setIsAuthenticated(authStatus);
      } catch (error) {
        console.error("Auth verification error:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking auth
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
