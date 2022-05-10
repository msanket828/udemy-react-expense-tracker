import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";

const NewExpense = ({ onAddExpenseData }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    let expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpenseData(expenseData);
  };
  return (
    <div className="new-expense bg-secondary p-3 mb-4 rounded">
      <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
