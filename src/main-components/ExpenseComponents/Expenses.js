import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../StylingComponents/Card";

let Expenses = (props) => {
  let [selectedYear, getThisYear] = useState(`${new Date().getFullYear()}`);

  let showSelectedYear = (year) => {
    getThisYear(year);
    return year;
  };

  const filteredExpensesList = props.item.filter((expense) => {
    return expense.date.getFullYear() == selectedYear;
  });

  let expensesContainer = <p className="expenses_abcense">No expenses found!</p>;

  if (filteredExpensesList.length > 0) {
    expensesContainer = filteredExpensesList.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card>
        <ExpenseFilter
          selected={selectedYear}
          onSelectingYear={showSelectedYear}
        ></ExpenseFilter>
        {expensesContainer}
      </Card>
    </div>
  );
};

export default Expenses;
