import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import "./TotalExpense.css";
import Modal from "../UI/Modal";
import baseUrl from "../../utils/baseUrl";
import axios from "axios";

const TotalExpense = ({ onAddExpenseHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(null);
  const getTotalExpense = () => {
    axios
      .get(`${baseUrl()}/total`, { withCredentials: true })
      .then((res) => setTotal(res.data.total))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getTotalExpense();
  }, []);
  return (
    <Card className="total-expense">
      <div className="total-expense_div">
        <span className="total-expense_label">Total: </span>
        <span className="total-expense_value">Ksh {total}</span>
      </div>
      <button className="total-expense_btn" onClick={() => setIsOpen(true)}>
        + Add Expense
      </button>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          onAddExpenseHandler={onAddExpenseHandler}
        />
      )}
    </Card>
  );
};

export default TotalExpense;
