import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import ExpensesDisplay from "./components/ExpensesDisplay";

const App = () => {
  //switched function structure to an arrow function (anonymous)

  //Store Expenses in an Array:
  const expenses = [
    // {
    //   id: 'e1',
    //   title: 'Adopted Fox (baby kit)',
    //   amount: 'FREE for Ruth!',
    //   date: new Date(2020, 7, 14),
    // },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e1",
      title: "Fox Food",
      amount: 89,
      date: new Date(2020, 7, 16),
    },
    {
      id: "e2",
      title: "Anniversary Laptop",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
  ];

  return (
    <div>
      <h2> &nbsp;  Expense Tracker</h2>
      <ExpensesDisplay expenseList={expenses} />
    </div>
  );

  //NOTE:  For a comparison, the JSX code above is 'syntactic sugar' for what is really happening (see below)
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(ExpensesDisplay, {items = {expenseList})
  // );
};

export default App;
