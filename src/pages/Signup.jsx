import React, { useState } from "react";
import "./signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { successToast } from "../utils/successToast";
import { errorToast } from "../utils/errorToast";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useForm } from "react-hook-form";

const Signup = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [cvisible, setCVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    const { username, password, cpassword } = data;
    // Prevent form submission if loading and no username or password
    if (!username || !password || !cpassword) {
      return errorToast("Please fill in all fields", "empty-fields");
    }
    if (password !== cpassword) {
      return errorToast("Passwords do not match", "password-mismatch");
    }
    try {
      const res = await fetch(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );
      const data = await res.json();
      if (res.status !== 200) {
        return errorToast(data.message, "register-error");
      }
      if (res.status === 200) {
        successToast(
          "Registered successfully. Login to continue",
          "register-success"
        );
        navigate("/");
      }
    } catch (error) {
      errorToast("Error registering. Try again", "register-error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-primary h-screen flex flex-col  items-center justify-center relative px-4">
      <h2 className="font-bold text-2xl absolute top-3">Expensify</h2>
      <form
        className=" w-[90%] md:w-1/2 lg:w-1/3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full mb-2 flex flex-col">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            {...register("username")}
            className="border-1 border-gray-500 rounded-sm py-1 px-2"
          />
        </div>
        <div className="w-full mb-2 flex flex-col relative">
          <label htmlFor="password">Password:</label>
          <input
            type={visible ? "text" : "password"}
            name="password"
            id="password"
            {...register("password")}
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
        <div className="w-full mb-2 flex flex-col relative">
          <label htmlFor="cpassword">Confirm password:</label>
          <input
            type={cvisible ? "text" : "password"}
            name="cpassword"
            id="cpassword"
            {...register("cpassword")}
            className="border-1 border-gray-500 rounded-sm py-1 px-2"
          />
          {cvisible ? (
            <GoEye
              className="absolute top-8 right-4"
              onClick={() => setCVisible(!cvisible)}
            />
          ) : (
            <GoEyeClosed
              className="absolute top-8 right-4"
              onClick={() => setCVisible(!cvisible)}
            />
          )}
        </div>
        <div className="flex flex-col items-center">
          <button
            className={`bg-gradient-to-t from-custom-pink-light via-custom-pink to-custom-pink-dark py-1 px-4 rounded-lg text-white text-xl my-2 hover:scale-110 ${
              loading ||
              !watch("username") ||
              !watch("password") ||
              !watch("cpassword")
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
          >
            Register
          </button>
          <NavLink
            to="/"
            className="hover:text-custom-pink-dark font-semibold text-lg "
          >
            Already have an account? Login
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Signup;
