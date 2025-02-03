import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
};

const searchProductSlice = createSlice({
  name: "searchProduct",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
  },
});

export const { setSearchTerm } = searchProductSlice.actions;

export default searchProductSlice.reducer;
