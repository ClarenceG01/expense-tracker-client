import { checkAuth } from "../../utils/checkAuth";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const isToken = checkAuth();
  return isToken ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
