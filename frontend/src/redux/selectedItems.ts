import { createSlice } from "@reduxjs/toolkit";

type selectedItems = { name: string; num: number }[];
const selectedItems =  [
  { name: "Malt", num: 10 },
  { name: "Malt", num: 10 },
  { name: "Malt", num: 10 },
  { name: "Malt", num: 10 },
  { name: "Malt", num: 10 },
  { name: "Malt", num: 10 },
  { name: "Malt", num: 10 },
  { name: "Malt", num: 10 },
  { name: "Malt", num: 10 },
  { name: "Malt", num: 10 },
] ;

export const SELECTED_ITEMS = createSlice({
  name: "seletedItems",
  initialState:  selectedItems ,
  reducers: {
    add: () => {},
    remove: () => {},
  },
});

export const { add, remove } = SELECTED_ITEMS.actions;
export default SELECTED_ITEMS.reducer;
