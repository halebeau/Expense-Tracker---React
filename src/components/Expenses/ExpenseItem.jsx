import Card from '../UI/Card';
import ExpenseDate from '../Expenses/ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const handleClick = () => {
    console.log("Radical!!!")
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
