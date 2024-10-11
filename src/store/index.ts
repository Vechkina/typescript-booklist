import { configureStore } from "@reduxjs/toolkit";
import addBookReducer from "./bookSlice";

export const store = configureStore({
  reducer: {
    books: addBookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
