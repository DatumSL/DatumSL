import React from 'react';
import ExpenseItem from "./main-components/ExpenseComponents/ExpenseItem";
import Card from "./main-components/StylingComponents/Card";

function App() {
  const expenses = [
    { id: 1, title: "Car", amount: 245, date: new Date(2021, 5, 11) },
    { id: 2, title: "TV", amount: 500, date: new Date(2021, 2, 7) },
    { id: 3, title: "Food", amount: 120, date: new Date(2020, 9, 2) },
  ];

  return (
    <Card className="expenses-wrapper">
      <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount}></ExpenseItem>
    </Card>
  );
}

export default App;
