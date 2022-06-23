import { createSlice, current } from "@reduxjs/toolkit";

export const expensesSlice = createSlice({
  name: "expenses",
  initialState: { value: [] },
  reducers: {
    addExpense: (state, action) => {
      state.value.push(action.payload);
    },
    removeExpense: (state, action) => {
      console.log(current(state.value));
      // state.value.filter((expense) => console.log(expense));
    },
  },
});

export const { addExpense, removeExpense } = expensesSlice.actions;

export default expensesSlice.reducer;
