import { useContext } from "react";
import { MdOutlineLogout } from "react-icons/md";
import { DashboardContext } from "../context/DashboardContext";
import { useNavigate } from "react-router-dom";
import { successToast } from "../utils/successToast";
import { errorToast } from "../utils/errorToast";
const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(DashboardContext);

  async function handleLogout() {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/logout`,
        {
          method: "POST",
          credentials: "include",
        }
      );
      const data = await res.json();
      successToast(data.message);
      setTimeout(() => {
        navigate(data.redirect);
      }, [2000]);
    } catch (error) {
      errorToast("Logout unsuccessful. Try again...");
    }
  }
  return (
    <div className=" flex justify-between items-center px-4 py-1 shadow-circleShadow text-sm">
      <div className="font-inter  text-black   flex flex-col ">
        <span className=" md:text-xl font-semibold"> Welcome👋</span>
        <span className=" font-medium md:text-lg">{user}</span>
      </div>
      <div
        className="cursor-pointer flex flex-col items-center"
        onClick={handleLogout}
      >
        <MdOutlineLogout className="size-6 font-bold hover:scale-105 text-red-500" />
        <span className="font-semibold font-inter md:text-base">Logout</span>
      </div>
    </div>
  );
};

export default Navbar;
