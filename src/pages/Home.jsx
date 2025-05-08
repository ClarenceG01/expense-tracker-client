import React, { useContext, useEffect } from "react";
import { DashboardContext } from "../context/DashboardContext";
import Transactions from "../components/Transactions";
import TopExpense from "../components/TopExpense";
import TotalExpense from "../components/TotalExpense";
import HomeShimmer from "../components/HomeShimmer";

const Home = () => {
  const { expenses, total, loading, fetchDashboardData } =
    useContext(DashboardContext);
  useEffect(() => {
    console.log("Fetching dashboard data...");
    // write async function to fetch data
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
    <div className="font-poppins py-2 px-4 md:px-16 bg-gray-200 h-max md:h-screen">
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
  );
};

export default Home;
