import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseDate = enteredExpenseData;
        props.onAddNewExpense(expenseDate);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>
}

export default NewExpense;