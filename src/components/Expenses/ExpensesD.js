import React, { useState } from "react";
import "./ExpensesD.css";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import ExpenseDFilter from "./ExpenseDFilter";
import Card from "../UI/Card";

const ExpensesD = (props) => {
  const [filteredYear, setFilteredyear] = useState("2020");
  const saveFilterHandler = (selectedYear) => {
    setFilteredyear(selectedYear);
    console.log(selectedYear);
  };
  const filterExpense = props.item.filter(
    (items) => items.date.getFullYear().toString() === filteredYear
  );
  
  return (
    <div>
      <Card className="expensesD">
        <ExpenseDFilter
          selected={filteredYear}
          onSaveFilter={saveFilterHandler}
        />
        <ExpensesChart expenses={filterExpense}/>
        <ExpenseList items={filterExpense} />
      </Card>
    </div>
  );
};

export default ExpensesD;
