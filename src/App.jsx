import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PublicRoutes from "./components/PublicRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
