import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the async thunk
export const fetchProducts= createAsyncThunk("products/fetchProducts",async()=>{
   const result= await axios.get('https://dummyjson.com/products')
   console.log(result.data.products);
   return result.data.products
   
   
})

const ProductSlice= createSlice({
    name:"product",
    initialState:{
        allProducts:[],
        loading:false,
        errorMsg:""
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.allProducts=action.payload
            state.loading=false
            state.errorMsg=""

        })
    }
})
export default ProductSlice.reducer;