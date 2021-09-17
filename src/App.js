import React, { useState } from "react";
import Expenses from "./main-components/ExpenseComponents/Expenses";
import NewExpense from "./main-components/NewExpense/NewExpense";
import ExpenseFilter from "./main-components/ExpenseComponents/ExpenseFilter";

function App() {
  const dummy_expenses = [
    { id: 1, title: "Car", amount: 245, date: new Date(2021, 5, 11) },
    { id: 2, title: "TV", amount: 500, date: new Date(2021, 2, 7) },
    { id: 3, title: "Food", amount: 120, date: new Date(2020, 9, 2) },
  ];

  const [expenses, setNewExpenses] = useState(dummy_expenses);

  const AddNewExpenseHandler = (expense) => {
    expense.id = dummy_expenses.length + 1;
    setNewExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <div>
      <NewExpense onAddNewExpense={AddNewExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
