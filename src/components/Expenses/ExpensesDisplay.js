import React, { useState } from 'react';

import Card from '../Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './ExpensesDisplay.css';

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
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList filteredItems={filteredExpenses} />
         </Card>
      </div>
   );
}

export default ExpensesDisplay;
