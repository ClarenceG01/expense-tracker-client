import React, { useState } from "react";
import Card from "../UI/Card";
import "./Transactions.css";
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
    return currentExpenses.map((expense) => (
      <article key={expense.id}>
        <div>
          <span>{expense.title}</span>
          <span>{expense.date.toLocaleString()}</span>
        </div>
        <div>
          <span>Ksh {expense.amount}</span>
          <LiaEdit className="edit icon" />
          <RiDeleteBin6Line className="delete icon" />
        </div>
      </article>
    ));
  };
  return (
    <div className="transactions">
      <h2>Recent Transactions</h2>
      <Card className="transactions-list">
        {renderExpenses()}
        <div className="pagination-and-link">
          <div className="pagination">
            <button
              className="arrow-div"
              onClick={previousPage}
              disabled={currentPage === 0}
            >
              <IoIosArrowRoundBack className="arrow-icon" />
            </button>
            <div className="number-div">{currentPage + 1}</div>
            <button className="arrow-div" onClick={nextPage}>
              <IoIosArrowRoundForward className="arrow-icon" />
            </button>
          </div>
          <Link to="/add-transaction" className="all-transactions">
            Show All
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Transactions;
