import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

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
      title: "LED Monitor",
      date: new Date(2022, 4, 15),
      amount: 1200,
    },
    {
      id: "e3",
      title: "Wireless Earbuds",
      date: new Date(2022, 4, 28),
      amount: 1700,
    },
  ];

  const addExpenseDataHandler = (enteredExpenseData) => {
    let expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };

  return (
    <main>
      <div className="app">
        <div className="container">
          <NewExpense onAddExpenseData={addExpenseDataHandler} />
          <Expenses expenseList={expenseList} />
        </div>
      </div>
    </main>
  );
}

export default App;
