import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [toggle, setToggle] = useState(true); // Toggle functionality
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);

    props.onSaveExpenseData(expenseData);
    toggleForm();
  };

  // Toggle Logic
  const toggleForm = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  if (toggle) {
    return (
      <div className="new-expense">
        <button onClick={toggleForm}>Add new Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClick={toggleForm} />
    </div>
  );
};

export default NewExpense;
