import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    getCategoryData:[]
}

export const getCategoryData=createAsyncThunk("getCategoryData",async(item)=>{
    const response=await axios.get(`https://dummyjson.com/products/category/${item}`).then((res)=>res.data)
    return response
});

const GetCategoryData=createSlice({
    name: "getCategoryData",
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(getCategoryData.pending, (state, action) => {
        })
        .addCase(getCategoryData.fulfilled, (state, action) => {
          state.getCategoryData = action.payload;
        })
        .addCase(getCategoryData.rejected, (state, action) => {
        });
    },
  });

  export default GetCategoryData.reducer;