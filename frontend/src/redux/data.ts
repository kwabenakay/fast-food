import { createSlice } from "@reduxjs/toolkit";

type dataStruct = {
  id: number;
  name: string;
  amount: number;
  items: { name: string; num: number; price: number }[];
}[];
type rejected = {
  stage: string;
  data: dataStruct;
}[];
type data = {
  loading: dataStruct;
  servings: dataStruct;
  rejected: rejected;
};

const data: data = {
  loading: [
    {
      id: 1,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 2,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 3,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 4,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 5,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 6,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 7,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 8,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 9,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 10,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 11,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 12,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 13,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
  ],
  servings: [
    {
      id: 1,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 2,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 3,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 4,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 5,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 6,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 7,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 8,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 9,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 10,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 11,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 12,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
    {
      id: 13,
      name: "kofi",
      amount: 20,
      items: [{ name: "sobolo", num: 5, price: 10 }],
    },
  ],
  rejected: [],
};
export const DATA = createSlice({
  name: "slice",
  initialState: data,
  reducers: {
    removeLoad: (state, actions) => {
      //logic for removing and adding to rejected
      let index = actions.payload;
      state.loading.splice(index, 1);
      return state;
    },
    addLoad: (state, actions) => {
      //logic for adding
      state.loading.push(actions.payload);
      return state;
    },
    removeServe: (state, actions) => {
      //logic for removing and adding to rejected
      let index = actions.payload;
      state.servings.splice(index, 1);

      return state;
    },
    addServe: (state, actions) => {
      //logic for adding
      state.servings.push(actions.payload);
      return state;
    },
    addReject: (state, actions) => {
      state.rejected.push(actions.payload);
      console.log(JSON.parse(JSON.stringify(state.rejected)))
    },
  },
});

export const { removeLoad, addLoad, removeServe, addServe, addReject } =
  DATA.actions;
export default DATA.reducer;
