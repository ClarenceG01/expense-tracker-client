import React from "react";
import Transactions from "../Expenses/Transactions";
import TopExpense from "../Expenses/TopExpense";
import "./RecentTransactions.css";

const RecentTransactions = () => {
  return (
    <div className="recent-transaction">
      <Transactions />
      <TopExpense />
    </div>
  );
};

export default RecentTransactions;
