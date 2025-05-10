import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import { LiaEdit } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
const AllExpenses = () => {
  const { expenses } = useContext(DashboardContext);
  console.log("All expenses:", expenses);
  return (
    <div className="">
      {expenses.map((expense, index) => (
        <article
          key={index}
          className="flex flex-row justify-between px-3 mt-5 border-b border-gray-200"
        >
          <div className="flex flex-col">
            <span className="font-semibold">{expense.title}</span>
            <span className="font-light">{expense.userDate}</span>
          </div>
          <div className="flex flex-col justify-between w-24">
            <span className="font-semibold text-secondary text-lg">
              Ksh {expense.amount}
            </span>
            <div className="flex flex-row justify-between items-center">
              <LiaEdit className="text-2xl text-secondary cursor-pointer hover:scale-105 duration-200" />
              <RiDeleteBin6Line className="text-xl text-red-600 cursor-pointer hover:scale-105 duration-200" />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
export default AllExpenses;
