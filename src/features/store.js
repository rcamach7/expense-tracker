import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import expensesReducer from "./expenses/expensesSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    expenses: expensesReducer,
  },
});
