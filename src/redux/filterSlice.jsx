import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: 'filters',
  initialState: { value: '' },
  reducers: {
    setFilter(state, action) {
      
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

