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
            <ExpenseItem
               title = {props.expenseList[0].title}
               amount = {props.expenseList[0].amount}
               date = {props.expenseList[0].date}
            />
            <ExpenseItem
               title = {props.expenseList[1].title}
               amount = {props.expenseList[1].amount}
               date = {props.expenseList[1].date}
            />
            <ExpenseItem
               title = {props.expenseList[2].title}
               amount = {props.expenseList[2].amount}
               date = {props.expenseList[2].date}
            />
            <ExpenseItem
               title = {props.expenseList[3].title}
               amount = {props.expenseList[3].amount}
               date = {props.expenseList[3].date}
            />
         </Card>
      </div>
   );
}

export default ExpensesDisplay;
