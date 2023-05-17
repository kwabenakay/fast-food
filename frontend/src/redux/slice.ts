import { createSlice } from '@reduxjs/toolkit';


export const todoSlice = createSlice({
  name: 'todos',
  initialState:{counter:0},
  reducers: {
    addTodo: (state:any) => {
      state.counter= state.counter+1;
      console.log(state.counter)
      return state
  },
}
});

// this is for dispatch
export const { addTodo } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;