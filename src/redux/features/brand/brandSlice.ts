import { createSlice } from "@reduxjs/toolkit";

export type TBrand = {
  _id: string | null;
  name: string | null;
};

const initialState = {
  _id: null,
  name: null,
};

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    setBrand: (state, action) => {
      const { _id, name } = action.payload;
      state._id = _id;
      state.name = name;
    },
    clearBrand: (state) => {
      state._id = null;
      state.name = null;
    },
  },
});

export const { setBrand, clearBrand } = brandSlice.actions;

export default brandSlice.reducer;
