import { useState, useEffect } from "react";

import Form from "./components/Form/Form";
import IncomesList from "./components/Lists/IncomesList";
import ExpensesList from "./components/Lists/ExpensesList";
import Modal from "./components/Modal/Modal";

import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [modal, setModal] = useState(false);

  //Adding transactions on the list
  const addTransactionsHandler = (newTransaction) => {
    setTransactions((prev) => [...prev, newTransaction]);
    console.log(transactions);
  };

  //Filtering the Incomes
  const updatedIncomes = transactions.filter((income) => {
    return income.amount > 0;
  });

  //Filtering the Expenses
  const updatedExpenses = transactions.filter((expense) => {
    return expense.amount < 0;
  });

  //Updating the total value
  const updatedTotal = transactions.reduce((acc, transaction) => {
      acc += transaction.amount;
      return acc;
  }, 0);

  //Updating the values
  useEffect(() => {
    setIncomes(updatedIncomes);
    setExpenses(updatedExpenses);
    setTotal(updatedTotal);
  }, [transactions]);

  //Remove transaction
  const removeTransactionHandler = (ID) => {
    let updatedTransaction = transactions.filter((transaction) => {
      return transaction.id !== ID;
    });

    setTransactions(updatedTransaction);
  };

  return (
    <>
      <GlobalStyles />
      <h1>Controle de Finanças</h1>
      <div className="App">
        {modal && <Modal onCloseModal={setModal}/>}
        <IncomesList incomes={incomes} onRemove={removeTransactionHandler} />
        <Form onAddTransaction={addTransactionsHandler} total={total} setErrorModal={setModal}/>
        <ExpensesList expenses={expenses} onRemove={removeTransactionHandler} />
      </div>
    </>
  );
};

export default App;
