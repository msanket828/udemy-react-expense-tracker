import { useState } from "react";
import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";

const NewExpense = ({ onAddExpenseData }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    let expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpenseData(expenseData);
    setIsFormShow(false);
  };

  const [isFormShow, setIsFormShow] = useState(false);

  const handleAddNewExpense = () => {
    setIsFormShow(true);
  };
  const hideHaNewExpenseForm = () => {
    setIsFormShow(false);
  };

  return (
    <div className="new-expense bg-secondary p-3 mb-4 rounded">
      {isFormShow ? (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideHaNewExpenseForm}
        />
      ) : (
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddNewExpense}
          >
            Add New Expense
          </button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
