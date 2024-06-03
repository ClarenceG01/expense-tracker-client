import React from "react";
import TotalExpense from "../Expenses/TotalExpense";
import Card from "../UI/Card";
import "./TopSummary.css";
import PieChart from "../Charts/PieChart";

const TopSummary = () => {
  return (
    <Card className="top-summary">
      <TotalExpense />
      <PieChart />
    </Card>
  );
};

export default TopSummary;
