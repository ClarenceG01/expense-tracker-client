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
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log("Loading");
      console.log("Form submitted, about to send request");
      await axios
        .post(`${import.meta.env.VITE_REACT_APP_BASE_URL}/login`, credentials, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.status === 200) {
            console.log("Login successful, about to navigate", res);
            navigate("/");
            console.log("After navigate");
          }
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false);
          console.log("Loading complete");
        });
    } catch (err) {
      console.log("Error during login", err);
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
          <button disabled={loading}>{loading ? "Loading..." : "Login"}</button>
          <NavLink to="/register" className="register-navlink">
            Register
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
