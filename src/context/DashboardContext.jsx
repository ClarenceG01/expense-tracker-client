import React, { createContext, useState } from "react";
import axios from "axios";
import { errorToast } from "../utils/errorToast";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(null);
  const [topExpenses, setTopExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const addExpense = async (newExpense) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/expense`,
        newExpense,
        { withCredentials: true }
      );
      if (response.status === 200) {
        // Add the new expense to the existing state
        setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);

        // Update the total expense locally
        setTotal((prevTotal) => prevTotal + Number(newExpense.amount));
        return response;
      }
    } catch (err) {
      return errorToast("Error adding expense");
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
      setUser(response.data.username);
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        expenses,
        total,
        topExpenses,
        user,
        loading,
        error,
        setExpenses,
        addExpense,
        fetchDashboardData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
