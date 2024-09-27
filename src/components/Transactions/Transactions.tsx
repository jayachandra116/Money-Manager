import classes from "./Transactions.module.css";

import TransactionItem from "./TransactionItem";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { openModal } from "../../store/modal";
import NewTransaction from "./NewTransaction";

const Transactions = () => {
  const dispatch = useAppDispatch();
  const transactions = useAppSelector(
    (state) => state.transactions.transactions
  );

  const createNewTransactionHandler = () => {
    console.log(`Creating new transaction...`);
    dispatch(
      openModal({
        title: "Add New",
        body: <NewTransaction />,
      })
    );
  };

  return (
    <div className={classes["transactions"]}>
      <header>
        <h2>
          <span className="material-symbols-outlined">history</span>Latest
          Transactions
        </h2>
        <div className={classes["actions"]}>
          <div
            className={classes["actions-btn"]}
            onClick={createNewTransactionHandler}
          >
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
          <div>Actions</div>
        </div>
        {transactions.length === 0 ? (
          <center>Add new transactions</center>
        ) : null}
        {transactions.map((item) => (
          <TransactionItem transaction={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
