import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import PrivateRoutes from "./components/authentication/PrivateRoutes";
import PublicRoutes from "./components/authentication/PublicRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}></Route>
        <Route element={<PublicRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
