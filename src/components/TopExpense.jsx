import React from "react";
import Card from "../UI/Card";

const renderExpenses = (expenses) => {
  if (expenses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-32">
        <h2 className="text-gray-500 text-lg">No recent Expense available</h2>
      </div>
    );
  }
  return expenses.map((expenses) => (
    <div
      className="mb-4 flex flex-row justify-between py-4 border-gray-200 border-b"
      key={expenses._id}
    >
      <p>{expenses.title}</p>
      <p>
        <span className="text-gray-600 mr-2">Ksh</span>
        {expenses.amount}
      </p>
    </div>
  ));
};
const TopExpense = ({ expenses }) => {
  expenses.sort((a, b) => b.amount - a.amount);
  expenses = expenses.slice(0, 5);

  return (
    <Card className=" bg-white py-4 px-6 md:w-1/2">
      <h2 className="font-inter font-bold text-black text-xl my-2">
        Top Expenses
      </h2>
      <div>{renderExpenses(expenses)}</div>
    </Card>
  );
};

export default TopExpense;
