import React, { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import Transactions from "../components/Transactions";
import TopExpense from "../components/TopExpense";
import TotalExpense from "../components/TotalExpense";

const Home = () => {
  const { expenses, total, loading, error } = useContext(DashboardContext);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="font-poppins py-2 px-4 md:px-16 bg-gray-200 h-max md:h-screen">
      {loading ? (
        <p>Loading...</p>
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
