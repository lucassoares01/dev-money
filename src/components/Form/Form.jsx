import * as S from './Form.styled'
import { useState } from "react";

const Form = ({ onAddTransaction, total, setErrorModal }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const submitFormHandler = (event) => {
    event.preventDefault();

    let newTransaction = {
      name: name,
      amount: Number(amount),
      id: Date.now()
    };

    //Validating the transactions
    if(name.trim() === '' && amount.trim() === ''){
      setErrorModal(true)

    } else{
      onAddTransaction(newTransaction)
    }
    

    setName("");
    setAmount("");
  };

  return (
    <S.Form>
      <div className="form-header">
        <small>Total:</small>
        <p>{total ? `R$ ${total.toFixed(2)}` : `R$0.00`}</p>
      </div>
      <div className="form-area">
        <S.Field>
          <S.Label htmlFor="name">Nome:</S.Label>
          <S.Input type="text" placeholder="Ex: Salario" value={name} onChange={({ target }) => setName(target.value)}/>
        </S.Field>
        <S.Field>
          <S.Label htmlFor="amount">Amount:</S.Label>
          <S.Input type="number" step="0.01" placeholder="Ex: 20.05" value={amount} onChange={({ target }) => setAmount(target.value)}/>
          <small>+ para Entradas / - para Saidas</small>
        </S.Field>
        <S.Submit type="submit" value='Adicionar' className="submit-button" onClick={submitFormHandler}/>
      </div>
    </S.Form>
  );
};

export default Form;
