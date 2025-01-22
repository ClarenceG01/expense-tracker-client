import React, { useState } from "react";
import Card from "../UI/Card";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LiaEdit } from "react-icons/lia";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Transactions = ({ expenses }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentExpenses = expenses.slice(startIndex, endIndex);
  const previousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const nextPage = () => {
    if (endIndex < expenses.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const renderExpenses = () => {
    return currentExpenses.map((expense, index) => (
      <article
        key={index}
        className="flex flex-row justify-between py-2 border-b border-gray-200"
      >
        <div className="flex flex-col">
          <span className="font-semibold">{expense.title}</span>
          <span className="font-light">{expense.userDate}</span>
        </div>
        <div className="flex flex-col justify-between">
          <span className="font-semibold text-secondary">
            Ksh {expense.amount}
          </span>
          <div className="flex flex-row justify-between items-center">
            <LiaEdit className="text-2xl text-secondary cursor-pointer hover:scale-105 transform transition-transform duration-300 ease-in-out" />
            <RiDeleteBin6Line className="text-xl text-red-600 cursor-pointer hover:scale-105 transform transition-transform duration-300 ease-in-out" />
          </div>
        </div>
      </article>
    ));
  };
  return (
    <Card className="py-4 px-6 w-[100%] bg-white mb-4">
      <h2 className="font-inter font-bold text-black text-xl my-2">
        Recent Transactions
      </h2>
      {renderExpenses()}
      <div className="my-4">
        <div className="flex flex-row justify-between items-center w-1/2 md:w-1/3 mx-auto">
          <button
            className="size-8 bg-gray-100 rounded-full shadow-circleShadow flex flex-row justify-center items-center cursor-pointer"
            onClick={previousPage}
            disabled={currentPage === 0}
          >
            <IoIosArrowRoundBack className="w-7 h-6" />
          </button>
          <div className="size-6 bg-[#43967b] shadow-circleShadow text-white font-ubuntu font-semibold text-2xl flex flex-row justify-center items-center">
            {currentPage + 1}
          </div>
          <button
            className="size-8 bg-gray-100 rounded-full shadow-circleShadow flex flex-row justify-center items-center cursor-pointer"
            onClick={nextPage}
          >
            <IoIosArrowRoundForward className="w-7 h-6" />
          </button>
        </div>
        <Link
          to="/add-transaction"
          className="w-max flex flex-row justify-end cursor-pointer underline underline-offset-1 hover:text-custom-pink-dark"
        >
          Show All
        </Link>
      </div>
    </Card>
  );
};

export default Transactions;
