import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const todayDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yy = today.getFullYear();

    return `${yy}-${mm}-${dd}`;
  };

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredDate: '',
  //   enteredAmount: ''
  // });

//  const hideFormHandler = () =>{
//   let callBackFalse = false;
//   props.OnhideFormHandler(callBackFalse);
//  }

  const inputChangeHandler = (event) => {
    let date;
    let amount;
    let title;
    if (event.target.type === "date") {
      date = event.target.value;
      // setUserInput( (prevState) => {
      //   return {...prevState, enteredDate: date};
      // })
      setEnteredDate(date);
    } else if (event.target.type === "text") {
      title = event.target.value;
      // setUserInput( (prevState) => {
      //   return {...prevState, enteredTitle: title};
      // })
      setEnteredTitle(title);
    } else if (event.target.type === "number") {
      amount = event.target.value;
      // setUserInput( (prevState) => {
      //   return {...prevState, enteredAmount: amount};
      // })
      setEnteredAmount(amount);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    event.target.reset();
  };

  return (
      <form onSubmit={submitHandler}> 
      <div className="new-expense__controls">
      <div className="new-expense__control">
          <label>Your expense name</label>
          <input
            onChange={inputChangeHandler}
            type="text"
            //value={enteredTitle}
            placeholder="Your expense name"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={inputChangeHandler}
            //value={enteredAmount}
            type="number"
            step="0.5"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            //value={enteredDate}
            onChange={inputChangeHandler}
            type="date"
            min="2019-01-01"
            max={todayDate()}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick = {props.OnhideFormHandler}>Cancel</button>
        <button type="submit">Add new expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;