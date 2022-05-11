import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";

const Expenses = ({ title, date, amount }) => {
  return (
    <div className="expense-item-container">
      <ExpenseItem title={title} date={date} amount={amount} />
    </div>
  );
};

export default Expenses;
