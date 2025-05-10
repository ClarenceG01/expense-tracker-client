import axios from "axios";

export const checkAuth = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/check-auth`,
      { withCredentials: true }
    );

    return response.data.authenticated;
  } catch (error) {
    return false;
  }
};
