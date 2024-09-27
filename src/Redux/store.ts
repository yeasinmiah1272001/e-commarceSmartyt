// src/store.ts
import { configureStore } from "@reduxjs/toolkit";

import shoppingReducer from "./shoppingSlice";

export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
