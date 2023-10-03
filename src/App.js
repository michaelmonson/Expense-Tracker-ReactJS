import React, { useState } from 'react';

import ExpenseItemAdd from './components/AddExpense/ExpenseItemAdd';
import ExpensesDisplay from './components/Expenses/ExpensesDisplay';

  //Store Expenses in an Array:
  const INITIAL_EXPENSES = [
    {
      id: "e1",
      title: "Adopted Fox (baby kit)",
      amount: "FREE for Ruth!",
      date: new Date(2022, 7, 14),
    },
    {
        id: "e2",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2023, 5, 12),
    },
    {
        id: "e3",
        title: "Fox Food",
        amount: 89,
        date: new Date(2022, 7, 16),
    },
    {
        id: "e4",
        title: "Anniversary Laptop",
        amount: 799.49,
        date: new Date(2023, 2, 12),
    },
    {
        id: "e5",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2023, 2, 28),
    },
  ];

  
const App = () => {    //switched "App" function to use an arrow function (anonymous)

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };

  return (
    <div>
        <ExpenseItemAdd onAddExpense={addExpenseHandler} />
        <ExpensesDisplay expenseList={expenses} />
    </div>
  );

    /* 
     * For an insight comparison, the JSX code we are able to use above is 
     * 'syntactic sugar' for what is REALLY happening below (vanilla JavaScript code)
     */ 
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // return React.createElement(
    //   'div',
    //   {},
    //   React.createElement('h2', {}, "Let's get started!"),
    //   React.createElement(ExpensesDisplay, {items = {expenseList})
    // );
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    
};

export default App;
