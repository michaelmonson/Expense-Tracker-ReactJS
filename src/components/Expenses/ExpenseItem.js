import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
   //Removing variables outside of the component (to the App.js base component)
   // function clickHandler() {}
   // const [title, setTitle] = useState(props.title);

   // const clickHandler = () => {
   //    setTitle('Updated!');
   //    console.log(title);
   // }

   return (
      <li>
         <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
               <h2>{props.title}</h2>
               <div className="expense-item__price">${props.amount}</div>
            </div>
         </Card>
      </li>
   );
}

export default ExpenseItem;
