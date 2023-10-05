import React, { useState } from "react";

import ExpenseItemForm from "./ExpenseItemForm";
import './ExpenseItemAdd.css';

const ExpenseItemAdd = (props) => {

   const [isActive, setIsActive] = useState(false);

   const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
         ...enteredExpenseData,
         id: crypto.randomUUID().toString()
      };
      //console.log(expenseData);
      props.onAddExpense(expenseData);
      setIsActive(false);      
   }

   const initiateExpenseHandler = () => {
      setIsActive(true);
   }

   const cancelExpenseHandler = () => {
      setIsActive(false);
   }

   return (
      <div className="new-expense">
         {/* Cool shorthand for displaying content based on a condition using '&&' logical operator */}
         {!isActive && (
            <button onClick={initiateExpenseHandler}>Add New Expense</button>
         )}
         {isActive && (
            <ExpenseItemForm 
               onSaveExpenseData={saveExpenseDataHandler} 
               onCancel={cancelExpenseHandler}
            />
         )}
      </div>
   );
};

export default ExpenseItemAdd;