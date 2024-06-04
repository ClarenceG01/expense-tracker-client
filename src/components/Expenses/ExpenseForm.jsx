import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form className="expense-form">
      <div className="expense-form__controls">
        <label htmlFor="expense">Expense:</label>
        <input type="text" name="" id="expense" />
      </div>
      <div className="expense-form__controls">
        <label htmlFor="amount">Amount:</label>
        <input type="number" name="" id="amount" />
      </div>
      <div className="expense-form__controls">
        <label htmlFor="date">Date:</label>
        <input type="date" name="" id="date" />
      </div>
    </form>
  );
};

export default ExpenseForm;
