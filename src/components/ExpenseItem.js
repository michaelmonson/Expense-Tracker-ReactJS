import './ExpenseItem.css';

function ExpenseItem(props) {

    //Removing variables outside of the component (to the App.js base component)
    // const expenseDate = new Date(2023, 10, 22);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 90.44;

    return (
        <div className="expense-item">
            <div>{props.date.toDateString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;