import ExpenseItem from './ExpenseItem';
import './ExpensesDisplay.css';

function ExpensesDisplay(props) {

    return (
      <div className="expenses">
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
      </div>
    );
}

export default ExpensesDisplay;