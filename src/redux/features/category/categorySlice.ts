import { createSlice } from "@reduxjs/toolkit";

export type TCategory = {
  _id: string | null;
  name: string | null;
};

const initialState = {
  _id: null,
  name: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      const { _id, name } = action.payload;
      state._id = _id;
      state.name = name;
    },
    clearCategory: (state) => {
      state._id = null;
      state.name = null;
    },
  },
});

export const { setCategory, clearCategory } = categorySlice.actions;

export default categorySlice.reducer;
