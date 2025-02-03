import { createSlice } from "@reduxjs/toolkit";

export type TCart = {
  _id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
  stock: number;
  productTotalPrice?: number;
};

const initialState: TCart[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      const product = {
        _id: action.payload._id,
        name: action.payload.name,
        quantity: 1,
        price: action.payload.price,
        stock: action.payload.stock,
        image: action.payload.image,
        productTotalPrice: action.payload.price * 1,
      };
      const hasProduct = state.find(
        (product) => product._id === action.payload._id
      );
      if (!hasProduct) {
        state.push(product);
      } else {
        state.map((product) => {
          if (product._id === action.payload._id) {
            product.quantity = product.quantity + 1;
            product.productTotalPrice = product.price * product.quantity;
          }
        });
      }
    },

    decreaseCart: (state, action) => {
      state.map((product) => {
        if (product._id === action.payload._id && product.quantity > 1) {
          product.quantity = product.quantity - 1;
          product.productTotalPrice = product.price * product.quantity;
        }
      });
    },
  },
});

export const { setCart, decreaseCart } = cartSlice.actions;

export default cartSlice.reducer;
