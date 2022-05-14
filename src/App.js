import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const expenseList = [
    {
      id: "e1",
      title: "Books",
      date: new Date(2022, 5, 2),
      amount: 700,
    },
    {
      id: "e2",
      title: "Laptop",
      date: new Date(2022, 5, 8),
      amount: 45000,
    },
    {
      id: "e3",
      title: "LED Monitor",
      date: new Date(2024, 4, 15),
      amount: 1200,
    },
    {
      id: "e4",
      title: "Wireless Earbuds",
      date: new Date(2023, 4, 28),
      amount: 1700,
    },
  ];

  const [expense, setExpense] = useState(expenseList);

  const addExpenseDataHandler = (enteredExpenseData) => {
    setExpense((prevExpense) => {
      return [enteredExpenseData, ...prevExpense];
    });
  };

  return (
    <main>
      <div className="app">
        <div className="container">
          <NewExpense onAddExpenseData={addExpenseDataHandler} />          
          <Expenses expense={expense} />
        </div>
      </div>
    </main>
  );
}

export default App;
