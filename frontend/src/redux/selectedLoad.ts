import { createSlice } from "@reduxjs/toolkit";

type selectedLoad = {
  ticket: {
    id: number;
    name: string;
    amount: number;
    items: { name: string; num: number; price: number }[];
  };
  index: number;
};
const initialState: selectedLoad = {
  ticket: { id: 0, name: "", amount: 0, items: [] },
  index: -1,
};

export const SELECTED_LOAD = createSlice({
  name: "selectedLoad",
  initialState,
  reducers: {
    setLoad: (state, action) => {
      state.ticket = action.payload.ticket;
      state.index = action.payload.index;
      return state;
    },
    resetLoad: (state) => {
      state = initialState;
      return state;
    },
  },
});
export const { setLoad, resetLoad } = SELECTED_LOAD.actions;
export default SELECTED_LOAD.reducer;
