import React from "react";
import Card from "../UI/Card";
import "./Transactions.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LiaEdit } from "react-icons/lia";

const Transactions = () => {
  const data = [
    { id: 1, title: "Expense 1", date: "March 20, 2024", amount: 10 },
    { id: 2, title: "Expense 2", date: "March 20, 2024", amount: 20 },
    { id: 3, title: "Expense 3", date: "March 20, 2024", amount: 30 },
  ];
  return (
    <div className="transactions">
      <h2>Recent Transactions</h2>
      <Card className="transactions-list">
        {data.map((x) => (
          <article>
            <div>
              <span>{x.title}</span>
              <span>{x.date.toLocaleString()}</span>
            </div>
            <div>
              <span>Ksh {x.amount}</span>
              <LiaEdit className="edit icon" />
              <RiDeleteBin6Line className="delete icon" />
            </div>
          </article>
        ))}
      </Card>
    </div>
  );
};

export default Transactions;
