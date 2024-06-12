import { decodeToken } from "react-jwt";

export const checkAuth = () => {
  const token = document.cookie.split("=")[1];
  console.log(token);
  if (!token) {
    console.log("No token found");
    return false;
  } else {
    console.log("Token found");
    return true;
  }
};
