import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../redux/slice/productSlice";
import CartReducer from "../redux/slice//CartSlice";
import uiReducer from "./slice/uiSlice";
import WishListSlice from "./slice/WishListSlice";
import SearchProductSlice from "./slice/SearchProductSlice";
import CategorySlice from "./slice/CategorySlice";
import GetCategoryData from "./slice/GetCategoryData";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer,
    ui:uiReducer,
    wishList:WishListSlice,
    searchProducts:SearchProductSlice,
    categories:CategorySlice,
    getCategoryData:GetCategoryData
  },
});
