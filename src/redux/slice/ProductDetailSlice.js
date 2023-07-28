import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    productDetail:""
}

export const fetchProductDetail=createAsyncThunk("detail",async(id)=>{
    const response=await axios.get(`https://dummyjson.com/products/${id}`).then((res)=>res.data)
    return response;
})

const ProductDetailSlice=createSlice({
    name:"productDetail",
    initialState,
    extraReducers:(data)=>{
        data
        .addCase(fetchProductDetail.pending,(state,action)=>{
        })
        .addCase(fetchProductDetail.fulfilled,(state,action)=>{
            state.productDetail=action.payload
        })
        .addCase(fetchProductDetail.rejected,(state,action)=>{
            console.log('productDetailRejected', state)
        })
    }
})

export default ProductDetailSlice.reducer;