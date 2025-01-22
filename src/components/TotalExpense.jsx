import React, { useState } from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

const TotalExpense = ({ total }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card className="bg-primary py-4 flex flex-col items-center rounded-lg mb-4">
      <div className="text-3xl mb-2">
        <span className="text-white">Total: </span>
        <span className="text-secondary">Ksh {total}</span>
      </div>
      <button
        className="bg-gradient-to-r from-custom-pink-light via-custom-pink to-custom-pink-dark w-40 h-9 text-lg text-white rounded-2xl"
        onClick={() => setIsOpen(true)}
      >
        + Add Expense
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </Card>
  );
};

export default TotalExpense;
