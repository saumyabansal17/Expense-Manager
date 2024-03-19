import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  //   const [userInput, setuserInput] = useState({
  //     enteredTitle: "",
  //     enteredDate: "",
  //     enteredAmount: "",
  //   });

  const titleChangehandler = (event) => {
    setenteredTitle(event.target.value);
    // setuserInput ({
    //      ...userInput, enteredTitle: event.target.value
    //   });
    //setuserInput = (prevState) => {
    //return { ...prevState, enteredTitle: event.target.value };
    //};
  };

  const amountChangehandler = (event) => {
    setenteredAmount(event.target.value);
  };

  const dateChangehandler = (event) => {
    setenteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(enteredData);
    setenteredAmount("");
    setenteredTitle("");
    setenteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019/01/01"
            max="2022/12/31"
            value={enteredDate}
            onChange={dateChangehandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
