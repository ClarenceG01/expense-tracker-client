import React, { useState } from "react";
import "./ExpenseForm.css";
import { successToast } from "../../utils/successToast";

const ExpenseForm = ({ onAddExpenseHandler, setIsOpen }) => {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitExpense = (e) => {
    e.preventDefault();
    onAddExpenseHandler({
      ...expense,
      date: new Date(expense.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    });
    setExpense({
      title: "",
      amount: "",
      date: "",
    });
    setIsOpen(false);
    successToast("Expense added successfully");
  };
  return (
    <form className="expense-form" onSubmit={submitExpense}>
      <div className="expense-form__controls">
        <label htmlFor="expense">Expense:</label>
        <input
          type="text"
          name="title"
          id="expense"
          value={expense.title}
          onChange={handleChange}
        />
      </div>
      <div className="expense-form__controls">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={expense.amount}
          onChange={handleChange}
        />
      </div>
      <div className="expense-form__controls">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          id="date"
          value={expense.date}
          onChange={handleChange}
        />
      </div>
      <div className="actionsContainer">
        <button className="cancelBtn" onClick={() => setIsOpen(false)}>
          Cancel
        </button>
        <button className="addBtn" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
