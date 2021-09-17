import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../StylingComponents/Card";

let Expenses = (props) => {
    let [selectedYear, getThisYear] = useState(`${new Date().getFullYear()}`);
    let showSelectedYear = (year) => {
      getThisYear(year);
    }

  return (
    <div>
      <Card>
        <ExpenseFilter
          selected={selectedYear}
          onSelectingYear={showSelectedYear}
        ></ExpenseFilter>
        {props.item.map((expense) => (
          <ExpenseItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
