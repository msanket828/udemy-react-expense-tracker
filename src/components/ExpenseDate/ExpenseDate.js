import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
  let month = date.toLocaleString("en-US", { month: "long" });
  let day = date.toLocaleString("en-US", { day: "2-digit" });
  let year = date.getFullYear();
  return (
    <div className="expensedate text-center">
      <div className="expensedate_month">{month}</div>
      <div className="expensedate_year mb-2">{year}</div>
      <div className="expensedate_day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
