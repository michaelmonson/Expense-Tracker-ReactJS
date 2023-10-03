import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../Card';
import './ExpensesDisplay.css';
import ExpensesFilter from './ExpensesFilter';
import './ExpensesFilter.css';

function ExpensesDisplay(props) {
   const [filteredYear, setFilteredYear] = useState('2023');  { /* Initiate default year */}

   const filterChangeHandler = (selectedYear) => {
      console.log('Expense.js : ' + selectedYear);
      setFilteredYear(selectedYear);
   };

   { /* Filter the full Expenses Array by creating a new array with a subset (some items excluded) 
      * We do NOT want to affect our original expenses array.  Should not be a destructuve filter.
      * Simply transform a copy of it for displaying to the user... no need to over-think it! 
      */ }
   const filteredExpenses = props.expenseList.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
   })

   return (
      <div>
         <Card className="expenses">
            
            {/* Pass in 'filteredYear' as selected: An example of React's 'two-way' binding */}
            <ExpensesFilter 
               selected={filteredYear} 
               onChangeFilter={filterChangeHandler} 
            />
            
            { /* ReactJS is capable of rendering an array of objects.  That is what we will do here!
               * Below we are mapping an array of objects into an array of <ExpenseItem /> components.
               * This works because React knows how to render an array of JSX elements in this manner:
               *    { [<Card />, <Card />, <Card />] }
               */ 
            }
            {filteredExpenses.length === 0 ? (
               <p>No Expenses Found.</p>
            ) : (
               filteredExpenses.map((expense) => (
                  <ExpenseItem
                     key = {expense.id}
                     title = {expense.title}
                     amount = {expense.amount}
                     date = {expense.date}
                  />
               ))
            )}

         </Card>
      </div>
   );
}

export default ExpensesDisplay;
