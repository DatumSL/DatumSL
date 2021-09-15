import React, { useState } from 'react';
import "./Styles/ExpenseItem.css";
import ExpenseDate from './ExpenseDates';

let ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

  let ChangeItemTitle = () => {
    const newName = prompt('Set name for your title');
    setTitle(newName);
  }

  return (
    <div className="expense-item">
     <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2 onDoubleClick={ChangeItemTitle}>{title}</h2>
      </div>
      <div className="expense-item__price">
        <p>{props.amount}$</p>
      </div>
    </div>
  );
};

export default ExpenseItem;
