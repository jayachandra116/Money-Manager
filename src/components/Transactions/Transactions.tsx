import classes from "./Transactions.module.css";

import TransactionItem from "./TransactionItem";

import { useAppSelector } from "../../hooks";

type transactionsProps = {
  onCreateNew: () => void;
};

const Transactions = ({ onCreateNew }: transactionsProps) => {
  const transactions = useAppSelector(
    (state) => state.transactions.transactions
  );

  return (
    <div className={classes["transactions"]}>
      <header>
        <h2>
          <span className="material-symbols-outlined">history</span>Latest
          Transactions
        </h2>
        <div className={classes["actions"]}>
          <div className={classes["actions-btn"]} onClick={onCreateNew}>
            <span className="material-symbols-outlined">add_box</span>
            <p>Add new</p>
          </div>
        </div>
      </header>
      <ul className={classes["transactions-list"]}>
        <div className={classes["transaction-header"]}>
          <div>Date</div>
          <div>Type</div>
          <div>Note</div>
          <div>Account</div>
          <div>Category</div>
          <div>Amount</div>
        </div>
        {transactions.length === 0 ? <center>Add new transactions</center> : null}
        {transactions.map((item) => (
          <TransactionItem transaction={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
