import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, date, amount }) => {
  return (
    <li className="mb-3">
      <div className="expense-item d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <ExpenseDate date={date} />
          <h2 className="expense-item__title ml-md-4 ml-3">{title}</h2>
        </div>
        <h4 className="expense-item__amount">
          <span className="mr-1">&#x20B9;</span>
          {amount}
        </h4>
      </div>
    </li>
  );
};

export default ExpenseItem;
