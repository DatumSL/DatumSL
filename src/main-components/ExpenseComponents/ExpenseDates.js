import React from 'react'; 
import './Styles/ExpenseDate.css';

let ExpenseDate = (props) => {
const Expensemonth = props.date.toLocaleString('en-us', { month: 'long' });
const ExpenseDay = props.date.toLocaleString('en-us', { day: '2-digit' });
const ExpenseYear = props.date.toLocaleString('en-us', { year: 'numeric' });

return  (
<div className="expense-date">
<p className="expense-date__month">{Expensemonth}</p>
<p className="expense-date__day">{ExpenseDay}</p>
<p className="expense-date__year">{ExpenseYear}</p>
</div>
)
}

export default ExpenseDate;