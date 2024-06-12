import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./login.css";
import baseUrl from "../../utils/baseUrl";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const url = baseUrl();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post(`${url}/login`, credentials, { withCredentials: true })
      .then((res) => {
        console.log("loading...");
        if (res.status) {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => console.log("loading done"));
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
        <div className="login-form__controlls">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={credentials.password}
            onChange={changeHandler}
          />
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
