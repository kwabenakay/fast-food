import { createSlice } from "@reduxjs/toolkit";


type selectedItems = { name: string; num: number; price:number }[];
const selectedItems = [
  { name: "Malt", num: 10, price:10 },
  { name: "Malt", num: 10, price:10 },
  { name: "Fanta", num: 10, price:10 },
  { name: "Malt", num: 10, price:10 },
  { name: "Malt", num: 10, price:10 },
  { name: "Malt", num: 10, price:10 },
  { name: "Malt", num: 10, price:10 },
  { name: "Malt", num: 10, price:10 },
  { name: "Malt", num: 10, price:10 },
  { name: "Malt", num: 10, price:10 },
];

export const SELECTED_ITEMS = createSlice({
  name: "seletedItems",
  initialState: selectedItems,
  reducers: {
    addSelect: (state,actions) => {
     selectedItems.push( actions.payload.selected)
     return state
    },
    removeSelect: (state, actions) => {
      let item = actions.payload.item;
      let index = -1;
      state.filter((val, ind) => {
        if (val.name === item.name) index = ind;
        return val.name === item.name;
      });
      state.splice(index,1)
      return state;
    },
    clearSelect:(state)=>{
      state=[]
      return state
    }
  },
});

export const { addSelect, removeSelect,clearSelect } = SELECTED_ITEMS.actions;
export default SELECTED_ITEMS.reducer;
