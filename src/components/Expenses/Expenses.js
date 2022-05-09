import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenseList }) => {
  return (
    <div className="expense-item-container">
      {expenseList.map((el) => {
        return (
          <ExpenseItem
            key={el.id}
            title={el.title}
            date={el.date}
            amount={el.amount}
          />
        );
      })}
    </div>
  );
};

export default Expenses;
