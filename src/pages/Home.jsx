import { useContext, useEffect } from "react";
import { DashboardContext } from "../context/DashboardContext";
import Transactions from "../components/Transactions";
import TopExpense from "../components/TopExpense";
import TotalExpense from "../components/TotalExpense";
import HomeShimmer from "../components/HomeShimmer";
import { MdOutlineLogout } from "react-icons/md";
import { successToast } from "../utils/successToast";
import { useNavigate } from "react-router-dom";
import { errorToast } from "../utils/errorToast";

const Home = () => {
  const navigate = useNavigate();
  const { expenses, total, user, loading, fetchDashboardData } =
    useContext(DashboardContext);

  async function handleLogout() {
    try {
      const res = await fetch("/logout", {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      successToast(data.message);
      setTimeout(() => {
        navigate(data.redirect);
      }, [2000]);
    } catch (error) {
      errorToast("Logout unsuccessful. Try again...");
    }
  }
  useEffect(() => {
    async function fetchData() {
      try {
        await fetchDashboardData();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <div className=" flex justify-between items-center px-4 py-1">
        <div className="font-inter  text-black   flex flex-col">
          <span className="text-xl font-semibold"> Welcome👋</span>
          <span className=" font-medium text-md">{user}</span>
        </div>
        <div
          className="cursor-pointer flex flex-col items-center"
          onClick={handleLogout}
        >
          <MdOutlineLogout className="size-6 font-bold hover:scale-105 text-red-500" />
          <span className="font-semibold font-inter">Logout</span>
        </div>
      </div>
      <div className="font-poppins py-2 px-4 md:px-16 bg-primary h-max md:h-screen">
        {loading ? (
          <HomeShimmer />
        ) : (
          <div>
            <TotalExpense total={total} />
            <div className="flex flex-col md:flex-row md:justify-between gap-8">
              <Transactions expenses={expenses} />
              <TopExpense expenses={expenses} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
