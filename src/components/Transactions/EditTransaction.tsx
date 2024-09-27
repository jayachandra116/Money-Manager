import { FormEvent, useEffect, useState } from "react";

import classes from "./NewTransaction.module.css";

import { Transaction, TransactionSubCategory } from "../../models/Transaction";

import { useAppDispatch } from "../../hooks";
import { updateTransaction } from "../../store/transactions";

// import Modal from "../Modal/Modal";
import { closeModal } from "../../store/modal";
import { getDatePickerDateString } from "../../util/transformers";

const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const foodSubCategories = [
  "breakfast",
  "lunch",
  "snacks",
  "dinner",
  "beverages",
  "other",
];
const householdSubCategories = ["rent", "groceries", "vegetables", "other"];
const entertainmentSubCategories = ["subscription", "movies", "outing"];
const billsSubCategories = [
  "credit Card",
  "electricity",
  "tv",
  "internet",
  "mobile",
];
const transportationSubCategories = ["bus", "taxi", "petrol", "servicing"];

// type userInputState = Partial<Omit<Transaction, "id">>;
type subCategoriesOptionsState = {
  subCategoriesOptions: string[];
};

type EditTransactionProps = {
  transaction: Transaction | null;
};

const EditTransaction = ({ transaction }: EditTransactionProps) => {
  const dispatch = useAppDispatch();

  const [userInput, setUserInput] = useState<
    Transaction & subCategoriesOptionsState
  >({
    id: transaction?.id || "",
    amount: transaction?.amount || 0,
    type: transaction?.type || "expense",
    date: transaction?.date || new Date().toISOString(),
    account: transaction?.account || "cash",
    category: transaction?.category || "other",
    subCategory: transaction?.subCategory || "",
    note: transaction?.note || "",
    subCategoriesOptions: [],
  });

  // change the sub-category list when the category changes dynamically
  useEffect(() => {
    //   Create the list of Subcategories based on category selection
    if (userInput.category) {
      switch (userInput.category) {
        case "food":
          setUserInput((prev) => ({
            ...prev,
            subCategoriesOptions: [...foodSubCategories],
            subCategory: foodSubCategories[0] as TransactionSubCategory,
          }));
          break;
        case "household":
          setUserInput((prev) => ({
            ...prev,
            subCategoriesOptions: [...householdSubCategories],
            subCategory: householdSubCategories[0] as TransactionSubCategory,
          }));
          break;
        case "entertainment":
          setUserInput((prev) => ({
            ...prev,
            subCategoriesOptions: [...entertainmentSubCategories],
            subCategory:
              entertainmentSubCategories[0] as TransactionSubCategory,
          }));
          break;
        case "bills":
          setUserInput((prev) => ({
            ...prev,
            subCategoriesOptions: [...billsSubCategories],
            subCategory: billsSubCategories[0] as TransactionSubCategory,
          }));
          break;
        case "transportation":
          setUserInput((prev) => ({
            ...prev,
            subCategoriesOptions: [...transportationSubCategories],
            subCategory:
              transportationSubCategories[0] as TransactionSubCategory,
          }));
          break;
        default:
          break;
      }
    }
  }, [userInput.category]);

  const onInputChange = (name: string, value: string) => {
    console.log(`Changing value of ${name} to: ${value}`);
    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Before update: ");
    console.log(transaction);
    const newTransaction: Transaction = {
      id: userInput.id,
      type: userInput.type!,
      date: new Date(userInput.date!).toISOString(),
      account: userInput.account!,
      category: userInput.category!,
      subCategory: userInput.subCategory!,
      amount: userInput.amount!,
      note: userInput.note!,
    };
    console.log("after update: ");
    console.log(newTransaction);
    dispatch(updateTransaction(newTransaction));
    dispatch(closeModal());
  };

  return (
    <div className={classes["new-transaction-container"]}>
      <form onSubmit={onSubmit}>
        <div className={classes["form-row"]}>
          <div className={classes["radio-buttons"]}>
            <input
              type="radio"
              name="type"
              id="income-type"
              value="income"
              checked={userInput.type === "income"}
              onChange={() => onInputChange("type", "income")}
            />
            <label htmlFor="income-type">Income</label>
          </div>
          <div className={classes["radio-buttons"]}>
            <input
              type="radio"
              name="type"
              id="expense-type"
              value="expense"
              checked={userInput.type === "expense"}
              onChange={() => onInputChange("type", "expense")}
            />
            <label htmlFor="expense-type">Expense</label>
          </div>
          <div className={classes["radio-buttons"]}>
            <input
              type="radio"
              name="type"
              id="transfer-type"
              value="transfer"
              checked={userInput.type === "transfer"}
              onChange={() => onInputChange("type", "transfer")}
            />
            <label htmlFor="transfer-type">Transfer</label>
          </div>
        </div>
        <div className={classes["form-row"]}>
          <div className={classes["date-picker"]}>
            <label htmlFor="date">Date</label>
            <input
              id="date"
              name="date"
              type="date"
              value={getDatePickerDateString(userInput.date)}
              onChange={(e) => onInputChange("date", e.target.value)}
            />
          </div>
          <div className={classes["custom-dropdown"]}>
            <label htmlFor="account">Account</label>
            <select
              id="account"
              name="account"
              value={userInput.account}
              onChange={(e) => onInputChange("account", e.target.value)}
            >
              <option key="cash" value="cash">
                Cash
              </option>
              <option key="card" value="card">
                Card
              </option>
              <option key="transfer" value="transfer">
                Transfer
              </option>
            </select>
          </div>
        </div>
        <div className={classes["form-row"]}>
          <div className={classes["custom-dropdown"]}>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={userInput.category}
              onChange={(e) => onInputChange("category", e.target.value)}
            >
              <option key="food" value="food">
                Food
              </option>
              <option key="household" value="household">
                Household
              </option>
              <option key="bills" value="bills">
                Bills
              </option>
              <option key="transportation" value="transportation">
                Transportation
              </option>
              <option key="other" value="other">
                Others
              </option>
            </select>
          </div>
          <div className={classes["custom-dropdown"]}>
            <label htmlFor="category">Sub-Category</label>
            <select
              id="subCategory"
              name="subCategory"
              value={userInput.subCategory ?? null}
              onChange={(e) => onInputChange("subCategory", e.target.value)}
            >
              {userInput.subCategoriesOptions.map((item) => (
                <option key={item} value={item.toLowerCase()}>
                  {capitalizeFirstLetter(item)}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={classes["form-row"]}>
          <div className={classes["custom-text-input"]}>
            <input
              type="text"
              id="note"
              name="note"
              placeholder="note"
              value={userInput.note ?? null}
              onChange={(e) => onInputChange("note", e.target.value)}
            />
          </div>
        </div>
        <div className={classes["form-row"]}>
          <div className={classes["amount-input"]}>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="Amount"
              min={0}
              value={userInput.amount ?? null}
              onChange={(e) => onInputChange("amount", e.target.value)}
            />
          </div>
        </div>
        <div className={classes["form-actions"]}>
          <button type="submit">Update Item</button>
        </div>
      </form>
    </div>
  );
};

export default EditTransaction;
