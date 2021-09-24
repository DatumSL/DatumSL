import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    let [chosenOption, layOutForm] = useState(false);

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseDate = enteredExpenseData;
        props.onAddNewExpense(expenseDate);
        hideForm(false);
    }

    let hideForm = () => {
        layOutForm(false);
    }

    let ExpenseFormLayout = <button onClick = {() => layOutForm(chosenOption = true)}>Add new expense</button>;

    if (chosenOption == true) {
        ExpenseFormLayout = <ExpenseForm OnhideFormHandler={hideForm} onSaveExpenseData={SaveExpenseDataHandler} />;
    }
    return <div className="new-expense">
        {ExpenseFormLayout}
    </div>
}

export default NewExpense;