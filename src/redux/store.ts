import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import authSliceReducer from "./features/authSlice";
import brandSliceReducer from "./features/brand/brandSlice";
import cartSliceReducer from "./features/cart/cartSlice";
import categorySliceReducer from "./features/category/categorySlice";
import productSliceReducer from "./features/product/productSlice";
import searchProductSliceReducer from "./features/product/searchProductSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authSliceReducer,
    brand: brandSliceReducer,
    catergory: categorySliceReducer,
    product: productSliceReducer,
    searchProduct: searchProductSliceReducer,
    cart: cartSliceReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
