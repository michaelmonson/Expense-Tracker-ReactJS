import React from "react";

import ExpenseItemForm from "./ExpenseItemForm";
import './ExpenseItemAdd.css';

const ExpenseItemAdd = () => {
   return (
      <div className="new-expense">
         <ExpenseItemForm />
      </div>
   );
};

export default ExpenseItemAdd;