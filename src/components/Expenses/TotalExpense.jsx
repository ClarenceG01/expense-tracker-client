import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import "./TotalExpense.css";
import Modal from "../UI/Modal";

const TotalExpense = ({ total }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card className="total-expense">
      <div className="total-expense_div">
        <span className="total-expense_label">Total: </span>
        <span className="total-expense_value">Ksh {total}</span>
      </div>
      <button className="total-expense_btn" onClick={() => setIsOpen(true)}>
        + Add Expense
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </Card>
  );
};

export default TotalExpense;
