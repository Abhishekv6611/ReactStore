import { createSlice } from "@reduxjs/toolkit";


const WhislistSlice=createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        }

    }
})
export const {addToWishlist}=WhislistSlice.actions
export default WhislistSlice.reducer;