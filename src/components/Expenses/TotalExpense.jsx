import React from "react";
import Card from "../UI/Card";
import "./TotalExpense.css";

const TotalExpense = () => {
  return (
    <Card className="total-expense">
      <div className="total-expense_div">
        <span className="total-expense_label">Total: </span>
        <span className="total-expense_value">Ksh 3000</span>
      </div>
      <button className="total-expense_btn">+ Add Expense</button>
    </Card>
  );
};

export default TotalExpense;
