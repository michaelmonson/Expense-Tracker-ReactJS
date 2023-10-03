import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../Card';
import './ExpensesDisplay.css';
import ExpensesFilter from './ExpensesFilter';
import './ExpensesFilter.css';

function ExpensesDisplay(props) {
   const [filteredYear, setFilteredYear] = useState('2023');

   const filterChangeHandler = (selectedYear) => {
      console.log('Expense.js : ' + selectedYear);
      setFilteredYear(selectedYear);
   };

   return (
      <div>
         <Card className="expenses">
            
            {/* Pass in 'filteredYear' as selected: An example of React's 'two-way' binding */}
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            
            { 
              /* ReactJS is capable of rendering an array of objects.  For instance, 
               * you could render an array of JSX elements in this manner (with curly braces):
               *    { [<Card />, <Card />, <Card />] }
               */
            }
            {props.expenseList.map((expense) => (
               <ExpenseItem
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
