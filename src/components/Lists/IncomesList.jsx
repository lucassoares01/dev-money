import { ListModel } from "./ListModel.styled";

const IncomesList = ({incomes, onRemove}) => {
  return (
    <ListModel>
      <div
        className="list-header"
        style={{ background: "#9de6d7", color: "#43716b" }}
      >
        Entradas
      </div>
      <ul className="transactions-list">
      {incomes && incomes.map((income) => {
          return(
            <li key={income.id} style={{color: '#43716b'}}>
                <p className="transaction-left">{income.name}</p>
                <div className="transaction-right">
                  + R${Math.abs(income.amount)} 
                  <div className="remove-transaction" style={{background: '#43716b'}} onClick={() => onRemove(income.id)}>X</div>
                </div>
            </li>
          )
      })}
      </ul>
    </ListModel>
  );
};

export default IncomesList;
