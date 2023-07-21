import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    categories:[]
}

export const category=createAsyncThunk("categories",async()=>{
    const response=await axios.get(`https://dummyjson.com/products/categories`).then((res)=>res.data)
    return response
});

const CategorySlice=createSlice({
    name: "categories",
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(category.pending, (state, action) => {
        })
        .addCase(category.fulfilled, (state, action) => {
          state.categories = action.payload;
        })
        .addCase(category.rejected, (state, action) => {
        });
    },
  });

  export default CategorySlice.reducer;