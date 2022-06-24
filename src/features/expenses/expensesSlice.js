import { createSlice } from "@reduxjs/toolkit";

export const expensesSlice = createSlice({
  name: "expenses",
  initialState: { value: [{ name: "a", description: "abc" }] },
  reducers: {
    addExpense: (state, action) => {
      state.value.push(action.payload);
    },
    removeExpense: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addExpense, removeExpense } = expensesSlice.actions;

export default expensesSlice.reducer;
