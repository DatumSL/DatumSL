import React, { useState } from "react";
import './ExpenseFilter.css'
import Card from "../StylingComponents/Card";

const ExpenseFilter = (props) => {
  const filterChangeHandler = (event) => {
    const yearData = event.target.value;
    props.onSelectingYear(yearData);
}

    return (
      <div className="expense-filter"  >
        <Card className="expense-filter__control">
        <label>Filter by year</label>
          <select value={props.selected} onChange={filterChangeHandler}>
            <option value={new Date().getFullYear()}>{new Date().getFullYear()}</option>
            <option value={new Date().getFullYear() - 1}>{new Date().getFullYear() - 1}</option>
            <option value={new Date().getFullYear() - 2}>{new Date().getFullYear() - 2}</option>
            <option value={new Date().getFullYear() - 3}>{new Date().getFullYear() - 3}</option>
          </select>
        </Card>
      </div>
    );
  };


export default ExpenseFilter;

{/* <option value={new Date().getFullYear()}></option>
<option value={new Date().getFullYear() - 1}></option>
<option value={new Date().getFullYear() - 2}></option>
<option value={new Date().getFullYear() - 3}></option> */}