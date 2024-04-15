import { createSlice } from "@reduxjs/toolkit";

type selectedServe = {
  ticket: {
    id: number;
    name: string;
    amount: number;
    items: { name: string; num: number; price: number }[];
  };
  index: number;
};
const initialState: selectedServe = {
  ticket: { id: 0, name: "", amount: 0, items: [] },
  index: -1,
};

export const SELECTED_SERVE = createSlice({
  name: "selectedServe",
  initialState,
  reducers: {
    setServe: (state, action) => {
      state.ticket = action.payload.ticket;
      state.index = action.payload.index;
      return state;
    },
    resetServe: (state) => {
      state = initialState;
      return state;
    },
  },
});
export const { setServe, resetServe } = SELECTED_SERVE.actions;
export default SELECTED_SERVE.reducer;
