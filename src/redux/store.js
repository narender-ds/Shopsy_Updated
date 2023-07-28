import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../redux/slice/productSlice";
import CartReducer from "../redux/slice//CartSlice";
import uiReducer from "./slice/uiSlice";
import WishListSlice from "./slice/WishListSlice";
import SearchProductSlice from "./slice/SearchProductSlice";
import CategorySlice from "./slice/CategorySlice";
import GetCategoryData from "./slice/GetCategoryData";
import ProductDetailSlice from "./slice/ProductDetailSlice";

export const store = configureStore({
  reducer: {
    ui:uiReducer,
    cart: CartReducer,
    wishList:WishListSlice,
    categories:CategorySlice,
    products: ProductReducer,
    getCategoryData:GetCategoryData,
    productDetail:ProductDetailSlice,
    searchProducts:SearchProductSlice,
  },
});
