import React from "react";
import Card from "../UI/Card";

const TopExpense = ({ expenses }) => {
  // sort this array of objects by amount in descending order
  expenses.sort((a, b) => b.amount - a.amount);
  // get the top 5 expenses
  expenses = expenses.slice(0, 5);

  return (
    <Card className=" bg-white py-4 px-6">
      <h2 className="font-inter font-bold text-black text-xl my-2">
        Top Expenses
      </h2>
      <div>
        {expenses.map((expenses) => (
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
        ))}
      </div>
    </Card>
  );
};

export default TopExpense;
