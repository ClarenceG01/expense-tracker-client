import React, { useState } from "react";
import "./ExpenseForm.css";
import { successToast } from "../../utils/successToast";
import axios from "axios";

const ExpenseForm = ({ setIsOpen }) => {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    userDate: "",
    notes: "",
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
    const date = new Date(expense.userDate).toLocaleDateString("en-Us", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
    const newExpense = {
      title: expense.title,
      amount: expense.amount,
      userDate: date,
      notes: expense.notes,
    };
    axios
      .post(`${import.meta.env.VITE_REACT_APP_BASE_URL}/expense`, newExpense, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 200) {
          successToast("Expense added successfully");
        }
      })
      .catch((error) => console.log(error));
    setIsOpen(false);
  };
  const isValid =
    expense.title !== "" && expense.amount !== "" && expense.date !== "";
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
          name="userDate"
          id="date"
          value={expense.userDate}
          onChange={handleChange}
        />
      </div>
      <div className="expense-form__controls">
        <label htmlFor="notes">Notes:</label>
        <textarea
          name="notes"
          id="notes"
          value={expense.notes}
          onChange={handleChange}
          cols="30"
          rows="5"
        />
      </div>
      <div className="actionsContainer">
        <button className="cancelBtn" onClick={() => setIsOpen(false)}>
          Cancel
        </button>
        <button
          className={isValid ? "addBtn" : "disabled"}
          type="submit"
          disabled={!isValid}
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
