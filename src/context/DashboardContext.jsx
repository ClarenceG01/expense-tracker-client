import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(null);
  const [topExpenses, setTopExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addExpense = async (newExpense) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/expense`,
        newExpense,
        { withCredentials: true }
      );
      if (response.status === 200) {
        // Add the new expense to the existing state
        console.log(newExpense);
        setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);

        // Update the total expense locally
        setTotal((prevTotal) => prevTotal + Number(newExpense.amount));
      }
    } catch (err) {
      console.error("Error adding expense:", err);
    }
  };

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/dashboard`,
        { withCredentials: true }
      );
      setExpenses(response.data.recentExpenses);
      setTotal(response.data.total);
      setTopExpenses(response.data.topExpenses);
    } catch (err) {
      setError(err || "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        expenses,
        total,
        topExpenses,
        loading,
        error,
        setExpenses,
        fetchDashboardData,
        addExpense,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
