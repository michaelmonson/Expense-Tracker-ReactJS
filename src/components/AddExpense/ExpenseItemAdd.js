import React from "react";

import ExpenseItemForm from "./ExpenseItemForm";
import './ExpenseItemAdd.css';

const ExpenseItemAdd = (props) => {
   const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
         ...enteredExpenseData,
         id: crypto.randomUUID().toString()
      };
      //console.log(expenseData);
      props.onAddExpense(expenseData);
   }
   return (
      <div className="new-expense">
         <ExpenseItemForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
   );
};

export default ExpenseItemAdd;