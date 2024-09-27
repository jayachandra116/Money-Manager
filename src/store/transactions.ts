import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Transaction } from "../models/Transaction";

interface TransactionsState {
  transactions: Transaction[];
}

const transactionsInitialState: TransactionsState = {
  transactions: [
    {
      id: "t1",
      amount: 80,
      type: "expense",
      account: "transfer",
      category: "food",
      subCategory: "breakfast",
      date: new Date().toISOString(),
      note: "sample note",
    },
    {
      id: "t2",
      amount: 300,
      type: "expense",
      account: "cash",
      category: "other",
      subCategory: "",
      date: new Date().toISOString(),
      note: "Petrol",
    },
    {
      id: "t3",
      amount: 500,
      type: "income",
      account: "transfer",
      category: "other",
      subCategory: "",
      date: new Date().toISOString(),
      note: "Dividend",
    },
  ],
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: transactionsInitialState,
  reducers: {
    addNewTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);
    },
    updateTransaction: (state, action: PayloadAction<Transaction>) => {
      const transactionIndex = state.transactions.findIndex(
        (item) => item.id === action.payload.id
      );
      if (transactionIndex === -1) {
        return;
      }
      let transaction = state.transactions[transactionIndex];
      transaction = {
        ...action.payload,
      };
      state.transactions[transactionIndex] = transaction;
    },
    deleteTransaction: (state, action: PayloadAction<string>) => {
      state.transactions = state.transactions.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addNewTransaction, updateTransaction, deleteTransaction } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
