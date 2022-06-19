import { ListModel } from "./ListModel.styled";

const ExpensesList = ({ expenses, onRemove }) => {
  return (
    <ListModel>
      <div
        className="list-header"
        style={{ background: "#FF0147", color: "#4F0008" }}
      >
        Saídas
      </div>
      <ul className="transactions-list">
      {expenses && expenses.map((expense) => {
          return(
            <li key={expense.id} style={{color: 'crimson'}}>
                <p className="transaction-left">{expense.name}</p>
                <div className="transaction-right">
                  - R${Math.abs(expense.amount)} 
                  <div className="remove-transaction" style={{background: 'crimson'}} onClick={() => onRemove(expense.id)}>X</div>
                </div>
            </li>
          )
      })}
      </ul>
    </ListModel>
  );
};

export default ExpensesList;
