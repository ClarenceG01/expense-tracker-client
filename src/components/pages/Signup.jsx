import React from "react";
import "./signup.css";
import { NavLink } from "react-router-dom";
const Signup = () => {
  return (
    <div className="signup">
      <h2>Expensify</h2>
      <form className="signup-form">
        <div className="signup-form__controlls">
          <label htmlFor="username">Username:</label>
          <input type="text" name="" id="username" />
        </div>
        <div className="signup-form__controlls">
          <label htmlFor="password">Password:</label>
          <input type="password" name="" id="password" />
        </div>
        <div className="signup-form__controlls">
          <label htmlFor="cpassword">Confirm password:</label>
          <input type="password" name="" id="cpassword" />
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
