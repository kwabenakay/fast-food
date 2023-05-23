import { createSlice } from "@reduxjs/toolkit";

type dataStruct = {
  id: number;
  name: string;
  amount: number;
  items: { name: string; num: number }[];
}[];
type rejected = {
  stage: string;
  data: dataStruct;
}[];
type data = {
  orders: dataStruct;
  loading: dataStruct;
  servings: dataStruct;
  rejected: rejected;
};

const data: data = {
  orders: [],
  loading: [
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
  ],
  servings: [
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
    { id: 1, name: "kofi", amount: 20, items: [{ name: "sobolo", num: 5 }] },
  ],
  rejected: [],
};

export const DATA = createSlice({
  name: "slice",
  initialState: data,
  reducers: {
    remove: (state, actions) => {
      //logic for removing and adding to rejexted
      return state;
    },
    add: (state, actions) => {
      //logic for adding
      return state;
    },
    proceed: (state) => {
      //logic for moving a request to the next stage
      return state;
    },
  },
});

export const { remove, add, proceed } = DATA.actions;
export default DATA.reducer;
