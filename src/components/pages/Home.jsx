import React, { useEffect, useState } from "react";
import { checkAuth } from "../../utils/checkAuth";
import Transactions from "../Expenses/Transactions";
import TopExpense from "../Expenses/TopExpense";
import TotalExpense from "../Expenses/TotalExpense";
import Card from "../UI/Card";
import baseUrl from "../../utils/baseUrl";
import axios from "axios";

const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(null);
  const [topExpenses, setTopExpenses] = useState([]);
  checkAuth();
  const fetchExpenses = async () => {
    await axios
      .get(`${baseUrl()}/expense`, { withCredentials: true })
      .then((res) => setExpenses(res.data.recentExpenses))
      .catch((error) => console.log(error));
  };
  const fetchTotalExpense = async () => {
    await axios
      .get(`${baseUrl()}/total`, { withCredentials: true })
      .then((res) => {
        setTotal(res.data.total);
      })
      .catch((error) => console.log(error));
  };
  const getTopExpenses = async () => {
    try {
      const results = await axios.get(`${baseUrl()}/top`, {
        withCredentials: true,
      });
      setTopExpenses(results.data.topExpenses);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchExpenses();
    fetchTotalExpense();
    getTopExpenses();
  }, [expenses]);
  return (
    <div className="app">
      <h1>Expensify</h1>
      <Card className="top-summary">
        <TotalExpense
          total={total}
          setTotal={setTotal}
          setExpenses={setExpenses}
        />
      </Card>
      <div className="recent-transaction">
        <Transactions expenses={expenses} />
        <TopExpense expenses={topExpenses} />
      </div>
    </div>
  );
};

export default Home;
