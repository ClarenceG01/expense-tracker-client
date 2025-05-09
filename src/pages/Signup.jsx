import React, { useState } from "react";
import "./signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { successToast } from "../utils/successToast";
import { errorToast } from "../utils/errorToast";

const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    cpassword: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/register`,
        credentials,
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status === 200) {
          successToast("Registered successfully. Login to continue");
          navigate("/");
        }
      })
      .catch((err) => {
        errorToast(err.response.data.message);
      });
  };
  return (
    <div className="signup">
      <h2>Expensify</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="signup-form__controlls">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </div>
        <div className="signup-form__controlls">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <div className="signup-form__controlls">
          <label htmlFor="cpassword">Confirm password:</label>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            value={credentials.cpassword}
            onChange={handleChange}
          />
        </div>
        <div className="btn-link">
          <button>Register</button>
          <NavLink to="/" className="register-navlink">
            Login
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Signup;
