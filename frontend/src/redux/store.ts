import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slice";
import { LOGIN } from "./login";
import { DATA } from "./data";
import { SELECTED_ITEMS } from "./selectedItems";
import { STOCK } from "./stock";

export default configureStore({
  reducer: {
    todo: todoSlice.reducer,
    isLogin: LOGIN.reducer,
    data: DATA.reducer,
    selected: SELECTED_ITEMS.reducer,
    stock: STOCK.reducer,
  },
});
