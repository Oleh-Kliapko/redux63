import { createSlice } from '@reduxjs/toolkit';
export const todoSlice = createSlice({
  name: 'todo',
  initialState: { items: [] },
  reducers: {
    addTodo(state, action) {
      console.log(action.payload);
      state.items.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
