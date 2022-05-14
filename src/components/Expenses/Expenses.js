import { useState } from "react";
import ExpenseChart from "../ExpenseChart/ExpenseChart";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import "./Expenses.css";

const Expenses = ({ expense }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const onSaveFilterByYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const newExpenseList = expense.filter(
    (el) => el.date.getFullYear().toString() === filteredYear
  );

  return (
    <div className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onFilterByYear={onSaveFilterByYear}
      />
      <ExpenseChart expenses={newExpenseList}/>
      <ExpensesList expenseList={newExpenseList} />
    </div>
  );
};

export default Expenses;
