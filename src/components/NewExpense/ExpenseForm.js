import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // 1. Method
  // // It's a more safe way but this is not very DRY
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // 2. Method
  // // This is more easy way and more DRY
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // 1.Method
    // // With the onChange this function will run for every key stroke it will be pressed
    // // On the event itself it will be a DOM element which in this case is the input, the input has a value attribute which we need
    // console.log("Title changed");
    setEnteredTitle(event.target.value);

    //////////
    // 2-1. Method
    // // If we do not set the enteredAmount and Date aswell in the object those will be lose since react replaces the object with this one
    // setUserInput({
    // // 2-1-2 Method // // BEST use case
    // ...userInput,
    // enteredTitle: event.target.value,
    // // 2-2-1. Method // // Good to know
    // enteredAmount: "",
    // enteredDate: "",
    // });

    // 2-2. Method
    // // Always use this method IF the state is based on the previous state, just like in this example where having an object with 3 properties
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    // 1. Method
    setEnteredAmount(event.target.value);

    // 2-1. Method
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // 2-2. Method
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    // 1. Method
    setEnteredDate(event.target.value);

    // 2-1. Method
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    // 2-2. Method
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // Communication UP
    // // Passing data to the parent through pointing to a function and passing the object as an argument to that function
    props.onSaveExpenseData(expenseData);

    // Two-way Binding (Very useful when using Forms)
    // // We use this so we can clear the inputs when clicking the submit button
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    // We put the onSubmit to the form and not the button. BEST practice when working with forms
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            value={enteredAmount}
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelClick}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
