import React from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import ExpenseForm from "../components/ExpenseForm";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="text-center font-inter font-bold text-black text-xl my-2">
              Add Expense
            </h5>
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
