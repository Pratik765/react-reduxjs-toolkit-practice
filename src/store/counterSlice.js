import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    incriment: (state) => {
      return state = state + 1
    },
    decrement: (state) => {
      return state = state - 1
    },
    add: (state, action) => {
      return state = state + Number(action.payload)
    },
    subtract: (state, action) => {
      return state = state - Number(action.payload)
    },
  },
});
export default counterSlice;
export const counterActions = counterSlice.actions;
