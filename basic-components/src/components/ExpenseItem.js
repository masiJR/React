import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.id}</div>
      <div className="expense-item__description">
        <h1>{props.name}</h1>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
