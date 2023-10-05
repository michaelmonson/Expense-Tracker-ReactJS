import React, { useState } from 'react';

import './ExpenseItemForm.css';

const ExpenseForm = (props) => {
   const [titleValue, setTitleValue] = useState('');
   const [amountValue, setAmountValue] = useState('');
   const [dateValue, setDateValue] = useState('');

   // const titleChangeHandler = (event) => {
   //    //console.log(event.target.value);
   //    setTitleValue(event.target.value);
   // };

   // const amountChangeHandler = (event) => {
   //    setAmountValue(event.target.value);
   // };

   // const dateChangeHandler = (event) => {
   //    setDateValue(event.target.value);
   // };

   const inputChangeHandler = (identifier, value) => {
      if (identifier === 'title') {
         setTitleValue(value);
      } else if (identifier === 'date') {
         setDateValue(value);
      } else {
         setAmountValue(value);
      }
   };

   const submitHandler = (event) => {
      event.preventDefault();

      const expenseData = {
         title: titleValue,
         amount: amountValue,
         date: new Date(dateValue)
      };

      props.onSaveExpenseData(expenseData);

      //Clear Values:
      setTitleValue('');
      setAmountValue('');
      setDateValue('');
   };

   return (
      <form onSubmit={submitHandler}>
         <div className="new-expense__controls">
            <div className="new-expense__control">
               <label>Title</label>
               <input type="text" value={titleValue} 
                  onChange={(event) => inputChangeHandler('title', event.target.value)} />
            </div>
            <div className="new-expense__control">
               <label>Amount</label>
               <input type="number" value={amountValue} min="0.01" step="0.01"
                  onChange={(event) => inputChangeHandler('amount', event.target.value)}
               />
            </div>
            <div className="new-expense__control">
               <label>Date</label>
               <input type="date" value={dateValue} min="2001-01-01" max="2025-12-31"
                  onChange={(event) => inputChangeHandler('date', event.target.value)}
               />
            </div>
            <div className="new-expense__actions">
               <button type="submit">Add Expense</button>
               <button type="button" onClick={props.onCancel}>Cancel</button>
            </div>
         </div>
      </form>
   );
};

export default ExpenseForm;
