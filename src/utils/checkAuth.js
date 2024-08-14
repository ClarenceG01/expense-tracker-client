export const checkAuth = () => {
  const token = document.cookie.split("=")[1];
  if (!token) {
    return false;
  } else {
    return true;
  }
};
