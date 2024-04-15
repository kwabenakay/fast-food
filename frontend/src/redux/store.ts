import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slice";
import { LOGIN } from "./login";
import { DATA } from "./data";
import { SELECTED_ITEMS } from "./selectedItems";
import { STOCK } from "./stock";
import { SELECTED_SERVE } from "./selectedServe";
import { SELECTED_LOAD } from "./selectedLoad";

export default configureStore({
  reducer: {
    todo: todoSlice.reducer,
    isLogin: LOGIN.reducer,
    data: DATA.reducer,
    selected: SELECTED_ITEMS.reducer,
    stock: STOCK.reducer,
    selectedServe: SELECTED_SERVE.reducer,
    selectedLoad: SELECTED_LOAD.reducer,
  },
});
