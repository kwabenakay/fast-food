import { createSlice } from "@reduxjs/toolkit";
const available = [
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
export const STOCK = createSlice({
  name: "stock",
  initialState: available,
  reducers: {
    addStock: () => {},
    updateStock: () => {},
    removeStock: () => {},
  },
});
export const { addStock, updateStock, removeStock } = STOCK.actions;
export default STOCK.reducer;
