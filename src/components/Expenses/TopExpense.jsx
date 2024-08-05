import React from "react";
import "./TopExpenses.css";
import Card from "../UI/Card";

const TopExpense = ({ expenses }) => {
  return (
    <div className="top-expense">
      <h2>Top Expenses</h2>
      <Card className="top-expense-list">
        {expenses.map((expenses) => (
          <div className="expense-div" key={expenses._id}>
            <p>{expenses.title}</p>
            <p>Ksh:{expenses.amount}</p>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default TopExpense;
