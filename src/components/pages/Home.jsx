import React, { useEffect, useState } from "react";
import { checkAuth } from "../../utils/checkAuth";
import Transactions from "../Expenses/Transactions";
import TopExpense from "../Expenses/TopExpense";
import TotalExpense from "../Expenses/TotalExpense";
import PieChart from "../Charts/PieChart";
import Card from "../UI/Card";
import baseUrl from "../../utils/baseUrl";
import axios from "axios";
const Home = () => {
  checkAuth();
  const [expenses, setExpenses] = useState([
    { id: 1, title: "Expense 1", date: "March 20, 2024", amount: 10 },
    { id: 2, title: "Expense 2", date: "March 20, 2024", amount: 20 },
    { id: 3, title: "Expense 3", date: "March 20, 2024", amount: 30 },
    { id: 4, title: "Expense 4", date: "March 21, 2024", amount: 15 },
    { id: 5, title: "Expense 5", date: "March 21, 2024", amount: 25 },
    { id: 6, title: "Expense 6", date: "March 22, 2024", amount: 12 },
    { id: 7, title: "Expense 7", date: "March 22, 2024", amount: 18 },
    { id: 8, title: "Expense 8", date: "March 22, 2024", amount: 22 },
    { id: 9, title: "Expense 9", date: "March 23, 2024", amount: 35 },
    { id: 10, title: "Expense 10", date: "March 23, 2024", amount: 40 },
  ]);
  const addExpense = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };
  const fetchExpenses = async () => {
    await axios
      .get(`${baseUrl()}/expense`, { withCredentials: true })
      .then((res) => setExpenses(res.data.recentExpenses))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchExpenses();
  }, []);
  return (
    <div className="app">
      <h1>Expensify</h1>
      <Card className="top-summary">
        <TotalExpense onAddExpenseHandler={addExpense} />
        <PieChart />
      </Card>
      <div className="recent-transaction">
        <Transactions expenses={expenses} />
        <TopExpense />
      </div>
    </div>
  );
};

export default Home;
