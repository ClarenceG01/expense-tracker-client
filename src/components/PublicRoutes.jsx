import axios from "axios";
import { useEffect, useState } from "react";
import { checkAuth } from "../utils/checkAuth";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const authStatus = await checkAuth();
        console.log(authStatus);
        setIsAuthenticated(authStatus);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
	verifyUser()
  }, []);
  return isAuthenticated ? <Navigate to='/home' />: <Outlet />
};

export default PublicRoutes;
