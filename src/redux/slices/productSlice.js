import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the async thunk
export const fetchProducts= createAsyncThunk("products/fetchProducts",async()=>{
   const result=await axios.get('https://dummyjson.com/products')
   sessionStorage.setItem('products',JSON.stringify(result.data.products))
//    console.log(result.data.products);
   return result.data.products 
})




const ProductSlice= createSlice({
    name:"product",
    initialState:{
        allProducts:[],
        dummyAllProducts:[],
        loading:false,
        errorMsg:""
    },
    reducers:{
      searchProduct:(state,action)=>{
        state.allProducts= state.dummyAllProducts.filter(item=>item.title.toLowerCase().includes(action.payload))
         }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.allProducts=action.payload
            state.dummyAllProducts=action.payload

            state.loading=false
            state.errorMsg=""

        })
        builder.addCase(fetchProducts.pending,(state)=>{
            state.allProducts=[]
            state.dummyAllProducts=[]

            state.loading=true
            state.errorMsg=""

        })
        builder.addCase(fetchProducts.rejected,(state)=>{
            state.allProducts=[]
            state.dummyAllProducts=[]
            state.loading=false
            state.errorMsg="Api call failed"

        })
    }
})
export const {searchProduct}=ProductSlice.actions
export default ProductSlice.reducer;