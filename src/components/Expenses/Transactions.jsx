import React from "react";
import Card from "../UI/Card";
import "./Transactions.css";

const Transactions = () => {
  const data = [
    { id: 1, title: "Expense 1", date: new Date(), amount: 10 },
    { id: 2, title: "Expense 2", date: new Date(), amount: 20 },
    { id: 3, title: "Expense 3", date: new Date(), amount: 30 },
  ];
  return (
    <div className="transactions">
      <h2>Recent Transactions</h2>
      <Card className="transactions-list">
        {data.map((x) => (
          <article>
            <div>
              <span>{x.title}</span>
              <span>{x.date.toISOString()}</span>
            </div>
            <div>{x.amount}</div>
          </article>
        ))}
      </Card>
    </div>
  );
};

export default Transactions;
