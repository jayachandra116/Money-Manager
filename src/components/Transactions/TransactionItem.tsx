import { useAppDispatch } from "../../hooks";
import { Transaction } from "../../models/Transaction";
import { openModal } from "../../store/modal";
import { deleteTransaction } from "../../store/transactions";
import EditTransaction from "./EditTransaction";

import classes from "./TransactionItem.module.css";

type TransactionItemProps = {
  transaction: Transaction;
};

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const transactionDateObj = new Date(transaction.date);
  const dispatch = useAppDispatch();

  const onEditHandler = () => {
    console.log(`Editing item with id: ${transaction.id}`);
    console.log(`Opening modal...`);
    dispatch(
      openModal({
        title: "Edit Transaction",
        body: <EditTransaction transaction={transaction} />,
      })
    );
  };

  const onDeleteHandler = () => {
    console.log(`Deleting item with id: ${transaction.id}`);
    dispatch(deleteTransaction(transaction.id));
  };

  return (
    <>
      <div className={classes["transaction-item"]}>
        <div className={classes["transaction-item__date"]}>
          <p>{`${transactionDateObj.getDate()} / ${
            transactionDateObj.getMonth() + 1
          } / ${transactionDateObj.getFullYear()}`}</p>
          <p>{`${transactionDateObj.toLocaleTimeString("en-US")}`}</p>
        </div>
        <p className={classes["transaction-item__type"]}>{transaction.type}</p>
        <p className={classes["transaction-item__note"]}>{transaction.note}</p>
        <p className={classes["transaction-item__account"]}>
          {transaction.account}
        </p>
        <div className={classes["transaction-item__category"]}>
          <p>{transaction.category}</p>
          <p className={classes["transaction-item__sub-category"]}>
            {transaction.subCategory}
          </p>
        </div>
        <p
          className={`${classes["transaction-item__amount"]} ${
            transaction.type === "expense"
              ? classes["expense"]
              : classes["income"]
          }`}
        >
          {transaction.type === "expense" ? "-" : "+"} {transaction.amount} $
        </p>
        <div className={classes["user-actions"]}>
          <div className={classes["user-action"]} onClick={onEditHandler} data-title="Edit">
            <span className="material-symbols-outlined">edit</span>
          </div>
          <div className={classes["user-action"]} onClick={onDeleteHandler} data-title="Delete">
            <span className="material-symbols-outlined">delete</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionItem;
