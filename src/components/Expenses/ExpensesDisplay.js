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
            
            { 
              /* ReactJS is capable of rendering an array of objects.  For instance, 
               * you could render an array of JSX elements in this manner (with curly braces):
               *    { [<Card />, <Card />, <Card />] }
               */
            }
            {props.expenseList.map((expense) => (
               <ExpenseItem
                  key = {expense.id}
                  title = {expense.title}
                  amount = {expense.amount}
                  date = {expense.date}
               />
            ))}

         </Card>
      </div>
   );
}

export default ExpensesDisplay;
