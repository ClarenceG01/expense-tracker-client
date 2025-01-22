import axios from "axios";

export const checkAuth = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/check-auth`, {
      withCredentials: true, // Ensures cookies are sent with the request
    });
    console.log(response)
    return response.data.authenticated; // Return true if authenticated
  } catch (error) {
    console.log("Auth check failed:", error);
    return false;
  }
};
