import { configureStore } from "@reduxjs/toolkit";

import transactionsReducer from "./transactions";
import modalReducer from "./modal";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;
