import { checkAuth } from "../../utils/checkAuth";
import { Outlet, Navigate } from "react-router-dom";

const PublicRoutes = () => {
  const isToken = checkAuth();
  return isToken ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoutes;
