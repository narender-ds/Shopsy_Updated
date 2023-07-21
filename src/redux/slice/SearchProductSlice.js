import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    searchProducts:[]
}

export const searchItem=createAsyncThunk("searchItem",async(searchableItem)=>{
    const response=await axios.get(`https://dummyjson.com/products/search?q=${searchableItem}`).then((res)=>res.data)
    return response
});

const SearchProductSlice=createSlice({
    name: "searchProducts",
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(searchItem.pending, (state, action) => {
        })
        .addCase(searchItem.fulfilled, (state, action) => {
          state.searchProducts = action.payload;
        })
        .addCase(searchItem.rejected, (state, action) => {
        });
    },
  });

  export default SearchProductSlice.reducer;