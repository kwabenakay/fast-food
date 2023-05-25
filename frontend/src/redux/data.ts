import { createSlice } from "@reduxjs/toolkit";

type dataStruct = {
  id: number;
  name: string;
  count: number;
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
  loading: [],
  servings: [],
  rejected: [],
};

const DATA = createSlice({
  name: "slice",
  initialState: {
    data,
  },
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

export const { remove,add,proceed } = DATA.actions;
export default DATA.reducer;
