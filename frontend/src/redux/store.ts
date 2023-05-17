import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './slice';

export default configureStore({
  reducer: {
    todo:todoSlice.reducer
  },
});