import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpensesList = ({ expenseList }) => {
  if (expenseList.length === 0) {
    return (
      <div className="text-left text-white">
        <p className="h2">No Item Found</p>
      </div>
    );
  }
  return (
    <ul className="list-unstyled">
      {expenseList.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          date={el.date}
          amount={el.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
