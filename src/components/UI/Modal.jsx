import React from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import ExpenseForm from "../Expenses/ExpenseForm";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Add Expense</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine />
          </button>
          <ExpenseForm setIsOpen={setIsOpen} />
        </div>
      </div>
    </>
  );
};

export default Modal;
