import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterState {
  limit: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  limit: 20,
};

export const databaseSlice = createSlice({
  name: "database",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    incrementLimit: (state) => {
      if (state.limit < 100) {
        state.limit += 20;
      }
    },
  },
});

export const { incrementLimit } = databaseSlice.actions;

export default databaseSlice.reducer;
