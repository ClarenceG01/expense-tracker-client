// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import "./login.css";
// import axios from "axios";
// import { GoEye, GoEyeClosed } from "react-icons/go";

// const baseUrl = "https://expense-tracker-server-xdkv.onrender.com";
// const Login = () => {
//   const navigate = useNavigate();
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//   });
//   const [visible, setVisible] = useState(false);
//   const changeHandler = (e) => {
//     setCredentials((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   const submitHandler = async (e) => {
//     e.preventDefault();
//     await axios
//       .post(`${baseUrl}/login`, credentials, { withCredentials: true })
//       .then((res) => {
//         if (res.status === 200) {
//           navigate("/home");
//         }
//       })
//       .catch((err) => console.log(err))
//       .finally(() => console.log("loading done"));
//   };
//   return (
//     <div className="login">
//       <h2>Expensify</h2>
//       <form className="login-form" onSubmit={submitHandler}>
//         <div className="login-form__controlls">
//           <label htmlFor="username">Email:</label>
//           <input
//             type="text"
//             name="email"
//             id="username"
//             value={credentials.email}
//             onChange={changeHandler}
//           />
//         </div>
//         <div className="login-form__controlls pwd-control">
//           <label htmlFor="password">Password:</label>
//           <input
//             type={visible ? "text" : "password"}
//             name="password"
//             id="password"
//             value={credentials.password}
//             onChange={changeHandler}
//           />
//           {visible ? (
//             <GoEye className="eye-icon" onClick={() => setVisible(!visible)} />
//           ) : (
//             <GoEyeClosed
//               className="eye-icon"
//               onClick={() => setVisible(!visible)}
//             />
//           )}
//         </div>
//         <div className="btn-link">
//           <button>Login</button>
//           <NavLink to="/register" className="register-navlink">
//             Register
//           </NavLink>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoEye, GoEyeClosed } from "react-icons/go";
import "./login.css";

const baseUrl = "https://expense-tracker-server-xdkv.onrender.com";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
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
      const res = await axios.post(`${baseUrl}/login`, credentials, {
        withCredentials: true,
      });
      if (res.status === 200) {
        console.log("Login successful, navigating to /home");
        navigate("/home");
      } else {
        console.error("Unexpected response status:", res.status);
      }
    } catch (err) {
      console.error("Login error:", err);
    } finally {
      console.log("Loading done");
    }
  };

  return (
    <div className="login">
      <h2>Expensify</h2>
      <form className="login-form" onSubmit={submitHandler}>
        <div className="login-form__controls">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={credentials.email}
            onChange={changeHandler}
          />
        </div>
        <div className="login-form__controls pwd-control">
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
          <button type="submit">Login</button>
          <NavLink to="/register" className="register-navlink">
            Register
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
