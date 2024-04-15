import { createSlice } from "@reduxjs/toolkit";

type selectedItems = { name: string; num: number; price: number }[];
const selectedItems = [
  { name: "Malt", num: 10, price: 10 },
  { name: "Sprite", num: 10, price: 10 },
  { name: "Fanta", num: 10, price: 10 },
  { name: "Coke", num: 10, price: 10 },
  { name: "Stars", num: 10, price: 10 },
  { name: "Moon", num: 10, price: 10 },
  { name: "Sky", num: 10, price: 10 },
  { name: "Plane", num: 10, price: 10 },
  { name: "Car", num: 10, price: 10 },
  { name: "Bike", num: 10, price: 10 },
];

export const SELECTED_ITEMS = createSlice({
  name: "seletedItems",
  initialState: selectedItems,
  reducers: {
    addSelect: (state, actions) => {
      if (actions.payload) {
        console.log(actions.payload);
        state.push(actions.payload);
      }
      return state;
    },
    removeSelect: (state, actions) => {
      state.splice(actions.payload, 1);
      return state;
    },
    clearSelect: (state) => {
      state = [];
      return state;
    },
  },
});

export const { addSelect, removeSelect, clearSelect } = SELECTED_ITEMS.actions;
export default SELECTED_ITEMS.reducer;
