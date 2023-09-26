import React from 'react';
import './Card.css';

function Card(props) {
   //Add any existing css classes from the props object:
   const classes = "card " + props.className;

   return <div className={classes}>{props.children}</div>;
}

export default Card;
