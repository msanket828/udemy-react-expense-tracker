import { useState } from "react";

const NewExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const handleExpenseSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div className="new-expenseform">
      <form onSubmit={handleExpenseSubmit}>
        <div className="new-expenseform__container mb-4">
          <div className="form-group">
            <label className="text-white">Title</label>
            <input
              onChange={titleChangeHandler}
              type="text"
              className="form-control"
              placeholder="New Expense Name"
              value={enteredTitle}
            />
          </div>
          <div className="form-group">
            <label className="text-white">Expense Amount</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Amount"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className="form-group">
            <label className="text-white">Purchase Date</label>
            <input
              type="date"
              className="form-control"
              min="2022-01-01"
              max="2025-12-12"
              placeholder="Date"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>
        </div>
        <button
          className="btn btn-danger mr-3"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Add Expense Item
        </button>
      </form>
    </div>
  );
};

export default NewExpenseForm;
