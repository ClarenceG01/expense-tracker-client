import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { GoEye, GoEyeClosed } from "react-icons/go";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);
  const changeHandler = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log("Form submitted, about to send request");
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/login`,
        credentials,
        { withCredentials: true }
      );
      if (res.status === 200) {
        console.log("Login successful, about to navigate", res);
        navigate("/home");
        console.log("After navigate");
      }
    } catch (err) {
      console.error("Error during login", err);
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(
          "Server responded with status code:",
          err.response.status
        );
        console.error("Server response data:", err.response.data);
      } else if (err.request) {
        // The request was made but no response was received
        console.error("No response received from the server");
      } else {
        // Something else happened while setting up the request
        console.error("Error setting up the request:", err.message);
      }
    }
  };

  return (
    <div className="login">
      <h2>Expensify</h2>
      <form className="login-form" onSubmit={submitHandler}>
        <div className="login-form__controlls">
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            name="email"
            id="username"
            value={credentials.email}
            onChange={changeHandler}
          />
        </div>
        <div className="login-form__controlls pwd-control">
          <label htmlFor="password">Password:</label>
          <input
            type={visible ? "text" : "password"}
            name="password"
            id="password"
            value={credentials.password}
            onChange={changeHandler}
          />
          {visible ? (
            <GoEye className="eye-icon" onClick={() => setVisible(!visible)} />
          ) : (
            <GoEyeClosed
              className="eye-icon"
              onClick={() => setVisible(!visible)}
            />
          )}
        </div>
        <div className="btn-link">
          <button>Login</button>
          <NavLink to="/register" className="register-navlink">
            Register
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
