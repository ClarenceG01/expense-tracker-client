import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
