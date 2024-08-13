import { useEffect } from "react";
import { checkAuth } from "../../utils/checkAuth";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const isToken = checkAuth();

  useEffect(() => {
    if (!isToken) {
      navigate("/");
    }
  }, [isToken, navigate]);
  return isToken ? <Outlet /> : null;
};

export default PrivateRoutes;
