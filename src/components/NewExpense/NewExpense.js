import React ,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setEdit(false);
  };

  const [edit,setEdit]=useState(false);
  const editHandler=()=>{
    setEdit(true);
  };
  const cancelHandler=()=>{
    setEdit(false);
  };
  return (
    <div className="new-expense">
      {!edit && <button onClick={editHandler}>Add New Expense</button>}
      {edit && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler}/>}
    </div>
  );
};

export default NewExpense;
