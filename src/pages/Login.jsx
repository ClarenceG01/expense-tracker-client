import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { errorToast } from "../utils/errorToast";
import { successToast } from "../utils/successToast";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, watch, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (data) => {
    // Prevent form submission if loading and no username or password
    if (loading || !data.username || !data.password) {
      return errorToast("Please fill in all fields", "empty-fields");
    }
    try {
      setLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/login`,
        data,
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        successToast("Login successful", "login-success");
        navigate("/home");
      }
    } catch (err) {
      errorToast(err.response?.data.message || "login-failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-primary h-screen flex flex-col  items-center justify-center relative px-4">
      <h2 className="font-bold text-2xl absolute top-3">Expensify</h2>
      <form
        className=" w-[90%] md:w-1/2 lg:w-1/3"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="mb-2 flex flex-col">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            {...register("username")}
            name="username"
            id="username"
            className="border-1 border-gray-500 rounded-sm py-1 px-2"
          />
        </div>
        <div className="mb-2 flex flex-col relative">
          <label htmlFor="password">Password:</label>
          <input
            type={visible ? "text" : "password"}
            {...register("password")}
            name="password"
            id="password"
            className="border-1 border-gray-500 rounded-sm py-1 px-2"
          />
          {visible ? (
            <GoEye
              className="absolute top-8 right-4"
              onClick={() => setVisible(!visible)}
            />
          ) : (
            <GoEyeClosed
              className="absolute top-8 right-4"
              onClick={() => setVisible(!visible)}
            />
          )}
        </div>
        <div className="flex flex-col items-center">
          <button
            className={`bg-gradient-to-t from-custom-pink-light via-custom-pink to-custom-pink-dark py-1 px-4 rounded-lg text-white text-xl my-2 hover:scale-110 ${
              loading || !watch("username") || !watch("password")
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
          >
            {loading ? "Loading..." : "Login"}
          </button>
          <NavLink
            to="/register"
            className="hover:text-custom-pink-dark font-semibold text-lg "
          >
            Don`t have an account? Register
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
