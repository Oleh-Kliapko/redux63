import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './todosSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    filter: filterSlice.reducer,
  },

});
