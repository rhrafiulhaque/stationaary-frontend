import { createSlice } from "@reduxjs/toolkit";

export type TProduct = {
  _id?: string | null;
  name: string | null;
  brand: string | null;
  price: string | null;
  category: string | null;
  stock: string | null;
  description: string | null;
  image: string | null;
  quantity: string | null;
};

const initialState: TProduct = {
  _id: null,
  name: null,
  brand: null,
  price: null,
  category: null,
  stock: null,
  description: null,
  image: null,
  quantity: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      const {
        _id,
        name,
        brand,
        price,
        category,
        stock,
        description,
        image,
        quantity,
      } = action.payload;
      state._id = _id;
      state.name = name;
      state.brand = brand;
      state.price = price;
      state.category = category;
      state.stock = stock;
      state.description = description;
      state.image = image;
      state.quantity = quantity;
    },
    clearProduct: (state) => {
      state._id = null;
      state.name = null;
      state.brand = null;
      state.price = null;
      state.category = null;
      state.description = null;
      state.image = null;
      state.quantity = null;
    },
  },
});

export const { setProduct, clearProduct } = productSlice.actions;

export default productSlice.reducer;
