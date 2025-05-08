import axios from "axios";

export const checkAuth = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/check-auth`,
      { withCredentials: true }
    );
    console.log("Auth response:", response.data);
    return response.data.authenticated;
  } catch (error) {
    console.error("Auth check failed:", error);
    return false;
  }
};
