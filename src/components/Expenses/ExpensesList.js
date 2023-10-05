import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
   //Check for content for current filter:
   if (props.filteredItems.length === 0) {
      return <h2 className="expenses-list__fallback">No expenses were found.</h2>;
   }

   return (
      <ul className="expenses-list">
         {/* ReactJS is capable of rendering an array of objects.  That is what we will do here!
          * Below we are mapping an array of objects into an array of <ExpenseItem /> components.
          * This works because React knows how to render an array of JSX elements in this manner:
          *    { [<Card />, <Card />, <Card />] }
          */}
         {props.filteredItems.map((expense) => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
         ))}
      </ul>
   );
};

export default ExpensesList;
