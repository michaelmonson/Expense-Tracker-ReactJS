import React, { useState } from 'react';

import './ExpenseItemForm.css';

const ExpenseForm = () => {
   const [updatedTitle, setUpdatedTitle] = useState('');
   const [updatedAmount, setUpdatedAmount] = useState('');
   const [updatedDate, setUpdatedDate] = useState('');

   // const titleChangeHandler = (event) => {
   //    //console.log(event.target.value);
   //    setUpdatedTitle(event.target.value);
   // };

   // const amountChangeHandler = (event) => {
   //    setUpdatedAmount(event.target.value);
   // };

   // const dateChangeHandler = (event) => {
   //    setUpdatedDate(event.target.value);
   // };

   const inputChangeHandler = (identifier, value) => {
      if (identifier === 'title') {
         setUpdatedTitle(value);
      } else if (identifier === 'date') {
         setUpdatedDate(value);
      } else {
         setUpdatedAmount(value);
      }
   };

   return (
      <form>
         <div className="new-expense__controls">
            <div className="new-expense__control">
               <label>Title</label>
               <input type="text" onChange={(event) => inputChangeHandler('title', event.target.value)} />
            </div>
            <div className="new-expense__control">
               <label>Amount</label>
               <input
                  type="number"
                  min="0.01"
                  step="0.01"
                  onChange={(event) => inputChangeHandler('amount', event.target.value)}
               />
            </div>
            <div className="new-expense__control">
               <label>Date</label>
               <input
                  type="date"
                  min="2001-01-01"
                  max="2025-12-31"
                  onChange={(event) => inputChangeHandler('date', event.target.value)}
               />
            </div>
            <div className="new-expense__actions">
               <button type="submit">Add Expense</button>
            </div>
         </div>
      </form>
   );
};

export default ExpenseForm;
